import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import Home from "./pages/Home";
import StudyArea from "./pages/StudyArea";
import HaatProfiles from "./pages/HaatProfiles";
import Stakeholders from "./pages/Stakeholders";
import ProductFlow from "./pages/ProductFlow";
import CircularEconomy from "./pages/CircularEconomy";
import HouseholdEconomy from "./pages/HouseholdEconomy";
import ProblemsGaps from "./pages/ProblemsGaps";
import Recommendations from "./pages/Recommendations";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/study-area" element={<StudyArea />} />
            <Route path="/haat-profiles" element={<HaatProfiles />} />
            <Route path="/stakeholders" element={<Stakeholders />} />
            <Route path="/product-flow" element={<ProductFlow />} />
            <Route path="/circular-economy" element={<CircularEconomy />} />
            <Route path="/household-economy" element={<HouseholdEconomy />} />
            <Route path="/problems-gaps" element={<ProblemsGaps />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
