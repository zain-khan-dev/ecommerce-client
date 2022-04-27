import {FC, useEffect, useState} from "react"
import {getAPIData} from "../utillity/utils"
import { Box } from "@mui/material"
import { API_ENDPOINTS } from "../utillity/Constants"
import {Link} from "react-router-dom"


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

        getAPIData(API_ENDPOINTS.ALL_PRODUCTS)
        .then((result)=>{
            setProducts(result.data)
        })
        .catch((e)=>{
            console.log("Failed making request with error "+ e)
        })
    
    }, [])
    

    return(
        <Box>
            {products.map(
                product => <Link to={`/individual/${product.id}`}><div>{product.name} sold by {product.seller}</div></Link>)}
        </Box>
    )
}

export default AllProducts