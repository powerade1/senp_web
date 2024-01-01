'use client'

import React, { useState } from 'react';

interface Option {
  key: number,
  value: string;
  label: string;
}

const OptionSelector: React.FC = () => {

  const options: Option[] = [
    { key: 1, value: 'tree', label: '야자수'},
    { key: 2, value: 'cactus', label: '선인장'},
    { key: 3, value: 'moon', label: '초승달'},
  ];

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);

    if (selected && !selectedOptions.some((opt) => opt.value === selected.value)) {
      updateSelectedOptions((prevOptions) => [...prevOptions, selected]);
    }
    setTotalPrice(selectedOptions.length * 3200 + 3200);
  };

  const handleCancelClick = (index: number) => {
    setSelectedOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
    setTotalPrice(selectedOptions.length * 3200 - 3200);
  };

  const updateSelectedOptions = (callback: (prevOptions: Option[]) => Option[]) => {
    setSelectedOptions(callback);
  };

  return (
    <div>
      <div className='border border-black my-2 '>
        <div className='p-2'>
        {/* 선택할 옵션 */}
        <select onChange={handleOptionChange}>
          <option value="" disabled selected>
            옵션 선택
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        </div>
        {/* 선택한 옵션 */}
        <h3 className='mb-2'>선택한 옵션</h3>
        <ul>
          {selectedOptions.map((option, index) => (
            <li key={option.value} className='flex flex-row justify-center'>
              {option.label}
              <button onClick={() => handleCancelClick(index)} className='pl-2'>취소</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='border border-black my-2 py-2'>
        <button>장바구니 넣기</button>
      </div>
      <div className="p-3 my-2 border border-black">
        총 {totalPrice}원 <br />
        구매
      </div>
    </div>
  );
};

export default OptionSelector;

