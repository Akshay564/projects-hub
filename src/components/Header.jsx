import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const routeTitles = {
  "/": "Mini Projects",
  "/timer": "Timer",
  "/accordion": "Accordion",
  "/star-rating": "Star Rating",
  "/guess-the-number": "Guess The Number",
};

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentTitle = routeTitles[location.pathname] || "Mini Projects";

  return (
    <div className="sticky top-0 z-10 bg-[var(--bg-color)]">
      <nav
        className={`flex flex-row p-4 transition-shadow ${
          isScrolled ? "shadow-md" : ""
        } font-bold text-2xl`}
      >
        <div className="flex-1">
          <h1 className="w-max cursor-pointer" onClick={() => navigate("/")}>
            Mini Projects
          </h1>
        </div>
        <div className="flex flex-2  justify-center items-center">
          {location.pathname !== "/" && (
            <h2 className="text-xl">{currentTitle}</h2>
          )}
        </div>
        <div className="flex-1"></div>
      </nav>
    </div>
  );
}
