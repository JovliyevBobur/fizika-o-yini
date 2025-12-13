import { ExperimentQuiz } from "@/components/ExperimentQuiz";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Shart4() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
          <div><h1 className="text-xl font-bold">4-shart: Fizik tajribani top</h1><p className="text-sm text-muted-foreground">Maksimal ball: 15</p></div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 max-w-2xl"><ExperimentQuiz /></main>
    </div>
  );
}
