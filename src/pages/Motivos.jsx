import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Motivos() {
  const navigate = useNavigate();

  const [revelados, setRevelados] = useState([]);
  const [motivoPerigoso, setMotivoPerigoso] = useState(null);

  const motivos = [
    "Seu sorriso, que me deixa encantado",
    "Sua risada, que me faz querer rir também",
    "Seu abraço, faz parecer até que to abraçando uma nuvem de tão confortável",
    "Seu jeito de cuidar de mim",
    "Sua companhia, que me conforta nos dias difíceis",
    "Sua paciência (mesmo que em desenvolvimento kkkkk)",
    "Seu carinho, que me faz sentir amado",
    "Seu olhar, que penetra os meus olhos e me encanta e me apavora ao mesmo tempo",
    "Sua inteligência, que sempre me surpreende",
    "Seu coração, que é puro, que perdoa, que ama de verdade",
    "Como você me faz sentir em casa, mesmo longe da minha",
    "Seu senso de humor, que é bem contrário ao meu, mas eu gosto",
    "Sua coragem, que não deixa o medo te abalar",
    "A forma com que você se porta diante das situações de nervosismo",
    "Seu beijo, que me leva às alturas, me dando a sensação de ser o homem mais sortudo do mundo",
    "Seu corpo, que me deixa doidinho de tesão rsrs",
    "O jeito que você me chama quando quer alguma coisa",
    "A forma como você me conforta quando estou triste",
    "O seu olhar de brava depois que eu te pentelho kkkkk",
    "Seu olhar quando está com vontade de fazer coisas safadonhas",
    "O jeito que você começa a me tocar quando quer transar... sinto na hora",
    "O seu modo de falar -LUCAS- quando eu bato na sua bunda (e tu finge que não gosta)",
    "A forma como você chama minha atenção para o meu bem (mesmo que eu não enxergue isso na hora)",
    "Seu rosto lindo e bem cuidado, que me faz desejar te encher de beijos",
    "Suas gemidas quando eu meto em você... fico louco",
    "Seu biquinho quando tenho que ir embora... parte meu coração, mas é boa a sensação de que você quer que eu fique",
    "O jeito como você cansa de me ouvir falar, mas continua ouvindo só pra não me chatear (eu percebo ta)",
    "A forma como você me respeita na frente dos outros, isso é muito importante pra mim",
    "O modo em que você trata meus pais. Isso me faz te desejar mil vezes mais",
    "A forma como você põe Deus em primeiro lugar. Esse é o maior motivo e o mais importante de todos"

  ];

  const perigosos = [16, 20, 21, 22, 25];

  const revelar = (index) => {
    if (perigosos.includes(index + 1)) {
      setMotivoPerigoso(index);
      return;
    }

    if (!revelados.includes(index)) {
      setRevelados([...revelados, index]);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #3f5230 0%, #4b5d3a 50%, #5e7251 100%)",
        color: "#F5F1E8",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1>⭐ 100 Motivos Para Te Amar</h1>

      <p>
        Você já descobriu {revelados.length} de {motivos.length} motivos 💚
      </p>

      {motivoPerigoso !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#F5F1E8",
              color: "#333",
              padding: "30px",
              borderRadius: "20px",
              maxWidth: "500px",
              textAlign: "center",
            }}
          >
            <h2>🚨 ALERTA DE SEGURANÇA 🚨</h2>

            <p>
              Recomendo fortemente que você não abra este motivo na
              frente de familiares ou amigos que possam julgar você pelos próximos 5 minutos.
            </p>

            <p>
              Assinado:
              <br />
              Departamento de Proteção Contra Vergonha Alheia
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <button onClick={() => setMotivoPerigoso(null)}>
                Ok, melhor voltar 😳
              </button>

              <button
                onClick={() => {
                  setRevelados([...revelados, motivoPerigoso]);
                  setMotivoPerigoso(null);
                }}
              >
                Abrir por minha conta e risco 😎
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {motivos.map((motivo, index) => (
          <div
            key={index}
            onClick={() => revelar(index)}
            style={{
              background: "#F5F1E8",
              color: "#333",
              padding: "20px",
              borderRadius: "15px",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-5px) scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px) scale(1)";
            }}
          >
            <h3>⭐ Motivo #{index + 1}</h3>

            {revelados.includes(index) ? (
              <p>{motivo}</p>
            ) : (
              <p>Clique para descobrir ✨</p>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/explorar")}
        style={{
          padding: "12px 24px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Voltar
      </button>
    </div>
  );
}