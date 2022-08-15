import React from "react";
import { useCharacters } from "../Services/useCharacters";
export const HomePage = () => {
  const { state, setState } = useCharacters();
  const characters = state.characters;

  const nextPage = () => {
    setState({ ...state, index: state.index + 1 });
  };
  const prevPage = () => {
    if (state.index > 0) {
      setState({ ...state, index: state.index - 1 });
    } else {
      setState({ ...state, index: 1 });
    }
  };

  return (
    <div>
      {characters.map((item, id) => {
        return (
          <div key={id}>
            <p>{item.id}</p>
            <h2>{item.name}</h2>
          </div>
        );
      })}
      <div>
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
      </div>
    </div>
  );
};
