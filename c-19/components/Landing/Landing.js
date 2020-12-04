import Prevention from "../Prevention/Prevention";
import Image from 'next/image';
import Virus from "../Animations/Virus";

export default function Landing() {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div>
                    <div>
                        <p className="font-mono text-4xl sm:text-6xl text-center pt-5">COVIDOMETER</p>
                    </div>
                    <div>
                        <p className="text-2xl text-gray-400 text-center">({new Date().getFullYear()})</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
               <Virus/>
            </div>
            <div>
                <Prevention/>
            </div>
        </div>
    )
}
