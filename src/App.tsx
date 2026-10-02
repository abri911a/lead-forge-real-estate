import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import {
  Index,
  OmanInvestmentGuide,
  AlMoujGuide,
  SultanHaithamCityGuide,
  OmanPropertyPrices2026,
  CanForeignersBuyPropertyInOman,
  OmanResidencyByProperty,
  IsOffPlanPropertySafeInOman,
  CanGccCitizensBuyPropertyInOman,
  PropertyDetail,
  Login,
  Signup,
  Admin,
  AdminProperties,
  AdminTourRequests,
  NotFound,
} from "./routes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/oman-investment-guide" element={<OmanInvestmentGuide />} />
            <Route path="/al-mouj-guide" element={<AlMoujGuide />} />
            <Route path="/sultan-haitham-city-guide" element={<SultanHaithamCityGuide />} />
            <Route path="/oman-property-prices-2026" element={<OmanPropertyPrices2026 />} />
            <Route path="/can-foreigners-buy-property-in-oman" element={<CanForeignersBuyPropertyInOman />} />
            <Route path="/oman-residency-by-property" element={<OmanResidencyByProperty />} />
            <Route path="/is-off-plan-property-safe-in-oman" element={<IsOffPlanPropertySafeInOman />} />
            <Route path="/can-gcc-citizens-buy-property-in-oman" element={<CanGccCitizensBuyPropertyInOman />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/admin"
              element={<Admin />}
            />
            <Route
              path="/admin/properties"
              element={<AdminProperties />}
            />
            <Route
              path="/admin/tour-requests"
              element={<AdminTourRequests />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
  </QueryClientProvider>
);

export default App;
