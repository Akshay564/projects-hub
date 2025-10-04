import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { Suspense } from "react";
import Header from "./components/Header.jsx";
import Loading from "./components/Loading.jsx";
import { Timer } from "./lazyImports.js";
import { Accordion } from "./lazyImports.js";
import { StarRating } from "./lazyImports.js";
import { GuessTheNumber } from "./lazyImports.js";
import { ThemeProvider } from "./context/Theme/ThemeProvider.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
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
      </ThemeProvider>
    </>
  );
}

export default App;
