
import { CATEGORIES } from "../utillity/Constants"
import { CategorySchema } from "../utillity/Constants"


interface Props {
    category:CategorySchema
}

const CategoryCard:React.FC<Props>  = ({category}) => {
    return (
        <div className="flex flex-col p-4 m-4 bg-white rounded-xl shadow-xl text-center ">
            <div>{category.type}</div>
            <div><img src={category.image_url} /></div>
        </div>
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