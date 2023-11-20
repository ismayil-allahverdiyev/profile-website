import "../App.css"
import { HiMenu, HiMenuAlt3 } from "react-icons/hi"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return <>
        <div className="top-0 left-0 right-0 sticky z-20 bg-white shadow-sm ease-in-out duration-100">
            <div className="flex flex-row justify-between p-4 max-w-[1240px] mx-auto w-[100%] text-[#7400b8]">
                <h1 className="text-3xl font-bold ">Software Developer.</h1>
                <ul className={"lg:flex md:flex hidden font-bold "}>
                    <li className="px-4"><NavLink to={"/projects"} className={({ isActive }) => (isActive ? "a" : "b")}>Projects</NavLink></li>
                    <li className="px-4">Skills</li>
                    <li className="px-4">Order</li>
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <HiMenuAlt3 size={25} /> : <HiMenu size={25} />}
                </div>
                <div className={!nav ? "fixed left-[-100%]" : "fixed left-0 top-0 w-[60%] border-r border-r-grey-900 h-full items-center bg-white ease-in-out duration-300 "}>
                    <h1 className="w-full text-3xl font-bold text-purple-700 m-4">Software Developer.</h1>
                    <ul className="font-bold text-left  uppercase">
                        <li className="p-4 border-b border-b-gray-300">Home</li>
                        <li className="p-4 border-b border-b-gray-300 ">Projects</li>
                        <li className="p-4 border-b border-b-gray-300">Skills</li>
                        <li className="p-4 border-b border-b-gray-300">Order</li>
                    </ul>
                </div>
            </div>
        </div>
    </>;
}

