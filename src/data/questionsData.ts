export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
}

export const allQuestions: Question[] = [
  // O'lchov birliklari
  { id: 1, question: "Uzunlikning SI birligi qaysi?", options: ["Kilometr", "Metr", "Santimetr", "Millimetr"], correctAnswer: 1 },
  { id: 2, question: "Massaning SI birligi qaysi?", options: ["Gramm", "Tonna", "Kilogramm", "Milligramm"], correctAnswer: 2 },
  { id: 3, question: "Vaqtning SI birligi qaysi?", options: ["Minut", "Soat", "Sekund", "Millisekund"], correctAnswer: 2 },
  { id: 4, question: "Elektr tok kuchining birligi qaysi?", options: ["Volt", "Amper", "Om", "Vatt"], correctAnswer: 1 },
  { id: 5, question: "Kuchlanishning birligi qaysi?", options: ["Amper", "Om", "Volt", "Kulon"], correctAnswer: 2 },
  { id: 6, question: "Haroratning SI birligi qaysi?", options: ["Selsiy", "Kelvin", "Farengeyt", "Reomur"], correctAnswer: 1 },
  { id: 7, question: "Kuchning birligi qaysi?", options: ["Joul", "Nyuton", "Paskal", "Vatt"], correctAnswer: 1 },
  { id: 8, question: "Bosimning birligi qaysi?", options: ["Nyuton", "Joul", "Paskal", "Vatt"], correctAnswer: 2 },
  { id: 9, question: "Ishning birligi qaysi?", options: ["Nyuton", "Joul", "Vatt", "Paskal"], correctAnswer: 1 },
  { id: 10, question: "Quvvatning birligi qaysi?", options: ["Joul", "Nyuton", "Vatt", "Om"], correctAnswer: 2 },
  
  // O'lchov asboblari
  { id: 11, question: "Haroratni o'lchash uchun qaysi asbob ishlatiladi?", options: ["Barometr", "Termometr", "Manometr", "Gigrometr"], correctAnswer: 1 },
  { id: 12, question: "Elektr tok kuchini o'lchash uchun qaysi asbob ishlatiladi?", options: ["Voltmetr", "Ommetr", "Ampermetr", "Galvanometr"], correctAnswer: 2 },
  { id: 13, question: "Atmosfera bosimini o'lchash uchun qaysi asbob ishlatiladi?", options: ["Manometr", "Barometr", "Dinamometr", "Areometr"], correctAnswer: 1 },
  { id: 14, question: "Massani o'lchash uchun qaysi asbob ishlatiladi?", options: ["Dinamometr", "Menzurka", "Tarozi", "Areometr"], correctAnswer: 2 },
  { id: 15, question: "Kuchni o'lchash uchun qaysi asbob ishlatiladi?", options: ["Tarozi", "Dinamometr", "Manometr", "Barometr"], correctAnswer: 1 },
  { id: 16, question: "Suyuqlik hajmini o'lchash uchun qaysi asbob ishlatiladi?", options: ["Areometr", "Menzurka", "Tarozi", "Kalorimetr"], correctAnswer: 1 },
  { id: 17, question: "Suyuqlik zichligini o'lchash uchun qaysi asbob ishlatiladi?", options: ["Menzurka", "Areometr", "Barometr", "Gigrometr"], correctAnswer: 1 },
  { id: 18, question: "Namlikni o'lchash uchun qaysi asbob ishlatiladi?", options: ["Termometr", "Barometr", "Gigrometr", "Manometr"], correctAnswer: 2 },
  { id: 19, question: "Vaqtni o'lchash uchun qaysi asbob ishlatiladi?", options: ["Spidometr", "Sekundomer", "Kompas", "Tezlikomer"], correctAnswer: 1 },
  { id: 20, question: "Tezlikni o'lchash uchun qaysi asbob ishlatilada?", options: ["Sekundomer", "Spidometr", "Dinamometr", "Ampermetr"], correctAnswer: 1 },

  // Fizik formulalar
  { id: 21, question: "Tezlik formulasi qaysi?", options: ["v = s/t", "v = s×t", "v = t/s", "v = s+t"], correctAnswer: 0 },
  { id: 22, question: "Zichlik formulasi qaysi?", options: ["ρ = m×V", "ρ = m/V", "ρ = V/m", "ρ = m+V"], correctAnswer: 1 },
  { id: 23, question: "Kuch formulasi qaysi?", options: ["F = m/a", "F = m+a", "F = m×a", "F = a/m"], correctAnswer: 2 },
  { id: 24, question: "Bosim formulasi qaysi?", options: ["P = F×S", "P = S/F", "P = F/S", "P = F+S"], correctAnswer: 2 },
  { id: 25, question: "Ish formulasi qaysi?", options: ["A = F+s", "A = F/s", "A = F×s", "A = s/F"], correctAnswer: 2 },
  { id: 26, question: "Quvvat formulasi qaysi?", options: ["P = A×t", "P = t/A", "P = A/t", "P = A+t"], correctAnswer: 2 },
  { id: 27, question: "Om qonuni formulasi qaysi?", options: ["I = U×R", "I = R/U", "I = U/R", "I = U+R"], correctAnswer: 2 },
  { id: 28, question: "Elektr qarshilik formulasi qaysi?", options: ["R = U/I", "R = U×I", "R = I/U", "R = U+I"], correctAnswer: 0 },
  { id: 29, question: "Kinetik energiya formulasi qaysi?", options: ["Ek = mv²", "Ek = mv²/2", "Ek = 2mv²", "Ek = mv/2"], correctAnswer: 1 },
  { id: 30, question: "Potensial energiya formulasi qaysi?", options: ["Ep = mgh", "Ep = mg/h", "Ep = m/gh", "Ep = mh/g"], correctAnswer: 0 },

  // Fizik hodisalar
  { id: 31, question: "Suvning qaynash harorati qancha?", options: ["90°C", "100°C", "110°C", "80°C"], correctAnswer: 1 },
  { id: 32, question: "Suvning muzlash harorati qancha?", options: ["-10°C", "10°C", "0°C", "5°C"], correctAnswer: 2 },
  { id: 33, question: "Erkin tushish tezlanishi qancha?", options: ["9.8 m/s²", "10.8 m/s²", "8.9 m/s²", "11 m/s²"], correctAnswer: 0 },
  { id: 34, question: "Yorug'lik vakuumdagi tezligi qancha?", options: ["300 000 km/s", "340 m/s", "150 000 km/s", "3000 km/s"], correctAnswer: 0 },
  { id: 35, question: "Tovush havoda tezligi taxminan qancha?", options: ["300 000 km/s", "340 m/s", "1000 m/s", "100 m/s"], correctAnswer: 1 },
  { id: 36, question: "Normal atmosfera bosimi qancha?", options: ["760 mm sim. ust.", "700 mm sim. ust.", "800 mm sim. ust.", "750 mm sim. ust."], correctAnswer: 0 },
  { id: 37, question: "Suvning zichligi qancha?", options: ["100 kg/m³", "10 kg/m³", "1000 kg/m³", "10000 kg/m³"], correctAnswer: 2 },
  { id: 38, question: "1 km necha metr?", options: ["100 m", "1000 m", "10000 m", "10 m"], correctAnswer: 1 },
  { id: 39, question: "1 tonna necha kilogramm?", options: ["100 kg", "10 kg", "1000 kg", "10000 kg"], correctAnswer: 2 },
  { id: 40, question: "1 soat necha sekund?", options: ["60 s", "360 s", "3600 s", "600 s"], correctAnswer: 2 },

  // Qonunlar va ta'riflar
  { id: 41, question: "Nyutonning birinchi qonuni qanday ataladi?", options: ["Inersiya qonuni", "Dinamika qonuni", "Ta'sir va aks ta'sir", "Tortishish qonuni"], correctAnswer: 0 },
  { id: 42, question: "Arximed qonuni nimaga tegishli?", options: ["Issiqlik", "Elektr", "Suzish kuchi", "Yorug'lik"], correctAnswer: 2 },
  { id: 43, question: "Paskal qonuni nimaga tegishli?", options: ["Gazlar", "Suyuqliklarda bosim", "Elektr", "Mexanika"], correctAnswer: 1 },
  { id: 44, question: "Massa saqlash qonunini kim kashf etgan?", options: ["Nyuton", "Lomonosov", "Arximed", "Paskal"], correctAnswer: 1 },
  { id: 45, question: "Elektr zaryadning birligi qaysi?", options: ["Volt", "Amper", "Kulon", "Om"], correctAnswer: 2 },
  { id: 46, question: "Qarshilikning birligi qaysi?", options: ["Volt", "Amper", "Vatt", "Om"], correctAnswer: 3 },
  { id: 47, question: "Chastotaning birligi qaysi?", options: ["Sekund", "Gers", "Metr", "Joul"], correctAnswer: 1 },
  { id: 48, question: "Yorug'lik to'lqin uzunligining birligi qaysi?", options: ["Gers", "Metr", "Sekund", "Kandela"], correctAnswer: 1 },
  { id: 49, question: "Issiqlik miqdorining birligi qaysi?", options: ["Kelvin", "Joul", "Vatt", "Kalori"], correctAnswer: 1 },
  { id: 50, question: "Solishtirma issiqlik sig'imining birligi qaysi?", options: ["J/kg", "J/(kg·°C)", "J/°C", "kg·°C"], correctAnswer: 1 },

  // Qo'shimcha savollar
  { id: 51, question: "Qaysi modda elektr tokini o'tkazadi?", options: ["Rezina", "Shisha", "Mis", "Plastmassa"], correctAnswer: 2 },
  { id: 52, question: "Magnit maydonini hosil qiluvchi zarracha qaysi?", options: ["Proton", "Neytron", "Elektron", "Foton"], correctAnswer: 2 },
  { id: 53, question: "Yorug'lik qanday to'lqin hisoblanadi?", options: ["Bo'ylama", "Ko'ndalang", "Mexanik", "Tovush"], correctAnswer: 1 },
  { id: 54, question: "Tovush qanday to'lqin hisoblanadi?", options: ["Ko'ndalang", "Elektromagnit", "Bo'ylama", "Yorug'lik"], correctAnswer: 2 },
  { id: 55, question: "Atomning yadrosi nimalardan tashkil topgan?", options: ["Elektronlar", "Proton va neytronlar", "Faqat protonlar", "Faqat neytronlar"], correctAnswer: 1 },
  { id: 56, question: "Elektron qanday zaryadga ega?", options: ["Musbat", "Manfiy", "Neytral", "O'zgaruvchan"], correctAnswer: 1 },
  { id: 57, question: "Proton qanday zaryadga ega?", options: ["Manfiy", "Neytral", "Musbat", "O'zgaruvchan"], correctAnswer: 2 },
  { id: 58, question: "Nurlanish tezligi eng katta qayerda?", options: ["Suvda", "Havoda", "Vakuumda", "Shishada"], correctAnswer: 2 },
  { id: 59, question: "Qaysi rang eng kichik to'lqin uzunligiga ega?", options: ["Qizil", "Yashil", "Sariq", "Binafsha"], correctAnswer: 3 },
  { id: 60, question: "Qaysi rang eng katta to'lqin uzunligiga ega?", options: ["Binafsha", "Ko'k", "Qizil", "Yashil"], correctAnswer: 2 },
];

export function getRandomQuestions(count: number = 15): Question[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
