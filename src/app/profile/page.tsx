'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
2
  console.log(user)

  return (
      user && (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <img src={user.picture?.toString()} alt={user.name?.toString()} />
            <h2>{user.nickname}</h2>
            <p>{user.email}</p>
        </div>
      )
  );
}