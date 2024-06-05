import { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const AuthLayout = ({children}) => {
    const navigate=useNavigate();
    useEffect(()=>{
       if(!localStorage.getItem('accessToken')){
           navigate("/login");
       }
    },[])
  return (
    <Fragment>
       {children}
    </Fragment>
  )
}

export default AuthLayout