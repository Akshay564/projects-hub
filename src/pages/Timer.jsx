import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-4xl font-bold mb-4">{formatTime(time)}</div>
      <div>
        <button
          disabled={isRunning}
          onClick={handleTimer}
          className="m-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start
        </button>
        <button
          disabled={!isRunning}
          onClick={handleTimer}
          className="m-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Stop
        </button>
        <button onClick={resetTimer} className="m-2">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
