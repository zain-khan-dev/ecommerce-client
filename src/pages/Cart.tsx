import { useEffect,useState } from "react"
import CartProductCard from "../components/CartProductCard"
import {CartItem} from "../utillity/Constants"
import { getAuthData, useAuthenticationStatus } from "../utillity/utils"


const Cart = () => {
    
    const status = useAuthenticationStatus("/cart")

    interface CartAPI {
        product_id:string
    }


    const [cartItems, setCartItems] = useState<CartItem[]>([])


    console.log(cartItems)

    useEffect(() => {

        getAuthData("cart/")
        .then((result)=> {
            console.log(result.data)
            setCartItems(result.data)
            // setCartItems(result.data.map((items:any)=>{
            //     const {name, description,images} = items["product_id"]
            //     return {name, description, quantity:items["quantity"], price:items["price"],images:images}

            // }))
        })
        .catch((error)=> {
            console.log(error)
        })


    }, [])

    return (
        <div className="grid md:grid-cols-1">
            {cartItems.map((cartItem)=><CartProductCard cartItem={cartItem} />)}
        </div>
    )
}


export default Cart