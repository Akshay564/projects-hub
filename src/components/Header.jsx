import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
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

  return (
    <div className="sticky top-0 z-10 bg-[var(--bg-color)]">
      <nav
        className={`p-4 cursor-pointer transition-shadow ${
          isScrolled ? "shadow-md" : ""
        } font-bold text-2xl`}
        onClick={() => navigate("/")}
      >
        <h1>Mini Projects</h1>
      </nav>
    </div>
  );
}
