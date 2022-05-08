import Grid from "@mui/material/Grid"
import { useEffect,useState } from "react"
import CartProductCard from "../components/CartProductCard"
import {CartItem} from "../utillity/Constants"
import { getAuthData } from "../utillity/utils"


const Cart = () => {


    interface CartAPI {
        product_id:string
    }


    const [cartItems, setCartItems] = useState<CartItem[]>([])

    useEffect(() => {

        getAuthData("cart/")
        .then((result)=> {
            console.log(result.data)
            const data = result.data.map((arr:any)=>{
                return arr.product_id
            })
            setCartItems(data)
        })
        .catch((error)=> {
            console.log(error)
        })


    }, [])

    return (
        <Grid container justifyContent={"space-evenly"}>
            {cartItems.map((cartItem)=><CartProductCard cartItem={cartItem} />)}
        </Grid>
    )
}


export default Cart