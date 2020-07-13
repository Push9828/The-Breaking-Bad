import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../UI/Spinner";

const CharactersGrid = ({ item, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {item.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharactersGrid;
