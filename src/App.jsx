import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { lazy } from "react";
import { Suspense } from "react";

function App() {
  const Timer = lazy(() => import("./pages/timer.jsx"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Suspense>
  );
}

export default App;
