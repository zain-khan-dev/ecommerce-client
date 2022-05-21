import { Link } from "react-router-dom"
import { FC } from "react"
import {Product} from "../utillity/Constants"
import {useState} from 'react'
import {placeOrder, postData} from "../utillity/utils"
import Grid from "@mui/material/Grid"
import {postAuthData} from "../utillity/utils"


interface Prop {
    product:Product
}


const ProductCard:FC<Prop> = ({product}) => {


    const [quantity, setQuantity] = useState<number>(1)


    const placeOrderHandler = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, product:Product) => {
        e.preventDefault()
        console.log("Placing order for " + product.id)

        const formData = new FormData()
        formData.append("status", "PE")
        formData.append("product_id", product.id+"")
        formData.append("quantity", quantity + "")
        formData.append("bought_at", product.price+"")

        placeOrder("order/", formData)

    }



    const addToCartHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent> , product:number) => {
        // postAuthData("addToCart/", {"product_id":product})

        const formData = new FormData()
        formData.append("product_id", product + "")
        formData.append("quantity", quantity + "")

        postAuthData("addToCart/", formData)
        .then((result)=>{
            console.log(result)
            console.log("Added to cart succesfully")
        })
        .catch((e)=>{
            console.log("There was a problem adding to cart" + e)
        })
        console.log("added to cart")
    }


    return (
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ p:2,borderRadius:"10px", backgroundColor:"white"}}>
            <div  >
                <Link to={`/individual/${product.id}`}>
                    <div>{product.name}</div>
                </Link>
                <div>{product.description}</div>
            </div>
            <div><span>RS. {product.price} * {quantity} = {product.price * quantity}</span></div>
            <div>
                <button  onClick={()=>setQuantity(quantity-1)}>
                    -
                </button>
                <div ><span >{quantity}</span></div>
                <button  onClick={()=>setQuantity(quantity+1)}>
                    +
                </button>
            </div>
            <div >
                <button  onClick={(e) => addToCartHandler(e, product.id)}>Add to Cart</button>
                <button onClick={(e) => placeOrderHandler(e, product)}>Buy </button>
            </div>
        </Grid>
    )
}


export default ProductCard