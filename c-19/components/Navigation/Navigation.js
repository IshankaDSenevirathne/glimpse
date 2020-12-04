
export default function Navigation(props) {
    const {getPage}=props
    return (
        <div className="flex space-x-4">
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
    )
}
