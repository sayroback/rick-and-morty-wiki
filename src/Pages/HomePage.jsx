import React from "react";
import { CardCharacter } from "../Components";
import { useCharacters } from "../Services/useCharacters";
import { Flex, Box } from "reflexbox";

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
  if (characters[1]) {
    console.log(characters[1]);
  }

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridGap: 4, // theme.space[3]
          marginLeft: "15px",
          marginRight: "15px",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        }}
      >
        {characters
          ? characters.map((item, id) => {
              return <CardCharacter key={id} item={item} />;
            })
          : null}
      </Box>
      <div>
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
      </div>
    </div>
  );
};
