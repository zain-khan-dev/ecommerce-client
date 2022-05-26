import {CommentSchema} from "../utillity/Constants"


interface Props {
    comments: CommentSchema[]
}

const Comments:React.FC<Props> = ({comments}) => {
    return (
        <div className="flex flex-col">
            {comments.map((comment)=>(
                <div className="mt-4 p-2" >
                    <div className="text-blue-400 bg-yellow-600">by {comment.comment_by}</div>
                    <div className="text-center">{comment.text}</div>
                </div>
            ))}
        </div>
    )    
}

export default Comments