import {FC, useEffect, useState} from "react"
import {getData} from "../utillity/utils"
import { Box } from "@mui/material"
import { API_ENDPOINTS } from "../utillity/Constants"
import { useParams } from "react-router-dom"
import { Typography } from "@mui/material"




const IndividualProduct:FC = () => {


    interface ProductInfoSchema {

        name:string,
        description:string,
        seller:number,
        stars:number

    }

    const { id } = useParams();

    

    const [productInfo, setProductInfo] = useState<ProductInfoSchema| null>(null)


    useEffect(() => {

        getData(`${API_ENDPOINTS.SPECIFIC_PRODUCT}${id}/`)
        .then((result)=>{
            console.log(result)
            setProductInfo(result.data)
        })
        .catch((e)=>{
            console.log("Failed making request with error "+ e)
        })
    
    }, [id])
    

    if(productInfo !== null){
        return (
            <Box display="flex" flexDirection="column">
                <Typography variant="h4" component="div">{productInfo.name}</Typography>
                <Typography variant="body1" component="div" >{productInfo.description}</Typography>
            </Box>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default IndividualProduct