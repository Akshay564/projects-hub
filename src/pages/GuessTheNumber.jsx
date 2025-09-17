import { useRef, useState } from "react";

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export default function GuessTheNumber() {
  const [attempts, setAttempts] = useState(10);
  const [guesses, setGuesses] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [gameState, setGameState] = useState("playing");
  const [feedbackText, setFeedbackText] = useState(null);
  const result = useRef(generateRandomNumber());

  const resetGame = () => {
    setAttempts(10);
    setGuesses([]);
    setInputValue("");
    setGameState("playing");
    setFeedbackText("");
    result.current = generateRandomNumber();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 1 && Number(value) <= 100)) {
      setInputValue(value);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const guessed = Number(inputValue);

    // Validate input
    if (guessed < 1 || guessed > 100) {
      setFeedbackText("Please enter a number between 1 and 100");
      return;
    }

    // Check for duplicate guess
    if (guesses.includes(guessed)) {
      setFeedbackText("You already tried this number!");
      return;
    }

    // Update guesses and attempts
    setGuesses((prev) => [...prev, guessed]);
    setInputValue("");

    if (guessed === result.current) {
      setGameState("won");
      setFeedbackText(
        <>
          Congratulations!
          <br />
          You found the number in {10 - attempts + 1} attempts!
        </>
      );
      return;
    }

    const remainingAttempts = attempts - 1;
    setAttempts(remainingAttempts);

    if (remainingAttempts <= 0) {
      setGameState("lost");
      setFeedbackText(`Game Over! The number was ${result.current}`);
      return;
    }

    setFeedbackText(
      guessed > result.current
        ? `${guessed} is too high`
        : `${guessed} is too low`
    );
  }

  return (
    <div
      role="main"
      aria-label="Guess The Number Game"
      className="flex flex-col items-center justify-center h-full max-w-[420px] mx-auto py-6 px-2.5 rounded-2xl shadow-md border-[#e9ecef] border-1"
    >
      <p className="py-2 text-center leading-normal" aria-live="polite">
        I have chosen a number between 1 and 100.
        <br /> You have {attempts} {attempts === 1 ? "attempt" : "attempts"} to
        guess it. Can you?
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-xs"
        aria-label="Guess form"
      >
        <div className="flex flex-col my-4">
          <label
            htmlFor="guess-number"
            className="block text-sm font-medium py-1"
          >
            Enter your guess (between 1 and 100)
          </label>
          <input
            autoFocus
            id="guess-number"
            type="number"
            min="1"
            max="100"
            value={inputValue}
            onChange={handleInputChange}
            disabled={gameState !== "playing"}
            required
            aria-label="Number input"
            aria-invalid={
              inputValue !== "" &&
              (Number(inputValue) < 1 || Number(inputValue) > 100)
            }
            aria-disabled={gameState !== "playing"}
            className="border-1 border-[var(--color-primary)] rounded-sm h-8 pl-2 pr-1"
          />
        </div>

        <div className="flex gap-2 justify-center">
          <button
            type="submit"
            disabled={gameState !== "playing"}
            className="my-4 px-4 py-2 disabled:opacity-50"
            aria-disabled={gameState !== "playing"}
            aria-label={
              gameState === "playing" ? "Submit your guess" : "Game is over"
            }
          >
            Guess
          </button>
          {gameState !== "playing" && (
            <button
              type="button"
              onClick={resetGame}
              className="my-4 px-4 py-2"
              aria-label="Start a new game"
            >
              Play Again
            </button>
          )}
        </div>
      </form>

      <div className="mt-4 text-center" role="status" aria-live="polite">
        {feedbackText && (
          <p
            className={`text-lg font-medium ${
              gameState === "won"
                ? "text-green-600"
                : gameState === "lost"
                ? "text-red-600"
                : ""
            }`}
          >
            {feedbackText}
          </p>
        )}
        {guesses.length > 0 && (
          <p
            className="mt-2"
            aria-label={`Previous guesses: ${guesses.join(", ")}`}
          >
            Your guesses: {guesses.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
