import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protected = ({ isLogged }) => {
    if (!isLogged) {
        return <Navigate to={'/'} />
    } else {
        return <Outlet />
    }
}

export default Protected
