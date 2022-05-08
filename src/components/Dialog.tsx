import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SignupForm from "./SignupForm"
import {useState} from "react"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';
import Login from "../components/Login"


interface Props {
    open:boolean,
    setOpen:(isOpen:boolean)=>void
}


const  FormDialog:React.FC<Props> = ({open, setOpen}) => {
//   const [open, setOpen] = React.useState(false);

const [formType, setFormType] = useState<string>("signup")


  const handleClose = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    setOpen(false);
  };

  const handleFormChange = (e:React.MouseEvent<HTMLElement, MouseEvent>, newType:string|null) => {
    e.preventDefault()
      if(newType!= null)
        setFormType(newType)
  }



  return (
    <div>
    
      <Dialog open={open} onClose={handleClose} >
        <ToggleButtonGroup fullWidth={true}
                value={formType}
                exclusive
                onChange={handleFormChange}
                aria-label="text alignment"
                >
        <ToggleButton value="signup" aria-label="left aligned">
            <Typography >Signup</Typography>
        </ToggleButton>
        <ToggleButton value="login" aria-label="centered">
            <Typography >Login</Typography>
        </ToggleButton>
        </ToggleButtonGroup>
        <DialogTitle>{formType}</DialogTitle>

        <DialogContent>
          <DialogContentText>
          {formType=="signup"?<SignupForm />:<Login />}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog