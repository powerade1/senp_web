"use client";
 
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
 
export default function Component() {
    const { data: session } = useSession()
    if (session) {
      return (
        <>
          <Link href={'/profile'}>PROFILE</Link>
        </>
      )
    }
    return (
      <>
        <button onClick={() => signIn()}>LOGIN</button>
      </>
    )
  }