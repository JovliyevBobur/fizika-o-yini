import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Instrument } from "@/data/physicsData";

interface InstrumentCardProps {
  instrument: Instrument;
  isUsed: boolean;
}

export function InstrumentCard({ instrument, isUsed }: InstrumentCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: instrument.id,
    disabled: isUsed,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        flex flex-col items-center justify-center gap-2 p-3 sm:p-4 
        rounded-xl border transition-all duration-300 select-none
        min-w-[100px] sm:min-w-[120px] touch-none
        ${isUsed 
          ? "opacity-40 cursor-not-allowed bg-muted/50 border-border/30" 
          : isDragging
            ? "cursor-grabbing scale-110 z-50 bg-primary/20 border-primary glow-primary"
            : "cursor-grab hover:scale-105 bg-card border-border hover:border-primary/50 hover:bg-card/80"
        }
      `}
    >
      <span className="text-3xl sm:text-4xl">{instrument.icon}</span>
      <span className="text-xs sm:text-sm font-medium text-foreground text-center leading-tight">
        {instrument.name}
      </span>
    </div>
  );
}
