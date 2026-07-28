import { useNavigate } from "react-router-dom";

export default function Explore() {
  const navigate = useNavigate();

  const cards = [
  {
    emoji: "🎵",
    title: "Nossa Playlist",
    description: "As músicas que me lembram você",
    route: "/playlist",
  },
  {
    emoji: "⭐",
    title: "30 Motivos",
    description: "30 motivos para eu te amar",
    route: "/motivos",
  },
  {
    emoji: "📸",
    title: "Galeria Especial",
    description: "Mais momentos que guardo comigo",
    route: "/galeria-especial",
  },
  {
    emoji: "💚",
    title: "Mensagem Secreta",
    description: "Abra apenas no final",
    route: "/mensagem-secreta",
  },
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
      <h1>Explore Mais 🌿</h1>

      <p>
        Ainda tem algumas surpresas esperando por você...
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.route)}
            onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-8px)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0px)";
}}
            style={{
              width: "260px",
              background: "#F5F1E8",
              color: "#333",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              transition: "0.3s",
              cursor: "pointer"
            }}
          >
            <h2>{card.emoji}</h2>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          
        }}
      >
        <button onClick={() => navigate("/cartinhas")}>
          ← Voltar
        </button>
      </div>
    </div>
  );
}