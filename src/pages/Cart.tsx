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
            setCartItems(result.data.map((items:any)=>{
                console.log("items = ")
                console.log(items)
                const {name, description} = items["product_id"]
                return {name, description, quantity:items["quantity"], price:items["price"]}

            }))
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