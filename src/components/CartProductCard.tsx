import {FC, useEffect} from "react"
import {CartItem} from "../utillity/Constants"
import {useState} from "react"

interface Prop {
    cartItem:CartItem
}

const CartProductCard:FC<Prop> = ({cartItem}) => {
 

    const [stock, setStock] = useState<number>(cartItem.quantity)


    const handleIncrement = () => {
        setStock(stock + 1)
        // update cart item here for server sync
    }

    const handleDecrement = () => {
        setStock(stock - 1)
        // update cart item here for server sync
    }

 
    return (
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-xl p-4 flex flex-row">
            <img width={"150px"} height={"100px"} src="https://static.remove.bg/remove-bg-web/7deb868fb894efaa6d5f6cbfd1a016f4a613fda9/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" />
            <div className="flex flex-col flex-1">
                <div className="text-xl font-bold">{cartItem.name}</div>
                <div>{cartItem.description}</div>
                <div className="flex flex-row w-1/3 justify-between my-4">
                    <div><button className="bg-gray-400 px-4 py-2 rounded " onClick={handleDecrement}>-</button></div>
                    <div className="text-xl pt-2"> {stock}</div>
                    <div><button className="bg-gray-400 px-4 py-2 rounded" onClick={handleIncrement}>+</button></div>
                </div>
            <div>Total ${cartItem.quantity * cartItem.price}</div>
            <div className="text-sm text-blue-700 underline mt-2">Delete</div>
            </div>
        </div>
    )
}

export default CartProductCard