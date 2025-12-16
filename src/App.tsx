import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shart1 from "./pages/Shart1";
import Shart2 from "./pages/Shart2";
import Shart3 from "./pages/Shart3";
import Shart4 from "./pages/Shart4";
import Shart5 from "./pages/Shart5";
import Shart6 from "./pages/Shart6";
import Shart7 from "./pages/Shart7";
import Shart8 from "./pages/Shart8";
import Shart9 from "./pages/Shart9";
import Shart10 from "./pages/Shart10";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/1-shart" element={<Shart1 />} />
          <Route path="/2-shart" element={<Shart2 />} />
          <Route path="/3-shart" element={<Shart3 />} />
          <Route path="/4-shart" element={<Shart4 />} />
          <Route path="/5-shart" element={<Shart5 />} />
          <Route path="/6-shart" element={<Shart6 />} />
          <Route path="/7-shart" element={<Shart7 />} />
          <Route path="/8-shart" element={<Shart8 />} />
          <Route path="/9-shart" element={<Shart9 />} />
          <Route path="/10-shart" element={<Shart10 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
