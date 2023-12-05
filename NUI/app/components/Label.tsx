import React from 'react'
import Image from 'next/image'

import Tab from '../../public/Tab.svg'
import EndTab from '../../public/EndTab.svg'

const Label = ({label}: {label: string}) => { 
  return (
    <div className='grid grid-cols-1 grid-rows-1 w-[15vh]'>
        <div className='flex flex-row'>
            <Image
            className='flex'
            src={Tab}
            alt=''/>
            <Image
            className='translate-x-[-0.1vh]'
            src={EndTab}
            style={{height: '3.25vh'}}
            alt=''/>
        </div>
        <div className='absolute text-white font-squares text-osfa self-center px-[1vh]'>
            {label}
        </div>
    </div>
  )
}

export default Label