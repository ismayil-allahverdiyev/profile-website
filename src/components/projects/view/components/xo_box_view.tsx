import { FaRegCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function XObox({ value = "", onClick = () => { } }) {
    return <button className="flex h-[100px] w-[100px] bg-[#F6E3FF] hover:bg-[#ebcff8] m-1 rounded-lg justify-center items-center" onClick={onClick}>
        {value === "X" ? <IoClose className="w-[90px] h-[90px] font-bold fill-[#45AEFF]" /> : value === "O" ? <FaRegCircle className="w-[50px] h-[50px] font-bold fill-[#FF7A7A]" /> : ""}
    </button>;
}