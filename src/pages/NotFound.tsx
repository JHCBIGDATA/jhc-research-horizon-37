import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    const titleBefore = document.title;
    document.title = "404 | JHC 2026";
    const interval = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    const timeout = setTimeout(() => navigate('/'), 10000);
    return () => {
      document.title = titleBefore;
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-white via-muted/40 to-primary/10">
        <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-primary/10 max-w-lg mx-auto">
          <img src="/favicon.ico" alt="JHC" className="h-12 w-12 mx-auto mb-3" />
          <h1 className="text-5xl font-extrabold text-primary mb-2">404</h1>
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            We couldn't find that page. Redirecting to the homepage in {seconds}s.
          </p>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-accent transition-all duration-1000"
              style={{ width: `${(10 - seconds) * 10}%` }}
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-black font-semibold hover:bg-accent/90"
            >
              Go to Home Now
            </a>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center px-4 py-2 rounded-md border border-border text-foreground hover:bg-muted/50"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
