import axios, { AxiosResponse, AxiosInstance } from "axios"
import {BASE_URL} from "./Constants"
import { Order } from "./Constants"

export const getAxiosInstance = ():AxiosInstance    => {

    const axiosInstance = 
        axios.create({
            baseURL:BASE_URL,
            headers: { "Content-Type": "multipart/form-data", "Authorization":`Bearer ${localStorage.getItem("access_token")}`}
        })
       
       
    axiosInstance.interceptors.response.use(
        response => response,
        error => {
            const originalRequest = error.config;
            console.log(originalRequest)
            if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
                const refresh_token = localStorage.getItem('refresh_token');
                console.log(refresh_token)
                return axios
                    .post('http://www.localhost:8000/api/token/refresh/', {refresh: refresh_token})
                    .then((response) => {

                        localStorage.setItem('access_token', response.data.access);
                        localStorage.setItem('refresh_token', response.data.refresh);
    
                        // axiosInstance.defaults.headers['Authorization'] = "Bearer " + response.data.access;
                        originalRequest.headers['Authorization'] = "Bearer " + response.data.access;
    
                        return axiosInstance(originalRequest);
                    })
                    .catch(err => {
                        console.log("refresh token has expired")
                        console.log(err)
                        return Promise.reject(err);
                    });
            }
            return Promise.reject(error);
        }
    )
    return axiosInstance
}




export const getAuthData = (url:string):Promise<AxiosResponse<any, any>> => {



    return getAxiosInstance()
    .get(url)
}


export const getData = async ( url:string) => {
    return await axios.get(url)
}


export const postData = async (url:string, data:any) => {
    return await axios.post(url, data)
}



export const postAuthData = async (url:string, data:any) => {
    

    return getAxiosInstance()
    .post(url, data)
    // return await axios({
    //     method:"post",
    //     url:url,
    //     data:data,
    //     headers: { "Content-Type": "multipart/form-data"}
    // })
}


export const placeOrder = async (url:string, order:any) => {
    return await postAuthData(url, order)
}