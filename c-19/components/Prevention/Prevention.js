import Image from 'next/image';

export default function Prevention() {

    return (
        <div>
            <div className="mt-5 md:mt-20">
                <p className="font-mono sm:text-6xl text-4xl text-center">Covid-19 Prevention</p>
            </div>
            <div className="mt-5 mb-20">
                <p className="font-mono sm:text-2xl text-xl text-center">Lets reshape the world together.</p>
            </div>
            <div className="mt-5 mb-5">
                <div className="bg-gray-800 lg:py-12 lg:flex lg:justify-center pl-1 pr-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-md">
                            <div className="p-5 bg-blue-200 rounded-t-md md:rounded-t-none md:rounded-l-md flex justify-center">
                                <Image
                                    src="/images/social-distancing.svg"
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                                <h2 className="text-3xl text-gray-800 font-bold">SOCIAL <span className="text-blue-600">DISTANCING</span></h2>
                                <p className="mt-4 text-gray-600">Physical distancing helps limit the spread of COVID-19 – this means we keep a distance of at least 1m from each other and avoid spending time in crowded places or in groups.</p>
                            </div>
                        </div>
                        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-md">
                            <div className="p-5 bg-green-200 rounded-t-md md:rounded-t-none md:rounded-l-md flex justify-center">
                                <Image
                                    src="/images/stay-home.svg"
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                                <h2 className="text-3xl text-gray-800 font-bold">STAY AT <span className="text-green-600">HOME</span></h2>
                                <p className="mt-4 text-gray-600">Stay home stay safe. Stay physically fit. Exercise regulary. Eat a nutritious diet. Don’t smoke.</p>
                            </div>
                        </div>
                        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-md">
                            <div className="p-5 bg-yellow-200 rounded-t-md md:rounded-t-none md:rounded-l-md flex justify-center">
                                <Image
                                    src="/images/hand-washing.svg"
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                                <h2 className="text-3xl text-gray-800 font-bold">WASH YOUR <span className="text-yellow-600">HANDS</span></h2>
                                <p className="mt-4 text-gray-600">You should also wash your hands with soap and water for at least 20 seconds or use a hand sanitizer with at least 60% alcohol to clean hands BEFORE and AFTER.</p>
                            </div>
                        </div>
                        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-md">
                            <div className="p-5 bg-red-200 rounded-t-md md:rounded-t-none md:rounded-l-md flex justify-center">
                                <Image
                                    src="/images/medical-mask.svg"
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                                <h2 className="text-3xl text-gray-800 font-bold">WEAR A <span className="text-red-600">MASK</span></h2>
                                <p className="mt-4 text-gray-600">You should wear a mask, even if you do not feel sick.The main function of wearing a mask is to protect those around you, in case you are infected but not showing symptoms.</p>
                            </div>
                        </div>
                        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-md">
                            <div className="p-5 bg-pink-200 rounded-t-md md:rounded-t-none md:rounded-l-md flex justify-center">
                                <Image
                                    src="/images/check-temperature.svg"
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                                <h2 className="text-3xl text-gray-800 font-bold">CHECK YOUR <span className="text-pink-600">TEMPERATURE</span></h2>
                                <p className="mt-4 text-gray-600">Regularly check the temperature of you and your family members to ensure all members are healthy.</p>
                            </div>
                        </div>
                        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-md">
                            <div className="p-5 bg-purple-200 rounded-t-md md:rounded-t-none md:rounded-l-md flex justify-center">
                                <Image
                                    src="/images/notifications.svg"
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                                <h2 className="text-3xl text-gray-800 font-bold">STAY <span className="text-purple-600">INFORMED</span></h2>
                                <p className="mt-4 text-gray-600">Always stay informed about the updates regarding the pandemic so you could act accordingly as the situation changes.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
