import Grid from "@mui/material/Grid"
import {FC} from "react"
import {CartItem} from "../utillity/Constants"


interface Prop {
    cartItem:CartItem
}

const CartProductCard:FC<Prop> = ({cartItem}) => {
    return (
        <Grid item>
            <div>Grid item</div>
        </Grid>
    )
}

export default CartProductCard