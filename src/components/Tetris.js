import React from "react";
import Stage from "./Stage"
import Display from "./Display"
import Start from "./Start"


function Tetris () {


  return(
    <div>
      <Stage />
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