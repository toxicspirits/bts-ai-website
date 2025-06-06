
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CareerOpenings from "./pages/Career";
import Products from "./pages/products";
import ManufacturingAnalysisPage from "./pages/Manufacturing";
import Proof from "./pages/proof";
import Migration from "./pages/migration";
import Hana from "./pages/hana";
import Iot from "./pages/iot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/career-openings" element={<CareerOpenings />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/manufacturing-analysis" element={<ManufacturingAnalysisPage />} />
          <Route path="/proof-of-concept" element={<Proof />} />
          <Route path="/legacy-migration" element={<Migration />} />
          <Route path="/hana" element={<Hana />} />
          <Route path="/iot" element={<Iot />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
