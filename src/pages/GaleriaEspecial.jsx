import { useNavigate } from "react-router-dom";

export default function GaleriaEspecial() {
  const navigate = useNavigate();

  const fotos = [
    "/fotos/especial1.jpg",
    "/fotos/especial2.jpg",
    "/fotos/especial3.jpg",
    "/fotos/especial4.jpg",
    "/fotos/especial5.jpg",
    "/fotos/especial6.jpg",
    "/fotos/especial7.jpg",
    "/fotos/especial8.jpg",
    "/fotos/especial9.jpg",
    "/fotos/especial10.jpg",
    "/fotos/especial11.jpg",
    "/fotos/especial12.jpg",
    "/fotos/especial13.jpg",
    "/fotos/especial14.jpg",




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

      <p>
        Alguns momentos que eu guardo com muito carinho 💚
      </p>

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
            >
            </p>
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