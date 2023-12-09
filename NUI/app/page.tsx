'use client'

import React, { useState } from "react"
import Image from "next/image"
import { Grid1x2, Grid2x2, CharOutline, LabelTab } from "./components"
import { DndContext, closestCenter } from "@dnd-kit/core"
import { Draggable } from "./components/Draggable"
import { Droppable } from "./components/Droppable"

import glock from '../public/items/Glock_17.png'

const Inventory = () => {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable  id="glock">
      <div className="grid grid-cols-1">
        <div className="w-[16vh] h-[16vh] bg-gradient-to-t from-black to-gray-800 opacity-50"/>
        <Image className="absolute w-[16vh] h-[16vh]" src={glock} alt=""/>
      </div>
    </Draggable>
  );
  return (
    <div>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="absolute left-0">
          {!isDropped ? draggableMarkup : null}
        </div>
        <div className="flex relative w-[80vh] h-[85vh] justify-center items-center">
          <CharOutline/>
          <div className="relative flex flex-col gap-[1vh] translate-y-[-1.5vh] justify-center">
            <div className="grid grid-cols-1 gap-[0.2vh]"><LabelTab label={"HEADWEAR"} width={"13vh"}/><Grid2x2/></div>
            <div className="grid grid-cols-1 gap-[0.2vh]"><LabelTab label={"TORSO"} width={"8.15vh"}/><Grid2x2/></div>
            <div className="grid grid-cols-1 gap-[0.2vh]"><LabelTab label={"WAIST"} width={"8.15vh"}/><Grid1x2/></div>
            <div className="grid grid-cols-1 gap-[0.2vh]"><LabelTab label={"LEGWEAR"} width={"11.2vh"}/><Grid2x2/></div>
            <div className="grid grid-cols-1 gap-[0.2vh]"><LabelTab label={"FOOTWEAR"} width={"12.6vh"}/><Grid2x2/></div>
          </div>
          <div className="absolute flex flex-col gap-[1vh] w-[50vh] h-[55vh] place-items-end">
            <div className="grid grid-cols-1 gap-[0.2vh]">
              <LabelTab label={"BACK"} width={"6.75vh"}/>
              <Droppable id='droppable'>
                {isDropped ? draggableMarkup : <Grid2x2/>} 
              </Droppable>
            </div>
            <div className="grid grid-cols-1 gap-[0.2vh] translate-y-[1vh]"><LabelTab label={"LEFT HAND"} width={"11.8vh"}/><Grid2x2/></div>
            <div className="grid grid-cols-1 gap-[0.2vh] translate-y-[0.5vh]"><LabelTab label={"POCKET"} width={"9.25vh"}/><Grid1x2/></div>
          </div>
          <div className="absolute flex flex-col gap-[1vh] w-[50vh] h-[55vh] place-items-start">
            <div className="grid grid-cols-1 gap-[0.2vh] translate-y-[20.75vh]"><LabelTab label={"RIGHT HAND"} width={"13vh"}/><Grid2x2/></div>
            <div className="grid grid-cols-1 gap-[0.2vh] translate-y-[20.25vh]"><LabelTab label={"POCKET"} width={"9.25vh"}/><Grid1x2/></div>
          </div>
        </div>
      </div>
      </DndContext>
    </div>
  )
  function handleDragEnd(event: { over: any }) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
}

export default Inventory