import {FC, useEffect, useState} from "react"
import {getData} from "../utillity/utils"
import { API_ENDPOINTS } from "../utillity/Constants"
import { useParams } from "react-router-dom"
import ImageViewer from "../components/ImageViewer"
import {ProductSchema} from "../utillity/Constants"
import ProductDescriptionPanel from "../components/ProductDescriptionPanel"
import ProductSpecs from "../components/ProductSpecs"

const IndividualProduct:FC = () => {


    const { id } = useParams();

    

    const [productInfo, setProductInfo] = useState<ProductSchema| null>(null)



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
            <div className="max-w-5xl mx-auto">
                <div className=" flex flex-col lg:flex-row  mt-4">  
                    <ImageViewer images={productInfo.images} />
                    <ProductDescriptionPanel product={productInfo} />
                </div>
                <ProductSpecs category={productInfo.category} specs={productInfo.specs} />
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