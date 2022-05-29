import { BsSearch } from "react-icons/bs"
import React, {useState, Fragment} from "react"
import {Combobox, Transition} from "@headlessui/react"
import {HiSelector} from "react-icons/hi"
import { getData } from "../utillity/utils"


let timeout:NodeJS.Timeout|null = null
const SearchBar = () => {

    const [searchedItems, setSearchItems] = useState<string[]>([])

    const [selected, setSelected] = useState<string>("")

    const [searchValue, setSearchValue] = useState<string>("")
    


    const fetchItems = (value:string) => {
        if(value.trim() === ""){
            return
        }
        getData(`http://localhost:8000/ecommerce/search/${value}`)

    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        if(timeout!=null){
            clearTimeout(timeout)
        }
        timeout = setTimeout(()=>fetchItems(e.target.value), 5000)
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
                            {searchedItems.map((search)=><Combobox.Option value={"helloworld"}>
                                {({selected, active})=>(
                                    <div className={"p-1 " + (active?"bg-blue-600 text-white ":"bg-gray-100") }>{search}</div>
                                )}
                            </Combobox.Option>)}
                            <Combobox.Option value={"helloworld"} />
                            <Combobox.Option value={"helloworld"} />
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchBar