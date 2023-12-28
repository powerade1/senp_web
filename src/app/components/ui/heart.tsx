'use client'

import Image from 'next/image'
import Heart from 'images/filled-heart.png'
import EmptyHeart from 'images/empty-heart.png'
import Bag from 'images/bag.png'
import React, { useState } from 'react';

interface LikeButtonProps {
  initialLikes: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (!isLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <div className='center relative'>
        <Image onClick={handleLikeClick} src={isLiked? Heart: EmptyHeart} alt='heart' width={50} className=' absolute'/>
        <div className='absolute m-2'>
          {likes}
        </div>
      </div>
      <Image src={Bag} alt='bag_image' width={50} height={50} className='mt-14'/>
    </div>
  );
};

export default LikeButton;
