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
            <div className="flex flex-row mt-4">  
                <div className="flex-1 bg-white mx-2 text-center">Images will go here</div>
                <div className="flex-1 bg-white mx-2 text-center">Product Specs will go here</div>
            </div>
        )
    }
    else{
        return(
            <div>Loading</div>
        )
    }
}

export default IndividualProduct