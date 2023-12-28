'use client'

import Image from 'next/image'
import Dot from './images/dot.png'
import Attention from './images/type/attention.png'
import Finder from './images/type/finder.png'
import Laugher from './images/type/laugher.png'
import Romance from './images/type/romance.png'
import Worry from './images/type/worry.png'

import { NextUIProvider } from '@nextui-org/react'

export default function Home() {
  
  return (
    <main>
      <NextUIProvider>
        <div className='flex flex-col items-center m-52 '>
          <Image src={Dot} width={8} height={8} alt='dot'/>
          <div className='align-center mt-16 text-2xl'>어떤 타입의 기프터이신가요?</div>
          <div className='flex flex-row mt-12'>
            <div className='select_type mr-8'>탐색형</div>
            <div className='select_type mr-8'>정성형</div>
            <div className='select_type'>낭만형</div>
          </div>
          <div className='flex flex-row mt-3'>
            <div className='select_type mr-8'>부담형</div>
            <div className='select_type'>유머형</div>
          </div>
        </div>
        {/* 첫페이지 여기까지 */}
        <div className='grid grid-cols-1 mt-96 divide-y-2'>
          <div className='type flex flex-row'>
            <Image className='mr-6' src={Finder} width={60} height={60} alt='finder'/>
            <div>
              <div className='text-2xl'>탐색인</div>
              <div>이런 선물 본 적 있으세요?</div>
            </div>
          </div>
          <div className='type flex flex-row px-32'>
            <Image className='mr-6' src={Attention} width={60} height={60} alt='attentioner'/>
            <div>
              <div className='text-2xl'>정성인</div>
              <div>포스트잇 효과를 아시나요?</div>
            </div>
          </div>
          <div className='type flex flex-row px-32'>
            <Image className='mr-6' src={Romance} width={60} height={60} alt='romancer'/>
            <div>
              <div className='text-2xl'>낭만인</div>
              <div>낭만없이 살기 가능하세요?</div>
            </div>
          </div>
          <div className='type flex flex-row px-24'>
            <Image className='mr-6' src={Worry} width={60} height={60} alt='worrier'/>
            <div>
              <div className='text-2xl'>부담인</div>
              <div>요즘 선물주고받기 부담스러우시죠?</div>
            </div>
          </div>
          <div className='type flex flex-row  px-36'>
            <Image className='mr-6' src={Laugher} width={60} height={60} alt='laugher'/>
            <div>
              <div className='text-2xl'>유머인</div>
              <div>신이 아이를 낳으면?</div>
            </div>
          </div>
        </div>
        {/* 두번째 페이지 여기까지 */}
        <div className='center mt-96'>
          <div className='text-2xl'>인기상품</div>
          <div className='grid grid-cols-2 gap-6 mt-8'>
            <div className='prod'>01</div>
            <div className='prod'>02</div>
            <div className='prod'>03</div>
            <div className='prod'>04</div>
            <div className='prod'>05</div>
            <div className='prod'>06</div>
          </div>
        </div>
        {/* 세번째 페이지 여기까지 */}
        <div className='flex flex-col items-center mt-96'>
          <div className='text-xl'>센스프레즌은 뭐하는 곳인가요?</div>
          <div className='mt-14'>저희는 사려깊은 고객님들을 위해 선물을 추천드리는 브랜드입니다.</div>
          <div className='mt-32 text-xl'>CONTACT US</div>
          <div className='mt-14'>
            <div>insta | zungwoozin</div>
            <div>email | ujinjung6578@naver.com</div>
            <div>phone | 010-3445-5198</div>
          </div>
        </div>
        {/* 네번째 페이지 여기까지 */}
      </NextUIProvider>
    </main>
  )
};
