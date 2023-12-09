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
            width: '8vh',
        }}/>
      </div>
  )
}

export default Slot