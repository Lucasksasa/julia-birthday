import { useNavigate } from "react-router-dom";

export default function Letter3() {
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
        <h1>Meu neném ta triste :´(</h1>

        <p>
          Infelizmente chegou o dia de abrir essa carta...
        </p>

        <p>
          Olha amor... as coisas realmente não são fáceis, as pessoas, o mundo exige muito de nós...
          mas presta atenção. Nunca duvide de si mesma, você é capaz de superar  qualquer obstáculo e
          qualquer adversidade. Não deixe os momentos ruins te definirem, você é maior que tudo isso!!
        </p>  
        <br />
        <p>
          Listei alguns tópicos abaixo pra você ler, os quais sei que as vezes te deixam muito mal. E abaixo de cada tópico, um versículo relacionado. 
        </p>

          <h3>Trabalho:</h3>
          <p>
          Se o problema é o trabalho, lembre- se de Deus, que Ele te colocou lá e nunca te deixará só.
          Seja forte, esforça- te, ore e peça orientação a Deus e ele lhe responderá!
          </p>
          <h5>versiculos:</h5>
          <p>
            Josué 1:9 – "Seja forte e corajoso! Não desanime, pois o Senhor, seu Deus, estará com você por onde você andar.
          </p>

          <p>
            "Salmo 90:17 – "Que o Senhor, nosso Deus, derrame sobre nós as suas bênçãos e dê sucesso às nossas ações."
          </p>

          <h3>Família:</h3>
          <p>
          Se o problema for sua família, fique calma, família é complicada, mas é nosso bem mais precioso.
          não deixe o orgulho ou a ira falar mais alto que o amor que há em seu coração. Lembre- se que sua 
          família te ama e nunca a abandonará.
          </p>

          <h5>versiculos:</h5>
          <p>
            Efésios 6:2-3 – "Honra a teu pai e a tua mãe (que é o primeiro mandamento com promessa), para que te vá bem, e vivas muito tempo sobre a terra."          </p>

          <p>
            Provérbios 1:8 – "Filho meu, ouve o ensino de teu pai e não deixes a instrução de tua mãe."
          </p>

          <h3>Corpo:</h3>
          <p>
            Se você está triste com seu corpo, não se esqueça, a internet mente! Não se compare com corpos da internet.
            As mulheres usam vários preenchimentos, várias plásticas e seguem dietas super rígidas para terem o corpo que pssuem!!
            Se contente com seu corpo e melhore a medida do possível e lembre- se de que é um processo, não uma competição. Você é linda, Julia.  
          </p>

          <h5>versiculos:</h5>
          <p>
            Salmo 139:14 – "Eu te louvo porque me fizeste de modo especial e admirável. Tuas obras são maravilhosas!"      
         </p>

          <p>
            1 Samuel 16:7 – "O Senhor não vê como o homem vê. O homem vê a aparência, mas o Senhor vê o coração."
          </p>

          <h3>Rosto</h3>

          <p>
            Se o seu rosto não está de agradando, lembre- se daquela música: "A cor de sua pele... os seus cabelos desenhou... cada detalhe, um toque de amor"
            Vocé é linda demais meu amor, perfeita aos olhos do Pai. Lembre- se, alguém igual a você, não e jamais.
            Sua beleza é exuberante, sua presença é notória, seus olhos atraem olhares, seu rosto é como o de uma leoa, que transmite poder, força e confiança.
            Nunca duvide do nível de sua beleza. Muitas mulheres hoje fazem a mesma coisa e ficam iguais as outras. Mas você nasceu bela, nasceu com esse rosto
            de mulherão. Valorize esse rosto!!
          </p>

          <h5>versiculos:</h5>
          <p>
            Cânticos 4:7 – "Você é toda linda, minha querida; em você não há defeito nenhum."
          </p>

          <p>
            Provérbios 31:25 – "Reveste-se de força e dignidade; sorri diante do futuro."
          </p>

          <h3>Lucas: </h3>
          <p>
          Se eu for o motivo da sua tristeza, lembre- se que eu te amo mais muito, porém infelizmente estou
          fadado ao erro... mas prometo que continuarei tentando melhorar a cada vacilo ou tropeço!
          Prometo te amar independente da dor que nos causemos, pois o bem que você me faz é maior que qualquer mal.
          Eu vou lutar por você com unhas e dentes, vou me desculpar, vou mudar, vou fazer o possível e o impossível 
          pra sempre estar ao seu lado.As vezes esse tal de Lucas é um bobão e meio bruto, nem sempre ele vai entender
          você ou entender o Que você precisa... Ele cometerá erros, mas será tentando acertar, tentando te conhecer, tentando te entender...
          Não guarde rancor de mim, não guarde armagura em seu coração. Eu nunca vou querer seu mal.
          Se porventura eu tenha te amaldiçoado por algum motivo, ou te xingado, eu repreendo em nome de Jesus! que nenhuma palavra de maldição
          chegue a sua tenda, nem ao seu coração. Eu te amo, Julia, saiba que você sempre está em minhas orações
        </p>

        <h5>versiculos:</h5>
          <p>
            1 Coríntios 13:4,7 – "O amor é paciente, o amor é bondoso. Tudo sofre, tudo crê, tudo espera, tudo suporta."
          </p>

          <p>
            1 Pedro 4:8 – "Sobretudo, amem-se sinceramente uns aos outros, porque o amor cobre uma multidão de pecados."
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