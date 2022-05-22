import {MIN_ORDER, ProductSchema, MAX_ORDER} from "../utillity/Constants"
import {RiStarSFill} from "react-icons/ri"
import { postAuthData } from "../utillity/utils"
import {useState} from "react"
interface Props {
    product:ProductSchema
}
// TODO: Need to add Image 
const ProductCard:React.FC<Props> = ({product}) => {
    const [stock, setStock] = useState<number>(1)

    const handleAddToCart = () => {
        console.log("Adding to cart")
        // postAuthData("orders/", )
    }

    const handleBuyProduct = () => {
        console.log("placing order")
        console.log(product.id)
        postAuthData("order/", {"product_id":product.id, quantity:stock, "bought_at":product.price, status:"PE"})
        .then((result)=>{
            console.log("Successfully placed order")
            console.log(result)
        })
        .catch((e)=>{
            console.log(e)
        })

    }

    const handleIncrement = () => {
        setStock(stock<MAX_ORDER?stock+1:stock)
    }

    const handleDecrement = () => {
        setStock(stock>MIN_ORDER?stock-1:stock)
    }


    return(
        <div className="bg-white p-4 m-2 rounded-xl shadow-xl w-3/4 md:w-11/12">
            <div className="text-xl font-bold ">{product.name}</div>
            <div className="w-full border-yellow-600 border-2 mt-4"></div> 
            {/* <div>{product.description}</div> */}
            <div className="flex flex-row justify-center mt-4">
                {[...Array(product.stars)].map(()=>(<RiStarSFill style={{color:"rgb(218,165,32)", fontSize:"30px"}} />))}
            </div>
            <div className="text-sm">{product.stars} stars</div>
            <div className="text-2xl mt-4">$ {product.price}</div>
            <div className="flex flex-row p-4 justify-center" >
                <button onClick={handleDecrement} className="text-2xl px-4 bg-gray-300 mx-2" >-</button>
                <div className="text-xl mx-2"> {stock}</div>
                <button onClick={handleIncrement} className="text-2xl px-4 bg-gray-300 mx-2">+</button>
            </div>
            <div className="flex flex-row justify-between mt-4">
                <div onClick={handleAddToCart} className="hover:cursor-pointer mr-1 bg-yellow-500 px-3 py-2 text-sm text-black rounded-xl shadow-xl">Add to Cart</div>
                <div onClick={handleBuyProduct} className="hover:cursor-pointer ml-1 bg-blue-500 px-3 py-2 text-sm text-white rounded-xl shadow-xl" >Buy Now</div>
            </div>
        </div>
    )
}


export default ProductCard