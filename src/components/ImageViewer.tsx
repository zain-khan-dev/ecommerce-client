import {ProductImageSchema} from "../utillity/Constants"
import ImagePanel from "./ImagePanel"


interface Props {
    images: ProductImageSchema[]
}

const ImageViewer:React.FC<Props> = ({images}) => {

    console.log(images)

    return (
        <div className="basis-1/3 bg-white mx-2" >
            {images.length === 0?
                <div>No preview available</div>:
                <ImagePanel images={images} />
                // <div>{images.map((image, idx)=>{return (idx!=0?<div>{image.src}</div>:<div></div>)})}
                // </div>
            }
        </div>
    )

    
}

export default ImageViewer