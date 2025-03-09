import React from "react";
import "./Loader.css";
import esferas from "../assets/esferas.webp"; // Importa las esferas normales
import esferasOscuras from "../assets/esferas_oscuras.webp"; // Importa las esferas oscuras

function Loader({ darkMode }) {
  return (
    <div className="loader-container">
      <img
        src={darkMode ? esferasOscuras : esferas} // Cambia las esferas según el modo
        alt="Esferas del Dragón"
        className="loader-image"
      />
    </div>
  );
}

export default Loader;