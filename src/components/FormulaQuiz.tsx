import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Formula, getRandomFormula } from "@/data/formulaData";
import { toast } from "sonner";
import { RefreshCw, Check, Lightbulb } from "lucide-react";

export function FormulaQuiz() {
  const [formula, setFormula] = useState<Formula | null>(null);
  const [userFormula, setUserFormula] = useState<string[]>([]);
  const [availableSymbols, setAvailableSymbols] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const initQuiz = () => {
    const newFormula = getRandomFormula();
    setFormula(newFormula);
    setAvailableSymbols([...newFormula.symbols].sort(() => Math.random() - 0.5));
    setUserFormula([]);
    setIsChecked(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  useEffect(() => {
    initQuiz();
  }, []);

  const handleSymbolClick = (symbol: string, index: number) => {
    if (isChecked) return;
    
    setUserFormula([...userFormula, symbol]);
    const newAvailable = [...availableSymbols];
    newAvailable.splice(index, 1);
    setAvailableSymbols(newAvailable);
  };

  const handleRemoveSymbol = (index: number) => {
    if (isChecked) return;
    
    const symbol = userFormula[index];
    setAvailableSymbols([...availableSymbols, symbol]);
    const newUserFormula = [...userFormula];
    newUserFormula.splice(index, 1);
    setUserFormula(newUserFormula);
  };

  const handleCheck = () => {
    if (!formula) return;
    
    const userAnswer = userFormula.join("");
    const correct = userAnswer === formula.correctFormula;
    setIsCorrect(correct);
    setIsChecked(true);

    if (correct) {
      toast.success("To'g'ri! 10 ball oldingiz!", {
        description: formula.name
      });
    } else {
      toast.error("Noto'g'ri! 0 ball", {
        description: `To'g'ri javob: ${formula.correctFormula}`
      });
    }
  };

  if (!formula) return null;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary mb-2">{formula.name}</h3>
        <p className="text-muted-foreground">Belgilarni to'g'ri tartibda joylashtiring</p>
      </div>

      {/* User formula area */}
      <Card className={`min-h-[80px] ${isChecked ? (isCorrect ? 'ring-2 ring-green-500' : 'ring-2 ring-red-500') : ''}`}>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2 justify-center min-h-[48px] items-center">
            {userFormula.length === 0 ? (
              <span className="text-muted-foreground">Bu yerga belgilarni joylashtiring</span>
            ) : (
              userFormula.map((symbol, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  size="lg"
                  className="text-2xl font-bold min-w-[50px]"
                  onClick={() => handleRemoveSymbol(index)}
                  disabled={isChecked}
                >
                  {symbol}
                </Button>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Available symbols */}
      <div className="flex flex-wrap gap-3 justify-center">
        {availableSymbols.map((symbol, index) => (
          <Button
            key={index}
            variant="outline"
            size="lg"
            className="text-2xl font-bold min-w-[50px] hover:bg-primary hover:text-primary-foreground"
            onClick={() => handleSymbolClick(symbol, index)}
            disabled={isChecked}
          >
            {symbol}
          </Button>
        ))}
      </div>

      {/* Hint */}
      {showHint && (
        <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              <span className="text-amber-700 dark:text-amber-300">{formula.hint}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Score display */}
      {isChecked && (
        <Card className={isCorrect ? 'bg-green-50 dark:bg-green-950' : 'bg-red-50 dark:bg-red-950'}>
          <CardContent className="p-4 text-center">
            <p className={`text-2xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? '10 ball' : '0 ball'}
            </p>
            {!isCorrect && (
              <p className="text-muted-foreground mt-2">
                To'g'ri javob: <strong>{formula.correctFormula}</strong>
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {!isChecked && (
          <>
            <Button
              variant="outline"
              onClick={() => setShowHint(!showHint)}
            >
              <Lightbulb className="mr-2 h-4 w-4" />
              {showHint ? "Yashirish" : "Yordam"}
            </Button>
            <Button
              onClick={handleCheck}
              disabled={userFormula.length === 0}
              className="bg-primary"
            >
              <Check className="mr-2 h-4 w-4" />
              Tekshirish
            </Button>
          </>
        )}
        {isChecked && (
          <Button onClick={initQuiz} className="bg-primary">
            <RefreshCw className="mr-2 h-4 w-4" />
            Yangi formula
          </Button>
        )}
      </div>
    </div>
  );
}
