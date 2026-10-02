// Each page is its own chunk, so a visitor downloads only the page they open.
// main.tsx preloads the chunk for the current URL before the first render, so the
// prerendered HTML is never swapped for an empty Suspense fallback.
import { lazy, type ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType }>;
type Page = ComponentType & { preload: () => Promise<unknown> };

function page(load: Loader): Page {
  let Loaded: ComponentType | null = null;
  const preload = () => load().then((m) => (Loaded = m.default));
  const Lazy = lazy(load);
  return Object.assign(() => (Loaded ? <Loaded /> : <Lazy />), { preload });
}

export const Index = page(() => import("./pages/Index"));
export const OmanInvestmentGuide = page(() => import("./pages/OmanInvestmentGuide"));
export const AlMoujGuide = page(() => import("./pages/AlMoujGuide"));
export const SultanHaithamCityGuide = page(() => import("./pages/SultanHaithamCityGuide"));
export const OmanPropertyPrices2026 = page(() => import("./pages/OmanPropertyPrices2026"));
export const CanForeignersBuyPropertyInOman = page(() => import("./pages/CanForeignersBuyPropertyInOman"));
export const OmanResidencyByProperty = page(() => import("./pages/OmanResidencyByProperty"));
export const IsOffPlanPropertySafeInOman = page(() => import("./pages/IsOffPlanPropertySafeInOman"));
export const CanGccCitizensBuyPropertyInOman = page(() => import("./pages/CanGccCitizensBuyPropertyInOman"));
export const PropertyDetail = page(() => import("./pages/PropertyDetail"));
export const Login = page(() => import("./authPages").then((m) => ({ default: m.Login })));
export const Signup = page(() => import("./authPages").then((m) => ({ default: m.Signup })));
export const Admin = page(() => import("./authPages").then((m) => ({ default: m.Admin })));
export const AdminProperties = page(() => import("./authPages").then((m) => ({ default: m.AdminProperties })));
export const AdminTourRequests = page(() => import("./authPages").then((m) => ({ default: m.AdminTourRequests })));
export const NotFound = page(() => import("./pages/NotFound"));

const byPath: Record<string, Page> = {
  "/": Index,
  "/oman-investment-guide": OmanInvestmentGuide,
  "/al-mouj-guide": AlMoujGuide,
  "/sultan-haitham-city-guide": SultanHaithamCityGuide,
  "/oman-property-prices-2026": OmanPropertyPrices2026,
  "/can-foreigners-buy-property-in-oman": CanForeignersBuyPropertyInOman,
  "/oman-residency-by-property": OmanResidencyByProperty,
  "/is-off-plan-property-safe-in-oman": IsOffPlanPropertySafeInOman,
  "/can-gcc-citizens-buy-property-in-oman": CanGccCitizensBuyPropertyInOman,
  "/login": Login,
  "/signup": Signup,
  "/admin": Admin,
  "/admin/properties": AdminProperties,
  "/admin/tour-requests": AdminTourRequests,
};

export function preloadCurrentPage(pathname: string): Promise<unknown> {
  const path = pathname.replace(/\/+$/, "").replace(/\.html$/, "") || "/";
  const target = byPath[path] ?? (path.startsWith("/property/") ? PropertyDetail : NotFound);
  return target.preload().catch(() => undefined);
}
