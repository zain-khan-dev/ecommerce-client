import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import {FC, useEffect} from "react"
import {CartItem} from "../utillity/Constants"


interface Prop {
    cartItem:CartItem
}

const CartProductCard:FC<Prop> = ({cartItem}) => {
 
    useEffect(()=>{
        console.log()
    }, [])
 
    return (
        <Grid item sx={{border:"1px solid black", p:2}}>
            <Typography variant="h6">{cartItem.name}</Typography>
            <Typography variant="body1">{cartItem.description}</Typography>
            <Typography variant="body1">{cartItem.quantity}</Typography>
        </Grid>
    )
}

export default CartProductCard