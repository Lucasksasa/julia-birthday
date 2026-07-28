import { useNavigate } from "react-router-dom";

export default function Letter1() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#4B5D3A",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#F5F1E8",
          color: "#333",
          maxWidth: "800px",
          padding: "50px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          lineHeight: "1.8",
        }}
      >
        <h1>Feliz Aniversário, minha princesa💌</h1>


        <p>
          Oi meu amooor, vintoouuu!!!!
          Queria agradecer por ser minha namorada, por sempre estar
          ao meu lado e por sempre ser essa garota incrível, que ama, cuida e me aconselha.
        </p>

        <p>
          Parabéns amor, pelas suas vitórias, por chegar até aqui, com muita garra, força
          de vontade, fé e esforço. Agora você adentra a fase dos 20, um novo ciclo repleto 
          de experiências novas, conquistas, amizades e trabalhos. Quero te parabenizar por 
          nunca desistir, por sempre estar andando pra frente e nunca se esquecendo de quem você é!
        </p>

        <p>
          Agradeço a Deus pela sua vida e agradeço por me escolher independente das circunstâncias 
          ou fases, você é uma mulher incrível, digna e sábia. Desejo a você todas as bençãos
          que Deus pode oferecer 
        </p>

        <p>
          Feliz aniversário, minha jujuba. 💚
        </p>

        <button
          onClick={() => navigate("/cartinhas")}
          style={{
            marginTop: "20px",
          }}
        >
          ← Voltar
        </button>
      </div>
    </div>
  );
}