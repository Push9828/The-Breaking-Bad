import React from "react";
import CharacterItem from "./CharacterItem";

const CharactersGrid = ({ item, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {item.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharactersGrid;
