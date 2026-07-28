import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Photos from "./pages/Photos";

import Letters from "./pages/Letters";
import Letter1 from "./pages/Letter1";
import Letter2 from "./pages/Letter2";
import Letter3 from "./pages/Letter3";
import Letter4 from "./pages/Letter4";

import Explore from "./pages/Explore";

import Playlist from "./pages/Playlist";
import Motivos from "./pages/Motivos";
import GaleriaEspecial from "./pages/GaleriaEspecial";
import MensagemSecreta from "./pages/MensagemSecreta";

import Final from "./pages/Final";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Fotos */}
        <Route path="/fotos" element={<Photos />} />

        {/* Cartinhas */}
        <Route path="/cartinhas" element={<Letters />} />
        <Route path="/carta1" element={<Letter1 />} />
        <Route path="/carta2" element={<Letter2 />} />
        <Route path="/carta3" element={<Letter3 />} />
        <Route path="/carta4" element={<Letter4 />} />

        {/* Explorar */}
        <Route path="/explorar" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/motivos" element={<Motivos />} />
        <Route path="/galeria-especial" element={<GaleriaEspecial />} />
        <Route path="/mensagem-secreta" element={<MensagemSecreta />} />

        {/* Final */}
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;