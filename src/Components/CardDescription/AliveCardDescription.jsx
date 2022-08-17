import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'

export const AliveCardDescription = ({ status }) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {status === 'Alive'
              ? (
                <FavoriteIcon sx={{ color: '#FB6467' }} />
                )
              : (
                <HeartBrokenIcon sx={{ color: 'gray' }} />
                )}
          </ListItemIcon>
          <ListItemText primary={status || 'unknown'} />
        </ListItemButton>
      </ListItem>
    </>
  )
}
