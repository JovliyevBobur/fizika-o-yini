export interface CrosswordWord {
  word: string;
  clue: string;
  direction: 'horizontal' | 'vertical';
  row: number;
  col: number;
}

export interface Crossword {
  id: string;
  name: string;
  words: CrosswordWord[];
  gridSize: number;
}

export const crosswords: Crossword[] = [
  {
    id: "1",
    name: "Fizika atamalar #1",
    gridSize: 10,
    words: [
      { word: "TEZLIK", clue: "Yo'lni vaqtga bo'lish", direction: "horizontal", row: 0, col: 0 },
      { word: "KUCH", clue: "Nyuton birligida o'lchanadi", direction: "vertical", row: 0, col: 0 },
      { word: "MASSA", clue: "Kilogrammda o'lchanadi", direction: "horizontal", row: 2, col: 1 },
      { word: "ENERGIYA", clue: "Ish bajarish qobiliyati", direction: "horizontal", row: 4, col: 0 },
      { word: "ATOM", clue: "Moddaning eng kichik bo'lagi", direction: "vertical", row: 2, col: 4 },
      { word: "ISSIQ", clue: "Harorat yuqori", direction: "vertical", row: 4, col: 0 },
      { word: "YORUG", clue: "Quyoshdan keladi", direction: "horizontal", row: 6, col: 2 },
      { word: "BOSIM", clue: "Paskalda o'lchanadi", direction: "vertical", row: 0, col: 5 },
      { word: "TOVUSH", clue: "Eshitamiz", direction: "horizontal", row: 8, col: 1 },
      { word: "NURLI", clue: "Yorug'lik tarqatuvchi", direction: "vertical", row: 6, col: 6 }
    ]
  },
  {
    id: "2",
    name: "Fizika atamalar #2",
    gridSize: 10,
    words: [
      { word: "HARAKAT", clue: "Jismning o'rin almashinuvi", direction: "horizontal", row: 0, col: 0 },
      { word: "HAJM", clue: "Litrda o'lchanadi", direction: "vertical", row: 0, col: 0 },
      { word: "ZICHLIK", clue: "Massa/hajm", direction: "horizontal", row: 2, col: 0 },
      { word: "VAKUUM", clue: "Bo'shliq", direction: "vertical", row: 0, col: 5 },
      { word: "VOLT", clue: "Kuchlanish birligi", direction: "horizontal", row: 4, col: 2 },
      { word: "AMPER", clue: "Tok kuchi birligi", direction: "vertical", row: 2, col: 2 },
      { word: "OHM", clue: "Qarshilik birligi", direction: "horizontal", row: 6, col: 0 },
      { word: "VATT", clue: "Quvvat birligi", direction: "vertical", row: 4, col: 4 },
      { word: "JOULE", clue: "Energiya birligi", direction: "horizontal", row: 8, col: 1 },
      { word: "MAGNIT", clue: "Temirni tortadi", direction: "vertical", row: 6, col: 3 }
    ]
  },
  {
    id: "3",
    name: "Fizika atamalar #3",
    gridSize: 10,
    words: [
      { word: "MOLEKULA", clue: "Atomlar birikuvi", direction: "horizontal", row: 0, col: 0 },
      { word: "MODDА", clue: "Massaga ega", direction: "vertical", row: 0, col: 0 },
      { word: "GAZ", clue: "Havo holati", direction: "horizontal", row: 2, col: 2 },
      { word: "SUYUQ", clue: "Suv holati", direction: "vertical", row: 0, col: 4 },
      { word: "QATTIQ", clue: "Muz holati", direction: "horizontal", row: 4, col: 0 },
      { word: "IMPULS", clue: "Massa × tezlik", direction: "vertical", row: 2, col: 6 },
      { word: "TOLQIN", clue: "Dengizda bor", direction: "horizontal", row: 6, col: 1 },
      { word: "CHASTOTA", clue: "Gertsda o'lchanadi", direction: "vertical", row: 4, col: 3 },
      { word: "LINZA", clue: "Ko'zoynak qismi", direction: "horizontal", row: 8, col: 0 },
      { word: "OPTIKA", clue: "Yorug'lik haqida fan", direction: "vertical", row: 6, col: 5 }
    ]
  },
  {
    id: "4",
    name: "Fizika atamalar #4",
    gridSize: 10,
    words: [
      { word: "ELEKTRON", clue: "Manfiy zaryadli", direction: "horizontal", row: 0, col: 0 },
      { word: "PROTON", clue: "Musbat zaryadli", direction: "vertical", row: 0, col: 0 },
      { word: "NEYTRON", clue: "Zaryadiz", direction: "horizontal", row: 2, col: 1 },
      { word: "YADRO", clue: "Atom markazi", direction: "vertical", row: 0, col: 5 },
      { word: "ION", clue: "Zaryadlangan atom", direction: "horizontal", row: 4, col: 3 },
      { word: "RADIО", clue: "To'lqin turi", direction: "vertical", row: 2, col: 3 },
      { word: "LAZER", clue: "Kuchli yorug'lik", direction: "horizontal", row: 6, col: 0 },
      { word: "RADAR", clue: "Samolyotni topadi", direction: "vertical", row: 4, col: 6 },
      { word: "RENTGEN", clue: "Nur turi", direction: "horizontal", row: 8, col: 0 },
      { word: "GAMMA", clue: "Eng kuchli nur", direction: "vertical", row: 6, col: 4 }
    ]
  },
  {
    id: "5",
    name: "Fizika atamalar #5",
    gridSize: 10,
    words: [
      { word: "NYUTON", clue: "Kuch birligi", direction: "horizontal", row: 0, col: 0 },
      { word: "PASKAL", clue: "Bosim birligi", direction: "vertical", row: 0, col: 0 },
      { word: "KELVIN", clue: "Harorat birligi", direction: "horizontal", row: 2, col: 1 },
      { word: "KANDELA", clue: "Yorqinlik birligi", direction: "vertical", row: 0, col: 4 },
      { word: "SEKUND", clue: "Vaqt birligi", direction: "horizontal", row: 4, col: 0 },
      { word: "METR", clue: "Uzunlik birligi", direction: "vertical", row: 2, col: 6 },
      { word: "GRAMM", clue: "Massa birligi", direction: "horizontal", row: 6, col: 2 },
      { word: "LITR", clue: "Hajm birligi", direction: "vertical", row: 4, col: 4 },
      { word: "GERDS", clue: "Chastota birligi", direction: "horizontal", row: 8, col: 0 },
      { word: "FARAD", clue: "Sig'im birligi", direction: "vertical", row: 6, col: 6 }
    ]
  }
];

export function getRandomCrossword(): Crossword {
  const index = Math.floor(Math.random() * crosswords.length);
  return crosswords[index];
}
