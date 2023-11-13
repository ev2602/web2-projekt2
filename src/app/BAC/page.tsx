'use client'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import NavBar from '../components/NavBar';

function BACpage() {
  const [security, setSecurity] = useState(false);
  const { user, error, isLoading } = useUser();
  
  const handleChange = (e:any) => {
    setSecurity(e.target.checked)
    console.log(security)
    const sec = !security
    localStorage.setItem("isSecure", sec.toString())
  }

    console.log(security)

    const roles = user ? (user['http://localhost:3000/roles'] as string[]) : [];
    console.log('Roles:', roles);

  return (
  <div className="flex flex-col min-h-screen">
    <NavBar />
    <div className="flex-1 flex flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full text-center mb-4">
        <Typography variant="h3">Broken access control</Typography>
        <Typography variant='body1'>Staviti u URL-u /admin. Ako je odabrana sigurna opcija do podataka se moze doci prijavom 
        korisnika: email: admin@admin.com, lozinka: Admin123! .</Typography>
      </div>
      <div className="text-center">
        <FormControlLabel control={<Checkbox checked={security} onChange={handleChange} color='secondary'/>} label="Secure" />
      </div>
    </div>
  </div>
  )
}

export default BACpage