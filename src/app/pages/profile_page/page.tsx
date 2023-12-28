'use client'

import { SessionProvider } from 'next-auth/react';
import UserProfile from 'src/app/components/ui/user-profile';

export default function Profile() {

    return(
        <div>
            <SessionProvider>
                <UserProfile/>
            </SessionProvider>
        </div>
    )
}