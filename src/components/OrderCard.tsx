import {OrderSchema} from "../utillity/Constants"
import {Link} from "react-router-dom"

interface Props {
    order:OrderSchema
}


const OrderCard:React.FC<Props> = ({order}) => {
    return(
        <div className=" flex flex-col bg-white mt-4 rounded-xl shadow-xl p-4 md:w-1/2 mx-auto">
            <div className="flex flex-row text-sm mb-4 bg-gray-200 p-2 rounded-xl">
                <div className="mx-2">Ordered at {order.order_ts}</div>
                <div className="mx-4">Total {order.bought_at * order.quantity}</div>
            </div>
            <div className="flex md:flex-row flex-col justify-between">
                <div className="flex flex-row">
                    <div>Order picture</div>
                    <Link to={`/product/`}><div className="mx-4">{order.product_id.name}</div></Link>
                </div>
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