export interface Instrument {
  id: string;
  name: string;
  icon: string;
}

export interface Quantity {
  id: string;
  name: string;
  instrumentId: string;
}

export const instruments: Instrument[] = [
  { id: "kompas", name: "Kompas", icon: "🧭" },
  { id: "ampermetr", name: "Ampermetr", icon: "⚡" },
  { id: "voltmetr", name: "Voltmetr", icon: "🔌" },
  { id: "barometr", name: "Barometr", icon: "🌡️" },
  { id: "elektrometr", name: "Elektrometr", icon: "⚛️" },
  { id: "tarozi", name: "Tarozi", icon: "⚖️" },
  { id: "manometr", name: "Manometr", icon: "🔧" },
  { id: "dinamometr", name: "Dinamometr", icon: "💪" },
  { id: "termometr", name: "Termometr", icon: "🌡️" },
  { id: "sekundomer", name: "Sekundomer", icon: "⏱️" },
  { id: "spidometr", name: "Spidometr", icon: "🚗" },
  { id: "elektroskop", name: "Elektroskop", icon: "🔋" },
  { id: "transportir", name: "Transportir", icon: "📐" },
  { id: "galvanometr", name: "Galvanometr", icon: "📊" },
  { id: "gigrometr", name: "Gigrometr", icon: "💧" },
  { id: "chizgich", name: "Chizg'ich", icon: "📏" },
  { id: "menzurka", name: "Menzurka", icon: "🧪" },
  { id: "areometr", name: "Areometr", icon: "🎚️" },
  { id: "kalorimetr", name: "Kalorimetr", icon: "🔥" },
  { id: "shtangenserkul", name: "Shtangenserkul", icon: "🔩" },
];

export const quantities: Quantity[] = [
  { id: "tok_kuchi", name: "Elektr tok kuchi", instrumentId: "ampermetr" },
  { id: "kuchlanish", name: "Kuchlanish", instrumentId: "voltmetr" },
  { id: "atmosfera_bosimi", name: "Atmosfera bosimi", instrumentId: "barometr" },
  { id: "massa", name: "Massa", instrumentId: "tarozi" },
  { id: "gaz_bosimi", name: "Gaz va suyuqlik bosimi", instrumentId: "manometr" },
  { id: "kuch", name: "Kuch", instrumentId: "dinamometr" },
  { id: "harorat", name: "Harorat", instrumentId: "termometr" },
  { id: "vaqt", name: "Vaqt", instrumentId: "sekundomer" },
  { id: "tezlik", name: "Tezlik", instrumentId: "spidometr" },
  { id: "elektr_zaryad", name: "Elektr zaryadi", instrumentId: "elektroskop" },
  { id: "burchak", name: "Burchak", instrumentId: "transportir" },
  { id: "tok_kuchi_kichik", name: "Kichik tok kuchi", instrumentId: "galvanometr" },
  { id: "namlik", name: "Havo namligi", instrumentId: "gigrometr" },
  { id: "uzunlik", name: "Uzunlik", instrumentId: "chizgich" },
  { id: "hajm", name: "Suyuqlik hajmi", instrumentId: "menzurka" },
  { id: "zichlik", name: "Suyuqlik zichligi", instrumentId: "areometr" },
  { id: "issiqlik", name: "Issiqlik miqdori", instrumentId: "kalorimetr" },
  { id: "diametr", name: "Kichik o'lchamlar", instrumentId: "shtangenserkul" },
  { id: "magnit_qutbi", name: "Magnit qutbi yo'nalishi", instrumentId: "kompas" },
  { id: "elektr_potentsial", name: "Elektr potentsiali", instrumentId: "elektrometr" },
];

export function getRandomQuantities(count: number): Quantity[] {
  const shuffled = [...quantities].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getInstrumentById(id: string): Instrument | undefined {
  return instruments.find((i) => i.id === id);
}
