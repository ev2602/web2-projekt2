'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import { Typography } from '@mui/material';
import React, { useContext } from 'react'

function AdminPage() {
    const { user, error, isLoading } = useUser();
    //const { security, toggleSecurity, setSecurity } = useSecurity();
    const security = localStorage.getItem("isSecure")
    console.log(security)

    const roles = user ? (user['http://localhost:3000/roles'] as string[]) : [];
    console.log('Roles:', roles);


    return(
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
        {security === 'false' || (user && roles.includes('Admin')) ? (
            <div className="max-w-5xl w-full text-center">
            <Typography variant="h2">Admin Page</Typography>
            <p>This page is secure and should only be accessible by authenticated users with the 'admin' role.</p>
            </div>
        ) : (
            <p>You do not have permission to access this page.</p>
        )}
    </div>
    )


}

export default AdminPage