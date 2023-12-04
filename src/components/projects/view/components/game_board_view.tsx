import { useState } from "react";
import UserInfoView from "./user_info_view";
import XObox from "./xo_box_view";
import { RiBubbleChartLine } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";

export default function GameBoardView() {

    const [isShown, setIsShown] = useState(false);

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    const [winner, setWinner] = useState("");
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

    const showTheGameBoardView = () => {
        setIsShown((prev) => !prev);
    }

    const handleEditState = () => {
        if (isStarted) {
            setIsStarted(false);
            resetXoState();
            setActivePlayer("X");
            setWinner("");
        } else {
            if (player1 === "" || player2 === "") {
                alert("Please fill in the player names");
            }
            else {
                setIsStarted(true);
            }
        }
    }

    const checkIfFinished = () => {
        if (gridListValues[0] !== "" && gridListValues[0] === gridListValues[1] && gridListValues[1] === gridListValues[2]) {
            setWinner(gridListValues[0]);
        } else if (gridListValues[3] !== "" && gridListValues[3] === gridListValues[4] && gridListValues[4] === gridListValues[5]) {
            setWinner(gridListValues[3]);
        } else if (gridListValues[6] !== "" && gridListValues[6] === gridListValues[7] && gridListValues[7] === gridListValues[8]) {
            setWinner(gridListValues[6]);
        } else if (gridListValues[0] !== "" && gridListValues[0] === gridListValues[3] && gridListValues[3] === gridListValues[6]) {
            setWinner(gridListValues[0]);
        } else if (gridListValues[1] !== "" && gridListValues[1] === gridListValues[4] && gridListValues[4] === gridListValues[7]) {
            setWinner(gridListValues[1]);
        } else if (gridListValues[2] !== "" && gridListValues[2] === gridListValues[5] && gridListValues[5] === gridListValues[8]) {
            setWinner(gridListValues[2]);
        } else if (gridListValues[0] !== "" && gridListValues[0] === gridListValues[4] && gridListValues[4] === gridListValues[8]) {
            setWinner(gridListValues[0]);
        } else if (gridListValues[2] !== "" && gridListValues[2] === gridListValues[4] && gridListValues[4] === gridListValues[6]) {
            setWinner(gridListValues[2]);
        } else if (!gridListValues.includes("")) {
            setWinner("Y");
        }
    }

    if (winner === "")
        checkIfFinished();

    return <>
        <div className={`flex flex-row fixed ease-in-out duration-300 ${!isShown ? "-right-[400px]" : "right-48"}`}>
            <button onClick={showTheGameBoardView} className="flex items-center h-[50px] mt-[40px] p-2 shadow-xl rounded-l-lg border-t-2 border-l-2 border-b-2 border-gray-200">
                {isShown ? <IoCloseCircle className="fill-[#7400b8]" /> : <RiBubbleChartLine className="fill-[#7400b8]" />}
                <p className="font-bold ml-2">Hmm</p>
            </button>
            <div className="flex flex-col w-[400px] mt-2 rounded-lg border-2 shadow-lg" >
                <p className=" flex pt-2 font-bold justify-center">
                    Quick match?
                </p>
                <div className="flex flex-row justify-center items-center">
                    <UserInfoView isFirst={true} readOnly={isStarted} onChange={(name: String) => setPlayer1(`${name}`)}></UserInfoView>
                    <p className="font-bold">
                        vs.
                    </p>
                    <UserInfoView isFirst={false} readOnly={isStarted} onChange={(name: String) => setPlayer2(`${name}`)}></UserInfoView>
                </div>

                <div className="flex flex-col items-center justify-center relative">
                    <div className="grid grid-cols-3 grid-rows-3 items-center justify-center m-auto">
                        {gridListValues.map((value, index) => <XObox key={index} value=
                            {value} onClick={() => handleXoState(index)} />)}
                    </div>
                    <div className={`flex flex-col items-center justify-center absolute w-[320px] h-[320px] bg-gradient-to-br from-slate-300/80 via-35% via-slate-100/80 to-slate-200/80 rounded-lg${winner !== "" ? "" : " hidden"}`}>
                        <p className={`text-[60px] font-bold ${winner === "X" ? "text-[#1689E2]" : "text-[#FF7777]"}`}>
                            {winner === "X" ? player1 : winner === "O" ? player2 : ""}
                        </p>
                        <p className=" font-extrabold">{winner === "Y" ? "It is a tie!" : "WON!"}</p>
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <button className="bg-[#FF7070] my-2 mr-10 rounded-lg px-8 py-0.5 font-bold text-white" onClick={handleEditState}>
                        {!isStarted ? "Start" : "Reset"}
                    </button>
                </div>
            </div>

        </div>
    </>;
}