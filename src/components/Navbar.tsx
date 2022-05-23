import { Link } from "react-router-dom"

import { setLogged } from "../reducer/LoginSlice"
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../reducer/store"




const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log("Logging out")
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        dispatch(setLogged(false))
    }
    

    const isLogged:boolean = useSelector((state:RootState)=>state.login.isLogged)



    if(isLogged == false){
        return (
            <div className="flex flex-row md:text-xl justify-between md:p-2 md:max-w-5xl mx-auto ">
               <Link to="/home" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Home</div></Link>
               <Link to="/products" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl" >Individual Product</div></Link>
               <Link to="/category"><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Categories</div></Link>
               <Link to="/products" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">All Product</div></Link>
               <Link to="/login"><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Login</div></Link>
               <Link to="/register"><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Register</div></Link>
                {/* <button  onClick={handleDialogAction}> Signup</button> */}
            </div>
        )
    }
    else{
        return (
            <div className="flex flex-row md:text-xl justify-between md:p-2 md:max-w-5xl mx-auto ">
               <Link to="/home" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Home</div></Link>
               <Link to="/products" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl" >Individual Product</div></Link>
               <Link to="/category"><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Categories</div></Link>
               <Link to="/products" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">All Product</div></Link>
               <Link to="/orders" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">My Orders</div></Link>
               <Link to="cart"><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Cart</div></Link>
               <div onClick={handleLogout} className="hover:cursor-pointer hover:bg-red-600 hover:text-white p-2 hover:rounded-xl">Logout</div>
                {/* <button  onClick={handleDialogAction}> Signup</button> */}
            </div>
        )
    }


}

export default Navbar