import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MouseEvent from "react";

interface TimerProps {
  startTime?: number;
}

function Timer({ startTime = 60 }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft > 0 ? timeLeft - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <div className="flex flex-col items-center">
      <p>{timeLeft}</p>
    </div>
  );
}

export default Timer;
