
import { CATEGORIES } from "../utillity/Constants"
import { CategorySchema } from "../utillity/Constants"
import {Link} from "react-router-dom"

interface Props {
    category:CategorySchema
}

const CategoryCard:React.FC<Props>  = ({category}) => {
    return (
        <Link to={category.link}>
            <div className="flex flex-col p-4 m-4 bg-white rounded-xl shadow-xl text-center  hover:bg-yellow-400 hover:cursor-pointer">
                <div><img width={"100px"} height={"100px"} className="mx-auto" src={category.image_url} /></div>
                <div className="text-xl mt-4 ">{category.type}</div>
            </div>
        </Link>
    )
}


const Categories = () => {
    return (
        <div className="grid md:grid-cols-5 grid-cols-2">
            {CATEGORIES.map((category:CategorySchema, idx:number)=> <CategoryCard category={category} /> )}
        </div>
    )
}

export default Categories