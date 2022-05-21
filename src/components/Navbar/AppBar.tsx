import { Link } from "react-router-dom"

import {useState} from "react"


const AppBar = () => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <div >
            <Link to="/home" style={{textDecoration:"none"}}>
                <div  >
                    <span >Home</span>
                </div>
            </Link>
            <Link to="/allproducts" style={{textDecoration:"none"}}>
                <div  >
                <span>Individual Product</span>
                </div>
            </Link>
            <Link to="/categories" style={{textDecoration:"none"}}>
                <div >
                <span >Categories</span>
                </div></Link>
            <Link to="/allproducts" style={{textDecoration:"none"}}>
                <div  >
                <span >All Product</span>
                </div>
            </Link>
            <Link to="/orders" style={{textDecoration:"none"}}>
                <div  >
                <span>My Orders</span>
                </div>
            </Link>
            <Link to="cart">
                <div  >
                    <span >Cart</span>
                </div>
            </Link>
            {/* <button  onClick={handleDialogAction}> Signup</button> */}
        </div>
    )
}

export default AppBar