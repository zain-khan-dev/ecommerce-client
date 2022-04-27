import axios, { AxiosResponse } from "axios"




export const getAPIData = (url:string):Promise<AxiosResponse<any, any>> => {

    return axios({
        method:"get",
        url:url
    }).then((result:AxiosResponse)=>{
        console.log("made request successfully" + result)
        return result as AxiosResponse<any>
    })
    .catch((e)=> {
        console.log(e)
        throw e
    })
}


