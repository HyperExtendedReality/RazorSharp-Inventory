import React from 'react'
import Slot from './Slot'
 
const Grid2x2 = () => {
  return (
      <div className="grid grid-cols-2">
        <Slot/> 
        <Slot/>
        <Slot/>
        <Slot/>
      </div>
    )
}

export default Grid2x2