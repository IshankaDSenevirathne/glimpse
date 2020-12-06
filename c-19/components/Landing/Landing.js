import Image from 'next/image';

import Prevention from "../Prevention/Prevention";
import Virus from "../Animations/Virus";

export default function Landing() {
    return (
        <div>
            <div className="min-h-screen min-w-screen">
                <div className="h-screen w-full grid grid-rows-6 md:grid-cols-12">
                    <div className="flex items-center justify-center md:col-span-6 md:row-span-6 row-span-2">
                        <div className="flex justify-center">
                            <div>
                                <div className="flex justify-center md:pt-0 pt-5 items-center">
                                    <Image
                                        src="/images/logo.svg"
                                        alt="Picture of the author"
                                        width={60}
                                        height={60}
                                    />
                                    <p className="font-mono text-4xl sm:text-6xl text-center">GLIMPSE</p>
                                </div>
                                <div>
                                    <p className="font-sans text-2xl mx-1 pt-10 sm:text-4xl text-center"><span className="text-red-600">COVID-19   </span> STATUS ANALYZER</p>
                                </div>
                                <div>
                                    <p className="hidden md:block font-sans text-base sm:text-2xl mx-1 md:mx-10 text-center pt-5">Get a glimpse of the current Coronavirus situation in Sri Lanka/World</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-4 md:col-span-6 md:row-span-6 flex justify-center items-start md:items-center">
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
