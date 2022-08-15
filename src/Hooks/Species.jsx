import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

export const Species = () => {
  const [state, setState] = useState({
    allSpecies: [],
    page: 0,
  });
  // query para llamar solo a las especies de la pagina actual
  const AllSpecies = gql`
    query Species {
      characters(page: ${state.page}) {
        results {
          species
        }
      }
    }
  `;
  const { data } = useQuery(AllSpecies);

  const getSpecies = () => {
    //Filtra las especies y los guarda en un array en el estado
    const filterSpecies = (r) => {
      let x = [];
      r.map((a) => {
        return x.push(a.species);
      });
      let y = x.concat(state.allSpecies);
      let z = [...new Set(y)];
      setState({ ...state, allSpecies: z });
    };
    console.log(state.allSpecies);
    filterSpecies(data.characters.results);
  };

  useEffect(() => {
    if (data) {
      getSpecies();
    }
  }, [data]);

  setTimeout(() => {
    //Cambia la pagina cada 4 segundos
    setState({ ...state, page: state.page + 1 });
    console.log(state.page);
  }, 4000);

  return (
    <div className="App">
      Este componente analiza todas las paginas de los personajes y filtra las
      especies, para poder obtenerlas todas ya que ese dato no lo da la
      documentación. El resultado se pinta en la terminal. Encontro: "Alien",
      "Human", "Mythological Creature", "Robot", "Humanoid", "Animal",
      "Cronenberg", "unknown", "Disease", "Poopybutthole",
      {/* Estas son todas las que encontró [
        "Alien",
        "Human",
        "Mythological Creature",
        "Robot",
        "Humanoid",
        "Animal",
        "Cronenberg",
        "unknown",
        "Disease",
        "Poopybutthole",
   ]; */}
    </div>
  );
};
