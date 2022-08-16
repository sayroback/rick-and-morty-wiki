import React from 'react'
import {
  CardCharacter,
  PaginationCharacters,
  Loading,
  ToTop
} from '../Components'
import { useCharacters } from '../Services/useCharacters'
import { Box } from 'reflexbox'

export const HomePage = () => {
  const { state, setState } = useCharacters()
  const characters = state.characters
  const { loading } = state

  const nextPage = (value) => {
    setState({ ...state, loading: true, index: value })
  }

  return (
    <div>
      <Box
        sx={{
          display: 'grid',
          gridGap: 4, // theme.space[3]
          marginLeft: '15px',
          marginRight: '15px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))'
        }}
      >
        {characters
          ? characters.map((item, id) => {
            return <CardCharacter key={id} item={item} />
          })
          : null}
      </Box>
      <PaginationCharacters nextPage={nextPage} index={state.index} />
      <Loading openModal={loading} />
      <ToTop />
    </div>
  )
}
