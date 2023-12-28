'use client'

import Image from 'next/image'
import Main from 'images/prod/1/main.jpg'
import Detail1 from 'images/prod/1/detail1.jpg'
import Detail2 from 'images/prod/1/detail2.jpg'
import Detail3 from 'images/prod/1/detail3.jpg'
import Detail4 from 'images/prod/1/detail4.jpg'
import LikeButton from 'src/app/components/ui/heart'
import OptionSelector from 'src/app/components/ui/option'
import { useRef } from 'react'


export default function Prod_1() {

    const focusTarget = useRef([] as any);

    const scrollTo = (e: any) => {
        const name = e.target.name;
        const tabs: any = {
            detail: 0,
            review: 1,
            qna: 2,
            returnProd: 3,
        }

        focusTarget.current[tabs[name]].scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <div className="m-2 border border-black flex_container">
            <div className="flex_item center">
                <div className="p-3 text-xl center">2 + 1 그림도안 DIY 그림그리기</div>
                <div className='flex flex-row justify-center'>
                    <div className='text-center flex-1'>
                        <OptionSelector />
                    </div>
                    <div className='p-2 flex-2'>
                        <Image src={Main} width={400} height={400} alt='painting' className='border border-black p-1'/>
                    </div>
                    <div className='center flex-1'>
                        <div className='my-2 font-bold text-xl text-red-500'>3,200원</div>
                        <LikeButton initialLikes={0} />
                    </div>
                </div>
            </div>
            <div className='flex flex-row border border-black p-2 divide-x divide-black flex_item justify-center'>
                <button onClick={scrollTo} className='flex-1' name='detail'>상세정보</button>
                <button onClick={scrollTo} className='flex-1' name='review'>리뷰</button>
                <button onClick={scrollTo} className='flex-1' name='qna'>Q&A</button>
                <button onClick={scrollTo} className='flex-1' name='returnProd'>반품/교환정보</button>
            </div>
            <div className='flex flex-col border border-black mt-3 divide-y divide-black px-4 flex_item'>
                <div className='p-2 text-lg'>상품정보</div>
                <div className='grid grid-cols-6'>
                    <div className='p-2 bg-slate-200 divide-y divide-white'>
                        <div>상품번호</div>
                        <div>제조사</div>
                        <div>이벤트</div>
                    </div>
                    <div className='p-2 col-span-2 divide-y'>
                        <div>0001</div>
                        <div>센프</div>
                        <div>3000원 쿠폰</div>
                    </div>
                    <div className='p-2 bg-slate-200 divide-y divide-white'>
                        <div>상품상태</div>
                        <div>브랜드</div>
                        <div>원산지</div>
                    </div>
                    <div className='p-2 col-span-2 divide-y'>
                        <div>신상품</div>
                        <div>센프</div>
                        <div>한국</div>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-6'>
                        <div className=' bg-slate-200 p-2'>제품속성</div>
                        <div className='px-2 p-2 col-span-5'>회화, 인테리어액자, 20 X 20</div>
                    </div>
                </div>
                <div className='grid grid-cols-6 mb-4'>
                    <div className='bg-slate-200 divide-y p-2 divide-white'>
                        <div>영수증 발급</div>
                        <div>A/S 안내</div>
                    </div>
                    <div className='divide-y col-span-5 p-2'>
                        <div>신용카드전표, 현금영수증 발급</div>
                        <div>010-3445-5198</div>
                    </div>
                </div>
            </div>
            <div className='flex_item my-4' ref={(el) => {focusTarget.current[0] = el}}>
                <Image src={Detail1} alt='detail1'></Image>
                <Image src={Detail2} alt='detail2'></Image>
                <Image src={Detail3} alt='detail3'></Image>
                <Image src={Detail4} alt='detail4'></Image>
            </div>
            <div className='flex flex-col p-3'>
                <div className='text-xl'>태그</div>
                <div className='flex flex-row space-x-2'>
                    <div className='bg-gray-300 rounded'>#DIY</div>
                    <div className='bg-gray-300 rounded'>#diy그리기</div>
                    <div className='bg-gray-300 rounded'>#명화그리기세트</div>
                    <div className='bg-gray-300 rounded'>#유화그리기</div>
                    <div className='bg-gray-300 rounded'>#커플선물</div>
                </div>
            </div>
            <div className='border border-black mt-4 m-2 flex_item'>
                <div className='border-b font-bold p-2'>거래 조건에 관한 정보</div>
                <table className="border border-collapse border-black text-xs m-1">
                <tr>
                    <td className="border bg-slate-200">재화등의 배송방법에 관한 정보</td>
                    <td className="border">택배</td>
                </tr>
                <tr>
                    <td className="border bg-slate-200">주문 이후 예상되는 배송기간</td>
                    <td className="border">대금 지급일로부터 3일 이내에 발송</td>
                </tr>
                <tr>
                    <td className="border bg-slate-200">제품하자·오배송 등에 따른 청약철회 등의 경우 청약철회 등의 기한 및 통신판매업자가 부담하는 반품비용 등에 관한 정보</td>
                    <td className="border">전자상거래 등에서의 소비자보호에 관한 법률 등에 의한 제품의 하자 또는 오배송 등으로 인한 청약철회의 경우에는 상품 수령 후 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에 청약철회를 할 수 있으며, 반품 비용은 통신판매업자가 부담합니다.</td>
                </tr>
                <tr>
                    <td className="border bg-slate-200">제품하자가 아닌 소비자의 단순변심에 따른 청약철회 시 소비자가 부담하는 반품비용 등에 관한 정보</td>
                    <td className="border rowspan-3">편도 3000원 (최초 배송비 무료인 경우 6000원 부과)</td>
                </tr>
                <tr>
                    <td className="border bg-slate-200">제품하자가 아닌 소비자의 단순변심에 따른 청약철회가 불가능한 경우 그 구체적 사유와 근거</td>
                    <td className="border">전자상거래 등에서의 소비자보호에 관한 법률 등에 의한 청약철회 제한 사유에 해당하는 경우 및 기타 객관적으로 이에 준하는 것으로 인정되는 경우 청약철회가 제한될 수 있습니다.</td>
                </tr>
                <tr>
                    <td className="border bg-slate-200">재화등의 교환·반품·보증 조건 및 품질보증기준</td>
                    <td className="border">소비자분쟁해결기준(공정거래위원회 고시) 및 관계법령에 따릅니다.</td>
                </tr>
                <tr>
                    <td className="border bg-slate-200">재화등의 A/S 관련 전화번호</td>
                    <td className="border">010-3445-5198</td>
                </tr>
                <tr>
                    <td className="border bg-slate-200">대금을 환불받기 위한 방법과 환불이 지연될 경우 지연배상금을 지급받을 수 있다는 지연배상금 지급의 구체적인 조건·절차</td>
                    <td className="border">주문취소 및 대금의 환불은 네이버페이 마이페이지에서 신청할 수 있으며, 전자상거래 등에서의 소비자보호에 관한 법률에 따라 소비자의 청약철회 후 판매자가 재화 등을 반환 받은 날로부터 3영업일 이내에 지급받은 대금의 환급을 정당한 사유 없이 지연하는 때에는 소비자는 지연기간에 대해서 연 15%의 지연배상금을 판매자에게 청구할 수 있습니다.</td>
                </tr>
                <tr>
                    <td className="border bg-slate-200">소비자피해보상의 처리, 재화등에 대한 불만 처리 및 소비자와 사업자 사이의 분쟁처리에 관한 사항</td>
                    <td className="border">소비자분쟁해결기준(공정거래위원회 고시) 및 관계법령에 따릅니다.</td>
                </tr>
                <tr>
                    <td className="border bg-slate-200">거래에 관한 약관의 내용 또는 확인할 수 있는 방법</td>
                    <td className="border">상품상세 페이지 및 페이지 하단의 이용약관 링크를 통해 확인할 수 있습니다.</td>
                </tr>
            </table>
            </div>
            <div className='border border-black flex_item' ref={(el) => {focusTarget.current[1] = el}}>
                <div className='border-b font-bold p-2'>상품 리뷰</div>
                <div className='text-sm p-1 border-b border-black'>
                    상품을 구매하신 분들이 작성하신 리뷰입니다. 리뷰 작성 시 아래 금액만큼 포인트가 적립됩니다.<br/>
                    텍스트 리뷰: 200원 | 포토/동영상 리뷰: 600원
                </div>
                <div className='font-semibold p-1'>리뷰 0건</div>
                <div className='center text-sm text-slate-400 m-16'>아직 작성된 리뷰가 없습니다.</div>
            </div>
            <div className='border border-black mt-3 flex_item' ref={(el) => {focusTarget.current[2] = el}}>
                <div className='border-b font-bold p-2'>Q&A</div>
                <div className='flex flex-row border-b border-black pr-60'>
                    <div className='border m-2'>상품 Q&A 작성하기</div>
                    <div className='border m-2'>나의 질문 조회하기</div>
                </div>
                <div className='font-semibold p-1'>Q&A 0건</div>
                <div className='center text-sm text-slate-400 m-16'>아직 작성된 Q&A가 없습니다.</div>
            </div>
            <div className='border border-black m-3 px-auto flex_item'  ref={(el) => {focusTarget.current[3] = el}}>
                <div className='border-b font-bold p-2 '>반품/교환정보</div>
                <div className='text-center text-sm p-1'>
                    <div className='font-bold'>반품/교환 안내</div>
                    <div>반품 시 먼저 문의주셔서 반품사유, 택배사, 배송비, 반품지 주소 등을 협의하신 후 <br/> 반품 상품을 발송해주시기 바랍니다.</div>
                </div>
                <table className="border border-collapse text-sm m-1">
                    <tr>
                        <td className="border border-slate-200 bg-slate-200">반품배송비</td>
                        <td className="border border-slate-200 p-1">편도 3,000원 | 교환배송비 6000원</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-200 bg-slate-200">보내실 곳</td>
                        <td className="border border-slate-200 p-1">서울특별시 영등포구 신길로42길 35 (삼성래미안) 111동 102호 (우: 07362)</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-200 bg-slate-200">반품/교환 사유에 따른 요청 가능 기간</td>
                        <td className="border border-slate-200 p-1">
                            구매자 단순 변심은 상품 수령 후 7일 이내(구매자 반품배송비 부담),<br/>
                            표시/광고와 상이, 계약 내용과 다르게 이행된 경우 상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내(판매자 반품배송비 부담) 둘 중 하나 경과 시 반품/교환 불가
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-200 bg-slate-200 text-start">반품/교환 <br />불가능 사유</td>
                        <td className="border border-slate-200 p-1">
                            1. 반품요청기간이 지난 경우 <br/>
                            2. 구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우 (단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외) <br/>
                            3. 구매자의 책임있는 사유로 포장이 훼손되어 상품 가치가 현저히 상실된 경우 (예: 식품, 화장품, 향수류, 음반 등) <br/>
                            4. 구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 (라벨이 떨어진 의류 또는 태그가 떨어진 명품관 상품인 경우) <br/>
                            5. 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우 <br/>
                            6. 고객의 요청사항에 맞춰 제작에 들어가는 맞춤제작상품의 경우 (판매자에게 회복불가능한 손해가 예상되고, 그러한 예정으로 청약철회권 행사가 불가하다는 사실을 서면 동의 받은 경우) <br/>
                            7. 복제가 가능한 상품 등의 포장을 훼손한 경우 (CD/DVD/GAME/도서의 경우 포장 개봉 시)
                        </td>
                    </tr>
                </table>
            </div>
            <div className='border border-black mx-3 mb-4 flex_item'>
                <div className='border-b p-2 font-bold'>주의사항</div>
                <ul className='text-sm space-y-1 divide-y p-2'>
                    <li>전자상거래 등에서 소비자보호에 관한 법률에 의한 반품규정이 판매자가 지정한 반품 조건보다 우선합니다.</li>
                    <li>전자상거래 등에서 소비자보호에 관한 법률에 의거하여 미성년자가 물품을 구매하는 경우, 법정대리인이 동의하지 않으면 미성년자 본인 또는 법정대리인이 구매를 취소할 수 있습니다.</li>
                    <li>전기용품 및 생활용품 안전관리법 및 어린이제품 안전 특별법 규정에 의한 안전관리대상 품목인 전기용품, 생활용품, 어린이제품을 판매 또는 구매하실 경우에는 해당 제품이 안전인증, 안전확인, 공급자적합성확인, 안전기준준수 적용 제품인지 확인하시기 바랍니다.</li>
                </ul>
            </div>
        </div>
    )
}