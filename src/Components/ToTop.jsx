import * as React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import NorthIcon from '@mui/icons-material/North'

export const ToTop = () => {
  const goToTop = () => {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box sx={{ position: 'fixed', bottom: '250px', right: '16px' }}>
      <Fab onClick={goToTop} color='primary'>
        <NorthIcon />
      </Fab>
    </Box>
  )
}
