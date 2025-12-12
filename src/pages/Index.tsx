import { Header } from "@/components/Header";
import { PhysicsQuiz } from "@/components/PhysicsQuiz";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PhysicsQuiz />
      
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
