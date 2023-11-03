export default function ContactMeView() {
    return <>
        <div className="flex flex-col justify-center items-center w-[40%]">
            <div className="w-[80%] flex flex-col">
                <div className="flex flex-col items-start bg-white m-8 p-4 mb-2 rounded-lg shadow-sm shadow-gray-500">
                    <h1 className="text-3xl font-semibold">Contact me!</h1>
                    <input className="flex items-center justify-center w-[60%] rounded-md mt-4 p-[0.5%] placeholder-gray-400 place-content-start border-gray-400 border-2 focus:border-gray-700" placeholder="E-mail..." />
                    <textarea className="flex items-center justify-center rounded-md mt-4 p-[0.5%] w-full placeholder-gray-400 place-content-start border-gray-400 border-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Message..." autoCapitalize="true" rows={5} maxLength={1000} />
                </div>
                <button className="bg-purple-700 text-white px-8 py-2 mt-2 mr-8 rounded-md hover:bg-purple-900 ml-auto font-bold">Send</button>
            </div>
        </div>
    </>;
}