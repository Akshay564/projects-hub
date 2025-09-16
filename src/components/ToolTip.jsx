import { useState } from "react";

export default function ToolTip({ children, text, style, alwaysShow = false }) {
  const [isVisible, setIsVisible] = useState(false);
  const showTooltip = alwaysShow || isVisible;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {showTooltip && (
        <div
          className="absolute -top-8 bg-black text-white px-2 py-1 rounded-md pointer-events-none w-fit"
          style={style}
        >
          {text}
        </div>
      )}
    </div>
  );
}
