import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from 'reflexbox'
import { setCharacters } from '../Actions'
import { CardCharacter, HeroHomePage, ToTop } from '../Components'
import { fetchData } from '../Services/fetchCharacters'
import { Cards } from '../Styles/components-styled'

export const HomePage = () => {
  const characters = useSelector(state => state.characters)
  const dispatch = useDispatch()
  const data = fetchData()
  useEffect(() => {
    if (data.data) {
      dispatch(setCharacters(data.data.characters))
    }
  }, [data])

  const nextPage = (value) => {
    // setState({ ...state, loading: true, index: value })
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
        {/* <PaginationCharacters nextPage={nextPage} index={state.index} />
        <Loading openModal={loading} /> */}
        <ToTop nextPage={nextPage} />
      </div>
    </div>
  )
}
