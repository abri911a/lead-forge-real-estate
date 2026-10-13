import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="dark flex min-h-screen items-center bg-luxury-dark px-4 text-foreground">
      <div className="mx-auto w-full max-w-md">
        <h1 className="mb-4 text-6xl font-bold text-gold">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <a
          href="/"
          className="inline-flex min-h-11 items-center text-gold underline underline-offset-4 transition-colors hover:text-gold-light"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
