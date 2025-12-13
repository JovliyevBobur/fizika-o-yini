import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Riddle, getRandomRiddles } from "@/data/riddleData";
import { toast } from "sonner";
import { RefreshCw, Check, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";

export function RiddleQuiz() {
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [isChecked, setIsChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const initQuiz = () => {
    setRiddles(getRandomRiddles(5));
    setCurrentIndex(0);
    setAnswers({});
    setIsChecked(false);
    setCorrectCount(0);
  };

  useEffect(() => {
    initQuiz();
  }, []);

  const handleAnswer = (answerIndex: number) => {
    if (isChecked) return;
    setAnswers({
      ...answers,
      [currentIndex]: answerIndex
    });
  };

  const handleCheck = () => {
    let correct = 0;
    riddles.forEach((riddle, index) => {
      if (answers[index] === riddle.correctIndex) {
        correct++;
      }
    });

    setCorrectCount(correct);
    setIsChecked(true);

    const score = correct * 2;
    if (correct === riddles.length) {
      toast.success(`Ajoyib! ${score} ball oldingiz!`);
    } else {
      toast.info(`${correct}/${riddles.length} to'g'ri. ${score} ball`);
    }
  };

  if (riddles.length === 0) return null;

  const currentRiddle = riddles[currentIndex];
  const currentAnswer = answers[currentIndex];
  const score = correctCount * 2;

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          Topishmoq {currentIndex + 1}/{riddles.length}
        </span>
        <div className="flex gap-1">
          {riddles.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === currentIndex
                  ? 'bg-primary'
                  : answers[index] !== undefined
                  ? isChecked
                    ? answers[index] === riddles[index].correctIndex
                      ? 'bg-green-500'
                      : 'bg-red-500'
                    : 'bg-primary/50'
                  : 'bg-muted'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Riddle description */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">
                Men kimman?
              </h4>
              <p className="text-lg italic leading-relaxed">
                "{currentRiddle.description}"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {currentRiddle.options.map((option, index) => {
          const isSelected = currentAnswer === index;
          const isCorrectOption = index === currentRiddle.correctIndex;
          
          return (
            <Button
              key={index}
              variant={isSelected ? "default" : "outline"}
              className={`h-auto py-4 ${
                isChecked
                  ? isCorrectOption
                    ? "bg-green-500 hover:bg-green-500 text-white border-green-500"
                    : isSelected
                    ? "bg-red-500 hover:bg-red-500 text-white border-red-500"
                    : ""
                  : ""
              }`}
              onClick={() => handleAnswer(index)}
              disabled={isChecked}
            >
              {option}
            </Button>
          );
        })}
      </div>

      {/* Explanation */}
      {isChecked && (
        <Card className="bg-blue-50 dark:bg-blue-950">
          <CardContent className="p-4">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <strong>Izoh:</strong> {currentRiddle.explanation}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {!isChecked && currentIndex === riddles.length - 1 && Object.keys(answers).length === riddles.length ? (
          <Button onClick={handleCheck} className="bg-primary">
            <Check className="mr-2 h-4 w-4" />
            Tekshirish
          </Button>
        ) : null}

        <Button
          variant="outline"
          onClick={() => setCurrentIndex(Math.min(riddles.length - 1, currentIndex + 1))}
          disabled={currentIndex === riddles.length - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Score display */}
      {isChecked && (
        <Card className={correctCount === riddles.length ? 'bg-green-50 dark:bg-green-950' : 'bg-amber-50 dark:bg-amber-950'}>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">
              {correctCount}/{riddles.length} to'g'ri
            </p>
            <p className="text-lg text-muted-foreground">
              Jami: <strong>{score} ball</strong> (har biri 2 ball)
            </p>
            <Button onClick={initQuiz} className="mt-4 bg-primary">
              <RefreshCw className="mr-2 h-4 w-4" />
              Qaytadan
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
