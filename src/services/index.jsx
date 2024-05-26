import { apiEndPointsConfig } from "./apiEndPointsConfig"
import { axiosInstance } from "./axiosInstance"

export const buyerSignUp = async(data) => {
   try {
    const res = await axiosInstance.post(`${apiEndPointsConfig.buyerSignUp}`, data);
    console.log("res from buyerSignUp", res);
    return res;
   } catch (error) {
    return error;
   }
}

export const sellerSignUp = async(data) => {
    try {
     const res = await axiosInstance.post(`${apiEndPointsConfig.sellerSignUp}`, data);
     console.log("res from sellerSignUp", res);
     return res;
    } catch (error) {
     return error;
    }
 }

 export const sellerLogin = async(data) => {
    try {
     const res = await axiosInstance.post(`${apiEndPointsConfig.sellerLogin}`, data);
     console.log("res from sellerLogin", res);
     return res;
    } catch (error) {
     return error;
    }
 }