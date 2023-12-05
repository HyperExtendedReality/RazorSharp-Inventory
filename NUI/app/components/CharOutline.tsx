import React from 'react'
import Image from 'next/image'

import Male from '../../public/Male.svg'

const CharOutline = () => {
  return (
     <Image
        src={Male}
        alt=""
        priority={true}
        fill
      />
  )
}

export default CharOutline