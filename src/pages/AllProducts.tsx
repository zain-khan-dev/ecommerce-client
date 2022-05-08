import {FC, useEffect, useState} from "react"
import {getData, placeOrder, postData} from "../utillity/utils"
import { Box } from "@mui/material"
import { API_ENDPOINTS } from "../utillity/Constants"
import {Link} from "react-router-dom"
import { Button } from "@mui/material"
import axios from "axios"

const AllProducts:FC = () => {

    interface Product {
        id:number,
        name:string,
        description:string,
        seller:number,
        stars:number,
        orders:any[]
    }

    


    const [products, setProducts] = useState<Product[]>([])




    useEffect(() => {

        getData(API_ENDPOINTS.ALL_PRODUCTS)
        .then((result)=>{
            console.log(result.data)
            setProducts(result.data)
        })
        .catch((e)=>{
            console.log("Failed making request with error "+ e)
        })
    
    }, [])
    

    const placeOrderHandler = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, product:Product) => {
        e.preventDefault()
        console.log("Placing order for " + product.id)

        const formData = new FormData()
        formData.append("status", "PE")
        formData.append("customer_id", "1")
        formData.append("product_id", product.id+"")


        placeOrder("order/", formData)

    }


    return(
        <Box>
            {products.map(
                product => {
                    return (
                            <>
                                <Link to={`/individual/${product.id}`}>
                                    <div>{product.name}</div>
                                </Link>
                                <div>{product.description}</div>
                                <Button onClick={(e) => placeOrderHandler(e, product)}>Buy </Button>
                            </>
                        )
                    }
                )}
        </Box>
    )
}

export default AllProducts