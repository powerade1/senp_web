'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from 'images/logo/senp_profile.png'
import { SessionProvider } from 'next-auth/react';
import LoginButton from './login-button';

export default function Nav() {

    return(
      <header>
        <nav className='flex items-center justify-between border-b border-black bg-white'>
            <div className='ml-52'>
              <Link href={'/'}>
                <Image src={Logo} width={60} height={60} alt='senp_logo'/>
              </Link>
            </div>
            <div className='flex flex-row space-x-4 mr-52'>
              <Link href={'/prod'}>PROD</Link>
              <Link href={'/prod/type_page'}>TYPE</Link>
              <SessionProvider>
                <LoginButton/>
              </SessionProvider>
            </div>
        </nav>
      </header>
    )
}