export interface Bluf {
  id: string;
  statements: string[];
  correctIndex: number;
  explanation: string;
}

export const blufs: Bluf[] = [
  {
    id: "1",
    statements: [
      "Yorug'lik vakuumda tarqalmaydi",
      "Yorug'lik vakuumda eng tez tarqaladi",
      "Yorug'lik faqat suvda tarqaladi"
    ],
    correctIndex: 1,
    explanation: "Yorug'lik vakuumda 300 000 km/s tezlikda tarqaladi"
  },
  {
    id: "2",
    statements: [
      "Suv 100°C da qaynaydi (oddiy sharoitda)",
      "Suv 50°C da qaynaydi",
      "Suv 150°C da qaynaydi"
    ],
    correctIndex: 0,
    explanation: "Suv dengiz sathida 100°C da qaynaydi"
  },
  {
    id: "3",
    statements: [
      "Gravitatsiya faqat Yerda mavjud",
      "Gravitatsiya Oyda yo'q",
      "Gravitatsiya barcha jismlarda mavjud"
    ],
    correctIndex: 2,
    explanation: "Har qanday massaga ega jism gravitatsiya kuchiga ega"
  },
  {
    id: "4",
    statements: [
      "Elektr toki faqat metallarda o'tadi",
      "Elektr toki o'tkazgichlarda o'tadi",
      "Elektr toki faqat suvda o'tadi"
    ],
    correctIndex: 1,
    explanation: "Elektr toki metallar, elektrolitlar va gazlarda o'tadi"
  },
  {
    id: "5",
    statements: [
      "Magnit shimoliy va janubiy qutbga ega",
      "Magnit faqat shimoliy qutbga ega",
      "Magnit qutbsiz"
    ],
    correctIndex: 0,
    explanation: "Har qanday magnit ikki qutbga ega"
  },
  {
    id: "6",
    statements: [
      "Tovush vakuumda tarqaladi",
      "Tovush havoda tarqaladi",
      "Tovush faqat suvda tarqaladi"
    ],
    correctIndex: 1,
    explanation: "Tovush muhit orqali tarqaladi, vakuumda tarqalmaydi"
  },
  {
    id: "7",
    statements: [
      "Oy o'z yorug'ligini chiqaradi",
      "Oy Quyosh nurini aks ettiradi",
      "Oy yorug'lik chiqarmaydi va aks ettirmaydi"
    ],
    correctIndex: 1,
    explanation: "Oy Quyosh nurini aks ettirib porlaydi"
  },
  {
    id: "8",
    statements: [
      "Muz suvdan og'ir",
      "Muz va suv bir xil og'irlikda",
      "Muz suvdan yengil"
    ],
    correctIndex: 2,
    explanation: "Muz zichligi suvnikidan kam, shuning uchun muz suzadi"
  },
  {
    id: "9",
    statements: [
      "Harorat Selsiusda ham Kelvinda ham o'lchanadi",
      "Harorat faqat Selsiusda o'lchanadi",
      "Harorat faqat Farengeitda o'lchanadi"
    ],
    correctIndex: 0,
    explanation: "Harorat turli birliklarda o'lchanishi mumkin"
  },
  {
    id: "10",
    statements: [
      "Atom ko'zga ko'rinadi",
      "Atom ko'zga ko'rinmaydi",
      "Atom faqat kattaliklarni ko'rsatadi"
    ],
    correctIndex: 1,
    explanation: "Atom juda kichik, oddiy ko'z bilan ko'rib bo'lmaydi"
  },
  {
    id: "11",
    statements: [
      "Yerning magnit maydoni yo'q",
      "Yerning magnit maydoni bor",
      "Faqat magnit toshlarida magnit maydoni bor"
    ],
    correctIndex: 1,
    explanation: "Yer katta magnit bo'lib, kompasni ishlashiga sabab"
  },
  {
    id: "12",
    statements: [
      "Havoning massasi yo'q",
      "Havoning massasi bor",
      "Havo faqat shamolda massaga ega"
    ],
    correctIndex: 1,
    explanation: "Havo gazlardan iborat va massaga ega"
  },
  {
    id: "13",
    statements: [
      "Quyosh Yer atrofida aylanadi",
      "Yer Quyosh atrofida aylanadi",
      "Quyosh va Yer bir joyda turadi"
    ],
    correctIndex: 1,
    explanation: "Yer Quyosh atrofida bir yilda bir marta aylanadi"
  },
  {
    id: "14",
    statements: [
      "Rangli nurlar tezligi har xil",
      "Barcha nurlar tezligi bir xil vakuumda",
      "Qizil nur eng sekin"
    ],
    correctIndex: 1,
    explanation: "Vakuumda barcha nurlar bir xil tezlikda tarqaladi"
  },
  {
    id: "15",
    statements: [
      "Issiq jism kengayadi",
      "Issiq jism kichrayadi",
      "Issiq jism o'zgarmaydi"
    ],
    correctIndex: 0,
    explanation: "Ko'pchilik jismlar isiganda kengayadi"
  },
  {
    id: "16",
    statements: [
      "Elektr tokini ampermetr o'lchaydi",
      "Elektr tokini voltmetr o'lchaydi",
      "Elektr tokini termometr o'lchaydi"
    ],
    correctIndex: 0,
    explanation: "Tok kuchini ampermetr o'lchaydi"
  },
  {
    id: "17",
    statements: [
      "Osmonda kamalak 5 rang",
      "Osmonda kamalak 7 rang",
      "Osmonda kamalak 3 rang"
    ],
    correctIndex: 1,
    explanation: "Kamalakda 7 ta asosiy rang mavjud"
  },
  {
    id: "18",
    statements: [
      "Suvning qaynash harorati balandlikka bog'liq emas",
      "Suvning qaynash harorati balandlikda pastroq",
      "Suvning qaynash harorati balandlikda yuqoriroq"
    ],
    correctIndex: 1,
    explanation: "Balandlikda bosim kam, shuning uchun suv past haroratda qaynaydi"
  },
  {
    id: "19",
    statements: [
      "Qora rangli jismlar issiqlikni yaxshi yutadi",
      "Oq rangli jismlar issiqlikni yaxshi yutadi",
      "Rang issiqlik yutishga ta'sir qilmaydi"
    ],
    correctIndex: 0,
    explanation: "Qora rang yorug'likni yutadi, oq rang aks ettiradi"
  },
  {
    id: "20",
    statements: [
      "Elektr tokida elektronlar harakatlanadi",
      "Elektr tokida protonlar harakatlanadi",
      "Elektr tokida neytronlar harakatlanadi"
    ],
    correctIndex: 0,
    explanation: "O'tkazgichlarda erkin elektronlar harakatlanadi"
  }
];

export function getRandomBlufs(count: number = 5): Bluf[] {
  const shuffled = [...blufs].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
