'use client'
import { Button, Checkbox, FormControl, FormControlLabel, Input, InputLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'

function XSSpage() {

const [name, setName] = useState('')
const [message, setMessage] = useState('')
const [submittedMessage, setSubmittedMessage] = useState('')
const [security, setSecurity] = useState(true)

const example_mess = "Napisati kao 'message': <img src=\"bilo-koja-adresa\" onError=alert(document.cookie)>"

const displayMessage = (e:any) => {
  e.preventDefault();
  setSubmittedMessage(`Hello ${name}! Your message: ${message}`);
}

const handleChange = (e:any) => {
  setSecurity(e.target.checked)
  console.log(security)
}

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 flex flex-col items-center justify-center p-24">
        <div className="max-w-5xl w-full text-center mt-8">
          <Typography variant="h2">XSS</Typography>
          <Typography variant="body1">{example_mess}</Typography>
        </div>
        <FormControlLabel control={<Checkbox checked={security} onChange={handleChange} color="secondary" />} label="Secure" />
        <form onSubmit={displayMessage} className="mt-4">
          <FormControl color="secondary" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl color="secondary" fullWidth className="mt-4">
            <InputLabel htmlFor="message">Message</InputLabel>
            <Input
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" variant="outlined" color="secondary" className="mt-4">
            Submit
          </Button>
        </form>
        {!security && submittedMessage && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: submittedMessage }} />
          </div>
        )}
        {security && submittedMessage && (
          <Typography variant="h4">{submittedMessage}</Typography>
        )}
    </div>
  </div>
  )
}

export default XSSpage