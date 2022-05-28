import {ProductSchema} from "../utillity/Constants"
import {RiStarSFill} from "react-icons/ri"
import FeaturePanel from "./FeaturePanel"

interface Props {
    product:ProductSchema
}

const ProductDescriptionPanel:React.FC<Props> = ({product}) => {
    return (
        <div className="basis-3/5 rounded-xl p-2 mx-2 bg-white  text-center">
            <div className="md:text-4xl text-xl font-bold mt-4">{product.name}</div>
            <div className="md:text-4xl text-xl mt-4">$ {product.price}</div>
            <div className="mt-4 justify-center">{product.description}</div>
            <div className="flex flex-row justify-center mt-4">
                    {[...Array(product.stars)].map(()=>(<RiStarSFill style={{color:"rgb(218,165,32)", fontSize:"30px"}} />))}
            </div>
            <div className="text-sm">{product.stars} stars</div>
            <div className="flex flex-row mt-4 justify-center">
                <button className="bg-yellow-600 text-white px-5 py-2 texl-lg rounded-xl shadow-xl mr-4">Add to Cart</button>
                <button className="bg-blue-600 text-white px-5 py-2 text-lg rounded-xl shadow-xl ml-4">Buy</button>
            </div>
            <div className="mt-8 font-bold text-2xl">About the Product</div>
            <FeaturePanel features={product.features} />
        </div>
    )
}

export default ProductDescriptionPanel