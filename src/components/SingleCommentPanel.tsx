import { CommentSchema } from "../utillity/Constants"
import {RiStarSLine, RiStarSFill} from "react-icons/ri"
interface Props {
    comment:CommentSchema
}

const SingleCommentPanel:React.FC<Props> = ({comment}) => {
    return (
        <div className="flex flex-col border-2 p-2 rounded-xl border-blue-600 w-3/4 mt-4 mb-2">
            <div className="bg-blue-600 p-2 rounded-xl text-white flex flex-col text-xl">
                <div className=" flex flex-row ">
                    <div className="text-lg">{comment.comment_by.replace(comment.comment_by.charAt(0), comment.comment_by.charAt(0).toUpperCase())} rated </div> 
                    {[...Array(comment.rating)].map((_)=><span className="mt-1 ml-2"><RiStarSFill className="text-yellow-400" /></span>)}
                    {[...Array(5 - comment.rating)].map((_)=><span className="mt-1 ml-2"><RiStarSLine /></span>)}
                </div>
                <div className="text-sm">
                    at {comment.comment_ts.split('.')[0].replace('T', ' ')}
                </div>
            </div>
            <div className="mt-2 px-2 py-1 text-xl font-semibold">{comment.comment_title}</div>
            <div className="px-2 py-1">{comment.comment_text}</div>
            <div className="px-2 py-1 text-blue-600 hover:cursor-pointer">Report Abuse</div>
        </div>
    )
}
export default SingleCommentPanel