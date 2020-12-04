import Link from 'next/link'
export default function Footer() {
    return (
        <div>
            <div className="bg-gray-700 md:flex justify-between p-10">
                <div>
                    <p className="text-lg text-white text-left">DESIGN & DEVELOPMENT</p>
                    <p className="text-base text-gray-500 text-left">ISHANKA D SENEVIRATHNE</p>
                    <a href="https://github.com/IshankaDSenevirathne"  target="_blank">
                        <button  type="button" className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                            Github
                        </button>
                    </a>
                </div>
                <div>
                    <p className="text-base text-white text-left">REFERENCES</p>
                    <a href="https://www.covid19api.dev/"  target="_blank">
                        <button  type="button" className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 mt-10 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                            covid19api
                        </button>
                    </a>
                    <a href="https://hpb.health.gov.lk/ta/api-documentation" target="_blank">
                        <button type="button" className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 mt-10 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                            Github
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}