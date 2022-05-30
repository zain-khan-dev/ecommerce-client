import {OrderSchema} from "../utillity/Constants"
import {Link} from "react-router-dom"

interface Props {
    order:OrderSchema
}


const OrderCard:React.FC<Props> = ({order}) => {

    console.log(order.product_id.images[0])

    return(
        <div className=" flex flex-col bg-white mt-4 rounded-xl shadow-xl p-4 md:w-1/2 mx-auto">
            <div className="flex flex-row text-sm mb-4 bg-gray-200 p-2 rounded-xl">
                <div className="mx-2">Ordered at <span className="font-bold">{order.order_ts}</span></div>
                <div className="mx-4">Total <span className="font-bold">{order.price * order.quantity}</span></div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center">
                    <Link to={`/product/${order.product_id.id}`}>
                        <div className="flex lg:flex-row flex-col">
                        {order.product_id.images?
                        <img width={"150px"} height={"100px"} src={`http://www.localhost:8000${order.product_id.images[0].src}/`}/>:<div>No preview found</div>}
                        <div className="mx-4 mt-10 font-bold">{order.product_id.name}</div>
                        </div>
                    </Link>
                <div className="flex flex-col mt-4">
                    <div className="hover:cursor-pointer hover:bg-yellow-400 p-2 bg-yellow-200 shadow-xl rounded-xl">Track Package</div>
                    <div className="hover:cursor-pointer hover:bg-gray-400 p-2 shadow-xl rounded-xl mt-4 bg-gray-200">Request Cancellation</div>
                    <div className="hover:cursor-pointer hover:bg-gray-400 p-2 shadow-xl rounded-xl mt-4 bg-gray-200">Return Items</div>
                    <div className="hover:cursor-pointer hover:bg-gray-400 p-2 shadow-xl rounded-xl mt-4 bg-gray-200">Download Invoice</div>
                </div>
            </div>
            
        </div>
    )
}

export default  OrderCard