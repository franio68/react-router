import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Usuario from "./pages/Usuario";
import Desconocido from "./pages/Desconocido";
import Terminos from "./pages/Terminos";

const App = () => {
  const usuario = {
    nombre: "Pepe",
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/usuario" element={<Usuario usuario={usuario} />} />
          {/* <Route path='/usuarios' element={<Usuario />} /> */}
          <Route path="/usuarios" element={<Navigate to="/usuario" />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="*" element={<Desconocido />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
