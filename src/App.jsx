import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Suspense } from "react";
import Header from "./components/Header.jsx";
import Loading from "./components/Loading.jsx";
import { Timer, Accordion, StarRating } from "./lazyImports.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="pt-0 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/timer"
              element={
                <Suspense fallback={<Loading />}>
                  <Timer />
                </Suspense>
              }
            />
            <Route
              path="/accordion"
              element={
                <Suspense fallback={<Loading />}>
                  <Accordion />
                </Suspense>
              }
            />
            <Route
              path="/star-rating"
              element={
                <Suspense fallback={<Loading />}>
                  <StarRating />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
