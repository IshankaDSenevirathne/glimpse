import Image from "next/image";

export default function Navigation(props) {
    const {getPage}=props
    return (
        <div className="shadow-md">
            <div className="md:hidden flex space-x-4">
                <button onClick={()=>getPage("prev")} className="p-0 w-10 h-10 bg-red-600 rounded hover:bg-red-700 transition ease-in duration-200 focus:outline-none">
                    <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-4 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={()=>getPage("next")} className="p-0 w-10 h-10 bg-red-600 rounded hover:bg-red-700 transition ease-in duration-200 focus:outline-none">
                    <svg className="h-7 w-7" fill="none" viewBox="-6 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="hidden md:block w-screen bg-gray-700">
                <div className="flex items-center h-16">
                    <div className="grid grid-cols-2 flex w-screen">
                        <div className="flex ml-40 justify-start col-span-1">
                            <button onClick={()=>getPage("home")}  type="button" className="focus:outline-none">
                                <Image
                                    src="/images/logo.svg"
                                    alt="Picture of the author"
                                    width={50}
                                    height={50}
                                />
                            </button>
                        </div>
                        <div className="flex justify-end col-span-1 gap-4 mr-2">
                            
                            <button  onClick={()=>getPage("sl")} type="button" className="border border-red-500 bg-red-500 text-white rounded-md px-2 my-1 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                LOCAL ANALYTICS
                            </button>
                            <button  onClick={()=>getPage("gl")} type="button" className="border border-red-500 bg-red-500 text-white rounded-md px-2 my-1 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline mr-5">
                                GLOBAL ANALYTICS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
