export interface Experiment {
  id: string;
  name: string;
  description: string;
  videoUrl?: string;
  imageUrl: string;
  options: string[];
  correctIndex: number;
}

export const experiments: Experiment[] = [
  {
    id: "1",
    name: "Suvda suzish tajribasi",
    description: "Tuxum oddiy suvda cho'kadi, lekin tuzli suvda suzadi. Nima uchun?",
    imageUrl: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400",
    options: [
      "Tuzli suvning zichligi katta",
      "Tuxum yengilroq bo'ldi",
      "Suv isidi",
      "Tuxum kichraydi"
    ],
    correctIndex: 0
  },
  {
    id: "2",
    name: "Qog'oz samolyot tajribasi",
    description: "Qog'oz samolyot havoda uchadi. Qaysi kuch uni ko'taradi?",
    imageUrl: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400",
    options: [
      "Gravitatsiya kuchi",
      "Ishqalanish kuchi",
      "Ko'tarish kuchi (Bernulli)",
      "Magnit kuchi"
    ],
    correctIndex: 2
  },
  {
    id: "3",
    name: "Shisha va suv tajribasi",
    description: "Stakanga suv quyib, qog'oz bilan yopib ag'daramiz. Suv to'kilmaydi. Nima uchun?",
    imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400",
    options: [
      "Suv yopishdi",
      "Atmosfera bosimi",
      "Qog'oz kuchli",
      "Suv muzladi"
    ],
    correctIndex: 1
  },
  {
    id: "4",
    name: "Sham va banka tajribasi",
    description: "Yonayotgan shamni banka bilan yopamiz, sham o'chadi. Nima uchun?",
    imageUrl: "https://images.unsplash.com/photo-1603905179170-f4b909fde365?w=400",
    options: [
      "Banka sovuq",
      "Kislorod tugadi",
      "Sham kuchsiz",
      "Bosim oshdi"
    ],
    correctIndex: 1
  },
  {
    id: "5",
    name: "Magnit va temir tajribasi",
    description: "Magnit temirni tortadi, lekin yog'ochni tortmaydi. Nima uchun?",
    imageUrl: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=400",
    options: [
      "Yog'och og'ir",
      "Temir magnit xossaga ega",
      "Yog'och issiq",
      "Temir yengil"
    ],
    correctIndex: 1
  }
];

export function getRandomExperiment(): Experiment {
  const index = Math.floor(Math.random() * experiments.length);
  return experiments[index];
}
