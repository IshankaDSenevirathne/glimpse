import useSWR from 'swr';
import {JSONfetcher} from './fetcher';

//Decaring API
//Sri lankan Government health API
const API = "https://hpb.health.gov.lk/api/get-current-statistical";

//Covid19Api(Global Data)
const API_global="https://api.covid19api.com/summary";

//This function is used to fetch and export local data to the index page
export function local_api_data(){
   
    //fetching local data through stale-while-revalidate hook
    const {data:localData,error}=useSWR(API,JSONfetcher);
    //export data on function call
    return {
        localData:localData,
        isLoadingLocal:!error && !localData,
        isErrorLocal:error
    }

}

//This function is used to fetch and export global data to the index page
export function global_api_data(){
    
    //fetching global data through stale-while-revalidate hook
    const {data:globalData,error}=useSWR(API_global,JSONfetcher); 

    return{
        globalData:globalData,
        isLoadingGlobal:!error && !globalData,
        isErrorGlobal:error
    }
}

// {
//     localStats:{
//         local_active_cases:local_data.data.local_active_cases,
//         local_deaths:local_data.data.local_deaths,
//         local_new_cases:local_data.data.local_new_cases,
//         local_new_deaths:local_data.data.local_new_deaths,
//         local_recovered:local_data.data.local_recovered,
//         local_total_cases:local_data.data.local_total_cases,
//         local_total_number_of_individuals_in_hospitals:local_data.data.local_total_number_of_individuals_in_hospitals,
//         total_pcr_testing_count:local_data.data.total_pcr_testing_count,
//         update_date_time:local_data.data.update_date_time
//     },
//     globalStats:{
//         global_deaths:local_data.data.global_deaths,
//         global_new_cases:local_data.data.global_new_cases,
//         global_new_deaths:local_data.data.global_new_deaths,
//         global_recovered:local_data.data.global_recovered,
//         global_total_cases:local_data.data.global_total_cases,
//         update_date_time:local_data.data.update_date_time
//     },
//     hospitalStats:local_data.data.hospital_data,
//     pcrTestData:local_data.data.daily_pcr_testing_data
// },