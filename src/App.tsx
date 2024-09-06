import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/navegation/Navegation";
import { Home } from "./views/Home";
import { CommunionSecction } from "./views/sessionsViews/CommunionSecction";
import { FamilySeccion } from "./views/sessionsViews/FamilySeccion";
import { SmashCakeSeccion } from "./views/sessionsViews/SmashCakeSeccion";
import { BabySixMothsSeccion } from "./views/sessionsViews/BabySixMothsSeccion";
import { NewBornSeccion } from "./views/sessionsViews/NewBornSeccion";
import { MaternitySeccion } from "./views/sessionsViews/MaternitySeccion";
import { FooterSection } from "./components/footerSection/FooterSection";
import { Wedding } from "./views/Wedding";
import { Contact } from "./views/Contact";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        {/* Menu principal */}
        <Route path="/" element={<Home />} />
        <Route path="/bodas" element={<Wedding />} />

        <Route path="/contacto" element={<Contact />} />
        {/* Sub-menu */}
        <Route path="/sesiones/comunion/" element={<CommunionSecction />} />
        <Route
          path="/sesiones/sesion-de-fotos-de-familia/"
          element={<FamilySeccion />}
        />
        <Route
          path="/sesiones/sesiones-de-smash-cake/"
          element={<SmashCakeSeccion />}
        />
        <Route
          path="/sesiones/sesiones-de-bebe-de-6-meses/"
          element={<BabySixMothsSeccion />}
        />
        <Route
          path="/sesiones/sesiones-de-bebe-de-6-meses/"
          element={<BabySixMothsSeccion />}
        />

        <Route path="/sesiones/recien-nacido/" element={<NewBornSeccion />} />

        <Route path="/sesiones/maternidad/" element={<MaternitySeccion />} />

        <Route path="/sesiones/recien-nacido" element={<div>Home</div>} />
        <Route path="/sesiones/maternidad/" element={<div>Home</div>} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
