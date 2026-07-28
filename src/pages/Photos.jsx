import { useNavigate } from "react-router-dom";

export default function Photos() {
  const navigate = useNavigate();

  const photos = [
    {
      img: "/fotos/foto1.jpg",
      texto: "Uma foto que eu levo no coração💚",
      data: "15 de Janeiro de 2026",
      local: "Festa da sua prima Luísa",
    },
    {
      img: "/fotos/foto2.jpg",
      texto: "Primeira vez que nos vimos depois de muito tempo🥰",
      data: "10 de Dezembro de 2023",
      local: "Parque da cidade",
    },
    {
      img: "/fotos/foto3.jpg",
      texto: "Nossa primeira foto juntos❤️",
      data: "29 de Julho de 2021",
      local: "Seu aniversário de 15 anos",
    },
/*  --------------------pra colocar mais fotos----------------------------
    {
  img: "/fotos/foto4.jpg",
  texto: "Outra memória nossa 💚",
  data: "10 de Setembro de 2025",
  local: "Mais um momento especial",
},

não esqueça de adicionar uma foto no public/fotos

*/
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#4B5D3A",
        color: "#F5F1E8",
        padding: "40px",
      }}
    >
        
      <h1 style={{ textAlign: "center" }}>
        Nossas Memórias 📸
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
        }}
      >
        Alguns dos momentos mais especiais que vivi com você 💚
      </p>


      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          marginTop: "50px",
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "15px",
              width: "280px",
              borderRadius: "8px",
              boxShadow:
                "0 15px 30px rgba(0,0,0,0.35)",
              transform:
                index % 2 === 0
                  ? "rotate(-3deg)"
                  : "rotate(3deg)",
              transition: "0.3s",
              cursor: "pointer",
            }}

            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "scale(1.05) rotate(0deg)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                index % 2 === 0
                  ? "rotate(-3deg)"
                  : "rotate(3deg)";
            }}
          >

            <img
              src={photo.img}
              alt={`Memória ${index + 1}`}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />


            <h3
              style={{
                color: "#333",
                textAlign: "center",
                marginTop: "15px",
                fontSize: "18px",
              }}
            >
              {photo.texto}
            </h3>


            <p
              style={{
                color: "#555",
                textAlign: "center",
                margin: "8px 0",
                fontSize: "14px",
              }}
            >
              📅 {photo.data}
            </p>


            <p
              style={{
                color: "#777",
                textAlign: "center",
                fontSize: "14px",
                fontStyle: "italic",
              }}
            >
              📍 {photo.local}
            </p>

          </div>
        ))}
      </div>


      <div
        style={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 20px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          ← Voltar
        </button>


        <button
          onClick={() => navigate("/cartinhas")}
          style={{
            padding: "12px 20px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Próxima Página →
        </button>

      </div>

    </div>
  );
}