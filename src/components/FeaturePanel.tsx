import {FeatureSchema} from "../utillity/Constants"


interface Props {
    features:FeatureSchema[]
}


const FeaturePanel:React.FC<Props> = ({features}) => {
    return (
        <ul className="list-disc list-inside mt-4">
            {features.map((feature)=>
            (<li className="mt-2">{feature.description}</li>))}
        </ul>
    )
}

export default FeaturePanel