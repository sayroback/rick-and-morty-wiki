import { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import species from '../Constants/species'

export const useCharacters = () => {
  const [state, setState] = useState({
    pages: 0,
    next: 0,
    prev: 0,
    index: 1,
    characters: [],
    allSpecies: species.species,
    searchSpecies: '',
    searchName: '',
    loading: false
  })
  // query para llamar solo a las especies de la pagina actual
  const CHARACTERS = (index, searchSpecies, searchName) => {
    return gql`
    query {
      characters(page: ${index}, filter: {species: "${searchSpecies}", name:"${searchName}"}) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          status
          species
          type
          image
          origin {
            id
            name
            dimension
          }
        }
      }
    }
  `
  }
  const { data } = useQuery(
    CHARACTERS(state.index, state.searchSpecies, state.searchName)
  )

  useEffect(() => {
    setState({
      ...state,
      loading: true
    })
    if (data) {
      const info = data.characters.info
      const characters = data.characters.results
      setState({
        ...state,
        count: info.count,
        next: info.next,
        pages: info.pages,
        prev: info.prev,
        characters,
        loading: false
      })
    }
  }, [data])

  return { state, setState }
}
