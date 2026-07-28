import { useNavigate } from "react-router-dom";

export default function MensagemSecreta() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#4B5D3A",
        color: "#F5F1E8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          background: "rgba(245, 241, 232, 0.1)",
          padding: "40px",
          borderRadius: "20px",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1>💚 Mensagem Especial 💚</h1>

        <p style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
          Meu amor,
        </p>

        <p style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
          você ta chegando no fim, isso significa que viu todas as fotos,
          abriu a(s) carta(s) e explorou cada pedacinho deste presentinho.
        </p>

        <p style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
          Mas a verdade é que nada conseguiria mostrar o quanto
          eu te amo... e eu desconheço as palavras que possam demonstrar.
        </p>

        <p style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
          Isso foi pra tentar demonstrar o tanto que eu te amo. Tudo foi 
          feito com muito esforço, carinho e muito estresse com código kkkkk. Mas sinceramente... 
          valeu a pena cada momento, pois eu tenho certeza que arranquei um sorriso seu.
        </p>

        <p style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
          Ainda tem uma última mensagem... 
        </p>

        <button
          onClick={() => navigate("/final")}
          style={{
            marginTop: "30px",
            padding: "14px 28px",
            border: "none",
            borderRadius: "14px",
            cursor: "pointer",
            background: "#F5F1E8",
            color: "#4B5D3A",
            fontWeight: "bold",
          }}
        >
          ✨ Abrir Última Mensagem ✨
        </button>
      </div>
    </div>
  );
}