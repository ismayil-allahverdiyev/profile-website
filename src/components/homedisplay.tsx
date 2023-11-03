import { PiSparkleFill } from "react-icons/Pi";
import Me from "../assets/me.png";

export default function HomeDisplay() {
    return (
        <div className="flex flex-row">
            <div className="min-h-screen flex flex-col lg:justify-center md:justify-center sm:justify-center justify-center text-center mx-auto text-3xl font-semibold pb-28 relative">
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
                <img src={Me} alt="" className="lg:p-24 md:p-24 sm:p-0 sm:m-8 m-8 p-0 absolute right-0 top-0 lg:w-0 md:w-0 w-[50%]" />

            </div>
            <div className="min-h-screen lg:p-24 md:p-0 sm:p-0 p-0 flex flex-col justify-center lg:max-w-[50%] md:max-w-[30%] sm:max-w-[0] max-w-[0] text-center mx-auto ">
                <img src={Me} alt="" className="md:p-0 lg:p-0 p-0" />
            </div>
        </div>
    );
};