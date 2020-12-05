export function LocalAnalytics(props) {
    const {local}=props;
    return (
        <div className="flex items-center bg-gray-800 text-gray-800">
            <div className="p-2 w-full">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                            <svg id="Layer_1" data-name="Layer 1" width="23.91" height="24" viewBox="0 0 23.91 24"><defs><clipPath id="clip-path" transform="translate(-1128.05 -348)"><rect x="1128" y="348" width="24" height="24" style={{fill:"none"}}/></clipPath></defs><title>dropper</title><g style={{clipPath:"url(#clip-path)"}}>
                            <path d="M1130.05,368.66l-1.73,1.73a.94.94,0,0,0,0,1.33,1,1,0,0,0,1.34,0l1.72-1.72a3,3,0,0,1-.77-.57,3,3,0,0,1-.56-.77Zm0,0" transform="translate(-1128.05 -348)" style={{fill:"#77a7a2"}}/><path d="M1151.33,351.91a2.33,2.33,0,0,0-3.29-3.29h0l-3.43,3.43,3.3,3.29,3.42-3.43Zm0,0" transform="translate(-1128.05 -348)" style={{fill:"#1b2327"}}/></g><path d="M1130.57,365a3.13,3.13,0,0,0-.56,3.64,3,3,0,0,0,.56.77,3,3,0,0,0,.77.57,3.11,3.11,0,0,0,3.64-.57l10.75-10.73-4.41-4.42Zm0,0" transform="translate(-1128.05 -348)" style={{fill:"#81b6b2"}}/><path d="M1143.28,350.66a1.52,1.52,0,0,0-2.13,0l-.7.71a1.5,1.5,0,0,0,0,2.13l6.06,6.06a1.5,1.5,0,0,0,2.13,0l.7-.71a1.5,1.5,0,0,0,0-2.13l-1.38-1.38-3.3-3.29Zm0,0" transform="translate(-1128.05 -348)" style={{fill:"#2b3237"}}/></svg>                        
                        </div>
                        <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">New Cases</div>
                            <div className="font-bold text-lg">{local.local_new_cases}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-green-500">
                            <svg id="Layer_1" data-name="Layer 1" width="24" height="24" viewBox="0 0 24 24"><title>heart-beat</title><path d="M1151.54,375.15H1146a.48.48,0,0,0-.43.33l-1.3,3.6-1-5.05a.48.48,0,0,0-.45-.39.47.47,0,0,0-.45.4l-2.59,13.08-1.58-19.65a.48.48,0,0,0-.38-.46.45.45,0,0,0-.5.28l-3.57,8.88h-5.24a.51.51,0,0,0,0,1H1134a.45.45,0,0,0,.42-.29l3-7.39,1.69,21a.49.49,0,0,0,.43.47h0a.49.49,0,0,0,.45-.4l2.79-14.12.92,4.42a.5.5,0,0,0,.42.4.48.48,0,0,0,.46-.33l1.73-4.8h5.23a.51.51,0,0,0,0-1Zm0,0" transform="translate(-1128 -367)" style={{fill:"#df2020"}}/></svg>
                        </div>
                        <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">New Deaths</div>
                            <div className="font-bold text-lg">{local.local_new_deaths}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-yellow-100 text-orange-500">
                            <svg id="Layer_1" data-name="Layer 1" width="24" height="24" viewBox="0 0 24 24"><title>stethoscope</title><path d="M1129.79,361.4a9.24,9.24,0,0,0-.28,4.32c.16,1.65.31,3.22-.64,4.2-.74.78-2.13,1.19-4.26,1.26s-3.58-.37-4.36-1.29c-1.4-1.66-.48-4.73.13-6.77a14.34,14.34,0,0,0,.43-1.61h-.29a5.88,5.88,0,0,1-.6,0c-.07.38-.22.88-.38,1.41-.66,2.2-1.65,5.51,0,7.49.9,1.07,2.46,1.61,4.63,1.61h.44c2.38-.07,4-.57,4.89-1.53,1.19-1.25,1-3.06.86-4.81-.22-2.35-.43-4.58,2.1-5.91a2.84,2.84,0,0,1-.44-.7,4.65,4.65,0,0,0-2.26,2.36Zm0,0" transform="translate(-1113.86 -348)" style={{fill:"#2b3237"}}/><path d="M1120.81,361.52c2.54-.12,4.23-1.71,4.42-2.49a7.62,7.62,0,0,1-4.21,1.3l-.17,0h-.08a7.72,7.72,0,0,1-5-1.5h0s0,0,0,.06c0,.69,1.61,2.36,4.13,2.59a5.88,5.88,0,0,0,.6,0Zm0,0" transform="translate(-1113.86 -348)" style={{fill:"#c3bfb8"}}/><path d="M1114.93,354.38c0-.12,0-.23,0-.34,0-1.81.75-3.71,2.17-4.44a.87.87,0,0,1-.4-.63,4,4,0,0,0-1.46,1.33,6.69,6.69,0,0,0-1.08,3.74c0,.17,0,.34,0,.51a.91.91,0,0,1,.45-.19.81.81,0,0,1,.31,0Zm0,0" transform="translate(-1113.86 -348)" style={{fill:"#2b3237"}}/><path d="M1126.67,354.35a1,1,0,0,1,.45.2c0-.17,0-.35,0-.52a6.68,6.68,0,0,0-1.07-3.74,4.28,4.28,0,0,0-1.46-1.33.83.83,0,0,1-.4.63c1.42.73,2.17,2.63,2.17,4.44,0,.11,0,.23,0,.34a1.08,1.08,0,0,1,.31,0Zm0,0" transform="translate(-1113.86 -348)" style={{fill:"#2b3237"}}/><path d="M1120.77,360.35h.08l.17,0a7.62,7.62,0,0,0,4.21-1.3l.25-.19a5.37,5.37,0,0,0,1.94-3.53.83.83,0,0,0-.3-.76,1,1,0,0,0-.45-.2,1.08,1.08,0,0,0-.31,0,.86.86,0,0,0-.66.72c-.31,2.27-2.22,3.57-5.25,3.55h0c-2.79-.1-4.54-1.38-4.84-3.54a.85.85,0,0,0-.66-.72.81.81,0,0,0-.31,0,.91.91,0,0,0-.45.19.85.85,0,0,0-.3.77,5.4,5.4,0,0,0,1.93,3.52h0a7.72,7.72,0,0,0,5,1.5Zm0,0" transform="translate(-1113.86 -348)" style={{fill:"#e0dcd3"}}/><path d="M1117,349.6a.86.86,0,0,0,.47.14c.49,0,1.33-.39,1.33-.87s-.84-.86-1.33-.86a.88.88,0,0,0-.88.86.34.34,0,0,0,0,.1.87.87,0,0,0,.4.63Zm0,0" transform="translate(-1113.86 -348)" style={{fill:"#e6a123"}}/><path d="M1124.66,349a.28.28,0,0,0,0-.09.88.88,0,0,0-.89-.87c-.48,0-1.32.39-1.32.87s.84.86,1.32.86a.87.87,0,0,0,.48-.14.83.83,0,0,0,.4-.63Zm0,0" transform="translate(-1113.86 -348)" style={{fill:"#e6a123"}}/><path d="M1134.84,355.18a2.91,2.91,0,0,0-3,2.8,2.56,2.56,0,0,0,.23,1.06,2.84,2.84,0,0,0,.44.7,3.09,3.09,0,0,0,2.35,1.05,2.81,2.81,0,1,0,0-5.61Zm0,5.1a2.31,2.31,0,1,1,2.47-2.3,2.39,2.39,0,0,1-2.47,2.3Zm0,0" transform="translate(-1113.86 -348)" style={{fill:"#e0dcd3"}}/><path d="M1134.84,355.68a2.31,2.31,0,1,0,2.47,2.3,2.39,2.39,0,0,0-2.47-2.3Zm0,3.39A1.09,1.09,0,1,1,1136,358a1.13,1.13,0,0,1-1.17,1.09Zm0,0" transform="translate(-1113.86 -348)" style={{fill:"#f7f1e6"}}/><path d="M1136.06,358a1.22,1.22,0,1,1-1.22-1.14,1.18,1.18,0,0,1,1.22,1.14Zm0,0" transform="translate(-1113.86 -348)" style={{fill:"#2b3237"}}/></svg>
                        </div>
                        <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">Active Cases</div>
                            <div className="font-bold text-lg">{local.local_active_cases}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-red-500">
                            <svg id="Layer_1" data-name="Layer 1" width="24" height="23.92" viewBox="0 0 24 23.92"><defs><clipPath id="clip-path" transform="translate(-1128 -377.04)"><rect x="1128" y="377" width="24" height="24" style={{fill:"none"}}/></clipPath></defs><title>heart</title><g style={{clipPath:"url(#clip-path)"}}><path d="M1142.36,389.72c1.87-2.07,4.18-4.64,4.5-6.92a5.76,5.76,0,0,0-.65-4,4,4,0,0,0-3.07-1.78l-.38,0a3.86,3.86,0,0,1-5.54,0l-.38,0a4,4,0,0,0-3.07,1.78,5.76,5.76,0,0,0-.65,4c.32,2.28,2.64,4.85,4.5,6.92,0,0,.93,1.1,1.21,1.38a1.88,1.88,0,0,0,1.16.64,1.85,1.85,0,0,0,1.16-.64c.28-.28,1.21-1.38,1.21-1.38Zm0,0" transform="translate(-1128 -377.04)" style={{fill:"#d43d21"}}/><path d="M1136.7,393.27a5.2,5.2,0,0,0-3.14-1,.78.78,0,0,1-.35-.2l-.08-.07a1.27,1.27,0,0,1-.31-.3c-.17-.24-.37-.45-.53-.71a4.78,4.78,0,0,0-2.31-2.21c-.21-.12-.35-.16-.4-.33s-.2-2.15-.24-2.49c-.09-1-.18-1.74-.66-1.94a.23.23,0,0,0-.31.08,4.5,4.5,0,0,0-.21,1.32s-.18,2.68-.16,3.61a17.14,17.14,0,0,0,2.12,5.5,35.88,35.88,0,0,0,4.11,3.13,2.31,2.31,0,0,1,.8,1.53v.91s-.1.84.68.84h2.63c.77,0,.62-.82.62-1.11v-.49c0-.29,0-.59.08-.88a3.79,3.79,0,0,0,0-1.22,7.37,7.37,0,0,0-2.32-4Zm0,0" transform="translate(-1128 -377.04)" style={{fill:"#dec8ae"}}/><path d="M1151.82,385.44a4.5,4.5,0,0,0-.21-1.32.22.22,0,0,0-.3-.08c-.49.2-.58.94-.67,1.94,0,.34-.22,2.41-.24,2.49s-.19.21-.4.33a4.82,4.82,0,0,0-2.31,2.21c-.16.26-.35.47-.52.71a1.76,1.76,0,0,1-.31.3l-.08.07a.87.87,0,0,1-.36.2,5.2,5.2,0,0,0-3.14,1,7.37,7.37,0,0,0-2.32,4,3.79,3.79,0,0,0,0,1.22c0,.29.07.58.08.88v.49c0,.29-.15,1.11.62,1.11h2.63c.78,0,.68-.84.68-.84v-.91a2.31,2.31,0,0,1,.8-1.53,36.91,36.91,0,0,0,4.11-3.13,26.35,26.35,0,0,0,2.12-5.5,32.28,32.28,0,0,0-.16-3.61Zm0,0" transform="translate(-1128 -377.04)" style={{fill:"#dec8ae"}}/></g></svg>
                        </div>
                        <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">Total Recovered</div>
                            <div className="font-bold text-lg">{local.local_recovered}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-gray-100 text-red-500">
                            <svg id="Layer_1" data-name="Layer 1" width="17.49" height="24" viewBox="0 0 17.49 24"><title>report</title><path d="M848.41,349.77a.74.74,0,0,1-.74.6h-1.78a.9.9,0,0,1-.93.78h-8.07a.9.9,0,0,1-.93-.78h-2.14a.74.74,0,0,1-.74-.6A1.58,1.58,0,0,0,832,351.2v19.21a1.76,1.76,0,0,0,1.9,1.59h11.57v-1.94a1.74,1.74,0,0,1,1.74-1.73h2.28V351.2a1.58,1.58,0,0,0-1.08-1.43Zm-12,16.14a.47.47,0,0,1-.48.43h-1.57a.46.46,0,0,1-.47-.43v-1.43a.45.45,0,0,1,.47-.43h1.57a.46.46,0,0,1,.48.43Zm0-3.44a.46.46,0,0,1-.48.43h-1.57a.45.45,0,0,1-.47-.43V361a.45.45,0,0,1,.47-.43h1.57a.46.46,0,0,1,.48.43Zm0-3.44a.46.46,0,0,1-.48.43h-1.57a.45.45,0,0,1-.47-.43V357.6a.46.46,0,0,1,.47-.43h1.57a.47.47,0,0,1,.48.43Zm0-3.44a.47.47,0,0,1-.48.44h-1.57a.46.46,0,0,1-.47-.44v-1.42a.45.45,0,0,1,.47-.43h1.57a.46.46,0,0,1,.48.43Zm6,13.52a.41.41,0,0,1-.43.39h-.68v.62a.4.4,0,0,1-.42.38h-.29a.4.4,0,0,1-.42-.38v-.62h-.68a.41.41,0,0,1-.43-.39v-.26a.41.41,0,0,1,.43-.39h.68v-.62a.41.41,0,0,1,.42-.39h.29a.41.41,0,0,1,.42.39v.62H842a.41.41,0,0,1,.43.39Zm5.24-2.88h-10a.27.27,0,0,1-.29-.26.28.28,0,0,1,.29-.26h10a.28.28,0,0,1,.29.26.27.27,0,0,1-.29.26Zm0-3.43h-10a.28.28,0,0,1-.29-.26.27.27,0,0,1,.29-.26h10a.27.27,0,0,1,.29.26.28.28,0,0,1-.29.26Zm0-3.44h-10a.26.26,0,1,1,0-.52h10a.26.26,0,1,1,0,.52Zm0-3.44h-10a.27.27,0,0,1-.29-.26.28.28,0,0,1,.29-.26h10a.28.28,0,0,1,.29.26.27.27,0,0,1-.29.26Zm0,0" transform="translate(-832 -348)" style={{fill:"#f7f1e6"}}/><path d="M845.47,370.06V372l4-3.67h-2.28a1.74,1.74,0,0,0-1.74,1.73Zm0,0" transform="translate(-832 -348)" style={{fill:"#e0dcd3"}}/><path d="M845.82,350.43h1.85a.73.73,0,0,0,.74-.6v-.08a.71.71,0,0,0-.74-.68h-1.84s0,1.34,0,1.36Zm0,0" transform="translate(-832 -348)" style={{fill:"#77a7a2"}}/><path d="M833.82,350.43H836v-1.36h-2.2a.71.71,0,0,0-.74.68v.08a.73.73,0,0,0,.74.6Zm0,0" transform="translate(-832 -348)" style={{fill:"#77a7a2"}}/><path d="M835.94,353.74h-1.57a.45.45,0,0,0-.47.43v1.42a.46.46,0,0,0,.47.44h1.57a.47.47,0,0,0,.48-.44v-1.42a.46.46,0,0,0-.48-.43Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M847.66,355.4h-10a.28.28,0,0,0-.29.26.27.27,0,0,0,.29.26h10a.27.27,0,0,0,.29-.26.28.28,0,0,0-.29-.26Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M835.94,357.17h-1.57a.46.46,0,0,0-.47.43V359a.45.45,0,0,0,.47.43h1.57a.46.46,0,0,0,.48-.43V357.6a.47.47,0,0,0-.48-.43Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M847.66,358.84h-10a.26.26,0,1,0,0,.52h10a.26.26,0,1,0,0-.52Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M835.94,360.61h-1.57a.45.45,0,0,0-.47.43v1.43a.45.45,0,0,0,.47.43h1.57a.46.46,0,0,0,.48-.43V361a.46.46,0,0,0-.48-.43Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M847.66,362.28h-10a.27.27,0,0,0-.29.26.28.28,0,0,0,.29.26h10a.28.28,0,0,0,.29-.26.27.27,0,0,0-.29-.26Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M835.94,364.05h-1.57a.45.45,0,0,0-.47.43v1.43a.46.46,0,0,0,.47.43h1.57a.47.47,0,0,0,.48-.43v-1.43a.46.46,0,0,0-.48-.43Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M847.66,365.71h-10a.28.28,0,0,0-.29.26.27.27,0,0,0,.29.26h10A.27.27,0,0,0,848,366a.28.28,0,0,0-.29-.26Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M836,350.36a.17.17,0,0,0,0,.07.9.9,0,0,0,.93.78H845a.9.9,0,0,0,.93-.78v-1.58A.89.89,0,0,0,845,348h-8.07a.9.9,0,0,0-.94.85Zm0,0" transform="translate(-832 -348)" style={{fill:"#81b6b2"}}/><path d="M842,368.46h-.68v-.62a.41.41,0,0,0-.42-.39h-.29a.41.41,0,0,0-.42.39v.62h-.68a.41.41,0,0,0-.43.39v.26a.41.41,0,0,0,.43.39h.68v.62a.4.4,0,0,0,.42.38h.29a.4.4,0,0,0,.42-.38v-.62H842a.41.41,0,0,0,.43-.39v-.26a.41.41,0,0,0-.43-.39Zm0,0" transform="translate(-832 -348)" style={{fill:"#e74424"}}/></svg>
                        </div>
                        <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">Total Deaths</div>
                            <div className="font-bold text-lg">{local.local_deaths}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-purple-100 text-red-500">
                            <svg id="Layer_1" data-name="Layer 1"  width="24" height="23.98" viewBox="0 0 24 23.98"><defs><clipPath id="clip-path" transform="translate(-1128 -359.01)"><rect x="1128" y="359" width="24" height="24" style={{fill:"none"}}/></clipPath></defs><title>lungs</title><g style={{clipPath:"url(#clip-path)"}}><path d="M1138.29,367.36a2,2,0,0,0-1.3-1.2,1.86,1.86,0,0,0-.34,0c-1.89,0-5.24,3.63-6.87,6.75a14.13,14.13,0,0,0-1.71,8,2.7,2.7,0,0,0,2.82,2.08,4,4,0,0,0,3.33-1.95,7.45,7.45,0,0,0,.79,0h0a3.48,3.48,0,0,0,2.69-1,4.61,4.61,0,0,0,.87-3.07v-6.59s0,0,0-.05c-.13-1-.1-2-.28-3Zm0,0" transform="translate(-1128 -359.01)" style={{fill:"#cccdf1"}}/><path d="M1150.22,372.87c-1.63-3.12-5-6.75-6.87-6.75a1.86,1.86,0,0,0-.34,0,2,2,0,0,0-1.3,1.2h0a14,14,0,0,1-.27,3.11V377a4.58,4.58,0,0,0,.87,3.07,3.48,3.48,0,0,0,2.69,1h0a7.45,7.45,0,0,0,.79,0,4,4,0,0,0,3.33,1.95,2.7,2.7,0,0,0,2.82-2.08,14.13,14.13,0,0,0-1.71-8Zm0,0" transform="translate(-1128 -359.01)" style={{fill:"#cccdf1"}}/></g><path d="M1141.7,367.35c-.09-.06-.54-.34-.54-.67v-7.32a.31.31,0,0,0-.33-.35h-1.66c-.22,0-.33.08-.33.35v7.32c0,.36-.47.63-.54.67.18,1,.15,2,.28,3,.07-.44,1.11-1.62,1.42-1.62a3.07,3.07,0,0,1,1.43,1.67v0a14,14,0,0,0,.27-3.11Zm0,0" transform="translate(-1128 -359.01)" style={{fill:"#747474"}}/></svg>
                        </div>
                        <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">Total Cases</div>
                            <div className="font-bold text-lg">{local.local_total_cases}</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function GlobalAnalytics(props) {
    const {global}=props;
    return (
        <div className="flex items-center bg-gray-800 text-gray-800">
            <div className="p-2 w-full">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                            <svg id="Layer_1" data-name="Layer 1" width="23.91" height="24" viewBox="0 0 23.91 24"><defs><clipPath id="clip-path" transform="translate(-1128.05 -348)"><rect x="1128" y="348" width="24" height="24" style={{fill:"none"}}/></clipPath></defs><title>dropper</title><g style={{clipPath:"url(#clip-path)"}}>
                            <path d="M1130.05,368.66l-1.73,1.73a.94.94,0,0,0,0,1.33,1,1,0,0,0,1.34,0l1.72-1.72a3,3,0,0,1-.77-.57,3,3,0,0,1-.56-.77Zm0,0" transform="translate(-1128.05 -348)" style={{fill:"#77a7a2"}}/><path d="M1151.33,351.91a2.33,2.33,0,0,0-3.29-3.29h0l-3.43,3.43,3.3,3.29,3.42-3.43Zm0,0" transform="translate(-1128.05 -348)" style={{fill:"#1b2327"}}/></g><path d="M1130.57,365a3.13,3.13,0,0,0-.56,3.64,3,3,0,0,0,.56.77,3,3,0,0,0,.77.57,3.11,3.11,0,0,0,3.64-.57l10.75-10.73-4.41-4.42Zm0,0" transform="translate(-1128.05 -348)" style={{fill:"#81b6b2"}}/><path d="M1143.28,350.66a1.52,1.52,0,0,0-2.13,0l-.7.71a1.5,1.5,0,0,0,0,2.13l6.06,6.06a1.5,1.5,0,0,0,2.13,0l.7-.71a1.5,1.5,0,0,0,0-2.13l-1.38-1.38-3.3-3.29Zm0,0" transform="translate(-1128.05 -348)" style={{fill:"#2b3237"}}/></svg>                        
                        </div>
                        <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">New Cases</div>
                            <div className="font-bold text-lg">{global.global_new_cases}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-green-500">
                            <svg id="Layer_1" data-name="Layer 1" width="24" height="24" viewBox="0 0 24 24"><title>heart-beat</title><path d="M1151.54,375.15H1146a.48.48,0,0,0-.43.33l-1.3,3.6-1-5.05a.48.48,0,0,0-.45-.39.47.47,0,0,0-.45.4l-2.59,13.08-1.58-19.65a.48.48,0,0,0-.38-.46.45.45,0,0,0-.5.28l-3.57,8.88h-5.24a.51.51,0,0,0,0,1H1134a.45.45,0,0,0,.42-.29l3-7.39,1.69,21a.49.49,0,0,0,.43.47h0a.49.49,0,0,0,.45-.4l2.79-14.12.92,4.42a.5.5,0,0,0,.42.4.48.48,0,0,0,.46-.33l1.73-4.8h5.23a.51.51,0,0,0,0-1Zm0,0" transform="translate(-1128 -367)" style={{fill:"#df2020"}}/></svg>
                        </div>
                        <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">New Deaths</div>
                            <div className="font-bold text-lg">{global.global_new_deaths}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-red-500">
                            <svg id="Layer_1" data-name="Layer 1" width="24" height="23.92" viewBox="0 0 24 23.92"><defs><clipPath id="clip-path" transform="translate(-1128 -377.04)"><rect x="1128" y="377" width="24" height="24" style={{fill:"none"}}/></clipPath></defs><title>heart</title><g style={{clipPath:"url(#clip-path)"}}><path d="M1142.36,389.72c1.87-2.07,4.18-4.64,4.5-6.92a5.76,5.76,0,0,0-.65-4,4,4,0,0,0-3.07-1.78l-.38,0a3.86,3.86,0,0,1-5.54,0l-.38,0a4,4,0,0,0-3.07,1.78,5.76,5.76,0,0,0-.65,4c.32,2.28,2.64,4.85,4.5,6.92,0,0,.93,1.1,1.21,1.38a1.88,1.88,0,0,0,1.16.64,1.85,1.85,0,0,0,1.16-.64c.28-.28,1.21-1.38,1.21-1.38Zm0,0" transform="translate(-1128 -377.04)" style={{fill:"#d43d21"}}/><path d="M1136.7,393.27a5.2,5.2,0,0,0-3.14-1,.78.78,0,0,1-.35-.2l-.08-.07a1.27,1.27,0,0,1-.31-.3c-.17-.24-.37-.45-.53-.71a4.78,4.78,0,0,0-2.31-2.21c-.21-.12-.35-.16-.4-.33s-.2-2.15-.24-2.49c-.09-1-.18-1.74-.66-1.94a.23.23,0,0,0-.31.08,4.5,4.5,0,0,0-.21,1.32s-.18,2.68-.16,3.61a17.14,17.14,0,0,0,2.12,5.5,35.88,35.88,0,0,0,4.11,3.13,2.31,2.31,0,0,1,.8,1.53v.91s-.1.84.68.84h2.63c.77,0,.62-.82.62-1.11v-.49c0-.29,0-.59.08-.88a3.79,3.79,0,0,0,0-1.22,7.37,7.37,0,0,0-2.32-4Zm0,0" transform="translate(-1128 -377.04)" style={{fill:"#dec8ae"}}/><path d="M1151.82,385.44a4.5,4.5,0,0,0-.21-1.32.22.22,0,0,0-.3-.08c-.49.2-.58.94-.67,1.94,0,.34-.22,2.41-.24,2.49s-.19.21-.4.33a4.82,4.82,0,0,0-2.31,2.21c-.16.26-.35.47-.52.71a1.76,1.76,0,0,1-.31.3l-.08.07a.87.87,0,0,1-.36.2,5.2,5.2,0,0,0-3.14,1,7.37,7.37,0,0,0-2.32,4,3.79,3.79,0,0,0,0,1.22c0,.29.07.58.08.88v.49c0,.29-.15,1.11.62,1.11h2.63c.78,0,.68-.84.68-.84v-.91a2.31,2.31,0,0,1,.8-1.53,36.91,36.91,0,0,0,4.11-3.13,26.35,26.35,0,0,0,2.12-5.5,32.28,32.28,0,0,0-.16-3.61Zm0,0" transform="translate(-1128 -377.04)" style={{fill:"#dec8ae"}}/></g></svg>
                        </div>
                        <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">Total Recovered</div>
                            <div className="font-bold text-lg">{global.global_recovered}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-gray-100 text-red-500">
                            <svg id="Layer_1" data-name="Layer 1" width="17.49" height="24" viewBox="0 0 17.49 24"><title>report</title><path d="M848.41,349.77a.74.74,0,0,1-.74.6h-1.78a.9.9,0,0,1-.93.78h-8.07a.9.9,0,0,1-.93-.78h-2.14a.74.74,0,0,1-.74-.6A1.58,1.58,0,0,0,832,351.2v19.21a1.76,1.76,0,0,0,1.9,1.59h11.57v-1.94a1.74,1.74,0,0,1,1.74-1.73h2.28V351.2a1.58,1.58,0,0,0-1.08-1.43Zm-12,16.14a.47.47,0,0,1-.48.43h-1.57a.46.46,0,0,1-.47-.43v-1.43a.45.45,0,0,1,.47-.43h1.57a.46.46,0,0,1,.48.43Zm0-3.44a.46.46,0,0,1-.48.43h-1.57a.45.45,0,0,1-.47-.43V361a.45.45,0,0,1,.47-.43h1.57a.46.46,0,0,1,.48.43Zm0-3.44a.46.46,0,0,1-.48.43h-1.57a.45.45,0,0,1-.47-.43V357.6a.46.46,0,0,1,.47-.43h1.57a.47.47,0,0,1,.48.43Zm0-3.44a.47.47,0,0,1-.48.44h-1.57a.46.46,0,0,1-.47-.44v-1.42a.45.45,0,0,1,.47-.43h1.57a.46.46,0,0,1,.48.43Zm6,13.52a.41.41,0,0,1-.43.39h-.68v.62a.4.4,0,0,1-.42.38h-.29a.4.4,0,0,1-.42-.38v-.62h-.68a.41.41,0,0,1-.43-.39v-.26a.41.41,0,0,1,.43-.39h.68v-.62a.41.41,0,0,1,.42-.39h.29a.41.41,0,0,1,.42.39v.62H842a.41.41,0,0,1,.43.39Zm5.24-2.88h-10a.27.27,0,0,1-.29-.26.28.28,0,0,1,.29-.26h10a.28.28,0,0,1,.29.26.27.27,0,0,1-.29.26Zm0-3.43h-10a.28.28,0,0,1-.29-.26.27.27,0,0,1,.29-.26h10a.27.27,0,0,1,.29.26.28.28,0,0,1-.29.26Zm0-3.44h-10a.26.26,0,1,1,0-.52h10a.26.26,0,1,1,0,.52Zm0-3.44h-10a.27.27,0,0,1-.29-.26.28.28,0,0,1,.29-.26h10a.28.28,0,0,1,.29.26.27.27,0,0,1-.29.26Zm0,0" transform="translate(-832 -348)" style={{fill:"#f7f1e6"}}/><path d="M845.47,370.06V372l4-3.67h-2.28a1.74,1.74,0,0,0-1.74,1.73Zm0,0" transform="translate(-832 -348)" style={{fill:"#e0dcd3"}}/><path d="M845.82,350.43h1.85a.73.73,0,0,0,.74-.6v-.08a.71.71,0,0,0-.74-.68h-1.84s0,1.34,0,1.36Zm0,0" transform="translate(-832 -348)" style={{fill:"#77a7a2"}}/><path d="M833.82,350.43H836v-1.36h-2.2a.71.71,0,0,0-.74.68v.08a.73.73,0,0,0,.74.6Zm0,0" transform="translate(-832 -348)" style={{fill:"#77a7a2"}}/><path d="M835.94,353.74h-1.57a.45.45,0,0,0-.47.43v1.42a.46.46,0,0,0,.47.44h1.57a.47.47,0,0,0,.48-.44v-1.42a.46.46,0,0,0-.48-.43Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M847.66,355.4h-10a.28.28,0,0,0-.29.26.27.27,0,0,0,.29.26h10a.27.27,0,0,0,.29-.26.28.28,0,0,0-.29-.26Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M835.94,357.17h-1.57a.46.46,0,0,0-.47.43V359a.45.45,0,0,0,.47.43h1.57a.46.46,0,0,0,.48-.43V357.6a.47.47,0,0,0-.48-.43Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M847.66,358.84h-10a.26.26,0,1,0,0,.52h10a.26.26,0,1,0,0-.52Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M835.94,360.61h-1.57a.45.45,0,0,0-.47.43v1.43a.45.45,0,0,0,.47.43h1.57a.46.46,0,0,0,.48-.43V361a.46.46,0,0,0-.48-.43Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M847.66,362.28h-10a.27.27,0,0,0-.29.26.28.28,0,0,0,.29.26h10a.28.28,0,0,0,.29-.26.27.27,0,0,0-.29-.26Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M835.94,364.05h-1.57a.45.45,0,0,0-.47.43v1.43a.46.46,0,0,0,.47.43h1.57a.47.47,0,0,0,.48-.43v-1.43a.46.46,0,0,0-.48-.43Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M847.66,365.71h-10a.28.28,0,0,0-.29.26.27.27,0,0,0,.29.26h10A.27.27,0,0,0,848,366a.28.28,0,0,0-.29-.26Zm0,0" transform="translate(-832 -348)" style={{fill:"#dec8ae"}}/><path d="M836,350.36a.17.17,0,0,0,0,.07.9.9,0,0,0,.93.78H845a.9.9,0,0,0,.93-.78v-1.58A.89.89,0,0,0,845,348h-8.07a.9.9,0,0,0-.94.85Zm0,0" transform="translate(-832 -348)" style={{fill:"#81b6b2"}}/><path d="M842,368.46h-.68v-.62a.41.41,0,0,0-.42-.39h-.29a.41.41,0,0,0-.42.39v.62h-.68a.41.41,0,0,0-.43.39v.26a.41.41,0,0,0,.43.39h.68v.62a.4.4,0,0,0,.42.38h.29a.4.4,0,0,0,.42-.38v-.62H842a.41.41,0,0,0,.43-.39v-.26a.41.41,0,0,0-.43-.39Zm0,0" transform="translate(-832 -348)" style={{fill:"#e74424"}}/></svg>
                        </div>
                        <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">Total Deaths</div>
                            <div className="font-bold text-lg">{global.global_deaths}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-3">
                        <div className="flex flex-row bg-white shadow-sm rounded p-4">
                        <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-purple-100 text-red-500">
                            <svg id="Layer_1" data-name="Layer 1"  width="24" height="23.98" viewBox="0 0 24 23.98"><defs><clipPath id="clip-path" transform="translate(-1128 -359.01)"><rect x="1128" y="359" width="24" height="24" style={{fill:"none"}}/></clipPath></defs><title>lungs</title><g style={{clipPath:"url(#clip-path)"}}><path d="M1138.29,367.36a2,2,0,0,0-1.3-1.2,1.86,1.86,0,0,0-.34,0c-1.89,0-5.24,3.63-6.87,6.75a14.13,14.13,0,0,0-1.71,8,2.7,2.7,0,0,0,2.82,2.08,4,4,0,0,0,3.33-1.95,7.45,7.45,0,0,0,.79,0h0a3.48,3.48,0,0,0,2.69-1,4.61,4.61,0,0,0,.87-3.07v-6.59s0,0,0-.05c-.13-1-.1-2-.28-3Zm0,0" transform="translate(-1128 -359.01)" style={{fill:"#cccdf1"}}/><path d="M1150.22,372.87c-1.63-3.12-5-6.75-6.87-6.75a1.86,1.86,0,0,0-.34,0,2,2,0,0,0-1.3,1.2h0a14,14,0,0,1-.27,3.11V377a4.58,4.58,0,0,0,.87,3.07,3.48,3.48,0,0,0,2.69,1h0a7.45,7.45,0,0,0,.79,0,4,4,0,0,0,3.33,1.95,2.7,2.7,0,0,0,2.82-2.08,14.13,14.13,0,0,0-1.71-8Zm0,0" transform="translate(-1128 -359.01)" style={{fill:"#cccdf1"}}/></g><path d="M1141.7,367.35c-.09-.06-.54-.34-.54-.67v-7.32a.31.31,0,0,0-.33-.35h-1.66c-.22,0-.33.08-.33.35v7.32c0,.36-.47.63-.54.67.18,1,.15,2,.28,3,.07-.44,1.11-1.62,1.42-1.62a3.07,3.07,0,0,1,1.43,1.67v0a14,14,0,0,0,.27-3.11Zm0,0" transform="translate(-1128 -359.01)" style={{fill:"#747474"}}/></svg>
                        </div>
                        <div className="flex flex-col flex-grow ml-4">
                            <div className="text-sm text-gray-500">Total Cases</div>
                            <div className="font-bold text-lg">{global.global_total_cases}</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
