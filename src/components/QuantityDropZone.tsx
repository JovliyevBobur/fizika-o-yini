import { useDroppable } from "@dnd-kit/core";
import { Quantity, getInstrumentById } from "@/data/physicsData";
import { Check, X } from "lucide-react";

interface QuantityDropZoneProps {
  quantity: Quantity;
  droppedInstrumentId: string | null;
  isChecked: boolean;
  isCorrect: boolean | null;
}

export function QuantityDropZone({ 
  quantity, 
  droppedInstrumentId, 
  isChecked, 
  isCorrect 
}: QuantityDropZoneProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: quantity.id,
    disabled: droppedInstrumentId !== null,
  });

  const droppedInstrument = droppedInstrumentId 
    ? getInstrumentById(droppedInstrumentId) 
    : null;

  const getBorderColor = () => {
    if (isChecked) {
      return isCorrect ? "border-success glow-success" : "border-destructive glow-destructive";
    }
    if (droppedInstrumentId) return "border-primary/60";
    if (isOver) return "border-primary glow-primary";
    return "border-border hover:border-primary/40";
  };

  return (
    <div
      ref={setNodeRef}
      className={`
        relative flex flex-col items-center justify-center gap-3 p-4 sm:p-6
        min-h-[140px] sm:min-h-[160px] rounded-xl border-2 border-dashed
        transition-all duration-300 bg-card/50 backdrop-blur-sm
        ${getBorderColor()}
        ${isOver && !droppedInstrumentId ? "scale-105 bg-primary/10" : ""}
      `}
    >
      {/* Quantity name */}
      <span className="text-sm sm:text-base font-semibold text-center text-foreground">
        {quantity.name}
      </span>

      {/* Drop area or dropped instrument */}
      {droppedInstrument ? (
        <div className="flex flex-col items-center gap-2 animate-scale-in">
          <span className="text-3xl sm:text-4xl">{droppedInstrument.icon}</span>
          <span className="text-xs sm:text-sm text-muted-foreground">
            {droppedInstrument.name}
          </span>
        </div>
      ) : (
        <div className={`
          px-4 py-2 rounded-lg border border-dashed transition-colors
          ${isOver ? "border-primary bg-primary/10" : "border-muted-foreground/30"}
        `}>
          <span className="text-xs sm:text-sm text-muted-foreground">
            Asbobni bu yerga tashlang
          </span>
        </div>
      )}

      {/* Result indicator */}
      {isChecked && (
        <div className={`
          absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center
          animate-scale-in
          ${isCorrect ? "bg-success" : "bg-destructive"}
        `}>
          {isCorrect ? (
            <Check className="w-5 h-5 text-success-foreground" />
          ) : (
            <X className="w-5 h-5 text-destructive-foreground" />
          )}
        </div>
      )}
    </div>
  );
}
