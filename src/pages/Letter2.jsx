import { useNavigate } from "react-router-dom";

export default function Letter2() {
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
        <h1>Meu nenem ta feliiizzz :D</h1>

        <p>
          Se você abriu essa cartinha significa que você está felizzz. Sendo assim, eu também estou feliz :)
        </p>

        <p>
          Agradeça a Deus, amor, todos os dias de sua vida. Dê graças ao lar que possui, aos pais que te 
          amam, ao fôlego de vida que é lhe dado todas as manhãs. Deus sempre está contigo, Ele lhe
          proporcionará ainda mais felicidade, te honrará com vida, com abundância e todas as boas 
          coisas que você merece. 
        </p>

        <p>
          Eu amo seu sorriso, seus dentes lindos transmitindo felicidade aquecem meu coração. Me conforta o
         doce som da sua risada e a forma como seu rosto irradia coisas boas, sempre mantenha esse sorriso. Que ninguém, NINGUÉM, possa apagar
          essa luz que você transmite. Você merece ser feliz, nunca se esqueça disso e nunca deixe alguém 
          dizer o contrário!
        </p>

        <br />

        <h3>Versículos:</h3>
        <p>
          Salmos 118:24: "Este é o dia que o Senhor fez; regozijemo-nos e alegremo-nos."
        </p>
        <br />
        <p>
          Filipenses 4:4: "Alegrai-vos sempre no Senhor; outra vez digo: alegrai-vos."        
        </p>
        <br />
        <p>
          Eclesiastes 9:7: "Vai, pois, come com alegria o teu pão e bebe o teu vinho com coração alegre, pois Deus já se agrada das tuas obras."
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