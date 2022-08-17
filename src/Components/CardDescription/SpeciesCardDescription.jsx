import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity'

export const SpeciesCardDescription = ({ species }) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ReduceCapacityIcon sx={{ color: '#0062c4' }} />
          </ListItemIcon>
          <ListItemText primary={species || 'unknown'} />
        </ListItemButton>
      </ListItem>
    </>
  )
}
