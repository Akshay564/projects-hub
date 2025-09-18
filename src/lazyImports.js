import { lazyWithPreload } from "react-lazy-with-preload";

export const Timer = lazyWithPreload(() => import("./pages/Timer.jsx"));
export const Accordion = lazyWithPreload(() => import("./pages/Accordion.jsx"));
export const StarRating = lazyWithPreload(() =>
  import("./pages/StarRating.jsx")
);
export const GuessTheNumber = lazyWithPreload(() =>
  import("./pages/GuessTheNumber.jsx")
);
