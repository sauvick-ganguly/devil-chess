import { useMemo } from "react";
import "./EmberBackground.css";

export default function EmberBackground() {

  const embers = useMemo(() => {
    return Array.from({ length: 26 }, () => ({
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 6 + Math.random() * 7,
      delay: Math.random() * 10,
      drift: Math.random() * 80 - 40,
    }));
  }, []);

  return (
    <div className="embers">
      {embers.map((e, i) => (
        <div
          key={i}
          className="ember-particle"
          style={{
            left: `${e.left}%`,
            width: `${e.size}px`,
            height: `${e.size}px`,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            "--drift": `${e.drift}px`,
          }}
        />
      ))}
    </div>
  );
}