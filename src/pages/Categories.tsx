
import { CATEGORIES } from "../utillity/Constants"


interface categorySchema {
    type:string,
    image_url:string
}

const Categories = () => {
    return (
        <div>
            {CATEGORIES.map((category:categorySchema, idx:number)=> <div key={idx}>{category.type}</div> )}
        </div>
    )
}

export default Categories