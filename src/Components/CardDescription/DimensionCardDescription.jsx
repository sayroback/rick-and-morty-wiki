import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HubIcon from '@mui/icons-material/Hub'

export const DiemensionCardDescription = ({ dimension }) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <HubIcon sx={{ color: '#97ce4c' }} />
          </ListItemIcon>
          <ListItemText primary={dimension || 'unknown'} />
        </ListItemButton>
      </ListItem>
    </>
  )
}
