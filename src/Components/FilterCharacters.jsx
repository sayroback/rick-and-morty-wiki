import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import species from '../Constants/species.json'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../Actions'

export const FilterCharacters = () => {
  const options = species.species[0]
  const filter = useSelector(state => state.filters.species)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value))
  }

  return (
    <div className='filters'>
      <h3>Filter by species</h3>
      <FormControl variant="filled" sx={{ m: 2, minWidth: 190 }} >
        <InputLabel style={{ color: '#ffffff' }} id="demo-simple-select-filled-label" >Species</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          style={{ color: '#ffffff', backgroundColor: '#1f8811b4' }}
          value={filter}
          onChange={(e) => handleChange(e) }
        >
        {options.map((option, name) =>
          <MenuItem key={name} value={option}>
            <em>{option}</em>
          </MenuItem>
        )
        }
        </Select>
      </FormControl>
    </div>
  )
}
