import React from 'react'
import Image from 'next/image'

import slot from '../../public/Slot.svg'

const Slot = () => {
  return (
      <div>
        <Image
          src={slot}
          alt="slot"
          priority={true}
          style={{
            width: '7.5vh',
        }}/>
      </div>
  )
}

export default Slot