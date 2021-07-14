import React from 'react';
import './Rating.css';

function Rating() {
  return (
    <div className='rating'>
      <span class='fa fa-star checked'></span>
      <span class='fa fa-star checked'></span>
      <span class='fa fa-star checked'></span>
      <span class='fa fa-star'></span>
      <span class='fa fa-star'></span>
    </div>
  );
}

export default Rating;
