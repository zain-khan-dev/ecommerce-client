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
            <span >{cartItem.name}</span>
            <span >{cartItem.description}</span>
            <span >{cartItem.quantity}</span>
        </Grid>
    )
}

export default CartProductCard