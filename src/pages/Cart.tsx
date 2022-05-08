import Grid from "@mui/material/Grid"
import { useEffect,useState } from "react"
import CartProductCard from "../components/CartProductCard"
import {CartItem} from "../utillity/Constants"



const Cart = () => {



    const [cartItems, setCartItems] = useState<CartItem[]>([])

    useEffect(() => {

    }, [])

    return (
        <Grid container>
            {cartItems.map((cartItem)=><CartProductCard cartItem={cartItem} />)}
        </Grid>
    )
}


export default Cart