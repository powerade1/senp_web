import Link from 'next/link'
import Image from 'next/image'
import Finder from 'images/type/finder.png'
import Laugher from 'images/type/laugher.png'
import Romance from 'images/type/romance.png'
import Worry from 'images/type/worry.png'
import Attention from 'images/type/attention.png'

export default function Type() {
    return (
        <div className='center'>
            <div className='grid grid-cols-1 mt-8 mb-96 divide-y-2'>
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
            <Link href={'/'}>뒤로 가기</Link>
        </div>
    )
}