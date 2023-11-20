import UserInfoView from "./components/user_info_view";

export var gridListValues = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];

export function ProjectsPageView() {
    return <>
        <div className="h-screen relative">
            <div className="flex flex-col w-[400px] m-2 rounded-lg border-2 shadow-lg absolute right-48">
                <div className="flex flex-row justify-center items-center">
                    <UserInfoView isFirst={true}></UserInfoView>
                    <p className="font-bold">
                        vs.
                    </p>
                    <UserInfoView isFirst={false}></UserInfoView>
                </div>

                <div className="grid grid-cols-3 grid-rows-3 items-center justify-center m-auto">
                    {gridListValues.map((value, index) => <XObox />)}
                </div>

                <div className="flex items-center justify-end">
                    <button className="bg-[#FF7070] my-2 mr-10 rounded-lg px-8 py-0.5 font-bold text-white">
                        Start
                    </button>
                </div>
            </div>
        </div >
    </>;
}

function XObox() {
    return <div className="h-[100px] w-[100px] bg-[#EDCEFC] m-1 rounded-lg">
        01
    </div>;
}