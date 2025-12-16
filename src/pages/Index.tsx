import { Link } from "react-router-dom";
import { Atom, FlaskConical, GripVertical, HelpCircle, Calculator, Beaker, Box, Grid3X3, AlertTriangle, Lightbulb, Users, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const shartlar = [
  {
    id: 1,
    path: "/1-shart",
    title: "1-shart",
    subtitle: "Moslashtirish sharti",
    description: "O'lchov asboblarini tegishli fizik kattaliklarga drag & drop yordamida moslang.",
    icon: GripVertical,
    color: "primary",
    maxScore: "20 ball"
  },
  {
    id: 2,
    path: "/2-shart",
    title: "2-shart",
    subtitle: "Savollar sharti",
    description: "Fizikadan 15 ta tasodifiy savollarga javob bering.",
    icon: HelpCircle,
    color: "accent",
    maxScore: "15 ball"
  },
  {
    id: 3,
    path: "/3-shart",
    title: "3-shart",
    subtitle: "Formulani top",
    description: "Berilgan belgilardan to'g'ri formulani yig'ing.",
    icon: Calculator,
    color: "secondary",
    maxScore: "10 ball"
  },
  {
    id: 4,
    path: "/4-shart",
    title: "4-shart",
    subtitle: "Fizik tajribani top",
    description: "Ko'rsatilgan tajribani tushuntiring.",
    icon: Beaker,
    color: "primary",
    maxScore: "15 ball"
  },
  {
    id: 5,
    path: "/5-shart",
    title: "5-shart",
    subtitle: "Qora quti",
    description: "Belgilar orqali yashirin jism yoki hodisani toping.",
    icon: Box,
    color: "accent",
    maxScore: "10 ball"
  },
  {
    id: 6,
    path: "/6-shart",
    title: "6-shart",
    subtitle: "Fizik krossvord",
    description: "Fizika atamalaridan krossvord yeching.",
    icon: Grid3X3,
    color: "secondary",
    maxScore: "5 ball"
  },
  {
    id: 7,
    path: "/7-shart",
    title: "7-shart",
    subtitle: "Fizik bluf",
    description: "3 ta izohdan to'g'risini toping.",
    icon: AlertTriangle,
    color: "primary",
    maxScore: "5 ball"
  },
  {
    id: 8,
    path: "/8-shart",
    title: "8-shart",
    subtitle: "Agar men fizika bo'lsam...",
    description: "Metaforik topishmoqlarni yeching.",
    icon: Lightbulb,
    color: "accent",
    maxScore: "10 ball"
  },
  {
    id: 9,
    path: "/9-shart",
    title: "9-shart",
    subtitle: "Juftini top",
    description: "Olimlar rasmlarining juftlarini toping.",
    icon: Users,
    color: "secondary",
    maxScore: "10 ball"
  },
  {
    id: 10,
    path: "/10-shart",
    title: "10-shart",
    subtitle: "Birligini top",
    description: "Fizik kattaliklarga tegishli birliklarni moslang.",
    icon: Scale,
    color: "primary",
    maxScore: "10 ball"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="absolute top-20 left-10 opacity-20">
          <Atom className="w-32 h-32 text-primary floating" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <FlaskConical className="w-24 h-24 text-secondary floating" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative container mx-auto px-4 py-16 sm:py-24">
          <nav className="flex justify-between items-center mb-12 sm:mb-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Atom className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display font-bold text-xl">Fizika</span>
            </div>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6 animate-fade-in">
              <FlaskConical className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium">Interaktiv o'quv platformasi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 animate-fade-in">
              <span className="gradient-text">Fizikadan</span>
              <br />
              O'quv Sayti
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              10 ta shart bo'yicha fizikani o'rganing va bilimingizni sinab ko'ring.
            </p>
          </div>
        </div>
      </header>

      {/* Shartlar Cards */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-center mb-10">
            <span className="gradient-text">Shartlarni</span> tanlang
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {shartlar.map((shart) => {
              const Icon = shart.icon;
              const colorClasses = {
                primary: "bg-primary/20 text-primary hover:border-primary/30 hover:shadow-primary/20",
                accent: "bg-accent/20 text-accent hover:border-accent/30 hover:shadow-accent/20",
                secondary: "bg-secondary/20 text-secondary hover:border-secondary/30 hover:shadow-secondary/20"
              };
              const btnClasses = {
                primary: "bg-primary hover:bg-primary/90",
                accent: "bg-accent hover:bg-accent/90 text-accent-foreground",
                secondary: "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              };
              
              return (
                <Link key={shart.id} to={shart.path} className="group">
                  <div className={`glass rounded-xl p-5 h-full transition-all duration-300 hover:scale-105 hover:shadow-lg border border-transparent ${colorClasses[shart.color as keyof typeof colorClasses]}`}>
                    <div className={`w-12 h-12 rounded-xl ${colorClasses[shart.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-display mb-1">{shart.title}</h3>
                    <p className={`text-sm font-medium mb-2 ${shart.color === 'primary' ? 'text-primary' : shart.color === 'accent' ? 'text-accent' : 'text-secondary'}`}>
                      {shart.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{shart.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{shart.maxScore}</span>
                      <Button size="sm" className={btnClasses[shart.color as keyof typeof btnClasses]}>
                        Boshlash
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Fizika O'quv Sayti. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
