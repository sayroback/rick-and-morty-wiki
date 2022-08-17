import React from 'react'
import List from '@mui/material/List'
import { PlanetCardDescription } from './PlanetCardDescription'
import { DiemensionCardDescription } from './DimensionCardDescription'
import { AliveCardDescription } from './AliveCardDescription'
import { SpeciesCardDescription } from './SpeciesCardDescription'

export const CardDescription = ({
  planet,
  dimension,
  species,
  status
}) => {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        padding: 0
      }}
      aria-label='contacts'
      className='card-characters__description'
    >
      <PlanetCardDescription planet={planet}/>
      <DiemensionCardDescription dimension={dimension}/>
      <AliveCardDescription status={status}/>
      <SpeciesCardDescription species={species}/>
    </List>
  )
}
