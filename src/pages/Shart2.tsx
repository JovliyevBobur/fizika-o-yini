import { Link } from "react-router-dom";
import { QuestionQuiz } from "@/components/QuestionQuiz";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const Shart2 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Orqaga
            </Button>
          </Link>
          <h1 className="font-display font-bold text-lg">2-shart: Savollar</h1>
          <Link to="/">
            <Button variant="ghost" size="icon">
              <Home className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </nav>

      <QuestionQuiz />

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

export default Shart2;
