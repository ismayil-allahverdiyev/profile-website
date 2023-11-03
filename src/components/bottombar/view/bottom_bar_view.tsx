import { GiHalfDead } from 'react-icons/gi'

export default function BottomBarView() {
    return <>
        <div className="flex flex-col bg-[#EDCEFC]">
            <div className="flex justify-between">
                <div className="text-[#390ca380] flex flex-col md:text-7xl sm:text-6xl lg:text-8xl text-4xl justify-center items-start m-8 ml-24 mt-16 relative w-full">
                    <p className="lg:hover:text-9xl md:hover:text-8xl sm:hover:text-7xl hover:text-5xl hover:text-[#3A0CA3] ease-in-out duration-200 p-4">Home page</p>
                    <p className="lg:hover:text-9xl md:hover:text-8xl sm:hover:text-7xl hover:text-5xl hover:text-[#3A0CA3] ease-in-out duration-200 p-4">Projects</p>
                    <p className="lg:hover:text-9xl md:hover:text-8xl sm:hover:text-7xl hover:text-5xl hover:text-[#3A0CA3] ease-in-out duration-200 p-4">Skills</p>
                    <p className="lg:hover:text-9xl md:hover:text-8xl sm:hover:text-7xl hover:text-5xl hover:text-[#3A0CA3] ease-in-out duration-200 p-4">Order page</p>
                    <p className="lg:text-9xl md:text-7xl sm:text-[7xl] text-[0] font-bold text-white absolute top-[50%] bottom-[50%] right-24">
                        <span className="lg:text-7xl md:text-5xl text-[0]">Code: </span>200
                    </p>
                    <div className="flex h-16 w-16 bg-white absolute bottom-0 right-0 rounded-full">
                        <div className="flex h-14 w-14 m-1 bg-[#2d133f] absolute bottom-0 right-0 rounded-full">
                            <GiHalfDead className="fill-white m-auto" size={32} />
                        </div>
                    </div>
                </div>

            </div>
            <h1 className="text-center text-white font-semibold p-1">Copyright c</h1>
        </div>
    </>
}