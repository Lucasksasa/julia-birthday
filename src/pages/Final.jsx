import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import FloatingHearts from "../components/FloatingHearts";
import "./Final.css";

export default function Final() {
  const navigate = useNavigate();

  const BASE = import.meta.env.BASE_URL;

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  function formatTime(time) {
    if (!time || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  function toggleMusic() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  }

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const update = () => {
      setCurrent(formatTime(audio.currentTime));

      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const loaded = () => {
      setDuration(formatTime(audio.duration));
    };

    const ended = () => {
      setPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", loaded);
    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", loaded);
      audio.removeEventListener("ended", ended);
    };
  }, []);

  return (
    <div className="final-page">
      <FloatingHearts />

      <h1 className="titulo">
        💚 Última Página 💚
      </h1>

      <div className="polaroid">
        <img
          src={`${BASE}fotos/final.jpg`}
          alt="Nós dois"
          className="foto"
        />

        <div className="player">
          <h3>My Love Mine All Mine</h3>

          <p>Mitski</p>

          <div className="barra">
            <div
              className="barra-preenchida"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="tempo">
            <span>{current}</span>
            <span>{duration}</span>
          </div>

          <button
            className="play"
            onClick={toggleMusic}
          >
            {playing ? "❚❚" : "▶"}
          </button>

          <audio ref={audioRef}>
            <source
              src={`${BASE}musicas/nossa-musica.mp3`}
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>

      <div className="mensagem">
        <p>Julia,</p>

        <p>
          Obrigado por cada momento, conversa, abraço,
          risada e memória que criamos ao longo desses anos.
        </p>

        <p>
          Que venham muitos anos pela frente, e que cada
          ano seja mágico ao seu lado. Obrigado por me amar
          e me escolher.
        </p>

        <p>
          Espero que toda vez que abrir esse site, você
          lembre do quanto é especial para mim. Se você não
          deu play na música ainda, vai lá, feche seus olhos,
          ouça a música até o fim e imagine nós dois por um
          tempo.
        </p>

        <div className="assinatura-container">
          <h3>Eu te amo.</h3>

          <p className="assinatura">
            Com amor,
            <br />
            Lucas 💚
          </p>
        </div>
      </div>

      <button
        className="voltar"
        onClick={() => navigate("/")}
      >
        ↺ Reviver Jornada
      </button>
    </div>
  );
}