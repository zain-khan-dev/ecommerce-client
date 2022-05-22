import {FC, useEffect, useState} from "react"
import {getData} from "../utillity/utils"
import { API_ENDPOINTS } from "../utillity/Constants"

import ProductCard from "../components/ProductCard"
import { ProductSchema } from "../utillity/Constants"
import Grid from "@mui/material/Grid"

const AllProducts:FC = () => {


    const [products, setProducts] = useState<ProductSchema[]>([])


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
    



    return(
        <div className="grid md:grid-cols-4 grid-cols-1 text-center md:max-w-5xl mx-auto">
            {products.map((product)=>(
                <ProductCard product={product} />
            ))}
        </div>
    )
}

export default AllProducts