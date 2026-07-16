import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import OmanInvestmentGuide from "./pages/OmanInvestmentGuide";
import AlMoujGuide from "./pages/AlMoujGuide";
import SultanHaithamCityGuide from "./pages/SultanHaithamCityGuide";
import OmanPropertyPrices2026 from "./pages/OmanPropertyPrices2026";
import CanForeignersBuyPropertyInOman from "./pages/CanForeignersBuyPropertyInOman";
import OmanResidencyByProperty from "./pages/OmanResidencyByProperty";
import PropertyDetail from "./pages/PropertyDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import AdminProperties from "./pages/AdminProperties";
import AdminTourRequests from "./pages/AdminTourRequests";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/oman-investment-guide" element={<OmanInvestmentGuide />} />
            <Route path="/al-mouj-guide" element={<AlMoujGuide />} />
            <Route path="/sultan-haitham-city-guide" element={<SultanHaithamCityGuide />} />
            <Route path="/oman-property-prices-2026" element={<OmanPropertyPrices2026 />} />
            <Route path="/can-foreigners-buy-property-in-oman" element={<CanForeignersBuyPropertyInOman />} />
            <Route path="/oman-residency-by-property" element={<OmanResidencyByProperty />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/properties"
              element={
                <ProtectedRoute>
                  <AdminProperties />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/tour-requests"
              element={
                <ProtectedRoute>
                  <AdminTourRequests />
                </ProtectedRoute>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
