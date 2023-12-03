import { useState } from "react";
import UserInfoView from "./user_info_view";
import XObox from "./xo_box_view";

export default function GameBoardView() {

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
        }
    }

    if (winner === "")
        checkIfFinished();

    return <>
        <div className="flex flex-col w-[400px] m-2 rounded-lg border-2 shadow-lg absolute right-48">
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
                        {winner === "X" ? player1 : player2}
                    </p>
                    <p className=" font-extrabold">WON!</p>
                </div>
            </div>

            <div className="flex items-center justify-end">
                <button className="bg-[#FF7070] my-2 mr-10 rounded-lg px-8 py-0.5 font-bold text-white" onClick={handleEditState}>
                    {!isStarted ? "Start" : "Restart"}
                </button>
            </div>
        </div>

    </>;
}