import * as React from 'react';
import { useState, ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    children: ReactNode;
  };
  

export function ProtectedRoute({children}: ProtectedRouteProps){
    const [navigate,setNavigate] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
            setNavigate(true);
        },1000)
    },[])

    return (
        <>
        {children}
        </>
    )
}