import * as React from 'react';
import { useState, ReactNode, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
    children: ReactNode;
  };
  

export function ProtectedRoute({children}: ProtectedRouteProps){
    const navigateTo = useNavigate();
    const [navigate,setNavigate] = useState(false);

    useEffect(() => {
        try{
            fetch('/auth/validate', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(data => {
                console.log(data);
                if(data.status == 200)
                    setNavigate(true)
                else{
                    console.log('invalid token');
                    navigateTo('/');
                }     
            });
        } catch(err){
            console.log('invalid token');
            navigateTo('/');
        }
    },[])

    return (
        <>
        {navigate && children}
        </>
    )
}