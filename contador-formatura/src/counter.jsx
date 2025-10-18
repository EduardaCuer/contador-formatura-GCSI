import React, { useState, useEffect } from "react";
import "./counter.css";
import HatIcon from "./assets/hat.png.png";

export default function Counter() {
  const graduationDate = new Date("2025-12-15T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = graduationDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft(null);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hats = Array.from({ length: 15 });

  if (timeLeft === null) {
    return (
      <div className="app">
        <img src={HatIcon} alt="Chapéu grande" className="big-hat" />
        <h1>🎓 Chegou o grande dia, formanda Maria Eduarda! 🎉</h1>
        <p>Parabéns pela conquista! 💙</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Chapéus animados flutuando */}
      <div className="hats">
        {hats.map((_, i) => (
          <img
            key={i}
            src={HatIcon}
            className="hat"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            alt="Chapéu de formatura"
          />
        ))}
      </div>

      {/* Chapéu grande no topo */}
      <img src={HatIcon} alt="Chapéu grande" className="big-hat" />

      <header>
        <h1>🎓 Maria Eduarda Cuer da Silva – Informática 6A 🎉</h1>
        <p className="subtitle">Contagem regressiva para a nossa formatura!</p>
      </header>

      <div className="timer">
        <div className="time-box">
          <span>{timeLeft.days}</span>
          <p>Dias</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <p>Horas</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <p>Minutos</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <p>Segundos</p>
        </div>
      </div>

      <section className="after">
        <h2>✨ Depois da formatura...</h2>
        <p>Depois da formatura, não quero apenas um diploma na parede, quero uma vida que faça sentido, que inspire e transforme.</p>
        <p>Esse é o fim de um ciclo, mas o primeiro passo rumo a tudo que ainda preciso conquistar e a quem eu ainda preciso me tornar!</p>
      </section>

      <section className="gallery">
        <h2>📸 Momentos Inesquecíveis</h2>
        <div className="photos">
          <img src="/fotos/foto1.png.jpeg" alt="Foto 1" />
          <img src="/fotos/foto2.png.jpeg" alt="Foto 2" />
          <img src="/fotos/foto3.png.jpeg" alt="Foto 3" />
          <img src="/fotos/foto4.png.jpeg" alt="Foto 4" />
          <img src="/fotos/foto5.png.jpeg" alt="Foto 5" />
        </div>
      </section>

      <footer>
        <p>© 2025 – Feito com 💙 por Maria Eduarda Cuer da Silva</p>
      </footer>
    </div>
  );
}
