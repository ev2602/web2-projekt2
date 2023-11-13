'use client'
import { Button, Typography } from '@mui/material'
import Link from 'next/link';
import NavBar from './components/NavBar';

function Home() {

  return (
    <div className="flex flex-col min-h-screen">
    <NavBar/>
    <main className="flex flex-col items-center justify-center p-24 flex-1 bg-transparent">
      <div className="max-w-5xl w-full text-center">
        <Typography variant="h3">Choose your attack</Typography>
      </div>
      <div className="max-w-5xl w-full mt-4 flex justify-center">
        <Link href="/XSS">
          <Button variant="outlined" color="secondary" className="mr-4">
            XSS
          </Button>
        </Link>
        <Link href="/BAC">
          <Button variant="outlined" color="secondary">
            Broken Access Control
          </Button>
        </Link>
      </div>
    </main>
  </div>
  )
}

export default Home