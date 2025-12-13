export interface BlackBox {
  id: string;
  name: string;
  clues: string[];
  options: string[];
  correctIndex: number;
}

export const blackBoxes: BlackBox[] = [
  {
    id: "1",
    name: "Sirli quti #1",
    clues: [
      "Men yorug'lik chiqaraman",
      "Elektr bilan ishlayman",
      "Uyda ko'p uchrayman"
    ],
    options: ["Lampochka", "Televizor", "Kompyuter", "Muzlatgich"],
    correctIndex: 0
  },
  {
    id: "2",
    name: "Sirli quti #2",
    clues: [
      "Men harakatni o'zgartiraman",
      "Avtomobillarda ishlatilaman",
      "Sekinlashtirish uchun kerak"
    ],
    options: ["Dvigatel", "Tormoz", "Rul", "G'ildirak"],
    correctIndex: 1
  },
  {
    id: "3",
    name: "Sirli quti #3",
    clues: [
      "Men ko'rinmasman",
      "Lekin kuchim bor",
      "Yerni aylantirib turaman"
    ],
    options: ["Shamol", "Gravitatsiya", "Magnit", "Elektr"],
    correctIndex: 1
  },
  {
    id: "4",
    name: "Sirli quti #4",
    clues: [
      "Men issiqlikni o'lchayман",
      "Shifokorlar ishlatadi",
      "Raqamlar ko'rsataman"
    ],
    options: ["Soat", "Termometr", "Barometr", "Voltmetr"],
    correctIndex: 1
  },
  {
    id: "5",
    name: "Sirli quti #5",
    clues: [
      "Men tebranaman",
      "Ovoz chiqaraman",
      "Musiqa asboblarida borman"
    ],
    options: ["Tor (sim)", "Disk", "Tugma", "Qopqoq"],
    correctIndex: 0
  }
];

export function getRandomBlackBox(): BlackBox {
  const index = Math.floor(Math.random() * blackBoxes.length);
  return blackBoxes[index];
}
