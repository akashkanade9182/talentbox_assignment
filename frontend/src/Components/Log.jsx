import { GoogleLogin } from 'react-google-login';
import React from 'react'

const Client_id="23312408298-dl0daht7fe3qh0e70elps3cjihaj17su.apps.googleusercontent.com";

const Log = () => {

     const onSuccess=(res)=>{
console.log("login success",res.profilObj)
     }
     const onFailure=(res)=>{
console.log("login failure",res)
     }
  return (
    <div>
       <GoogleLogin
    clientId={Client_id}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  )
}

export default Log;