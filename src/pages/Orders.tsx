import {useEffect, useState} from "react"
import { getAuthData } from "../utillity/utils"
import { API_ENDPOINTS } from "../utillity/Constants"
import OrderCard from "../components/OrderCard"
import {OrderSchema} from "../utillity/Constants"

const Orders = () => {


    const [orders, setOrders] = useState<OrderSchema[]>([])


    useEffect(()=> {

        getAuthData(API_ENDPOINTS.ALL_ORDERS)
        .then((result)=>{console.log(result);setOrders(result.data)})
        .catch((e)=>console.log(e))

        
    }, [])

    console.log(orders)

    return (
        <div className="grid grid-cols-1 text-center p-4">
            {orders.map((order=> <OrderCard order={order} />
            ))}
        </div>
    )
}

export default Orders