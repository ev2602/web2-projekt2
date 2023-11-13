import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function NavBar() {
  const { user, error, isLoading } = useUser();

  const roles = user ? (user['http://localhost:3000/roles'] as string[]) : [];

  return (
    <AppBar position="static" color="transparent" sx={{ width: '100%' }}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Link href="/">
        <Typography fontWeight="bold" variant="h6" component="div">
          Napadi
        </Typography>
      </Link>
      {user && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {roles.includes('Admin') && (
            <Link href="/admin">
              <Button color="inherit" sx={{ marginLeft: '10px' }}>
                Admin
              </Button>
            </Link>
          )}
          <Link href="/profile">
            <Button color="inherit">Profile</Button>
          </Link>
          <Link href="/api/auth/logout">
            <Button color="inherit">Logout</Button>
          </Link>
        </Box>
      )}
      {!user && (
        <Link href="/api/auth/login">
          <Button color="inherit">Login</Button>
        </Link>
      )}
    </Toolbar>
  </AppBar>
  );
}