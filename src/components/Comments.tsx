import {CommentSchema} from "../utillity/Constants"
import SingleCommentPanel from "./SingleCommentPanel"

interface Props {
    comments: CommentSchema[]
}

const Comments:React.FC<Props> = ({comments}) => {
    return (
        <div className="mt-2 bg-white flex flex-col items-center rounded-xl">
            <h1 className="mt-2 text-2xl font-bold">Comments & Reviews</h1>
            {comments.map((comment)=>(
                <SingleCommentPanel comment={comment} />
            ))}
                <SingleCommentPanel comment={comments[0]} />
                <SingleCommentPanel comment={comments[0]} />
                <SingleCommentPanel comment={comments[0]} />
        </div>
    )    
}

export default Comments