import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { lazy } from "react";
import { Suspense } from "react";
import Header from "./components/Header.jsx";

function App() {
  const Timer = lazy(() => import("./pages/timer.jsx"));
  const Accordion = lazy(() => import("./pages/Accordion.jsx"));
  const StarRating = lazy(() => import("./pages/StarRating.jsx"));

  return (
    <Suspense
      fallback={
        <div className="loading-pane">
          <h2 className="loader">🌀</h2>
        </div>
      }
    >
      <Header />
      <main>
        <div className="pt-0 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/star-rating" element={<StarRating />} />
          </Routes>
        </div>
      </main>
    </Suspense>
  );
}

export default App;
