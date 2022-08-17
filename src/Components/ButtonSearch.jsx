import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export const ButtonSearch = ({ handleSubmit }) => {
  return (
    <Stack spacing={2} sx={{ marginLeft: '30px' }}>
      <Button size="large" variant="contained" color="success" onClick={() => handleSubmit()}>
        Search
      </Button>
    </Stack>
  )
}
