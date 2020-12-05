import Prevention from "../Prevention/Prevention";
import Virus from "../Animations/Virus";

export default function Landing() {
    return (
        <div>
            <div className="min-h-screen min-w-screen">
                <div className="h-screen grid grid-rows-6">
                    <div className="flex items-center justify-center row-span-2">
                        <div className="flex justify-center items-center">
                            <div>
                                <div>
                                    <p className="font-mono text-4xl sm:text-6xl text-center pt-5">COVIDOMETER</p>
                                </div>
                                <div>
                                    <p className="text-2xl text-gray-400 text-center">({new Date().getFullYear()})</p>
                                </div>
                                <div>
                                    <p className="font-sans text-2xl mx-1 md:mx-10 pt-20 sm:text-4xl text-center">OVERVIEW OF CURRENT COVID STATUS IN SRI LANKA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-4 flex justify-center items-top">
                        <div className="flex justify-center">
                            <Virus/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Prevention/>
            </div>
        </div>
    )
}
