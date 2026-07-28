import { useNavigate } from "react-router-dom";

export default function GaleriaEspecial() {
  const navigate = useNavigate();

  const BASE = import.meta.env.BASE_URL;

  const fotos = [
    `${BASE}fotos/especial1.jpg`,
    `${BASE}fotos/especial2.jpg`,
    `${BASE}fotos/especial3.jpg`,
    `${BASE}fotos/especial4.jpg`,
    `${BASE}fotos/especial5.jpg`,
    `${BASE}fotos/especial6.jpg`,
    `${BASE}fotos/especial7.jpg`,
    `${BASE}fotos/especial8.jpg`,
    `${BASE}fotos/especial9.jpg`,
    `${BASE}fotos/especial10.jpg`,
    `${BASE}fotos/especial11.jpg`,
    `${BASE}fotos/especial12.jpg`,
    `${BASE}fotos/especial13.jpg`,
    `${BASE}fotos/especial14.jpg`,
  ];

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
      <h1>📸 Galeria Especial</h1>

      <p>Alguns momentos que eu guardo com muito carinho 💚</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {fotos.map((foto, index) => (
          <div
            key={index}
            style={{
              background: "#F5F1E8",
              padding: "15px",
              width: "290px",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              transform:
                index % 2 === 0
                  ? "rotate(-2deg)"
                  : "rotate(2deg)",
            }}
          >
            <img
              src={foto}
              alt={`Foto ${index + 1}`}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />

            <p
              style={{
                color: "#333",
                marginTop: "10px",
              }}
            ></p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "40px" }}>
        <button onClick={() => navigate("/explorar")}>
          ← Voltar
        </button>
      </div>
    </div>
  );
}