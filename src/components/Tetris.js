import React from "react";
import Stage from "./Stage"
import Display from "./Display"
import Start from "./Start"
import { createStage } from "../gameHelpers";


function Tetris () {


  return(
    <div>
      <Stage  stage = {createStage()}/>
      <aside>
        <Display text = "Score" />
        <Display text = "Lines" />
        <Display text = "Level" />
        <Start />
      </aside>

    </div>
  )
}

export default Tetris