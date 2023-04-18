import React from 'react'
import { Navigate } from 'react-router-dom'
const data=JSON.parse(localStorage.getItem("jwt"))||{}
const PrivateRoute = ({children}) => {
     if(!data.token){
          return  <Navigate to ="/signin"  />
        }
        return children;
  
}

export default PrivateRoute