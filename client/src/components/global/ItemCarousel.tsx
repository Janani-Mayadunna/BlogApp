import React from 'react';

function Item({ item }: any) {
  return (
    <img
      src={item.image}
      alt='carousel_image'
      style={{ width: '100%', height: '55vh', borderRadius: '2rem' }}></img>
  );
}

export default Item;
