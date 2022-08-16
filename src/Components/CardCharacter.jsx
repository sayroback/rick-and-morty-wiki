import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import CardDescription from './CardDescription'

export const CardCharacter = ({ item }) => {
  return (
    <Card sx={{ minWidth: 230 }} className='card-characters'>
      <CardActionArea>
        <CardMedia component='img' image={item.image} alt='Rick' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardDescription
        planet={item.origin.name}
        dimension={item.origin.dimension}
        species={item.species}
        status={item.status}
      />
    </Card>
  )
}
