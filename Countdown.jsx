import { useState, useEffect } from "react";

export default function Countdown() {
  const endDate = new Date("2026-12-31T23:59:59Z").getTime();
  const [timeLeft, setTimeLeft] = useState(endDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(endDate - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="text-xl mt-4">
      <p>ICO se termine dans :</p>
      <p>{days}j {hours}h {minutes}m {seconds}s</p>
    </div>
  );
}
