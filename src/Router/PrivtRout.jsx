import React, { useContext } from 'react'
import { authContext } from '../Context/AuthProvider'
import { Navigate } from 'react-router-dom';
import { Spinner } from '../Pages/Components/Shared/Spinner';

export const PrivtRout = ({children}) => {
    const {user,loading} = useContext(authContext)
    if(loading){
        return <Spinner></Spinner>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

    return children
}
