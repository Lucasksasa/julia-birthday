import { useNavigate } from "react-router-dom";

export default function Letters() {
    const navigate = useNavigate();

    const letters = [
        {
            title: "💌 FELIZ ANIVERSÁRIOOO",
            route: "/carta1",
        },
        {
            title: "🌷 Abra apenas quando estiver Feliz",
            route: "/carta2",
        },
        {
            title: "💚 Abra apenas quando estiver Triste",
            route: "/carta3",
        },
        /* ----------------------para botar mais cartinhas-------------------------
        {
          title: "⭐ Abra apenas quando sentir saudades",
          route: "/carta4",
        },
    
        depois bastar só criar uma nova Letter
    
        */
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

            <h1>Cartinhas Para Você 💌</h1>

            <p>
                Escolha uma cartinha e abra quando sentir que é o momento certo (NÃO VALE ABRIR POR CURIOSIDADE)
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
                {letters.map((letter, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(letter.route)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px)";
                        }}

                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0px)";
                        }}
                        style={{
                            width: "280px",
                            cursor: "pointer",
                            background: "#F5F1E8",
                            color: "#333",
                            padding: "25px",
                            borderRadius: "12px",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                            transition: "0.3s",
                        }}
                    >
                        <h3>{letter.title}</h3>

                        <p>✉️ Clique para abrir</p>
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
                <button onClick={() => navigate("/fotos")}>
                    ← Voltar
                </button>

                <button onClick={() => navigate("/explorar")}>
                    Próxima Página →
                </button>
            </div>
        </div>
    );
}