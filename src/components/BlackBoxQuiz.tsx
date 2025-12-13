import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlackBox, getRandomBlackBox } from "@/data/blackBoxData";
import { toast } from "sonner";
import { RefreshCw, Check, Box, HelpCircle } from "lucide-react";

export function BlackBoxQuiz() {
  const [blackBox, setBlackBox] = useState<BlackBox | null>(null);
  const [revealedClues, setRevealedClues] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const initQuiz = () => {
    setBlackBox(getRandomBlackBox());
    setRevealedClues(1);
    setSelectedAnswer(null);
    setIsChecked(false);
  };

  useEffect(() => {
    initQuiz();
  }, []);

  const handleRevealClue = () => {
    if (blackBox && revealedClues < blackBox.clues.length) {
      setRevealedClues(revealedClues + 1);
    }
  };

  const handleCheck = () => {
    if (selectedAnswer === null || !blackBox) return;
    
    setIsChecked(true);
    const isCorrect = selectedAnswer === blackBox.correctIndex;

    if (isCorrect) {
      toast.success("To'g'ri! 10 ball oldingiz!");
    } else {
      toast.error("Noto'g'ri! 0 ball", {
        description: `To'g'ri javob: ${blackBox.options[blackBox.correctIndex]}`
      });
    }
  };

  if (!blackBox) return null;

  const isCorrect = selectedAnswer === blackBox.correctIndex;

  return (
    <div className="space-y-6">
      {/* Black box visual */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-40 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-gray-700">
            <Box className="w-16 h-16 text-gray-500" />
          </div>
          <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
            ?
          </div>
        </div>
      </div>

      {/* Clues */}
      <div className="space-y-3">
        <h4 className="font-semibold text-center text-muted-foreground">Belgilar:</h4>
        {blackBox.clues.slice(0, revealedClues).map((clue, index) => (
          <Card key={index} className="animate-fade-in">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {index + 1}
                </div>
                <p className="text-lg">{clue}</p>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {!isChecked && revealedClues < blackBox.clues.length && (
          <Button
            variant="outline"
            className="w-full"
            onClick={handleRevealClue}
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Keyingi belgi ({revealedClues}/{blackBox.clues.length})
          </Button>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {blackBox.options.map((option, index) => (
          <Button
            key={index}
            variant={selectedAnswer === index ? "default" : "outline"}
            className={`h-auto py-4 ${
              isChecked
                ? index === blackBox.correctIndex
                  ? "bg-green-500 hover:bg-green-500 text-white"
                  : selectedAnswer === index
                  ? "bg-red-500 hover:bg-red-500 text-white"
                  : ""
                : ""
            }`}
            onClick={() => !isChecked && setSelectedAnswer(index)}
            disabled={isChecked}
          >
            {option}
          </Button>
        ))}
      </div>

      {/* Score display */}
      {isChecked && (
        <Card className={isCorrect ? 'bg-green-50 dark:bg-green-950' : 'bg-red-50 dark:bg-red-950'}>
          <CardContent className="p-4 text-center">
            <p className={`text-2xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? '10 ball' : '0 ball'}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Action buttons */}
      <div className="flex justify-center gap-4">
        {!isChecked ? (
          <Button
            onClick={handleCheck}
            disabled={selectedAnswer === null}
            className="bg-primary"
          >
            <Check className="mr-2 h-4 w-4" />
            Tekshirish
          </Button>
        ) : (
          <Button onClick={initQuiz} className="bg-primary">
            <RefreshCw className="mr-2 h-4 w-4" />
            Yangi quti
          </Button>
        )}
      </div>
    </div>
  );
}
