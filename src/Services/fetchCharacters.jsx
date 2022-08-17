import { useQuery, gql } from '@apollo/client'
import { useSelector } from 'react-redux'

// (page: ${index}, filter: {species: "${searchSpecies}", name:"${searchName}"} index, searchSpecies, searchName)

export const CHARACTERS = (page) => {
  return gql`
  query {
characters(page: ${page}) {
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
  const page = useSelector(state => state.page)
  const data = useQuery(CHARACTERS(page))
  return data
}
