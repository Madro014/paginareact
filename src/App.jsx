import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import "./App.css";
import dragon from "./assets/dragon.webp"; // Importa la imagen del dragón

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga

  const toggleDarkMode = () => {
    setIsLoading(true); // Activa el loader al cambiar de modo
    setTimeout(() => {
      setDarkMode(!darkMode);
      setIsLoading(false); // Desactiva el loader después de un breve tiempo
    }, 1000); // Simula un tiempo de carga de 1 segundo
  };

  // Aplicar la clase al body cuando cambia el modo
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Simular carga inicial
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Desactiva el loader después de 2 segundos
    }, 2000);
  }, []);

  return (
    <Router>
      <div>
        {/* Botón personalizado para cambiar el modo */}
        <button className="mode-toggle" onClick={toggleDarkMode}>
          <img src={dragon} alt="Dragon Ball" className="dragon-icon" />
          <span className="mode-text">{darkMode ? "Modo Claro" : "Modo Oscuro"}</span>
        </button>
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} isLoading={isLoading} />} // Pasa isLoading como prop
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;