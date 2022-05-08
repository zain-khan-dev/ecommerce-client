import {FC, useEffect, useState} from "react"
import {getData} from "../utillity/utils"
import { Box } from "@mui/material"
import { API_ENDPOINTS } from "../utillity/Constants"

import ProductCard from "../components/ProductCard"
import { Product } from "../utillity/Constants"
import Grid from "@mui/material/Grid"

const AllProducts:FC = () => {


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
    



    return(
        <Box sx={{mt:4}}>
            <Grid container justifyContent="space-evenly">
                {products.map((product)=><ProductCard product={product} />)}
            </Grid>
        </Box>
    )
}

export default AllProducts