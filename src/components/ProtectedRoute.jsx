import React from 'react'
import {Outlet,Navigate } from "react-router-dom"
import {useSelector} from "react-redux"


const ProtectedRoute = () => {

    const trainerName = useSelector(state => state.trainerName)


    if(trainerName){
        return <Outlet/>
    }else{
        return <Navigate to = "/" />
    }
}

export default ProtectedRoute