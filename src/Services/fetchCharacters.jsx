import { useQuery, gql } from '@apollo/client'
import { useSelector } from 'react-redux'

// (page: ${index}, filter: {species: "${searchSpecies}", name:"${searchName}"} index, searchSpecies, searchName)
/*
page: 1,
filter: '',
findName: ''
*/
export const CHARACTERS = gql`
query Characters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
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
export const SPECIES = gql`
query Characters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
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

export const fetchData = () => {
  const page = useSelector(state => state.page)
  const filters = useSelector(state => state.filters)

  const data = useQuery(CHARACTERS, { variables: { page, filter: filters } })
  const error = data.error || null
  console.log(page, error)
  return data
}
