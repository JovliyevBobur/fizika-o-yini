import { useState, useEffect, useCallback } from "react";
import { 
  DndContext, 
  DragEndEvent, 
  DragOverlay, 
  DragStartEvent,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
  pointerWithin,
} from "@dnd-kit/core";
import { instruments, getRandomQuantities, Quantity, getInstrumentById } from "@/data/physicsData";
import { InstrumentCard } from "./InstrumentCard";
import { QuantityDropZone } from "./QuantityDropZone";
import { ResultsModal } from "./ResultsModal";
import { Button } from "@/components/ui/button";
import { CheckCircle, RotateCcw, Sparkles } from "lucide-react";

export function PhysicsQuiz() {
  const [selectedQuantities, setSelectedQuantities] = useState<Quantity[]>([]);
  const [droppedItems, setDroppedItems] = useState<Record<string, string>>({});
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const initializeQuiz = useCallback(() => {
    setSelectedQuantities(getRandomQuantities(10));
    setDroppedItems({});
    setIsChecked(false);
    setResults({});
    setShowResults(false);
  }, []);

  useEffect(() => {
    initializeQuiz();
  }, [initializeQuiz]);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;
    
    if (!over) return;

    const instrumentId = active.id as string;
    const quantityId = over.id as string;

    // Check if this quantity already has an instrument
    if (droppedItems[quantityId]) return;

    setDroppedItems((prev) => ({
      ...prev,
      [quantityId]: instrumentId,
    }));
  };

  const handleCheck = () => {
    const newResults: Record<string, boolean> = {};
    
    selectedQuantities.forEach((quantity) => {
      const droppedInstrumentId = droppedItems[quantity.id];
      newResults[quantity.id] = droppedInstrumentId === quantity.instrumentId;
    });

    setResults(newResults);
    setIsChecked(true);
    setShowResults(true);
  };

  const allFilled = Object.keys(droppedItems).length === selectedQuantities.length;
  const correctCount = Object.values(results).filter(Boolean).length;
  const usedInstruments = new Set(Object.values(droppedItems));

  const activeInstrument = activeId ? getInstrumentById(activeId) : null;

  // Configure sensors for both mouse and touch
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  });
  
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 100,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <section id="1-shart" className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">1-shart</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            <span className="gradient-text">Moslashtirish</span> sharti
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Har bir o'lchov kattaligiga tegishli asbobni tortib olib, tegishli qutiga tashlang
          </p>
        </div>

        <DndContext 
          sensors={sensors}
          collisionDetection={pointerWithin}
          onDragStart={handleDragStart} 
          onDragEnd={handleDragEnd}
        >
          {/* Quantities grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-10">
            {selectedQuantities.map((quantity, index) => (
              <div
                key={quantity.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <QuantityDropZone
                  quantity={quantity}
                  droppedInstrumentId={droppedItems[quantity.id] || null}
                  isChecked={isChecked}
                  isCorrect={isChecked ? results[quantity.id] : null}
                />
              </div>
            ))}
          </div>

          {/* Instruments area */}
          <div className="glass rounded-2xl p-4 sm:p-8 mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center text-muted-foreground">
              O'lchov asboblari
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {instruments.map((instrument) => (
                <InstrumentCard
                  key={instrument.id}
                  instrument={instrument}
                  isUsed={usedInstruments.has(instrument.id)}
                />
              ))}
            </div>
          </div>

          {/* Drag overlay */}
          <DragOverlay>
            {activeInstrument && (
              <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-primary/20 border border-primary shadow-2xl">
                <span className="text-4xl">{activeInstrument.icon}</span>
                <span className="text-sm font-medium text-foreground">
                  {activeInstrument.name}
                </span>
              </div>
            )}
          </DragOverlay>
        </DndContext>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            variant="outline"
            onClick={initializeQuiz}
            className="gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Qayta boshlash
          </Button>
          <Button
            size="lg"
            onClick={handleCheck}
            disabled={!allFilled || isChecked}
            className="gap-2 bg-primary hover:bg-primary/90 disabled:opacity-50"
          >
            <CheckCircle className="w-5 h-5" />
            Tekshirish
          </Button>
        </div>

        {/* Results modal */}
        <ResultsModal
          isOpen={showResults}
          onClose={() => setShowResults(false)}
          onRestart={initializeQuiz}
          correctCount={correctCount}
          totalCount={selectedQuantities.length}
        />
      </div>
    </section>
  );
}
