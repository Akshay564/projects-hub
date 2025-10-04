import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/Theme/useTheme";

const iconButtonStyle = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
};

const dropdownStyle = {
  position: "absolute",
  right: 0,
  marginTop: 8,
  background: `var(--bg-color)`,
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  borderRadius: 4,
  zIndex: 1000,
  minWidth: 120,
  border: `1px solid var(--text-color)`,
};

const menuItemStyle = {
  padding: "8px 12px",
  cursor: "pointer",
  whiteSpace: "nowrap",
};

export default function ThemeMenu() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleSelect = (value) => {
    setTheme(value);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <div onClick={toggleMenu} aria-label="Theme menu" style={iconButtonStyle}>
        🌓
      </div>
      {open && (
        <div style={dropdownStyle}>
          {["light", "dark", "system"].map((t) => (
            <div
              key={t}
              onClick={() => handleSelect(t)}
              className="text-xl"
              style={{
                ...menuItemStyle,
                fontWeight: t === theme ? "bold" : "normal",
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
