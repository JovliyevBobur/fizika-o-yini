import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { RefreshCw, Trophy } from "lucide-react";

interface CardData {
  id: number;
  scientistId: string;
  name: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const scientists = [
  { id: "newton", name: "Nyuton", image: "🍎" },
  { id: "einstein", name: "Enshteyn", image: "🧠" },
  { id: "coulomb", name: "Kulon", image: "⚡" },
  { id: "pascal", name: "Paskal", image: "🌡️" },
  { id: "ulugbek", name: "Mirzo Ulug'bek", image: "🔭" },
];

export function MatchingQuiz() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  const initGame = () => {
    // Create pairs of cards
    const cardPairs: CardData[] = [];
    scientists.forEach((scientist, index) => {
      cardPairs.push({
        id: index * 2,
        scientistId: scientist.id,
        name: scientist.name,
        image: scientist.image,
        isFlipped: false,
        isMatched: false,
      });
      cardPairs.push({
        id: index * 2 + 1,
        scientistId: scientist.id,
        name: scientist.name,
        image: scientist.image,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle cards
    const shuffled = cardPairs.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setIsProcessing(false);
    setGameComplete(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (cardId: number) => {
    if (isProcessing) return;
    
    const card = cards.find((c) => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;
    if (flippedCards.length >= 2) return;

    // Flip the card
    const newCards = cards.map((c) =>
      c.id === cardId ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    // Check for match when two cards are flipped
    if (newFlippedCards.length === 2) {
      setMoves((m) => m + 1);
      setIsProcessing(true);

      const firstCard = newCards.find((c) => c.id === newFlippedCards[0]);
      const secondCard = newCards.find((c) => c.id === newFlippedCards[1]);

      if (firstCard && secondCard && firstCard.scientistId === secondCard.scientistId) {
        // Match found!
        setTimeout(() => {
          const matchedCards = newCards.map((c) =>
            c.scientistId === firstCard.scientistId
              ? { ...c, isMatched: true }
              : c
          );
          setCards(matchedCards);
          setMatchedPairs((m) => m + 1);
          setFlippedCards([]);
          setIsProcessing(false);

          if (matchedPairs + 1 === 5) {
            setGameComplete(true);
            toast.success("Tabriklaymiz! Barcha juftliklar topildi!");
          }
        }, 500);
      } else {
        // No match - flip cards back
        setTimeout(() => {
          const resetCards = newCards.map((c) =>
            newFlippedCards.includes(c.id) ? { ...c, isFlipped: false } : c
          );
          setCards(resetCards);
          setFlippedCards([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
  };

  const score = matchedPairs * 2;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary mb-2">Juftini top</h3>
        <p className="text-muted-foreground text-sm">
          Olimlar rasmlarining juftlarini toping
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-6 text-center">
        <div className="glass px-4 py-2 rounded-lg">
          <p className="text-xs text-muted-foreground">Urinishlar</p>
          <p className="text-xl font-bold text-primary">{moves}</p>
        </div>
        <div className="glass px-4 py-2 rounded-lg">
          <p className="text-xs text-muted-foreground">Topilgan</p>
          <p className="text-xl font-bold text-secondary">{matchedPairs}/5</p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-5 gap-3 max-w-xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`
              aspect-square rounded-xl cursor-pointer transition-all duration-300 transform
              ${card.isMatched ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
              ${!card.isFlipped && !card.isMatched ? 'hover:scale-105' : ''}
            `}
          >
            <div
              className={`
                w-full h-full rounded-xl transition-all duration-300 transform-style-3d
                ${card.isFlipped ? 'rotate-y-180' : ''}
              `}
              style={{
                transformStyle: 'preserve-3d',
                transform: card.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Back of card (question mark) */}
              <div
                className={`
                  absolute inset-0 rounded-xl flex items-center justify-center
                  bg-gradient-to-br from-primary to-primary/70 border-2 border-primary/30
                  shadow-lg backface-hidden
                  ${card.isFlipped ? 'opacity-0' : 'opacity-100'}
                `}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-3xl font-bold text-primary-foreground">?</span>
              </div>

              {/* Front of card (scientist) */}
              <div
                className={`
                  absolute inset-0 rounded-xl flex flex-col items-center justify-center
                  bg-background border-2 border-secondary/50 shadow-lg
                  ${card.isFlipped ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <span className="text-3xl mb-1">{card.image}</span>
                <span className="text-[10px] font-medium text-center px-1 leading-tight text-muted-foreground">
                  {card.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Game Complete */}
      {gameComplete && (
        <Card className="bg-green-50 dark:bg-green-950 border-green-500">
          <CardContent className="p-6 text-center">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <p className="text-2xl font-bold text-primary mb-2">
              Tabriklaymiz!
            </p>
            <p className="text-lg text-muted-foreground mb-2">
              {moves} ta urinishda topildi
            </p>
            <p className="text-xl font-bold text-secondary">
              Jami: {score} ball
            </p>
          </CardContent>
        </Card>
      )}

      {/* Action button */}
      <div className="flex justify-center">
        <Button onClick={initGame} className="bg-primary">
          <RefreshCw className="mr-2 h-4 w-4" />
          Yangi o'yin
        </Button>
      </div>
    </div>
  );
}
