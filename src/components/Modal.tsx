import {Dialog, Transition} from "@headlessui/react"
import {useState, Fragment} from "react"
import { postAuthData } from "../utillity/utils";

interface Props {
    isOpen:boolean;
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
    product_id:number
}


const Modal:React.FC<Props> = ({isOpen, setIsOpen, product_id}) => {



    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const [rating, setRating] = useState<number>(0)

    const submitReview = () => {

        console.log(title, description, rating, product_id)
        postAuthData("comments/", {comment_title:title, comment_text:description, rating:rating, comment_to:product_id})
        .then((result)=>{
            console.log(result)
        })
        .catch((e)=>{
            console.log(e)
        })

    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={()=>setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-2xl font-bold text-center leading-6 text-gray-900"
                  >
                      Write Review
                  </Dialog.Title>
                  <div className="bg-gray-200 p-2 mt-4 flex flex-col justify-center items-center">
                        <label className="block text-lg p-2 font-semibold">Enter Rating</label>
                        <select value={rating} onChange={(e)=>setRating(parseInt(e.target.value))} className="bg-white p-2 mx-auto">
                            {[...Array(5)].map((val, idx)=>(
                                <option value={idx+1}>{idx+1}</option>
                            ))}
                        </select>
                        <label className="block text-lg p-2 font-semibold">Enter Title</label>
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} className="shadow-xl p-1" /><br/>
                        <label className="block text-lg p-2 font-semibold">Enter Description</label>
                        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} cols={30} className="shadow-xl p-1" /><br />
                        <div className="mt-4 ">
                            <button onClick={submitReview} className="bg-blue-600 text-white px-3 py-2 mt-2 rounded-xl">Submit</button>
                            <button onClick={()=>setIsOpen(false)} className="bg-yellow-600 text-white px-3 py-2 mt-2 rounded-xl ml-2">Cancel</button>
                        </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    )
}

export default Modal