import { useEffect } from "react"
import { useParams } from "react-router-dom"

const CategoryType = () => {

    const categoryType = useParams().type


    useEffect(()=>{
        //fetch items related to params
        console.log(categoryType)
    
    }, [])


    return (
        <div>New category type</div>
    )
}

export default CategoryType