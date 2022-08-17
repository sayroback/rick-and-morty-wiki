import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from 'reflexbox'
import { setCharacters, setLoading } from '../Actions'
import { CardCharacter, HeroHomePage, PaginationCharacters, ToTop } from '../Components'
import { fetchData } from '../Services/fetchCharacters'
import { Cards } from '../Styles/components-styled'

export const HomePage = () => {
  const characters = useSelector(state => state.characters)
  const dispatch = useDispatch()
  const data = fetchData()
  useEffect(() => {
    if (data.data) {
      dispatch(setCharacters(data.data.characters))
      dispatch(setLoading(false))
    } else {
      dispatch(setLoading(true))
    }
  }, [data])

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
        <PaginationCharacters />
        <ToTop />
      </div>
    </div>
  )
}
