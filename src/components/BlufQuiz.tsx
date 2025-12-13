import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bluf, getRandomBlufs } from "@/data/blufData";
import { toast } from "sonner";
import { RefreshCw, Check, ChevronRight, ChevronLeft } from "lucide-react";

export function BlufQuiz() {
  const [blufs, setBlufs] = useState<Bluf[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [isChecked, setIsChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const initQuiz = () => {
    setBlufs(getRandomBlufs(5));
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
    blufs.forEach((bluf, index) => {
      if (answers[index] === bluf.correctIndex) {
        correct++;
      }
    });

    setCorrectCount(correct);
    setIsChecked(true);

    if (correct === blufs.length) {
      toast.success(`Mukammal! ${correct} ball oldingiz!`);
    } else {
      toast.info(`${correct}/${blufs.length} to'g'ri. ${correct} ball`);
    }
  };

  if (blufs.length === 0) return null;

  const currentBluf = blufs[currentIndex];
  const currentAnswer = answers[currentIndex];

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">
          Savol {currentIndex + 1}/{blufs.length}
        </span>
        <div className="flex gap-1">
          {blufs.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                index === currentIndex
                  ? 'bg-primary'
                  : answers[index] !== undefined
                  ? isChecked
                    ? answers[index] === blufs[index].correctIndex
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

      {/* Question */}
      <Card>
        <CardContent className="p-6">
          <h4 className="text-center text-lg font-medium mb-2">
            Qaysi biri to'g'ri?
          </h4>
          <p className="text-center text-sm text-muted-foreground">
            3 ta gapdan 1 tasi to'g'ri, 2 tasi noto'g'ri
          </p>
        </CardContent>
      </Card>

      {/* Statements */}
      <div className="space-y-3">
        {currentBluf.statements.map((statement, index) => {
          const isSelected = currentAnswer === index;
          const isCorrectStatement = index === currentBluf.correctIndex;
          
          return (
            <Button
              key={index}
              variant={isSelected ? "default" : "outline"}
              className={`w-full h-auto py-4 text-left justify-start whitespace-normal ${
                isChecked
                  ? isCorrectStatement
                    ? "bg-green-500 hover:bg-green-500 text-white border-green-500"
                    : isSelected
                    ? "bg-red-500 hover:bg-red-500 text-white border-red-500"
                    : ""
                  : ""
              }`}
              onClick={() => handleAnswer(index)}
              disabled={isChecked}
            >
              <span className="mr-3 font-bold">{index + 1}.</span>
              {statement}
            </Button>
          );
        })}
      </div>

      {/* Explanation */}
      {isChecked && (
        <Card className="bg-blue-50 dark:bg-blue-950">
          <CardContent className="p-4">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <strong>Izoh:</strong> {currentBluf.explanation}
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

        {!isChecked && currentIndex === blufs.length - 1 && Object.keys(answers).length === blufs.length ? (
          <Button onClick={handleCheck} className="bg-primary">
            <Check className="mr-2 h-4 w-4" />
            Tekshirish
          </Button>
        ) : null}

        <Button
          variant="outline"
          onClick={() => setCurrentIndex(Math.min(blufs.length - 1, currentIndex + 1))}
          disabled={currentIndex === blufs.length - 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Score display */}
      {isChecked && (
        <Card className={correctCount === blufs.length ? 'bg-green-50 dark:bg-green-950' : 'bg-amber-50 dark:bg-amber-950'}>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">
              {correctCount}/{blufs.length} to'g'ri
            </p>
            <p className="text-lg text-muted-foreground">
              Jami: <strong>{correctCount} ball</strong>
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
