import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData, getCategoryType } from "../utillity/utils"
import {ProductSchema} from "../utillity/Constants"
import ProductCard from "../components/ProductCard"

const CategoryProduct = () => {

    const categoryType = useParams().type

    const [products, setProducts] = useState<ProductSchema[]>([])


    useEffect(()=>{
        //fetch items related to params

        if(categoryType){
            const category = getCategoryType(categoryType)
            getData(`http://localhost:8000/ecommerce/category/${category}`)
            .then((result)=>{
                console.log(result.data)
                setProducts(result.data)
            })
            .catch((e)=>{
                console.log(e)
            })
        }
        else{
            // redirect to home
        }
        
    }, [])


    return (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center lg:max-w-5xl mx-auto">
            {products.map((product)=>(
                <ProductCard product={product} />
            ))}
        </div>
    )
}

export default CategoryProduct