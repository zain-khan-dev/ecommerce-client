import { Link } from "react-router-dom"
import { Button, Typography } from "@mui/material"
import { Box } from "@mui/material"
import { FC } from "react"
import {Product} from "../utillity/Constants"
import {useState} from 'react'
import {placeOrder} from "../utillity/utils"
import Grid from "@mui/material/Grid"



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
        formData.append("customer_id", "1")
        formData.append("product_id", product.id+"")


        placeOrder("order/", formData)

    }



    const addToCartHandler = () => {
        console.log("added to cart")
    }


    return (
        <Grid item xs={12} sm={6} md={4} lg={2} sx={{ p:2,borderRadius:"10px", backgroundColor:"white"}}>
            <Box  height={{xs:"100px", md:"200px" }}  sx={{textAlign:"center" }}>
                <Link to={`/individual/${product.id}`}>
                    <div>{product.name}</div>
                </Link>
                <div>{product.description}</div>
            </Box>
            <Box display="flex" sx={{p:2, textAlign:"center", justifyContent:"center"}}>
                <Button variant="outlined" sx={{width:"5px", height:"30px"}} onClick={()=>setQuantity(quantity-1)}>
                    -
                </Button>
                <Box sx={{px:2}}><Typography variant="h6">{quantity}</Typography></Box>
                <Button variant="outlined" sx={{width:"5px", height:"30px"}} onClick={()=>setQuantity(quantity+1)}>
                    +
                </Button>
            </Box>
            <Box display="flex" flexDirection={{ md:"row"}} justifyContent="center">
                <Button variant="contained"   sx={{width:"70px", height:"40px", fontSize:"10px"}}  onClick={(e) => addToCartHandler()}>Add to Cart</Button>
                <Button variant="contained" sx={{width:"60px", height:"40px",ml:4}} color="secondary" onClick={(e) => placeOrderHandler(e, product)}>Buy </Button>
            </Box>
        </Grid>
    )
}


export default ProductCard