import {FC, useEffect, useState} from "react"
import {getData} from "../utillity/utils"
import { API_ENDPOINTS } from "../utillity/Constants"
import { useParams } from "react-router-dom"
import ImageViewer from "../components/ImageViewer"
import {ProductSchema} from "../utillity/Constants"
import ProductSpecsPanel from "../components/ProductSpecsPanel"


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
            <div className=" flex flex-col lg:flex-row max-w-6xl mx-auto mt-4">  
                <ImageViewer images={productInfo.images} />
                <ProductSpecsPanel product={productInfo} />
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