import { useQuery, gql } from '@apollo/client'

// (page: ${index}, filter: {species: "${searchSpecies}", name:"${searchName}"} index, searchSpecies, searchName)

export const CHARACTERS = () => {
  return gql`
  query {
    characters {
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

export const fetchData = () => {
  const data = useQuery(CHARACTERS())
  return data
}
