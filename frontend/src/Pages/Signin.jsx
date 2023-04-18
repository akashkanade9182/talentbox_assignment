import React,{useState,useEffect} from 'react'
import { Box } from "@chakra-ui/react"
import "../Styles/Signin.css"
import {postData} from "../Redux/AuthReducer/action"
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import Log from '../Components/Log'
import Logout from '../Components/Logout'
import {gapi} from "gapi-script"

const Client_id="23312408298-dl0daht7fe3qh0e70elps3cjihaj17su.apps.googleusercontent.com";

const Signin = () => {
     const[name,setName]=useState("")
     const[email,setEmail]=useState("")
     const[password,setPassword]=useState("")
     const dispatch=useDispatch()
     const navigate=useNavigate()


     const handleSubmit=()=>{
        const data={name,email,password};
        dispatch(postData(data,navigate))
       
     }
     useEffect(()=>{
//   function start(){
//      gapi.client.init({
//           'clientId':Client_id,
//           'apiKey': 'AIzaSyD6hMforXzwcShHogDTJ43c4EZmBO0_jXo',
//           'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
//      })
//   }
//   gapi.load("client:auth2",start)
function initClient() {
     gapi.client.init({
         'apiKey': 'AIzaSyD6hMforXzwcShHogDTJ43c4EZmBO0_jXo',
         'clientId': Client_id,
         'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
         'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
     })
   }
   gapi.load("client:auth2",initClient)
     },[])

     return (
          <Box bgColor="#d0d0d5" w="100%" h="1000px" paddingTop={"100px"}>
               <Box w="35%" m="auto"  p="20px 20px" display={"flex"} alignItems={"center"} flexDirection={"column"} border="1px solid  black" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px " borderRadius={"20px"}>
                   <h1 style={{fontSize:"30px"}}>Singin</h1>
                    <Box w="90%" mt="20px">
                         <label  style={{fontSize:"20px",fontWeight:"bold"}} htmlFor="">Name</label><br />
                         <input onChange={(e)=>setName(e.target.value)} value={name} className="forminput" type="text" /></Box>
                    <Box w="90%" mt="20px">
                         <label style={{fontSize:"20px",fontWeight:"bold"}}  htmlFor="">Email</label><br />
                         <input onChange={(e)=>setEmail(e.target.value)} value={email} className="forminput" type="text" />
                    </Box>
                    <Box w="90%" mt="20px">
                         <label style={{fontSize:"20px",fontWeight:"bold"}}  htmlFor="">Password</label><br />
                         <input onChange={(e)=>setPassword(e.target.value)} value={password} className="forminput" type="password" />
                    </Box>
                    <button onClick={handleSubmit} className='signinbtn' style={{marginTop:"20px", backgroundColor: "#fec849",border:"1px solid black",fontWeight:"bold", height: "40px", padding: "0px 10px", fontSize: "20px" }}>Singin</button>
<hr/>
<Log/>
<Logout/>



               </Box>
          </Box>
     )
}

export default Signin