import { Atom, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const scrollToQuiz = () => {
    document.getElementById("1-shart")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Atom className="w-32 h-32 text-primary floating" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <FlaskConical className="w-24 h-24 text-secondary floating" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 sm:py-32">
        <nav className="flex justify-between items-center mb-16 sm:mb-24">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Atom className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-xl">Fizika</span>
          </div>
          <Button 
            onClick={scrollToQuiz}
            className="bg-primary hover:bg-primary/90"
          >
            Boshlash
          </Button>
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6 animate-fade-in">
            <FlaskConical className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary font-medium">Interaktiv o'quv platformasi</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display mb-6 animate-fade-in">
            <span className="gradient-text">Fizikadan</span>
            <br />
            O'quv Sayti
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            O'lchov asboblarini o'rganish va mustahkamlash uchun interaktiv mashqlar. 
            Drag & drop yordamida asboblarni tegishli kattaliklarga moslang.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              onClick={scrollToQuiz}
              className="gap-2 bg-primary hover:bg-primary/90 text-lg px-8 py-6 pulse-glow"
            >
              Moslashtirish sharti
            </Button>
            <Button
              size="lg"
              onClick={() => document.getElementById("2-shart")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              className="gap-2 text-lg px-8 py-6 border-accent text-accent hover:bg-accent/10"
            >
              Savollar sharti
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
