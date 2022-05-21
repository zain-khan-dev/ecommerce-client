import {FC, useEffect, useState} from "react"
import {getData} from "../utillity/utils"
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
            <div >
                <span >{productInfo.name}</span>
                <span >{productInfo.description}</span>
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