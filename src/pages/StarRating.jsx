import { useState, memo, useCallback } from "react";
import ToolTip from "../components/ToolTip";
import styles from "./StarRating.module.css";

const StarButton = memo(function StarButton({
  starValue,
  isActive,
  isHalfStar,
  rating,
  onStarClick,
  onStarHover,
  onStarLeave,
  color,
  allowHalfStar,
}) {
  const handleMouseMove = (e) => {
    if (!allowHalfStar) {
      onStarHover(starValue);
      return;
    }
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const isLeft = e.clientX - left < width / 2;
    onStarHover(starValue - (isLeft ? 0.5 : 0));
  };

  return (
    <button
      key={starValue}
      type="button"
      role="radio"
      aria-checked={rating === starValue || rating === starValue - 0.5}
      aria-label={`${isHalfStar ? starValue - 0.5 : starValue} ${
        starValue === 1 && !isHalfStar ? "star" : "stars"
      }`}
      className="!outline-none !border-0 star-button text-4xl !bg-transparent !p-0 !focus:outline-none relative"
      style={{ color: isActive ? color : isHalfStar ? color : "#d1d5db" }}
      onClick={(e) => {
        if (!allowHalfStar) {
          onStarClick(starValue);
          return;
        }
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const isLeft = e.clientX - left < width / 2;
        onStarClick(starValue - (isLeft ? 0.5 : 0));
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseMove}
      onMouseLeave={onStarLeave}
    >
      {isHalfStar ? (
        <div className="relative w-full h-full overflow-hidden">
          <span className="absolute left-0 w-1/2 overflow-hidden">★</span>
          <span className="text-[#d1d5db]">★</span>
        </div>
      ) : (
        "★"
      )}
    </button>
  );
});

export default function StarRating() {
  const [totalStars, setTotalStars] = useState(5);
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [color, setColor] = useState("#fab005");
  const [allowHalfStar, setAllowHalfStar] = useState(true);

  const handleStarClick = useCallback((value) => {
    setRating(value);
  }, []);

  const handleStarHover = useCallback((value) => {
    setHovered(value);
  }, []);

  const handleStarLeave = useCallback(() => {
    setHovered(0);
  }, []);

  const handleTotalStarsChange = useCallback(
    (e) => {
      const value = Number(e.target.value);
      setTotalStars(value);
      if (rating > value) {
        setRating(value);
      }
    },
    [rating]
  );

  const handleColorChange = useCallback((e) => {
    setColor(e.target.value);
  }, []);

  return (
    <div className="flex gap-20 items-center justify-center mx-auto my-10 flex-wrap">
      <div
        role="radiogroup"
        aria-label="Star rating"
        className="flex gap-0  justify-center font-star"
      >
        {[...Array(totalStars)].map((_, index) => {
          const starValue = index + 1;
          const isActive =
            hovered >= starValue || (!hovered && rating >= starValue);
          const isHalfStar =
            (hovered && hovered === starValue - 0.5) ||
            (!hovered && rating === starValue - 0.5);

          return (
            <StarButton
              key={starValue}
              starValue={starValue}
              isActive={isActive}
              isHalfStar={isHalfStar}
              rating={rating}
              onStarClick={handleStarClick}
              onStarHover={handleStarHover}
              onStarLeave={handleStarLeave}
              color={color}
              allowHalfStar={allowHalfStar}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col  flex-1 min-w-56 max-w-1/6 justify-start">
          <div className="font-primary">Count</div>
          <div className="relative w-full">
            <ToolTip
              text={totalStars.toString()}
              alwaysShow={false}
              style={{
                left: `calc(${((totalStars - 1) / 4) * 100}% - ${
                  (totalStars - 1) * 5
                }px)`,
                transition: "left 0.1s",
              }}
            >
              <input
                type="range"
                min={1}
                max={5}
                value={totalStars}
                onChange={handleTotalStarsChange}
                className={`w-full ${styles.starRange}`}
                style={{
                  "--slider-color": `linear-gradient(${color}, ${color})`,
                  "--range-progress": `${((totalStars - 1) / 4) * 100}%`,
                  "--thumb-color": color,
                }}
              />
            </ToolTip>
          </div>
        </div>
        <div className="flex flex-col gap-5 flex-1 min-w-56 max-w-1/6 justify-start">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={allowHalfStar}
              className={styles.checkbox}
              style={{
                accentColor: color,
                backgroundColor: color,
                borderColor: color,
              }}
              onChange={(e) => {
                setAllowHalfStar(e.target.checked);
                if (!e.target.checked) {
                  // Round to nearest whole number when disabling half stars
                  setRating(Math.round(rating));
                  setHovered(Math.round(hovered));
                }
              }}
            />
            Allow Half Stars
          </label>
          <div className="flex flex-row gap-2 align-center">
            <div className="font-primary">Color</div>
            <input type="color" onChange={handleColorChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
