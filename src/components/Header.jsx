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
  const isHome = location.pathname === "/";

  return (
    <div className="sticky top-0 z-10 bg-[var(--bg-color)]">
      <nav
        className={`flex flex-row p-4 transition-shadow ${
          isScrolled ? "shadow-md" : ""
        } font-bold text-2xl`}
      >
        <div
          className={`${isHome ? "flex-1" : "w-64"} flex ${
            isHome ? "justify-center" : "justify-start"
          }`}
        >
          <h1
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          >
            Mini Projects
          </h1>
        </div>
        {!isHome && (
          <>
            <div className="flex-1 flex justify-center">
              <h2 className="text-xl">{currentTitle}</h2>
            </div>
            <div className="w-64"></div>
          </>
        )}
      </nav>
    </div>
  );
}
