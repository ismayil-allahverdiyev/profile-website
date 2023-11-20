import { FaRegCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface Props {
    isFirst: boolean;
}

export default function UserInfoView(props: Props) {
    return <div className="flex border-2 rounded-md w-1/3 m-3 items-center g">
        <div className={`flex m-1 p-1 w-6 h-6 items-center justify-center rounded-sm ${props.isFirst ? "bg-[#BCE3FF]" : "bg-[#FFBEBE]"}`}>
            {props.isFirst ? <IoClose className="fill-white" /> : <FaRegCircle className="fill-white" />}
        </div>
        <input type="text" className="p-2 rounded-md focus:outline-none w-full" placeholder="Player 2"></input>
    </div>;
}