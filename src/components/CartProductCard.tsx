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
        <Grid item>
            <div>Title is {cartItem.name}</div>
            <div> description is {cartItem.description}</div>
        </Grid>
    )
}

export default CartProductCard