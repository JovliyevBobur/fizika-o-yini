import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crossword, getRandomCrossword } from "@/data/crosswordData";
import { toast } from "sonner";
import { RefreshCw, Check, ArrowRight, ArrowDown } from "lucide-react";

interface CellData {
  letter: string;
  wordIndices: number[];
  isActive: boolean;
  number?: number;
}

export function CrosswordQuiz() {
  const [crossword, setCrossword] = useState<Crossword | null>(null);
  const [grid, setGrid] = useState<(CellData | null)[][]>([]);
  const [userGrid, setUserGrid] = useState<string[][]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[][]>([]);

  const initQuiz = () => {
    const newCrossword = getRandomCrossword();
    setCrossword(newCrossword);
    
    // Create empty grid
    const size = newCrossword.gridSize;
    const newGrid: (CellData | null)[][] = Array(size).fill(null).map(() => Array(size).fill(null));
    const newUserGrid: string[][] = Array(size).fill(null).map(() => Array(size).fill(''));
    
    // Track cell numbers for clues
    let cellNumber = 1;
    const cellNumbers: Map<string, number> = new Map();
    
    // First pass - assign numbers to starting cells
    newCrossword.words.forEach((word, wordIndex) => {
      const key = `${word.row}-${word.col}`;
      if (!cellNumbers.has(key)) {
        cellNumbers.set(key, cellNumber++);
      }
    });
    
    // Second pass - fill in the grid
    newCrossword.words.forEach((word, wordIndex) => {
      for (let i = 0; i < word.word.length; i++) {
        const row = word.direction === 'horizontal' ? word.row : word.row + i;
        const col = word.direction === 'horizontal' ? word.col + i : word.col;
        
        if (row < size && col < size) {
          const existingCell = newGrid[row][col];
          const key = `${word.row}-${word.col}`;
          
          if (existingCell) {
            existingCell.wordIndices.push(wordIndex);
          } else {
            newGrid[row][col] = {
              letter: word.word[i],
              wordIndices: [wordIndex],
              isActive: true,
              number: i === 0 ? cellNumbers.get(key) : undefined
            };
          }
        }
      }
    });
    
    setGrid(newGrid);
    setUserGrid(newUserGrid);
    setIsChecked(false);
    setCorrectCount(0);
    setSelectedCell(null);
    
    // Initialize refs
    inputRefs.current = Array(size).fill(null).map(() => Array(size).fill(null));
  };

  useEffect(() => {
    initQuiz();
  }, []);

  const handleCellChange = (row: number, col: number, value: string) => {
    if (isChecked) return;
    
    const newUserGrid = [...userGrid];
    newUserGrid[row][col] = value.toUpperCase().slice(-1);
    setUserGrid(newUserGrid);
    
    // Auto-advance to next cell
    if (value && grid[row]) {
      // Find direction based on current word
      const cell = grid[row][col];
      if (cell) {
        const wordIndex = cell.wordIndices[0];
        const word = crossword?.words[wordIndex];
        if (word) {
          const nextRow = word.direction === 'horizontal' ? row : row + 1;
          const nextCol = word.direction === 'horizontal' ? col + 1 : col;
          
          if (nextRow < grid.length && nextCol < grid[0].length && grid[nextRow]?.[nextCol]) {
            inputRefs.current[nextRow]?.[nextCol]?.focus();
          }
        }
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
    if (isChecked) return;
    
    if (e.key === 'Backspace' && !userGrid[row][col]) {
      // Move to previous cell on backspace if current is empty
      const cell = grid[row][col];
      if (cell) {
        const wordIndex = cell.wordIndices[0];
        const word = crossword?.words[wordIndex];
        if (word) {
          const prevRow = word.direction === 'horizontal' ? row : row - 1;
          const prevCol = word.direction === 'horizontal' ? col - 1 : col;
          
          if (prevRow >= 0 && prevCol >= 0 && grid[prevRow]?.[prevCol]) {
            inputRefs.current[prevRow]?.[prevCol]?.focus();
          }
        }
      }
    } else if (e.key === 'ArrowUp' && row > 0 && grid[row - 1]?.[col]) {
      inputRefs.current[row - 1]?.[col]?.focus();
    } else if (e.key === 'ArrowDown' && row < grid.length - 1 && grid[row + 1]?.[col]) {
      inputRefs.current[row + 1]?.[col]?.focus();
    } else if (e.key === 'ArrowLeft' && col > 0 && grid[row]?.[col - 1]) {
      inputRefs.current[row]?.[col - 1]?.focus();
    } else if (e.key === 'ArrowRight' && col < grid[0].length - 1 && grid[row]?.[col + 1]) {
      inputRefs.current[row]?.[col + 1]?.focus();
    }
  };

  const handleCheck = () => {
    if (!crossword) return;

    let correct = 0;
    crossword.words.forEach((word) => {
      let isWordCorrect = true;
      for (let i = 0; i < word.word.length; i++) {
        const row = word.direction === 'horizontal' ? word.row : word.row + i;
        const col = word.direction === 'horizontal' ? word.col + i : word.col;
        
        if (userGrid[row]?.[col]?.toUpperCase() !== word.word[i].toUpperCase()) {
          isWordCorrect = false;
          break;
        }
      }
      if (isWordCorrect) correct++;
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

  const getCellStatus = (row: number, col: number): 'correct' | 'incorrect' | 'neutral' => {
    if (!isChecked || !grid[row]?.[col]) return 'neutral';
    
    const cell = grid[row][col];
    if (!cell) return 'neutral';
    
    return userGrid[row][col]?.toUpperCase() === cell.letter.toUpperCase() ? 'correct' : 'incorrect';
  };

  if (!crossword) return null;

  const score = correctCount * 0.5;

  // Separate horizontal and vertical clues
  const horizontalClues = crossword.words
    .map((word, index) => ({ ...word, originalIndex: index }))
    .filter(w => w.direction === 'horizontal')
    .sort((a, b) => a.row - b.row || a.col - b.col);
  
  const verticalClues = crossword.words
    .map((word, index) => ({ ...word, originalIndex: index }))
    .filter(w => w.direction === 'vertical')
    .sort((a, b) => a.row - b.row || a.col - b.col);

  // Get clue numbers
  const getClueNumber = (word: typeof crossword.words[0]) => {
    const key = `${word.row}-${word.col}`;
    let num = 1;
    const seen = new Set<string>();
    for (const w of crossword.words) {
      const wKey = `${w.row}-${w.col}`;
      if (!seen.has(wKey)) {
        if (wKey === key) return num;
        seen.add(wKey);
        num++;
      }
    }
    return num;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary mb-2">{crossword.name}</h3>
        <p className="text-muted-foreground text-sm">Har bir to'g'ri so'z uchun 0.5 ball</p>
      </div>

      {/* Crossword Grid */}
      <div className="flex justify-center overflow-x-auto pb-4">
        <div 
          className="grid gap-0.5 bg-muted/50 p-2 rounded-lg shadow-inner"
          style={{ 
            gridTemplateColumns: `repeat(${crossword.gridSize}, minmax(32px, 36px))`,
          }}
        >
          {grid.map((row, rowIndex) => 
            row.map((cell, colIndex) => (
              <div 
                key={`${rowIndex}-${colIndex}`}
                className={`
                  relative aspect-square flex items-center justify-center
                  ${cell ? 'bg-background border-2 border-border' : 'bg-muted'}
                  ${isChecked && cell && getCellStatus(rowIndex, colIndex) === 'correct' ? 'bg-green-100 dark:bg-green-900/50 border-green-500' : ''}
                  ${isChecked && cell && getCellStatus(rowIndex, colIndex) === 'incorrect' ? 'bg-red-100 dark:bg-red-900/50 border-red-500' : ''}
                  transition-colors duration-200
                `}
                style={{ minWidth: '32px', minHeight: '32px' }}
              >
                {cell?.number && (
                  <span className="absolute top-0 left-0.5 text-[8px] font-bold text-primary leading-none">
                    {cell.number}
                  </span>
                )}
                {cell && (
                  <input
                    ref={(el) => {
                      if (!inputRefs.current[rowIndex]) {
                        inputRefs.current[rowIndex] = [];
                      }
                      inputRefs.current[rowIndex][colIndex] = el;
                    }}
                    type="text"
                    value={isChecked && getCellStatus(rowIndex, colIndex) === 'incorrect' ? cell.letter : userGrid[rowIndex]?.[colIndex] || ''}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                    onFocus={() => setSelectedCell({ row: rowIndex, col: colIndex })}
                    className={`
                      w-full h-full text-center font-bold text-sm uppercase bg-transparent
                      focus:outline-none focus:ring-2 focus:ring-primary/50 rounded
                      ${isChecked ? 'cursor-default' : 'cursor-text'}
                      ${isChecked && getCellStatus(rowIndex, colIndex) === 'correct' ? 'text-green-700 dark:text-green-400' : ''}
                      ${isChecked && getCellStatus(rowIndex, colIndex) === 'incorrect' ? 'text-red-600 dark:text-red-400' : ''}
                    `}
                    maxLength={1}
                    disabled={isChecked}
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Clues */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Horizontal Clues */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3 text-primary font-bold">
              <ArrowRight className="h-4 w-4" />
              <span>Gorizontal</span>
            </div>
            <div className="space-y-2">
              {horizontalClues.map((word) => {
                const num = getClueNumber(word);
                return (
                  <div 
                    key={word.originalIndex}
                    className="flex gap-2 text-sm"
                  >
                    <span className="font-bold text-primary min-w-[20px]">{num}.</span>
                    <span className="text-muted-foreground">{word.clue}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Vertical Clues */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3 text-primary font-bold">
              <ArrowDown className="h-4 w-4" />
              <span>Vertikal</span>
            </div>
            <div className="space-y-2">
              {verticalClues.map((word) => {
                const num = getClueNumber(word);
                return (
                  <div 
                    key={word.originalIndex}
                    className="flex gap-2 text-sm"
                  >
                    <span className="font-bold text-primary min-w-[20px]">{num}.</span>
                    <span className="text-muted-foreground">{word.clue}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Score display */}
      {isChecked && (
        <Card className={correctCount === crossword.words.length ? 'bg-green-50 dark:bg-green-950 border-green-500' : 'bg-amber-50 dark:bg-amber-950 border-amber-500'}>
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
