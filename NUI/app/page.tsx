import React from "react"
import { Grid1x2, Grid2x2, CharOutline, Label } from "./components"


const Inventory = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex relative w-[80vh] h-[80vh] justify-center items-center">
        <CharOutline/>
        <div className="flex flex-col relative gap-[1vh] h-[80vh] justify-center">
          <div><Label label={"HEADWEAR"}/><Grid2x2/></div>
          <div><Label label={"TORSO"}/><Grid2x2/></div>
          <div><Label label={"WAIST"}/><Grid1x2/></div>
          <div><Label label={"LEGWEAR"}/><Grid2x2/></div>
          <div><Label label={"FOOTWEAR"}/><Grid2x2/></div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
