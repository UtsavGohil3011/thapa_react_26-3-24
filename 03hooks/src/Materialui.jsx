import React from 'react'
import MoneyIcon from '@mui/icons-material/Money';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';

const Materialui = () => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
  return (
    <div className='wow'>

    <h1> Material Ui </h1>
    <MoneyIcon />
    <AccessAlarmIcon />

    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>

    <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
    </Stack>

    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>

    <Stack spacing={1}>

      <Rating name="size-large" defaultValue={3} size="large" />
    </Stack>

    
      
    </div>

  )
}

export default Materialui
