import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "../components/FloatingHearts";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #3f5230 0%, #4b5d3a 50%, #5e7251 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#F5F1E8",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
        <FloatingHearts />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        style={{
          fontSize: "4rem",
          marginBottom: "20px",
        }}
      >
        Feliz Aniversário
        Julia 💚
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          maxWidth: "700px",
          fontSize: "1.3rem",
          marginBottom: "40px",
        }}
      >
        Fiz esse site pra você com amor e carinho. Espero que você goste :)
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        onClick={() => navigate("/fotos")}
        style={{
          padding: "16px 36px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          background: "#AFC4A3",
          color: "#2d3d22",
          fontSize: "1.1rem",
          fontWeight: "bold",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        }}
      >
        Abrir Presente 🎁
      </motion.button>
    </div>
  );
}