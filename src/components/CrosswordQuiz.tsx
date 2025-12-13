import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Crossword, getRandomCrossword } from "@/data/crosswordData";
import { toast } from "sonner";
import { RefreshCw, Check } from "lucide-react";

export function CrosswordQuiz() {
  const [crossword, setCrossword] = useState<Crossword | null>(null);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [isChecked, setIsChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const initQuiz = () => {
    const newCrossword = getRandomCrossword();
    setCrossword(newCrossword);
    setAnswers({});
    setIsChecked(false);
    setCorrectCount(0);
  };

  useEffect(() => {
    initQuiz();
  }, []);

  const handleAnswerChange = (wordIndex: number, value: string) => {
    setAnswers({
      ...answers,
      [wordIndex]: value.toUpperCase()
    });
  };

  const handleCheck = () => {
    if (!crossword) return;

    let correct = 0;
    crossword.words.forEach((word, index) => {
      if (answers[index]?.toUpperCase() === word.word.toUpperCase()) {
        correct++;
      }
    });

    setCorrectCount(correct);
    setIsChecked(true);

    const score = correct * 0.5;
    if (correct === crossword.words.length) {
      toast.success(`Ajoyib! ${score} ball oldingiz!`);
    } else {
      toast.info(`${correct}/${crossword.words.length} to'g'ri. ${score} ball`);
    }
  };

  if (!crossword) return null;

  const score = correctCount * 0.5;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary mb-2">{crossword.name}</h3>
        <p className="text-muted-foreground">Har bir to'g'ri javob uchun 0.5 ball</p>
      </div>

      {/* Words list */}
      <div className="space-y-4">
        {crossword.words.map((word, index) => {
          const isCorrectAnswer = isChecked && answers[index]?.toUpperCase() === word.word.toUpperCase();
          const isWrongAnswer = isChecked && answers[index] && answers[index]?.toUpperCase() !== word.word.toUpperCase();
          
          return (
            <Card 
              key={index}
              className={
                isCorrectAnswer 
                  ? 'ring-2 ring-green-500 bg-green-50 dark:bg-green-950' 
                  : isWrongAnswer 
                  ? 'ring-2 ring-red-500 bg-red-50 dark:bg-red-950'
                  : ''
              }
            >
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="flex items-center gap-2 min-w-[60px]">
                    <span className="font-bold text-primary">{index + 1}.</span>
                    <span className="text-xs px-2 py-1 rounded bg-muted">
                      {word.direction === 'horizontal' ? '→' : '↓'}
                    </span>
                  </div>
                  <p className="flex-1 text-muted-foreground">{word.clue}</p>
                  <div className="flex items-center gap-2">
                    <Input
                      value={answers[index] || ''}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                      className="w-32 uppercase font-mono text-center"
                      maxLength={word.word.length}
                      placeholder={`${word.word.length} harf`}
                      disabled={isChecked}
                    />
                    {isChecked && (
                      <span className={`text-sm font-medium ${isCorrectAnswer ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrectAnswer ? '✓' : word.word}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Score display */}
      {isChecked && (
        <Card className={correctCount === crossword.words.length ? 'bg-green-50 dark:bg-green-950' : 'bg-amber-50 dark:bg-amber-950'}>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">
              {correctCount}/{crossword.words.length} to'g'ri
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
            disabled={Object.keys(answers).length === 0}
            className="bg-primary"
          >
            <Check className="mr-2 h-4 w-4" />
            Tekshirish
          </Button>
        ) : (
          <Button onClick={initQuiz} className="bg-primary">
            <RefreshCw className="mr-2 h-4 w-4" />
            Yangi krossvord
          </Button>
        )}
      </div>
    </div>
  );
}
