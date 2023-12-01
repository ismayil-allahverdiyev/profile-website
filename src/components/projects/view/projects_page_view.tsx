import { useState } from "react";
import UserInfoView from "./components/user_info_view";
import XObox from "./components/xo_box_view";

export function ProjectsPageView() {
    const [isStarted, setIsStarted] = useState(false);
    const [activePlayer, setActivePlayer] = useState("X");

    const [gridListValues, setGridListValues] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ])

    const handleXoState = (index: number) => {
        if (isStarted && gridListValues[index] === "") {
            const newGridListValues = [...gridListValues];
            newGridListValues[index] = activePlayer;
            setGridListValues(newGridListValues);
            if (activePlayer === "X") {
                setActivePlayer("O");
            } else {
                setActivePlayer("X");
            }
        }
    }

    const resetXoState = () => {
        setGridListValues([
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ]);
    }

    const handleEditState = () => {
        if (isStarted) {
            setIsStarted(false);
            resetXoState();
        } else {
            setIsStarted(true);
        }
    }
    return <>
        <div className="h-screen relative">
            <div className="flex flex-col w-[400px] m-2 rounded-lg border-2 shadow-lg absolute right-48">
                <div className="flex flex-row justify-center items-center">
                    <UserInfoView isFirst={true} readOnly={isStarted}></UserInfoView>
                    <p className="font-bold">
                        vs.
                    </p>
                    <UserInfoView isFirst={false} readOnly={isStarted}></UserInfoView>
                </div>

                <div className="grid grid-cols-3 grid-rows-3 items-center justify-center m-auto">
                    {gridListValues.map((value, index) => <XObox value=
                        {value} onClick={() => handleXoState(index)} />)}
                </div>

                <div className="flex items-center justify-end">
                    <button className="bg-[#FF7070] my-2 mr-10 rounded-lg px-8 py-0.5 font-bold text-white" onClick={handleEditState}>
                        {!isStarted ? "Start" : "Restart"}
                    </button>
                </div>
            </div>
        </div >
    </>;
}