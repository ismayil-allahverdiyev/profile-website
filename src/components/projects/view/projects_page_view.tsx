import { useState } from "react";
import { MdCancel } from "react-icons/md";
import GameBoardView from "./components/game_board_view";

export function ProjectsPageView() {

    const [isFirstBoxOn, setIsFirstBoxOn] = useState(false);
    const [issecondBoxOn, setIssecondBoxOn] = useState(false);
    const [isThirdBoxOn, setIsThirdBoxOn] = useState(false);
    const [isFourthBoxOn, setIsFourthBoxOn] = useState(false);
    const [isFifthBoxOn, setIsFifthBoxOn] = useState(false);

    const handleFirstBoxState = () => {
        setIsFirstBoxOn(true);
    }

    const handleSecondBoxState = () => {
        setIssecondBoxOn((prev) => !prev);
    }

    const handleThirdBoxState = () => {
        setIsThirdBoxOn((prev) => !prev);
    }

    const handleFourthBoxState = () => {
        setIsFourthBoxOn((prev) => !prev);
    }

    const handleFifthBoxState = () => {
        setIsFifthBoxOn((prev) => !prev);
    }

    return <>
        <div className="h-screen relative">
            <GameBoardView />
            <div className={`w-full h-full bg-white rounded-xl fixed border-2 border-gray-300 ${!isFirstBoxOn ? "-left-[58%] -top-[50%] hover:-left-[20%] hover:-top-[25%] hover:z-10" : "-left-[0%] -top-[0%] z-10"} ease-in-out duration-200`} onClick={handleFirstBoxState}>
                <div className="h-28"></div>
                <p>222</p>
            </div>
            <div className={`w-full bg-white rounded-xl fixed border-2 border-gray-300 ${!issecondBoxOn ? "h-[25%] -left-[55%] top-[52%] hover:-left-[20%] hover:top-[45%] hover:h-[45%] hover:z-10" : ""} ease-in-out duration-200`} onClick={handleSecondBoxState}></div>
            <div className={`w-full h-[25%] bg-white rounded-xl fixed border-2 border-gray-300 -left-[52%] top-[80%] ease-in-out duration-200`}></div>
            <div className={`w-full bg-white rounded-xl fixed border-2 border-gray-300 ${!isThirdBoxOn ? "h-[25%] -right-[46%] top-[40%] hover:-right-[20%] hover:top-[25%] hover:h-[50%] hover:z-10" : ""} ease-in-out duration-200`} onClick={handleThirdBoxState}></div>
            <div className={`w-full h-full bg-white rounded-xl fixed border-2 border-gray-300 ${!isFourthBoxOn ? "-right-[44%] -top-[62%] hover:-right-[20%] hover:-top-[25%] hover:z-10" : ""} ease-in-out duration-200`} onClick={handleFourthBoxState}></div>
            <div className={`w-full h-full bg-white rounded-xl fixed border-2 border-gray-300 ${!isFifthBoxOn ? "-right-[50%] top-[68%] hover:-right-[35%] hover:top-[45%]" : "-right-[40%] top-[50%]"} ease-in-out duration-200`} onClick={handleFifthBoxState}></div>
        </div >
    </>;
}