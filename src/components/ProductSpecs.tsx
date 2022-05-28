import {ProductSpecificationSchema} from "../utillity/Constants"

interface Props {
    specs: ProductSpecificationSchema,
    category:string
}

const ProductSpecs:React.FC<Props> = ({specs, category}) => {
    return (
        <div className="bg-white text-center flex flex-col items-center rounded-xl my-4">
            <div className="text-2xl font-bold my-2">Specifications</div>
            <table className="table-fixed w-9/12 mx-4 mt-4 border-1 border-black">
                <thead>
                    <th className="text-xl border border-slate-300 bg-gray-600 text-white">Name</th>
                    <th className="text-xl border border-slate-300 bg-gray-600 text-white" >Value</th>
                </thead>
                <tr>
                    <td className="bg-gray-300 p-2 text-lg">Width</td>
                    <td className="bg-gray-300 p-2 tex-lg">{specs.width} {specs.measure_type}</td>
                </tr>
                <tr>
                    <td className="bg-gray-300 p-2 text-lg">Height</td>
                    <td className="bg-gray-300 p-2 tex-lg">{specs.height} {specs.measure_type}</td>
                </tr>
                <tr>
                    <td className="bg-gray-300 p-2 text-lg">Manufacturer</td>
                    <td className="bg-gray-300 p-2 tex-lg">{specs.manufacturer_name}</td>
                </tr>
                <tr>
                    <td className="bg-gray-300 p-2 text-lg">Model No.</td>
                    <td className="bg-gray-300 p-2 tex-lg">{specs.model_no}</td>
                </tr>
                <tr>
                    <td className="bg-gray-300 p-2 text-lg">Country of Origin</td>
                    <td className="bg-gray-300 p-2 tex-lg">{specs.country_of_origin}</td>
                </tr>
                <tr>
                    <td className="bg-gray-300 p-2 text-lg">Expiry Date</td>
                    <td className="bg-gray-300 p-2 tex-lg">{specs.expiry_date}</td>
                </tr>
                <tr>
                    <td className="bg-gray-300 p-2 text-lg">Category Name</td>
                    <td className="bg-gray-300 p-2 tex-lg">{category}</td>
                </tr>
                <tr>
                    <td className="bg-gray-300 p-2 text-lg">Release Date</td>
                    <td className="bg-gray-300 p-2 tex-lg">{specs.release_date}</td>
                </tr>
            </table>
        </div>
    )
}

export default ProductSpecs