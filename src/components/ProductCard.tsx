import {ProductSchema} from "../utillity/Constants"
import {RiStarSFill} from "react-icons/ri"
interface Props {
    product:ProductSchema
}
// TODO: Need to add Image 
const ProductCard:React.FC<Props> = ({product}) => {

    return(
        <div className="bg-white p-4 m-2 rounded-xl shadow-xl w-3/4 md:w-full">
            <div className="text-xl font-bold ">{product.name}</div>
            <div className="w-full border-yellow-600 border-2"></div> 
            {/* <div>{product.description}</div> */}
            <div className="flex flex-row justify-center">
                {[...Array(product.stars)].map(()=>(<RiStarSFill style={{color:"rgb(218,165,32)", fontSize:"30px"}} />))}
            </div>
            <div className="text-xl ">$ {product.price}</div>
            <div className="flex flex-row justify-between mt-4">
                <div className="mr-1 bg-yellow-500 px-3 py-2 text-sm text-black rounded-xl shadow-xl">Add to Cart</div>
                <div className="ml-1 bg-blue-500 px-3 py-2 text-sm text-white rounded-xl shadow-xl" >Buy Now</div>
            </div>
        </div>
    )
}


export default ProductCard