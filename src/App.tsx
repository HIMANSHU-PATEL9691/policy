import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import CarInsurancePage from "./pages/CarInsurancePage";
import BikeInsurancePage from "./pages/BikeInsurancePage";
import ComparePage from "./pages/ComparePage";
import ClaimsPage from "./pages/ClaimsPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop /> {/* ✅ Added here */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/car-insurance" element={<CarInsurancePage />} />
            <Route path="/bike-insurance" element={<BikeInsurancePage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/claims" element={<ClaimsPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
