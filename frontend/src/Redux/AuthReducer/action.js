import * as types from "./actionTypes"
import axios from "axios"


const postData=(payload,navigate)=>(dispatch)=>{
dispatch({type:types.LOGIN_REQUEST})
  return axios.post("https://odd-ruby-angelfish-wear.cyclic.app/signin",payload).then((r)=>{
    dispatch({type:types.LOGIN_SUCCESS,payload:r.data.token})
    let logindata={auth:true,token:r.data.token}
  
   localStorage.setItem("jwt",JSON.stringify(logindata))
   navigate("/course")
 
  
  }).catch((e)=>{
    dispatch({type:types.LOGIN_FAILURE})
    console.log(e.response)
    alert(`${e.response.data}`)
  })
}

export {postData}