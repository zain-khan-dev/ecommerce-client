import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import { Typography } from "@mui/material"
import { Button } from "@mui/material"
import {useState} from "react"
import FormDialog from "../Dialog"


const AppBar = () => {

    const [open, setOpen] = useState<boolean>(false)

    
    const handleDialogAction = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setOpen(!open)
    }

    return (
        <Box sx={{mx:"auto", mt:1}} width={{ md:"50%"}}     display="flex" justifyContent="space-between">
            <Link to="/home" style={{textDecoration:"none"}}>
                <Box component="span"  sx={{lineHeight:1}} >
                    <Typography variant="h6">Home</Typography>
                </Box>
            </Link>
            <Link to="/allproducts" style={{textDecoration:"none"}}>
                <Box component="span" sx={{lineHeight:1}} >
                <Typography variant="h6">Individual Product</Typography>
                </Box>
            </Link>
            <Link to="/categories" style={{textDecoration:"none"}}>
                <Box component="span"  sx={{lineHeight:1}} >
                <Typography variant="h6">Categories</Typography>
                </Box></Link>
            <Link to="/allproducts" style={{textDecoration:"none"}}>
                <Box component="span" sx={{lineHeight:1}} >
                <Typography variant="h6">All Product</Typography>
                </Box>
            </Link>
            <Link to="/orders" style={{textDecoration:"none"}}>
                <Box component="span" sx={{lineHeight:1}} >
                <Typography variant="h6">My Orders</Typography>
                </Box>
            </Link>
            <Button variant="contained" onClick={handleDialogAction}> Signup</Button>
            <FormDialog open={open} setOpen={setOpen} />
        </Box>
    )
}

export default AppBar