import { imageListClasses } from "@mui/material"
import { ProductImageSchema } from "../utillity/Constants"
import {useState} from "react"

interface Props {
    images:ProductImageSchema[]
}

interface PosterProps {
    image:ProductImageSchema|null
}

const PosterImage:React.FC<PosterProps> = ({image}) => {
    if(image === null){
        return <div>No preview available</div>
    }
    return (
        <div className="shadow-xl rounded-xl h-full mb-2">
            <img className="h-[300px] mx-auto"  src={image.src} />
        </div>
    )
}


interface ImageBarProps {
    images:ProductImageSchema[];
    selectedImage:number;
    setSelectedImage:React.Dispatch<React.SetStateAction<number>>
}

const ImageBar:React.FC<ImageBarProps> = ({images, selectedImage, setSelectedImage})=>{


    const changePosterImage = (idx:number) => {
        setSelectedImage(idx)
    }

    console.log(selectedImage)
    return (
        <div className="flex flex-row bg-gray-200 md:absolute md:bottom-0 rounded-xl md:left-0 md:w-full">
            {images.map((image, idx:number)=>{return (
            <div className="flex flex-col" onClick={()=>changePosterImage(idx)}>
                <img className={"w-[50px] h-[60px] mx-2 shadow-xl p-2  bg-white rounded-xl mt-4 mb-2 hover:cursor-pointer " + ((idx===selectedImage)?"border-4 border-yellow-600":"")} src={image.src} />
            </div>)})}
        </div>
    )

}


const ImagePanel:React.FC<Props> = ({images}) => {

    const [selectedImage, setSelectedImage] = useState<number>(0)


    return (
        <>
            <PosterImage image={images.length>selectedImage?images[selectedImage]:null}/>
            <ImageBar images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} /   >
        </>
    )
}

export default ImagePanel