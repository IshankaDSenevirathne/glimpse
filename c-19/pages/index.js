import React,{useState} from "react"
import Head from 'next/head';
import dynamic from "next/dynamic";
//import components
import {local_api_data,global_api_data} from "./api/api_data";
import Navigation from "../components/Navigation/Navigation";
import Landing from "../components/Landing/Landing";

//These use window hence using dynamic imports to render
const FatalityRates = dynamic(() => import('../components/Graphs/Graphs').then(module=>module.FatalityRates),{ ssr: false });
const RecoveryRates = dynamic(() => import('../components/Graphs/Graphs').then(module=>module.RecoveryRates),{ ssr: false });
const SLTotalBreakdown = dynamic(() => import('../components/Graphs/Graphs').then(module=>module.SLTotalBreakdown),{ ssr: false });
const DailyCovidCases = dynamic(() => import('../components/Graphs/Graphs').then(module=>module.DailyCovidCases),{ ssr: false });

const pageValues=[0,1,2,3,4,5,6,7,8];

export default function Dashboard() {
  const [page,setPage]=useState(0);
  const {localData,isLoadingLocal,isErrorLocal}=local_api_data();
  const {globalData,isLoadingGlobal,isErrorGlobal}=global_api_data();
  const getGlobalTotal=(data)=>({
    global_deaths:data.data.global_deaths,
    global_new_cases:data.data.global_new_cases,
    global_new_deaths:data.data.global_new_deaths,
    global_recovered:data.data.global_recovered,
    global_total_cases:data.data.global_total_cases,
    update_date_time:data.data.update_date_time
  })
  const getLocalStats=(data)=>({
    local_active_cases:data.data.local_active_cases,
    local_deaths:data.data.local_deaths,
    local_new_cases:data.data.local_new_cases,
    local_new_deaths:data.data.local_new_deaths,
    local_recovered:data.data.local_recovered,
    local_total_cases:data.data.local_total_cases,
    local_total_number_of_individuals_in_hospitals:data.data.local_total_number_of_individuals_in_hospitals,
    total_pcr_testing_count:data.data.total_pcr_testing_count,
    update_date_time:data.data.update_date_time
  })
  const getPage=(value)=>{
    if(value==="next"){
      setPage(page=>{
        if(page+1>2){
          return 0
        }
        return page+1
      }
      );
      return;
    }
    if(value==="prev"){
      setPage(page=>{
        if(page-1<0){
          return 2
        }
        return page-1
      }
      );
      return
    }
  }
  const loadingData=(
    <div>
      <h1>Loading ...</h1>
    </div>
  );
  const errorData=(
    <div>
      <h1>Error loading data</h1>
    </div>
  );
    return (
      <div>
        <Head>
          <title>C19SL</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-gray-800 text-white font-sans min-h-screen min-w-screen">
          <div className="container mx-auto">
            <div>
              <div className="flex justify-center items-center">
                <div>
                  <div>
                    <p className="text-4xl sm:text-6xl text-center pt-5">COVID METER</p>
                  </div>
                  <div>
                    <p className="text-2xl text-gray-400 text-center">{new Date().getFullYear()}</p>
                  </div>
                </div>
              </div>
              <div className="p-1 pt-10">
                {page===0 && <Landing />}
                {page===1 && 
                  <div id="LocalCases">
                    {localData && globalData?<DailyCovidCases cases={localData.data.daily_pcr_testing_data}/>:undefined}
                    {localData && globalData?<SLTotalBreakdown local={getLocalStats(localData)} />:undefined}
                  </div>
                }
                {page===2 && 
                  <div id="GlobalCases">
                    {localData && globalData?<RecoveryRates globalTotal={getGlobalTotal(localData)} global={globalData.Countries} />:undefined}
                    {localData && globalData?<FatalityRates globalTotal={getGlobalTotal(localData)} global={globalData.Countries} />:undefined}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className="fixed h-32 w-32">
            <div className="fixed inset-x-0 bottom-10">                  
              <div className="flex justify-center">
                <Navigation getPage={getPage}/>  
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

