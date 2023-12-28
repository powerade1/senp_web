import { useSession } from 'next-auth/react';
import { signOut } from "next-auth/react"

export default function UserProfile() {
    
    const { data: session } = useSession()

    return(
        <div>
            <div>
                {session?.user?.email}님 안녕하세요<br/>
                profile 페이지입니다.
            </div>
            <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>LOGOUT</button>
        </div>
    )
}