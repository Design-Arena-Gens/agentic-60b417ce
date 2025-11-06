"use client";

import { useEffect, useMemo, useState } from "react";

const emojis = ["😂", "🤣", "😹", "😆", "🙃", "🤪", "✌️"];

function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function useAnimatedEmoji(interval = 1800) {
  const [emoji, setEmoji] = useState(randomEmoji);

  useEffect(() => {
    const id = setInterval(() => {
      setEmoji(randomEmoji());
    }, interval);

    return () => clearInterval(id);
  }, [interval]);

  return emoji;
}

export default function Page() {
  const [count, setCount] = useState(0);
  const animatedEmoji = useAnimatedEmoji();
  const pulseClass = useMemo(
    () => (count % 2 === 0 ? "pulse" : "pulse-alt"),
    [count]
  );

  return (
    <main className="container">
      <section className="card">
        <span className={`emoji ${pulseClass}`} aria-hidden>
          {animatedEmoji}
        </span>
        <h1>Лол</h1>
        <p>
          Мини-площадка для хорошего настроения. Нажми на кнопку — услышишь свою
          внутреннюю реакцию на всё происходящее.
        </p>
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          Кликни {count > 0 ? `(${count})` : ""}
        </button>
        <footer>
          <small>
            Сгенерировано агентом, который не просил подтверждения — просто
            сделал.
          </small>
        </footer>
      </section>
    </main>
  );
}
