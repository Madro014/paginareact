import React from "react";
import "./CharacterCard.css";

function CharacterCard({ character, darkMode }) {
  return (
    <div className={`character-card ${darkMode ? "dark-mode" : ""}`}>
      <img
        src={darkMode ? character.darkImage : character.image} // Cambia la imagen según el modo
        alt={character.name}
      />
      <h3>{character.name}</h3>
      <p>{character.description}</p>
    </div>
  );
}

export default CharacterCard;