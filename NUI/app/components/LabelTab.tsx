import React from 'react'


const LabelTab = ({label, width}: {label: string, width: string}) => { 
  return (
    <div className='grid grid-cols-1 grid-rows-1'>
        <div className='relative w-[6vh] h-[2.5vh] bg-gradient-to-t from-black to-gray-800'/>
        <div className='absolute h-[2.5vh] bg-gradient-to-t from-black to-gray-800 skew-x-[35deg] origin-top-right' style={{width: width}}/>
        <div className='absolute text-white font-squares text-osfa px-[0.75vh]'>
          {label}
        </div>
    </div>
  )
}

export default LabelTab