import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { lazy, Suspense } from "react";
import Header from "./components/Header.jsx";
import Loading from "./components/Loading.jsx";

const Timer = lazy(() => import("./pages/timer.jsx"));
const Accordion = lazy(() => import("./pages/Accordion.jsx"));
const StarRating = lazy(() => import("./pages/StarRating.jsx"));
const GuessTheNumber = lazy(() => import("./pages/GuessTheNumber.jsx"));

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
            <Route
              path="/guess-the-number"
              element={
                <Suspense fallback={<Loading />}>
                  <GuessTheNumber />
                </Suspense>
              }
            ></Route>
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
