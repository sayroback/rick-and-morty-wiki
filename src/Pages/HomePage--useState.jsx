import React from 'react'
import {
  CardCharacter,
  PaginationCharacters,
  Loading,
  ToTop,
  HeroHomePage
} from '../Components'
import { useCharacters } from '../Services/useCharacters'
import { Box } from 'reflexbox'
import { Cards } from '../Styles/components-styled'

export const HomePage = () => {
  const { state, setState } = useCharacters()
  const characters = state.characters
  const { loading } = state

  const nextPage = (value) => {
    setState({ ...state, loading: true, index: value })
  }

  return (
    <div>
      <HeroHomePage/>
      <div>
        <h1>Characters</h1>
        <Box
          sx={Cards}
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
    </div>
  )
}
