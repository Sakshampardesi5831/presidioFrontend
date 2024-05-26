import axios from "axios";
import { createBrowserHistory } from 'history';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

// import { setToken } from "./jwtService";
const history = createBrowserHistory();
const baseURL = `${import.meta.env.VITE_GATEWAY_URL}/api/v1`;
// const publicBaseURL = `${process.env.REACT_APP_GATEWAY_URL}/public/api/v1`

function getAccessTokenFromStorage() {
  const token = localStorage.getItem('token');
  return token;
}

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${getAccessTokenFromStorage()}`,
  },
});


axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      confirmAlert({
        title: 'Session Expired',
        message: 'Your session has expired. Please log in again.',
        buttons: [
          {
            label: 'OK',
            onClick: () => {
              localStorage.removeItem('token');
              history.push('/sign-in');
              window.location.reload();
            }
          }
        ]
      });
    }
    return Promise.reject(error);
  }
);   
