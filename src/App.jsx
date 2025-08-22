import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { lazy } from "react";
import { Suspense } from "react";

function App() {
  const Timer = lazy(() => import("./pages/timer.jsx"));
  const Accordion = lazy(() => import("./pages/Accordion.jsx"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
    </Suspense>
  );
}

export default App;
