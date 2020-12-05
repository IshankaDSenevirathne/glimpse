import Coffee from "../Animations/Coffee";
import Image from 'next/image';

export default function Footer() {
    return (
        <div>
            <div className="bg-gray-700 md:flex justify-around p-10">
                <div>
                    <p className="text-lg text-white text-left">DESIGN & DEVELOPMENT</p>
                    <p className="text-base text-gray-500 text-left">ISHANKA D SENEVIRATHNE</p>
                    <Coffee />
                    <p className="text-base text-red-600 mt-2 text-left">MADE WITH LOVE AND COFFEE</p>
                    <a href="https://github.com/IshankaDSenevirathne"  target="_blank">
                        <button  type="button" className="border border-red-500 bg-red-500 text-white rounded-md px-2 py-1 mt-5 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                            <Image
                                src="/images/icons/github.svg"
                                alt="Picture of the author"
                                width={24}
                                height={24}
                            />
                        </button>
                    </a>
                </div>
                <div>
                    <p className="text-base text-white text-left mt-5 md:mt-0 ">REFERENCES</p>
                    <div className="grid grid-rows-2">
                        <a href="https://www.covid19api.dev/"  target="_blank">
                            <button  type="button" className="text-white mt-1 transition duration-500 ease select-none hover:text-red-600 focus:outline-none focus:shadow-outline">
                                Global Coronavirus API
                            </button>
                        </a>
                        <a href="https://hpb.health.gov.lk/ta/api-documentation" target="_blank">
                            <button type="button" className="text-white mt-1 transition duration-500 ease select-none hover:text-red-600 focus:outline-none focus:shadow-outline">
                                Sri Lanka Health Promotion Bureau
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-600 p-3 text-center">
                <p className="text-center text-white">
                    Copyright &copy; {new Date().getFullYear()}{" "}
                    <span className=" text-red-600">C19</span>
                </p>
            </div>  
        </div>
    )
}