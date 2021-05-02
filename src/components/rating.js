import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating = ({ rating }) => {
  const totalRating = [];

  for (let i = 0; i < 5; i++) {
    let starFill = rating - i;
    if (starFill > 1) {
      totalRating.push(
        <li className='star' key={i}>
          {/* <FaStar /> */}
          <BsStarFill />
        </li>
      );
    } else if (starFill < 1 && starFill > 0) {
      totalRating.push(
        <li className='star' key={i}>
          {/* <FaStar /> */}
          <BsStarHalf />
        </li>
      );
    } else {
      totalRating.push(
        <li className='star-o' key={i}>
          {/* <FaStar /> */}
          <BsStar />
        </li>
      );
    }
  }
  return (
    <div className='rating'>
      <ul>{totalRating}</ul>
    </div>
  );
};

export default Rating;
