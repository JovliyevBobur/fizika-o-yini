import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Experiment, getRandomExperiment } from "@/data/experimentData";
import { toast } from "sonner";
import { RefreshCw, Check } from "lucide-react";

export function ExperimentQuiz() {
  const [experiment, setExperiment] = useState<Experiment | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const initQuiz = () => {
    setExperiment(getRandomExperiment());
    setSelectedAnswer(null);
    setIsChecked(false);
  };

  useEffect(() => {
    initQuiz();
  }, []);

  const handleCheck = () => {
    if (selectedAnswer === null || !experiment) return;
    
    setIsChecked(true);
    const isCorrect = selectedAnswer === experiment.correctIndex;

    if (isCorrect) {
      toast.success("To'g'ri! 15 ball oldingiz!");
    } else {
      toast.error("Noto'g'ri! 0 ball", {
        description: `To'g'ri javob: ${experiment.options[experiment.correctIndex]}`
      });
    }
  };

  if (!experiment) return null;

  const isCorrect = selectedAnswer === experiment.correctIndex;

  return (
    <div className="space-y-6">
      {/* Experiment image */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={experiment.imageUrl}
          alt={experiment.name}
          className="w-full h-48 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {experiment.name}
        </h3>
      </div>

      {/* Description */}
      <Card>
        <CardContent className="p-4">
          <p className="text-lg text-center">{experiment.description}</p>
        </CardContent>
      </Card>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {experiment.options.map((option, index) => (
          <Button
            key={index}
            variant={selectedAnswer === index ? "default" : "outline"}
            className={`h-auto py-4 text-left justify-start ${
              isChecked
                ? index === experiment.correctIndex
                  ? "bg-green-500 hover:bg-green-500 text-white"
                  : selectedAnswer === index
                  ? "bg-red-500 hover:bg-red-500 text-white"
                  : ""
                : ""
            }`}
            onClick={() => !isChecked && setSelectedAnswer(index)}
            disabled={isChecked}
          >
            <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
            {option}
          </Button>
        ))}
      </div>

      {/* Score display */}
      {isChecked && (
        <Card className={isCorrect ? 'bg-green-50 dark:bg-green-950' : 'bg-red-50 dark:bg-red-950'}>
          <CardContent className="p-4 text-center">
            <p className={`text-2xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? '15 ball' : '0 ball'}
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
            Yangi tajriba
          </Button>
        )}
      </div>
    </div>
  );
}
