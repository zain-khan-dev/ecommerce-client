import {ProductSchema} from "../utillity/Constants"
import {RiStarSFill} from "react-icons/ri"
interface Props {
    product:ProductSchema
}

const ProductSpecsPanel:React.FC<Props> = ({product}) => {
    return (
        <div className="rounded-xl p-2 flex-1 bg-white mx-2 text-center">
            <div className="text-xl font-bold mt-4">{product.name}</div>
            <div className="mt-4 justify-center">{product.description}</div>
            <div className="flex flex-row justify-center mt-4">
                    {[...Array(product.stars)].map(()=>(<RiStarSFill style={{color:"rgb(218,165,32)", fontSize:"30px"}} />))}
            </div>
            <div className="text-sm">{product.stars} stars</div>
            <div className="flex flex-row mt-4 justify-center">
                <button className="bg-yellow-600 text-white px-7 py-4 texl-xl rounded-xl shadow-xl mr-4">Add to Cart</button>
                <button className="bg-blue-600 text-white px-7 py-4 text-xl rounded-xl shadow-xl ml-4">Buy</button>
            </div>
            <div className="mt-4 font-bold">About the Product</div>
            <ul className="list-disc">
                {product.features.map((text:string)=><li>{text}</li>)}
            </ul>
        </div>
    )
}

export default ProductSpecsPanel