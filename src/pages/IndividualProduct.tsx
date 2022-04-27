import {FC, useEffect, useState} from "react"
import {getAPIData} from "../utillity/utils"
import { Box } from "@mui/material"
import { API_ENDPOINTS } from "../utillity/Constants"
import { useParams } from "react-router-dom"





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

        getAPIData(`${API_ENDPOINTS.SPECIFIC_PRODUCT}${id}`)
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
            <div>
                {productInfo.name + " with description "+ productInfo.description}
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default IndividualProduct