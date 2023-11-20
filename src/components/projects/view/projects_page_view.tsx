export function ProjectsPageView() {
    return <>
        <div className="h-screen relative">
            <div className="flex flex-col w-[400px] h-[450px] m-2 rounded-lg border-2 shadow-lg absolute right-48">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex border-2 rounded-md w-1/3 m-3 items-center g">
                        <div className="flex m-1 p-1 bg-[#BCE3FF] w-6 h-6 items-center justify-center rounded-sm">
                            <p className="font-bold text-white">x</p>
                        </div>
                        <input type="text" className="p-2 rounded-md focus:outline-none w-full" placeholder="Player 2"></input>
                    </div>
                    <p className="font-bold">
                        vs.
                    </p>
                    <div className="flex border-2 rounded-md w-1/3 m-3 items-center g">
                        <div className="flex m-1 p-1 bg-[#FFBEBE] w-6 h-6 items-center justify-center rounded-sm">
                            <p className="font-bold text-white">o</p>
                        </div>
                        <input type="text" className="p-2 rounded-md focus:outline-none w-full" placeholder="Player 2"></input>
                    </div>
                </div>
            </div>
        </div >
    </>;
}