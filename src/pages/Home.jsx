import React, { useState, useEffect } from "react";
import characters from "../data/characters.json";
import SearchBar from "../components/SearchBar";
import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";
import "./Home.css";

function Home({ darkMode, isLoading }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [searchTerm]);

  return (
    <div>
      <h1>Personajes de Dragon Ball</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading ? ( // Muestra el loader si isLoading es true
        <Loader darkMode={darkMode} />
      ) : (
        <div className="character-container">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
              <CharacterCard key={character.id} character={character} darkMode={darkMode} />
            ))
          ) : (
            <p>No se encontraron personajes.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;