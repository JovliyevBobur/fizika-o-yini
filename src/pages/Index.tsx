import { Link } from "react-router-dom";
import { Atom, FlaskConical, GripVertical, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              O'lchov asboblarini o'rganish va mustahkamlash uchun interaktiv mashqlar. 
              Drag & drop yordamida asboblarni tegishli kattaliklarga moslang.
            </p>
          </div>
        </div>
      </header>

      {/* Shartlar Cards */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-center mb-12">
            <span className="gradient-text">Shartlarni</span> tanlang
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* 1-shart Card */}
            <Link to="/1-shart" className="group">
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border border-transparent hover:border-primary/30">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <GripVertical className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-3">1-shart</h3>
                <p className="text-lg text-primary font-medium mb-4">Moslashtirish sharti</p>
                <p className="text-muted-foreground">
                  O'lchov asboblarini tegishli fizik kattaliklarga drag & drop yordamida moslang. 
                  10 ta tasodifiy kattalik va 20 ta asbob.
                </p>
                <Button className="mt-6 w-full bg-primary hover:bg-primary/90">
                  Boshlash
                </Button>
              </div>
            </Link>

            {/* 2-shart Card */}
            <Link to="/2-shart" className="group">
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20 border border-transparent hover:border-accent/30">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-3">2-shart</h3>
                <p className="text-lg text-accent font-medium mb-4">Savollar sharti</p>
                <p className="text-muted-foreground">
                  Fizikadan 15 ta tasodifiy savollarga javob bering. 
                  60 ta savol bankidan tanlanadi.
                </p>
                <Button className="mt-6 w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Boshlash
                </Button>
              </div>
            </Link>
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
