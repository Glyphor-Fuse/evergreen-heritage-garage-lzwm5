
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { RestorationJourney } from "@/components/RestorationJourney";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
          <Navigation />
          <Hero />
          <RestorationJourney />
          <Team />
          <TestimonialsSection />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
