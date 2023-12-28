import Image from 'next/image'
import Kakao from '../../images/logo/kakao_logo.png'
import Naver from '../../images/logo/naver_logo.png'
import Google from '../../images/logo/google_logo.png'

import AuthSession from 'src/app/components/providers/session-provider'
import LoginButton from 'src/app/components/ui/login-button'

export default function Login() {
    return (
        <div className='center m-11'>
            <div className='border border-solid rounded-xl border-black text-center'>
                <div className='text-3xl font-bold mt-24 mb-20'>
                    로그인
                </div>
                <div className='center'>
                    <AuthSession>
                        <LoginButton></LoginButton>
                    </AuthSession>
                    <div className='flex flex-row space-x-8'>
                        <Image src={Kakao} alt='kakao-logo' width={40} height={40}></Image>
                        <Image src={Naver} alt='naver-logo' width={40} height={40}></Image>
                        <Image src={Google} alt='google-logo' width={40} height={40}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}