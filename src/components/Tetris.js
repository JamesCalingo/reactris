import React from "react";
import Stage from "./Stage"
import Display from "./Display"
import Start from "./Start"
import { createStage } from "../gameHelpers";
import { StyledTetris , StyledTetrisWrapper} from "./styles/StyledTetris";


function Tetris () {

  return(
    <StyledTetrisWrapper>
      <StyledTetris>
      <Stage  stage = {createStage()}/>
      <aside>
        <Display text = "Score" />
        <Display text = "Lines" />
        <Display text = "Level" />
        <Start />
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris