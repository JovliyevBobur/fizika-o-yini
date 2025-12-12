import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Star } from "lucide-react";

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRestart: () => void;
  correctCount: number;
  totalCount: number;
}

export function ResultsModal({ 
  isOpen, 
  onClose, 
  onRestart, 
  correctCount, 
  totalCount 
}: ResultsModalProps) {
  const percentage = Math.round((correctCount / totalCount) * 100);
  
  const getGrade = () => {
    if (percentage >= 90) return { text: "A'lo!", color: "text-success" };
    if (percentage >= 70) return { text: "Yaxshi!", color: "text-primary" };
    if (percentage >= 50) return { text: "Qoniqarli", color: "text-yellow-500" };
    return { text: "Qayta urinib ko'ring", color: "text-destructive" };
  };

  const grade = getGrade();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-center gradient-text">
            Natijangiz
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-6">
          {/* Trophy icon with animation */}
          <div className="relative">
            <Trophy className={`w-20 h-20 ${grade.color} floating`} />
            {percentage >= 70 && (
              <>
                <Star className="absolute -top-2 -left-4 w-6 h-6 text-yellow-400 animate-pulse" />
                <Star className="absolute -top-2 -right-4 w-6 h-6 text-yellow-400 animate-pulse delay-150" />
              </>
            )}
          </div>

          {/* Score display */}
          <div className="text-center space-y-2">
            <p className={`text-4xl font-bold font-display ${grade.color}`}>
              {grade.text}
            </p>
            <p className="text-muted-foreground">
              Sizning natijangiz
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="flex flex-col items-center p-4 rounded-xl bg-muted/50">
              <span className="text-2xl font-bold text-primary">{correctCount}</span>
              <span className="text-xs text-muted-foreground">To'g'ri</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-muted/50">
              <span className="text-2xl font-bold text-secondary">{percentage}%</span>
              <span className="text-xs text-muted-foreground">Foiz</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-muted/50">
              <span className="text-2xl font-bold text-accent">{correctCount}</span>
              <span className="text-xs text-muted-foreground">Ball</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 w-full">
            <Button 
              variant="outline" 
              className="flex-1 gap-2"
              onClick={onClose}
            >
              Yopish
            </Button>
            <Button 
              className="flex-1 gap-2 bg-primary hover:bg-primary/90"
              onClick={onRestart}
            >
              <RotateCcw className="w-4 h-4" />
              Qayta boshlash
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
