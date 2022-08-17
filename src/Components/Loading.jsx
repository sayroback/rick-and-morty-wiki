import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
// import Button from '@mui/material/Button'
import { ContainerLoading } from '../Styles/components-styled'
import { useSelector } from 'react-redux'

export const Loading = () => {
  const openModal = useSelector(state => state.loading)
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  React.useEffect(() => {
    document.body.scrollIntoView({ behavior: 'smooth' })
    if (!openModal) {
      handleClose()
    } else {
      handleOpen()
    }
  }, [openModal])

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={ContainerLoading}>
            <div className='loading' />
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
