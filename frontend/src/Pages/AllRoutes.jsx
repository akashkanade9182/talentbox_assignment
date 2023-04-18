import React from 'react'
import {Routes,Route} from "react-router-dom"
import Signin from './Signin'
import Homepage from "./Homepage"
import Course from './Course'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
<Routes>
     <Route path="/" element={<Homepage/>} />
     <Route path="/signin" element={<Signin/>} />
     <Route path="/course" element={<PrivateRoute><Course/></PrivateRoute>} />
</Routes>
  )
}

export default AllRoutes