import { IoIosArrowForward } from 'react-icons/io';

export default function ProjectDisplay() {
    return <>
        <div className="flex h-screen relative">
            <h1 className="flex h-screen justify-center items-center pl-24 text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[30px] font-semibold " >Project Display</h1>
            <div className='flex h-screen items-center top-[0%] bottom-[0%] right-0 absolute'>
                <div className="container bg-black w-[450px] h-[80%] rounded-3xl"></div>
                <div className="container bg-black w-[450px] h-[80%] rounded-3xl ml-16"></div>
                <div className="container bg-gray-600 w-[225px] h-[80%] rounded-bl-3xl rounded-tl-3xl ml-16 flex items-center justify-center">
                    <IoIosArrowForward size={100} color="white" />
                </div>
            </div>
        </div>
    </>;
}