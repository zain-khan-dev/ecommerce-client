import React, {FC, useEffect} from "react"
import {CartItem} from "../utillity/Constants"
import {useState} from "react"
import { deleteAuthData } from "../utillity/utils"

interface Prop {
    cartItem:CartItem
}

const CartProductCard:FC<Prop> = ({cartItem}) => {
 

    const [stock, setStock] = useState<number>(cartItem.quantity)
    

    const handleIncrement = () => {
        if(stock < 20)
            setStock(stock + 1)
        // update cart item here for server sync
    }

    const handleDecrement = () => {
        if(stock > 1)
        setStock(stock - 1)
        // update cart item here for server sync
    }


    const handleRemoveCartItem = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, id:number) => {
        e.preventDefault()

        deleteAuthData(`/cart/${id}/`)
        .then((result)=>{
            console.log(result)
        })
        .catch((e)=>{
            console.log(e)
        })

    }

 
    return (
        <div className="mx-auto bg-white rounded-xl shadow-xl p-2 flex flex-row w-3/4 m-2">
            <img width={"200px"} height={"50px"} src={`http://localhost:8000${cartItem.product_id.images[0].src}`} />
            <div className="flex flex-col flex-1 ml-2 p-4">
                <div className="text-xl font-bold">{cartItem.product_id.name}</div>
                <div>{cartItem.product_id.description}</div>
                <div className="flex flex-row my-4">
                    <div><button className="bg-gray-400 px-4 py-2 rounded mr-2" onClick={handleDecrement}>-</button></div>
                    <div className="text-xl pt-2"> {stock}</div>
                    <div><button className="bg-gray-400 px-4 py-2 rounded ml-2" onClick={handleIncrement}>+</button></div>
                </div>
                <div><button className="bg-yellow-600 p-2 text-white mb-2 rounded-xl">Update</button></div>
            <div>Total ${stock * cartItem.price}</div>
            <button onClick={(e) => handleRemoveCartItem(e, cartItem.id)} className="text-md text-blue-700 underline mt-2 text-left">Remove</button>
            </div>
        </div>
    )
}

export default CartProductCard