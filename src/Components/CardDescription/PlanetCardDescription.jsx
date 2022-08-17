import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PublicIcon from '@mui/icons-material/Public'

export const PlanetCardDescription = ({ planet }) => {
  return (
    <>
      <ListItem disablePadding >
        <ListItemButton>
          <ListItemIcon>
            <PublicIcon sx={{ color: '#2c9be0' }} />
          </ListItemIcon>
          <ListItemText primary={planet || 'unknown'} />
        </ListItemButton>
      </ListItem>
    </>
  )
}
