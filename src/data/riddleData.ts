export interface Riddle {
  id: string;
  description: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const riddles: Riddle[] = [
  {
    id: "1",
    description: "Men ko'rinmasman, lekin hammani bosaman. Balandlikda kuchsizlanaman, pastlikda kuchliman. Men kimman?",
    options: ["Shamol", "Atmosfera bosimi", "Gravitatsiya", "Yorug'lik"],
    correctIndex: 1,
    explanation: "Atmosfera bosimi ko'rinmaydi lekin bor, balandlikda kamayadi"
  },
  {
    id: "2",
    description: "Men har narsani tortaman, Yerda ham, Oyda ham borman. Mening tufayli olmalar yerga tushadi. Men kimman?",
    options: ["Magnit kuchi", "Gravitatsiya", "Ishqalanish", "Elastik kuch"],
    correctIndex: 1,
    explanation: "Gravitatsiya kuchi barcha jismlarni tortadi"
  },
  {
    id: "3",
    description: "Men juda tez yugurarman, bir soniyada Yer atrofini 7 marta aylanaman. Men kimman?",
    options: ["Tovush", "Yorug'lik", "Elektr toki", "Shamol"],
    correctIndex: 1,
    explanation: "Yorug'lik sekundiga 300 000 km tezlikda tarqaladi"
  },
  {
    id: "4",
    description: "Men issiqda kengayman, sovuqda kichrayaman. Termometrlarda ishlatilaman. Men kimman?",
    options: ["Simob", "Suv", "Havo", "Muz"],
    correctIndex: 0,
    explanation: "Simob termometrlarda haroratni o'lchash uchun ishlatiladi"
  },
  {
    id: "5",
    description: "Men ikki qutbga egaman, temirni tortaman, plastmassani emas. Men kimman?",
    options: ["Elektr", "Magnit", "Batareya", "Kondensator"],
    correctIndex: 1,
    explanation: "Magnit shimoliy va janubiy qutbga ega, ferromagnit moddalarni tortadi"
  },
  {
    id: "6",
    description: "Men harakatlanuvchi elektronlardan tashkil topganman, simlar orqali oqaman. Men kimman?",
    options: ["Suv", "Yorug'lik", "Elektr toki", "Issiqlik"],
    correctIndex: 2,
    explanation: "Elektr toki elektronlarning yo'nalishli harakati"
  },
  {
    id: "7",
    description: "Men bo'shliqda tarqalolmayman, menga muhit kerak. Quloqlar meni eshitadi. Men kimman?",
    options: ["Yorug'lik", "Tovush", "Elektr", "Issiqlik"],
    correctIndex: 1,
    explanation: "Tovush to'lqinlari muhit orqali tarqaladi"
  },
  {
    id: "8",
    description: "Men 0°C da muzlayman, 100°C da bug'layman. Hayot uchun zarurman. Men kimman?",
    options: ["Spirt", "Suv", "Simob", "Yog'"],
    correctIndex: 1,
    explanation: "Suv 0°C da muzlaydi, 100°C da qaynaydi"
  },
  {
    id: "9",
    description: "Meni ko'zingiz bilan ko'ra olmaysiz, lekin men hamma joyda borman. Nafas olishda menga ehtiyoj bor. Men kimman?",
    options: ["Suv", "Kislorod", "Yorug'lik", "Issiqlik"],
    correctIndex: 1,
    explanation: "Kislorod ko'rinmas gaz, tirik organizmlar uchun zarur"
  },
  {
    id: "10",
    description: "Men Yer markaziga qarab tortaman, meni yengish uchun energiya kerak. Men kimman?",
    options: ["Magnit maydoni", "Elektr maydoni", "Gravitatsiya kuchi", "Ishqalanish kuchi"],
    correctIndex: 2,
    explanation: "Gravitatsiya jismlarni Yer markaziga tortadi"
  },
  {
    id: "11",
    description: "Men har xil ranglarga bo'linaman prizmadan o'tganda. Men 7 xil rangman. Men kimman?",
    options: ["Suv", "Havo", "Oq yorug'lik", "Ko'zgu"],
    correctIndex: 2,
    explanation: "Oq yorug'lik prizmadan o'tganda spektrga ajraladi"
  },
  {
    id: "12",
    description: "Men jismlarni sekinlashtiraman, harakatga qarshi ishlayman. Men kimman?",
    options: ["Gravitatsiya", "Ishqalanish kuchi", "Elastik kuch", "Magnit kuchi"],
    correctIndex: 1,
    explanation: "Ishqalanish kuchi harakatga qarama-qarshi yo'nalgan"
  },
  {
    id: "13",
    description: "Men atomning markazidaman, proton va neytronlardan iboratman. Men kimman?",
    options: ["Elektron", "Yadro", "Orbital", "Ion"],
    correctIndex: 1,
    explanation: "Atom yadrosi proton va neytronlardan tashkil topgan"
  },
  {
    id: "14",
    description: "Men manfiy zaryadliman, yadro atrofida aylanaman. Men kimman?",
    options: ["Proton", "Neytron", "Elektron", "Foton"],
    correctIndex: 2,
    explanation: "Elektron manfiy zaryadga ega zarrача"
  },
  {
    id: "15",
    description: "Men issiqlikni o'lchayман, Selsiusda yoki Kelvinda. Men kimman?",
    options: ["Barometr", "Termometr", "Voltmetr", "Ampermetr"],
    correctIndex: 1,
    explanation: "Termometr haroratni o'lchaydi"
  },
  {
    id: "16",
    description: "Men kuchlanishni o'lchayман, volt mening birligim. Men kimman?",
    options: ["Ampermetr", "Ommetr", "Voltmetr", "Wattmetr"],
    correctIndex: 2,
    explanation: "Voltmetr elektr kuchlanishini o'lchaydi"
  },
  {
    id: "17",
    description: "Men uzunlikni o'lchayман, santimetr va metr mening birliklarim. Men kimman?",
    options: ["Tarozi", "Lineyka", "Soat", "Termometr"],
    correctIndex: 1,
    explanation: "Lineyka uzunlikni o'lchash uchun ishlatiladi"
  },
  {
    id: "18",
    description: "Men massani o'lchayман, kilogramm mening birligim. Men kimman?",
    options: ["Lineyka", "Termometr", "Tarozi", "Sekudomer"],
    correctIndex: 2,
    explanation: "Tarozi massani o'lchaydi"
  },
  {
    id: "19",
    description: "Men bosimni o'lchayман, atmosfera bosimini ko'rsataman. Men kimman?",
    options: ["Termometr", "Barometr", "Manometr", "Voltmetr"],
    correctIndex: 1,
    explanation: "Barometr atmosfera bosimini o'lchaydi"
  },
  {
    id: "20",
    description: "Men vaqtni o'lchayман, soniya mening birligim. Men kimman?",
    options: ["Lineyka", "Termometr", "Tarozi", "Sekundomer"],
    correctIndex: 3,
    explanation: "Sekundomer vaqtni o'lchaydi"
  }
];

export function getRandomRiddles(count: number = 5): Riddle[] {
  const shuffled = [...riddles].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
