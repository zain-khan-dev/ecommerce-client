import {OrderSchema, ORDER_STATUS} from "../utillity/Constants"
import {Link} from "react-router-dom"

interface Props {
    order:OrderSchema
}


interface RoundedProps {
    status:string,
    isComplete:number
}

const Rounded:React.FC<RoundedProps> = ({status, isComplete}) => {
    return (
            <div className="flex flex-col text-center items-center mx-4">
                <div className={"rounded-full w-6 h-6 p-4 " + (isComplete==1?"bg-green-600":(isComplete==-1?"bg-gray-600":"bg-yellow-600"))}></div>
                <div className="inline-block">{status}</div>
            </div>
        
    )
}
interface TrackPackageProps {
    statusDesc:string
}

const TrackPacakge:React.FC<TrackPackageProps> = ({statusDesc}) => {

    const statusIdx = ORDER_STATUS.findIndex((order)=>order.key == statusDesc)


    return (
        <div>
            <div className="flex lg:flex-row flex-col text-center items-center justify-center  mx-auto mt-4">
                {ORDER_STATUS.map((order, idx)=><Rounded status={order.incomplete} isComplete={idx < statusIdx?1:(idx == statusIdx?0:-1)}/>)}
            </div>
        </div>
    )
}

const OrderCard:React.FC<Props> = ({order}) => {

    console.log(order.product_id.images[0])

    console.log(order.status)

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
                            <table className="table-row m-4">
                                <tbody>
                                    <tr><th className="p-2">Name</th><td className="p-2">{order.product_id.name}</td></tr>
                                    <tr><th className="p-2">Bought at</th><td className="p-2">{order.price}</td></tr>
                                    <tr><th className="p-2">Quantity</th><td className="p-2">{order.quantity}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </Link>
                <div className="flex flex-col mt-4">
                    <div className="hover:cursor-pointer hover:bg-gray-400 p-2 shadow-xl rounded-xl mt-4 bg-gray-200">Request Cancellation</div>
                    <div className="hover:cursor-pointer hover:bg-gray-400 p-2 shadow-xl rounded-xl mt-4 bg-gray-200">Return Items</div>
                    <div className="hover:cursor-pointer hover:bg-gray-400 p-2 shadow-xl rounded-xl mt-4 bg-gray-200">Download Invoice</div>
                </div>
            </div>
            <div className="mt-4">
                <div className="text-xl font-bold">Track Package</div>
                <hr className="border-2 my-4"/>
                <TrackPacakge statusDesc={order.status} />
            </div>
        </div>
    )
}

export default  OrderCard