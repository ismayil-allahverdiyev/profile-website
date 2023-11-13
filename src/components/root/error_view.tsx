import NavBar from "../navbar";

export default function ErrorView() {
    return <>
        <NavBar />
        <div className="flex flex-col items-center justify-center p-16 text-gray-400">
            <p className="font-semibold text-3xl text-">
                An error occurred.
            </p>
            <p className="font-bold text-5xl p-4 text-[#FF7070]">
                Path not found!
            </p>
        </div>
    </>;
}