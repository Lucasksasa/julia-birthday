import { useNavigate } from "react-router-dom";

export default function Letter4() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#4B5D3A",
        color: "#F5F1E8",
        padding: "40px",
      }}
    >
      <h1>⭐ Abra quando quiser lembrar o quanto é amada</h1>

      <p>
        Julia, esta é a quarta cartinha.
      </p>

      <button onClick={() => navigate("/cartinhas")}>
        ← Voltar
      </button>
    </div>
  );
}