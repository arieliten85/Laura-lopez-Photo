import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { Slider } from "./components/slider/Slider";
import { Home } from "./views/Home";

function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sesiones/comunion/" element={<div>Home</div>} />
        <Route
          path="/sesiones/sesion-de-fotos-de-familia/"
          element={<div>Home</div>}
        />
        <Route
          path="/sesiones/sesiones-de-smash-cake/"
          element={<div>Home</div>}
        />
        <Route
          path="/sesiones/sesiones-de-bebe-de-6-meses/"
          element={<div>Home</div>}
        />
        <Route path="/sesiones/recien-nacido" element={<div>Home</div>} />
        <Route path="/sesiones/maternidad/" element={<div>Home</div>} />
      </Routes>
    </>
  );
}

export default App;
