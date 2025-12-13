export interface Formula {
  id: string;
  name: string;
  symbols: string[];
  correctFormula: string;
  hint: string;
}

export const formulas: Formula[] = [
  {
    id: "1",
    name: "Tezlik formulasi",
    symbols: ["v", "=", "S", "/", "t"],
    correctFormula: "v=S/t",
    hint: "Yo'l va vaqt orqali tezlikni topish"
  },
  {
    id: "2",
    name: "Kuch formulasi",
    symbols: ["F", "=", "m", "·", "a"],
    correctFormula: "F=m·a",
    hint: "Nyutonning ikkinchi qonuni"
  },
  {
    id: "3",
    name: "Zichlik formulasi",
    symbols: ["ρ", "=", "m", "/", "V"],
    correctFormula: "ρ=m/V",
    hint: "Massa va hajm orqali zichlik"
  },
  {
    id: "4",
    name: "Bosim formulasi",
    symbols: ["P", "=", "F", "/", "S"],
    correctFormula: "P=F/S",
    hint: "Kuch va yuza orqali bosim"
  },
  {
    id: "5",
    name: "Ish formulasi",
    symbols: ["A", "=", "F", "·", "S"],
    correctFormula: "A=F·S",
    hint: "Kuch va yo'l orqali ish"
  }
];

export function getRandomFormula(): Formula {
  const index = Math.floor(Math.random() * formulas.length);
  return formulas[index];
}
