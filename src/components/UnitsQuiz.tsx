import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { RefreshCw, Check, GripVertical } from "lucide-react";
import {
  DndContext,
  DragEndEvent,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { useDraggable, useDroppable } from "@dnd-kit/core";

interface Quantity {
  id: string;
  name: string;
  unit: string;
  unitSymbol: string;
}

const allQuantities: Quantity[] = [
  { id: "mass", name: "Massa", unit: "kilogramm", unitSymbol: "kg" },
  { id: "length", name: "Uzunlik", unit: "metr", unitSymbol: "m" },
  { id: "time", name: "Vaqt", unit: "sekund", unitSymbol: "s" },
  { id: "current", name: "Tok kuchi", unit: "amper", unitSymbol: "A" },
  { id: "temperature", name: "Harorat", unit: "kelvin", unitSymbol: "K" },
  { id: "force", name: "Kuch", unit: "nyuton", unitSymbol: "N" },
  { id: "pressure", name: "Bosim", unit: "paskal", unitSymbol: "Pa" },
  { id: "energy", name: "Energiya", unit: "joul", unitSymbol: "J" },
  { id: "power", name: "Quvvat", unit: "vatt", unitSymbol: "W" },
  { id: "voltage", name: "Kuchlanish", unit: "volt", unitSymbol: "V" },
];

function DraggableUnit({ id, unit, unitSymbol, isUsed }: { id: string; unit: string; unitSymbol: string; isUsed: boolean }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    disabled: isUsed,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: isDragging ? 50 : 1,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all
        ${isUsed 
          ? 'bg-muted/50 border-muted text-muted-foreground cursor-not-allowed opacity-50' 
          : 'bg-secondary/10 border-secondary/30 cursor-grab active:cursor-grabbing hover:border-secondary hover:bg-secondary/20'}
        ${isDragging ? 'shadow-lg scale-105' : ''}
      `}
    >
      <GripVertical className="w-4 h-4 text-muted-foreground" />
      <span className="font-medium">{unit}</span>
      <span className="text-xs text-muted-foreground">({unitSymbol})</span>
    </div>
  );
}

function DropZone({ 
  id, 
  name, 
  droppedUnit, 
  status 
}: { 
  id: string; 
  name: string; 
  droppedUnit: { unit: string; unitSymbol: string } | null;
  status: 'neutral' | 'correct' | 'incorrect';
}) {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`
        flex items-center justify-between p-3 rounded-lg border-2 transition-all
        ${!droppedUnit && isOver ? 'border-primary bg-primary/10' : ''}
        ${!droppedUnit && !isOver ? 'border-dashed border-border' : ''}
        ${droppedUnit && status === 'neutral' ? 'border-secondary/50 bg-secondary/10' : ''}
        ${status === 'correct' ? 'border-green-500 bg-green-100 dark:bg-green-900/30' : ''}
        ${status === 'incorrect' ? 'border-red-500 bg-red-100 dark:bg-red-900/30' : ''}
      `}
    >
      <span className="font-medium">{name}</span>
      <div className="min-w-[100px] text-right">
        {droppedUnit ? (
          <span className={`
            font-bold
            ${status === 'correct' ? 'text-green-600 dark:text-green-400' : ''}
            ${status === 'incorrect' ? 'text-red-600 dark:text-red-400' : ''}
          `}>
            {droppedUnit.unit} ({droppedUnit.unitSymbol})
          </span>
        ) : (
          <span className="text-muted-foreground text-sm">Birlikni qo'ying</span>
        )}
      </div>
    </div>
  );
}

export function UnitsQuiz() {
  const [quantities, setQuantities] = useState<Quantity[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isChecked, setIsChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 100, tolerance: 5 } })
  );

  const initQuiz = () => {
    // Randomly select 5 quantities
    const shuffled = [...allQuantities].sort(() => Math.random() - 0.5);
    setQuantities(shuffled.slice(0, 5));
    setAnswers({});
    setIsChecked(false);
    setCorrectCount(0);
  };

  useEffect(() => {
    initQuiz();
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    if (isChecked) return;
    
    const { active, over } = event;
    if (!over) return;

    const unitId = active.id as string;
    const quantityId = over.id as string;

    // Check if this quantity already has an answer
    if (answers[quantityId]) return;

    setAnswers((prev) => ({
      ...prev,
      [quantityId]: unitId,
    }));
  };

  const handleCheck = () => {
    let correct = 0;
    quantities.forEach((q) => {
      if (answers[q.id] === q.id) {
        correct++;
      }
    });

    setCorrectCount(correct);
    setIsChecked(true);

    const score = correct * 2;
    if (correct === 5) {
      toast.success(`Ajoyib! ${score} ball oldingiz!`);
    } else {
      toast.info(`${correct}/5 to'g'ri. ${score} ball`);
    }
  };

  const getStatus = (quantityId: string): 'neutral' | 'correct' | 'incorrect' => {
    if (!isChecked) return 'neutral';
    const quantity = quantities.find((q) => q.id === quantityId);
    if (!quantity) return 'neutral';
    return answers[quantityId] === quantity.id ? 'correct' : 'incorrect';
  };

  const getDroppedUnit = (quantityId: string) => {
    const unitId = answers[quantityId];
    if (!unitId) return null;
    const unit = allQuantities.find((q) => q.id === unitId);
    return unit ? { unit: unit.unit, unitSymbol: unit.unitSymbol } : null;
  };

  const usedUnits = Object.values(answers);
  const score = correctCount * 2;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary mb-2">Birligini top</h3>
        <p className="text-muted-foreground text-sm">
          Fizik kattaliklarga tegishli birliklarni moslang
        </p>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        {/* Units bank */}
        <Card className="mb-4">
          <CardContent className="p-4">
            <p className="text-sm font-medium text-muted-foreground mb-3">Birliklar:</p>
            <div className="flex flex-wrap gap-2">
              {allQuantities.map((q) => (
                <DraggableUnit
                  key={q.id}
                  id={q.id}
                  unit={q.unit}
                  unitSymbol={q.unitSymbol}
                  isUsed={usedUnits.includes(q.id)}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quantities drop zones */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <p className="text-sm font-medium text-muted-foreground mb-3">Fizik kattaliklar:</p>
            {quantities.map((q) => (
              <DropZone
                key={q.id}
                id={q.id}
                name={q.name}
                droppedUnit={isChecked && getStatus(q.id) === 'incorrect' 
                  ? { unit: q.unit, unitSymbol: q.unitSymbol }
                  : getDroppedUnit(q.id)
                }
                status={getStatus(q.id)}
              />
            ))}
          </CardContent>
        </Card>
      </DndContext>

      {/* Score display */}
      {isChecked && (
        <Card className={correctCount === 5 ? 'bg-green-50 dark:bg-green-950 border-green-500' : 'bg-amber-50 dark:bg-amber-950 border-amber-500'}>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">
              {correctCount}/5 to'g'ri
            </p>
            <p className="text-lg text-muted-foreground">
              Jami: <strong>{score} ball</strong>
            </p>
          </CardContent>
        </Card>
      )}

      {/* Action buttons */}
      <div className="flex justify-center gap-4">
        {!isChecked ? (
          <Button
            onClick={handleCheck}
            disabled={Object.keys(answers).length < 5}
            className="bg-primary"
          >
            <Check className="mr-2 h-4 w-4" />
            Tekshirish
          </Button>
        ) : (
          <Button onClick={initQuiz} className="bg-primary">
            <RefreshCw className="mr-2 h-4 w-4" />
            Yangi o'yin
          </Button>
        )}
      </div>
    </div>
  );
}
