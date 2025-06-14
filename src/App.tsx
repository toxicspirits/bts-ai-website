import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load all page components
const Index = lazy(() => import("./pages/Index"));
const CareerOpenings = lazy(() => import("./pages/Career"));
const Products = lazy(() => import("./pages/products"));
const ManufacturingAnalysisPage = lazy(() => import("./pages/Manufacturing"));
const Proof = lazy(() => import("./pages/proof"));
const Migration = lazy(() => import("./pages/migration"));
const Hana = lazy(() => import("./pages/hana"));
const Iot = lazy(() => import("./pages/iot"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Configure React Query with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
