import { Link } from "react-router-dom"

import {useState} from "react"


const Navbar = () => {

    return (
        <div className="flex flex-row md:text-xl justify-between md:p-2 md:max-w-5xl mx-auto ">
           <Link to="/home" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Home</div></Link>
           <Link to="/allproducts" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl" >Individual Product</div></Link>
           <Link to="/categories"><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Categories</div></Link>
           <Link to="/allproducts" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">All Product</div></Link>
           <Link to="/orders" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">My Orders</div></Link>
           <Link to="cart"><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Cart</div></Link>
           <Link to="/login"><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Login</div></Link>
           <Link to="/register"><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Register</div></Link>
           <Link to="/logout"> <div className="hover:bg-red-600 hover:text-white p-2 hover:rounded-xl">Logout</div></Link>
            {/* <button  onClick={handleDialogAction}> Signup</button> */}
        </div>
    )
}

export default Navbar