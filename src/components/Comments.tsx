import {CommentSchema} from "../utillity/Constants"
import { useAuthenticationStatus } from "../utillity/utils"
import SingleCommentPanel from "./SingleCommentPanel"
import {useState} from "react"
import Modal from "./Modal"

interface Props {
    comments: CommentSchema[],
    product_id:number
}




const Comments:React.FC<Props> = ({comments,product_id}) => {


    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleWriteReview = () => {
        console.log("Write review")
        setIsOpen(true)
    }

    const status = useAuthenticationStatus("/comments")

    return (
        <div className="mt-2 bg-white flex flex-col items-center rounded-xl">
            <h1 className="mt-2 text-2xl font-bold">Comments & Reviews</h1>
            {status?<button onClick={handleWriteReview} className="bg-yellow-600 text-white p-2 rounded-xl my-2">Write Review</button>:<div></div>}
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} product_id={product_id}/>
            {comments.map((comment)=>(
                <SingleCommentPanel comment={comment} />
            ))}
        </div>
    )    
}

export default Comments