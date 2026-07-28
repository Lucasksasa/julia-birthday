import { useNavigate } from "react-router-dom";

export default function Playlist() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#4B5D3A",
        color: "#F5F1E8",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>🎵 Nossa Playlist</h1>

      <p>Algumas músicas que me fazem lembrar de você...</p>

      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {/* Música 1 */}
        <div
          style={{
            background: "#F5F1E8",
            color: "#333",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>💚 Música que ouço quando estou muito apaixonado</h3>

          <audio controls style={{ width: "100%" }}>
            <source src="/musicas/musica1.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>
        </div>

        {/* Música 2 */}
        <div
          style={{
            background: "#F5F1E8",
            color: "#333",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>🌷 Música que ouço quando to morrendo de saudades</h3>

          <audio controls style={{ width: "100%" }}>
            <source src="/musicas/musica2.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>
        </div>

        {/* Música 3 */}
        <div
          style={{
            background: "#F5F1E8",
            color: "#333",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>✨ Música que me lembra você</h3>

          <audio controls style={{ width: "100%" }}>
            <source src="/musicas/musica3.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio.
          </audio>
        </div>
      </div>

      <button
        onClick={() => navigate("/explorar")}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "10px",
          background: "#F5F1E8",
          color: "#4B5D3A",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        ← Voltar
      </button>
    </div>
  );
}