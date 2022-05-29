import { BsSearch } from "react-icons/bs"
import React, {useState} from "react"

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState<string>("")


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setSearchValue(e.target.value)
    }

    return (
        <div className="flex-1 flex flex-col relative mx-4 max-w-lg max-h-[40px] bg-white px-2 mt-1 rounded-xl">
            <div className="flex flex-row relative rounded-xl">
                <BsSearch className="absolute left-2 top-2 "/>
                <input value={searchValue} onChange={handleSearchChange} className="ml-8 w-full rounded-xl focus:outline-none " />
            </div>
        </div>     
    )
}

export default SearchBar