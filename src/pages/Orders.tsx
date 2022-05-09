import {useEffect, useState} from "react"
import { getData } from "../utillity/utils"
import { API_ENDPOINTS } from "../utillity/Constants"


interface Order {
    id:string,
    order_ts:string,
    customer_id:string,
    status:string,
    product_id:string,
    quantity:number,
    bought_at:number
}


const Orders = () => {


    const [orders, setOrders] = useState<Order[]>([])


    useEffect(()=> {


        getData(API_ENDPOINTS.ALL_ORDERS + "1/")
        .then((result)=>{console.log(result);setOrders(result.data)})
        .catch((e)=>console.log(e))

        
    }, [])

    return (
        <div>
            {orders.map((order=>
            <div>
                <div>Product id is {order.product_id}</div>
                <div>Product was placed at {order.order_ts}</div> 
                <div>The status is {order.status}</div>
                <div>Bought at {order.bought_at}</div>
                <div>Quantity bought {order.quantity}</div>
            </div>
            ))}
        </div>
    )
}

export default Orders