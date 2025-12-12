import { useState, useEffect } from "react";
import { getRandomQuestions, Question } from "@/data/questionsData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, RotateCcw, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuestionQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState({ correct: 0, total: 0, percentage: 0 });

  useEffect(() => {
    resetQuiz();
  }, []);

  const resetQuiz = () => {
    setQuestions(getRandomQuestions(15));
    setSelectedAnswers({});
    setIsChecked(false);
    setResults({ correct: 0, total: 0, percentage: 0 });
  };

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    if (isChecked) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleCheck = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / questions.length) * 100);
    setResults({
      correct: correctCount,
      total: questions.length,
      percentage
    });
    setIsChecked(true);
  };

  const allAnswered = Object.keys(selectedAnswers).length === questions.length;

  return (
    <section id="2-shart" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">2-shart</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            Savollar <span className="gradient-text">Sharti</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fizikadan 15 ta tasodifiy savollarga javob bering. Har bir to'g'ri javob uchun 1 ball beriladi.
          </p>
        </div>

        {/* Results Banner */}
        {isChecked && (
          <div className="mb-8 animate-scale-in">
            <Card className={cn(
              "p-6 border-2",
              results.percentage >= 70 ? "border-success bg-success/10" : 
              results.percentage >= 50 ? "border-warning bg-warning/10" : 
              "border-destructive bg-destructive/10"
            )}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {results.percentage >= 70 ? (
                    <CheckCircle2 className="w-12 h-12 text-success" />
                  ) : (
                    <XCircle className="w-12 h-12 text-destructive" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold">
                      {results.percentage >= 70 ? "Ajoyib natija!" : 
                       results.percentage >= 50 ? "Yaxshi harakat!" : 
                       "Ko'proq mashq qiling!"}
                    </h3>
                    <p className="text-muted-foreground">
                      To'g'ri javoblar: {results.correct}/{results.total} | 
                      Foiz: {results.percentage}% | 
                      Ball: {results.correct}
                    </p>
                  </div>
                </div>
                <Button onClick={resetQuiz} variant="outline" className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Qayta boshlash
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Questions Grid */}
        <div className="grid gap-4 mb-8">
          {questions.map((question, index) => {
            const isAnswered = selectedAnswers[question.id] !== undefined;
            const isCorrect = isChecked && selectedAnswers[question.id] === question.correctAnswer;
            const isWrong = isChecked && selectedAnswers[question.id] !== question.correctAnswer && isAnswered;

            return (
              <Card 
                key={question.id} 
                className={cn(
                  "p-4 sm:p-6 transition-all duration-300 animate-fade-in",
                  isCorrect && "shadow-[0_0_20px_rgba(34,197,94,0.3)] border-success",
                  isWrong && "shadow-[0_0_20px_rgba(239,68,68,0.3)] border-destructive"
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-3 text-sm sm:text-base">{question.question}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {question.options.map((option, optIndex) => {
                        const isSelected = selectedAnswers[question.id] === optIndex;
                        const showCorrect = isChecked && optIndex === question.correctAnswer;
                        const showWrong = isChecked && isSelected && optIndex !== question.correctAnswer;

                        return (
                          <button
                            key={optIndex}
                            onClick={() => handleSelectAnswer(question.id, optIndex)}
                            disabled={isChecked}
                            className={cn(
                              "p-3 rounded-lg border text-left text-sm transition-all duration-200",
                              "hover:border-primary hover:bg-primary/5",
                              isSelected && !isChecked && "border-primary bg-primary/10",
                              showCorrect && "border-success bg-success/20 text-success-foreground",
                              showWrong && "border-destructive bg-destructive/20 text-destructive-foreground",
                              !isSelected && !showCorrect && !showWrong && "border-border bg-card"
                            )}
                          >
                            <span className="font-medium mr-2">
                              {String.fromCharCode(65 + optIndex)}.
                            </span>
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Check Button */}
        {!isChecked && (
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleCheck}
              disabled={!allAnswered}
              className="gap-2 px-8"
            >
              <CheckCircle2 className="w-5 h-5" />
              Tekshirish
            </Button>
            {!allAnswered && (
              <p className="text-muted-foreground text-sm mt-2">
                Barcha savollarga javob bering ({Object.keys(selectedAnswers).length}/15)
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
