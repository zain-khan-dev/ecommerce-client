import { useSelector } from "react-redux"
import { RootState } from "../reducer/store"

const Home = () => {


    const isLogged = useSelector((state:RootState)=>state.login.isLogged)


    console.log("is Person logged? ", isLogged===true?"yes":"no")

    return (
        <div>
            Home is here
        </div>
    )
}


export default Home