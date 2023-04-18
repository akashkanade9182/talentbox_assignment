import React from 'react'
import { Box } from "@chakra-ui/react"
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

  const navigate=useNavigate()

  return (
    <Box w="100%" p="10px 10px" display={"flex"} flexDirection={["column" ,"column","row","row"]} justifyContent={"space-between"} alignItems={"center"} bgColor="#000" h={["auto","auto","60px","60px"]} className="navbar">
      <Box w={["95%","95%","30%","30%"]}>
        <Box bgColor={"#3b3b4f"} h="35px" w="100%" display="flex" p="10px 10px" alignItems={"center"}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
          <input className="searchbar" placeholder='search 8000+ tutorials' type="search" />
        </Box>
      </Box>
      <Box onClick={()=>navigate("/")} color="white" textAlign={"center"} w={["95%","95%","30%","30%"]} fontSize={"25px"}>
        FreeCodeCamp(A)
      </Box>
      <Box w={["95%","95%","fit-content","fit-content"]}  display="flex" justifyContent={"space-between"} alignItems={"center"}>
        <button style={{ backgroundColor: "transparent", height: "40px", padding: "0px 10px", color: "white", fontSize: "20px", border: "1px solid white" }}>Menu</button>
        <button onClick={()=>navigate("/signin")} style={{ backgroundColor: "#fec849",marginLeft:"15px", height: "40px", padding: "0px 10px", fontSize: "20px" }}>Signin</button>
      </Box>
    </Box>
  )
}

export default Navbar