import { Link } from "react-router-dom"

import { setLogged } from "../reducer/LoginSlice"
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../reducer/store"
import {BsSearch} from "react-icons/bs"
import {useNavigate} from "react-router-dom"
import SearchBar from "./SearchBar"
import DropDown from "./DropDown"
import {BsFillCartPlusFill} from "react-icons/bs"


const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log("Logging out")
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        dispatch(setLogged(false))
    }
    
    const navigate = useNavigate()

    const isLogged:boolean = useSelector((state:RootState)=>state.login.isLogged)



    if(isLogged == false){
        return (
            <div className="flex flex-row md:text-xl justify-between md:p-2 md:max-w-5xl mx-auto ">
               <Link to="/home" ><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Home</div></Link>
               <Link to="/category"><div className="hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Categories</div></Link>
               <SearchBar />
               <DropDown />
            </div>
        )
    }
    else{
        return (
            <div className="flex flex-row md:text-xl justify-between md:p-2 md:max-w-5xl mx-auto ">
               <Link to="/home" ><div className="mt-1 hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Home</div></Link>
               <Link to="/category"><div className="mt-1 hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Categories</div></Link>
               <SearchBar />
               <Link to="/orders" ><div className="mt-1 hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">Orders</div></Link>
               <Link to="cart">
                   <div className="mt-2 hover:bg-blue-600 hover:text-white p-2 hover:rounded-xl">
                        <BsFillCartPlusFill />
                   </div>
                </Link>
               <button onClick={handleLogout} className="mt-1 hover:cursor-pointer ml-2 text-white bg-red-500 rounded-xl hover:scale-110 p-2 hover:rounded-xl">Logout</button>
                {/* <button  onClick={handleDialogAction}> Signup</button> */}
            </div>
        )
    }


}

export default Navbar