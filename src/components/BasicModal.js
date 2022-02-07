import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState,useContext } from 'react';
import { DataContext } from '../API/API';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70vw",
  bgcolor: 'darkgrey',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function BasicModal() {

  const {setModal,openModal}= useContext(DataContext)
  const handleOpen = () =>setModal(true);
  const handleClose = () => setModal(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h8" component="h8">
            The location you searched for was not found, please ensure it was spelled 
            corrrectly , I recommmend that you click on the Location button to get the weather data 
            of your current location
          </Typography>
          <Box sx={{display:"flex",justifyContent:"center"}}>
              <Button variant='outlined' color={"secondary"} onClick={()=>{setModal(false)}}>
                 oK
              </Button>
          </Box>
          
        </Box>
      </Modal>
    </div>
  );
}