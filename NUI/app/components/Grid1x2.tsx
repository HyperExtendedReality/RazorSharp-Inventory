import React from 'react'
import Slot from './Slot'

const Grid1x2 = () => {
  return (
    <div className="grid grid-cols-2"> 
        <Slot/>
        <Slot/>
    </div>
  )
}

export default Grid1x2