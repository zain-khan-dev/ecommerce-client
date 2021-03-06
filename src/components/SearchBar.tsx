import { BsSearch } from "react-icons/bs"
import React, {useState, Fragment} from "react"
import {Combobox, Transition} from "@headlessui/react"
import {HiSelector} from "react-icons/hi"
import { getData } from "../utillity/utils"
import {ProductSchema} from "../utillity/Constants"
import {Link} from "react-router-dom"


let timeout:NodeJS.Timeout|null = null

const SearchBar = () => {

    const [searchedItems, setSearchItems] = useState<ProductSchema[]>([])

    const [selected, setSelected] = useState<string>("")

    const [searchValue, setSearchValue] = useState<string>("")
    
    const [fetched, setFetched] = useState<boolean>(false)

    const fetchItems = (value:string) => {
        if(value.trim() === ""){
            return
        }
        console.log("here")
        getData(`http://localhost:8000/ecommerce/search/${value}`)
        .then((result)=>{
            setSearchItems(result.data.map((item:any)=>item))
        })
        .catch((e)=>{
            console.log(e)
        })
        setFetched(true)
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        setFetched(false)
        if(timeout!=null){
            clearTimeout(timeout)
        }
        timeout = setTimeout(()=>fetchItems(e.target.value), 1500)
    }

    return (
        <div className="flex-1 mx-2 mt-1 ">
            <Combobox value={selected} onChange={setSelected}   >
                <div className="relative mt-1">
                    <div className="relative mr-2">
                        <Combobox.Input className="focus:outline-none pl-1  w-full py-1 bg-gray-100" value={searchValue} 
                        onChange={handleInputChange}/>
                        <Combobox.Button className="inline-block absolute inset-y-0 right-0">
                            <HiSelector/>
                        </Combobox.Button>
                    </div>
                    <Transition 
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                afterLeave={() => setSearchValue('')}
                    >
                        <Combobox.Options className="absolute overflow-auto w-full pr-2">
                            {searchedItems.length === 0 && searchValue!="" && fetched   
                            ?<div className="relative cursor-default select-none py-2 px-4 text-gray-700 bg-white">Nothing found.</div>
                            :searchedItems.map((search)=><Combobox.Option value={search}>
                                {({selected, active})=>(
                                    <Link to={`/products/${search.id}`}><div className={"p-1 " + (active?"bg-blue-600 text-white ":"bg-gray-100") }>{search.name}</div></Link>
                                )}
                            </Combobox.Option>)}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchBar