import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { initAdsTracking } from "./lib/adsTracking";
import { preloadCurrentPage } from "./routes";

initAdsTracking();

preloadCurrentPage(window.location.pathname).then(() => {
  createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
});
