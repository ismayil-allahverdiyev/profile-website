import { PiSparkleFill } from "react-icons/Pi";

export default function HomeDisplay() {
    return (
        <div className="h-screen flex flex-row ">
            <div className="h-screen flex flex-col justify-center max-w-[50%] text-center mx-auto text-3xl font-semibold pb-28">
                <p className="text-left">I am <span className="font-bold text-[#7400b8] text-4xl">Isi</span>.</p>
                <p className="text-left pt-2">Elevating Ideas through <span> </span>
                    <div className="relative inline-block">
                        <p className="text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text relative">Elegant Code!</p>
                        <div className="absolute -top-1 right-8 ">
                            <PiSparkleFill size={20} color="gold" />
                        </div>
                    </div>
                </p>
                <p className="text-left pt-12 text-gray-400">
                    "Procrastination is the thief of time." <br /><span className="pl-[10%]">by Edward Young</span>
                </p>
            </div>
            <div className="h-screen flex flex-col justify-center max-w-[50%] text-center mx-auto ">
                <h1>Welcome to my page!</h1>
                <h1>Home Display</h1>
            </div>
        </div>
    );
};