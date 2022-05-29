import {Menu, Transition} from "@headlessui/react"
import { Fragment } from "react"
import {Link} from "react-router-dom"
import {BsChevronDown} from "react-icons/bs"

const DropDown = () => {
    return (
        <Menu as="div" className="relative inline-block text-left mt-2" >
            <div>
                <Menu.Button>Login/Signup <BsChevronDown className="inline-block ml-0.5" /></Menu.Button>

            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                >
                <Menu.Items className="p-2  absolute left-0 mt-4  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item >
                    {({ active }) => (
                        <Link
                        className={active?"block p-2 bg-blue-600 text-white" :"p-2 block"}
                        to="/login">
                            Login
                        </Link>
                    )}
                    </Menu.Item>
                    <Menu.Item >
                    {({ active }) => (
                        <Link
                        className={active?"block bg-blue-600 text-white p-2":"block p-2"}
                        to="/signup">
                            Signup
                        </Link>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>

    )
}

export default DropDown