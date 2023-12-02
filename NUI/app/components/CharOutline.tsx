import React from 'react';
import Image from 'next/image';

import Male from '../../public/Male.svg';

function CharOutline() {
  return (
    <div className = 'flex justify-items-center'>
      <div className='scale-250 justify-items-center'>
        <Image
          src={Male}
          alt=""
        />
      </div>
    </div>
  )
}

export default CharOutline