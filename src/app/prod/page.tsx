import Link from 'next/link'
import Image from 'next/image'
import Painting from 'images/prod/1/main.jpg'
import Cup from 'images/prod/2/main.jpg'
import Octopus from 'images/prod/3/main.jpg'
import Calender from 'images/prod/4/main.jpg'
import Turtle from 'images/prod/5/main.jpg'
import Alien from 'images/prod/6/main.jpg'

export default function Prod() {
    return (
        <div className='center'>
            <div className='text-2xl mt-12'>센프상품</div>
            <div className='grid grid-cols-2 gap-4 mt-8'>
                <Link href={'/prod/components/prod-list/1'}>
                    <Image src={Painting} width={150} alt='painting'/>
                </Link>
                <Link href={'/prod/components/prod-list/2'}>
                    <Image src={Cup} width={150} alt='cup'/>
                </Link>
                <Link href={'/prod/components/prod-list/3'}>
                    <Image src={Octopus} width={150} alt='octopus'/>
                </Link>
                <Link href={'/prod/components/prod-list/4'}>
                    <Image src={Calender} width={150} alt='calender'/>
                </Link>
                <Link href={'/prod/components/prod-list/5'}>
                    <Image src={Turtle} width={150} alt='turtle'/>
                </Link>
                <Link href={'/prod/components/prod-list/6'}>
                    <Image src={Alien} width={150} alt='alien'/>
                </Link>
            </div>
            <Link href={'/'} className='mt-32'>뒤로 가기</Link>
        </div>
    )
}