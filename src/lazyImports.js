import { lazyWithPreload } from "./lazyWithPreload";

export const Timer = lazyWithPreload(() => import("./pages/timer.jsx"));
export const Accordion = lazyWithPreload(() => import("./pages/Accordion.jsx"));
export const StarRating = lazyWithPreload(() =>
  import("./pages/StarRating.jsx")
);
