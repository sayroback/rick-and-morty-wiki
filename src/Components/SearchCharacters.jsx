import React, { useState } from 'react'
import { Search } from 'grommet-icons'
import { Box, TextInput } from 'grommet'
import { useDispatch } from 'react-redux'
import { setFindName } from '../Actions'
import { ButtonSearch } from './ButtonSearch'

export const SearchCharacters = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const SearchBox = {
    backgroundColor: '#69F5A932',
    padding: '14px',
    borderRadius: '8px',
    color: '#fff'
  }
  const SearchInput = {
    backgroundColor: '#69F5A932'

  }

  const inputChange = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = () => {
    dispatch(setFindName(name))
  }
  return (
    <Box align="center" justify="center" pad="small" direction="row">
      <Box style={SearchBox} width="xlarge" gap="medium">
        <TextInput onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSubmit()
          }
        }} onChange={(e) => inputChange(e)} style={SearchInput} icon={<Search className='iconSearch' />} placeholder="Search by name" />
      </Box>
      <ButtonSearch handleSubmit={handleSubmit}/>
    </Box>
  )
}
