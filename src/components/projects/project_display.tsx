import { IoIosArrowForward } from 'react-icons/io';

export default function ProjectDisplay() {
    return <>
        <div className="h-screen relative text-center">
            <div>
                <h1 className="flex w-screen h-screen fixed items-center pl-24 text-9xl tracking-[30px] font-semibold" >Project Display</h1>
            </div>
            <div className='h-screen flex flex-row justify-end items-center right-0'>
                <div className="container bg-black w-[450px] h-[80%] rounded-3xl">

                </div>
                <div className="container bg-black w-[450px] h-[80%] rounded-3xl ml-16">

                </div>
                <div className="container bg-gray-600 w-[225px] h-[80%] rounded-bl-3xl rounded-tl-3xl ml-16 flex items-center justify-center">
                    <IoIosArrowForward size={100} color="white" />
                </div>
            </div>
        </div>
    </>;
}