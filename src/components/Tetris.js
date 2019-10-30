import React, { useState } from "react";
import Stage from "./Stage"
import Display from "./Display"
import Start from "./Start"
import { StyledTetris , StyledTetrisWrapper} from "./styles/StyledTetris";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage"


function Tetris () {

const [dropTime, setDropTime] = useState(null);
const [gameover, setGameOver] = useState(true);

const [player] = usePlayer ();
const [stage, setStage] = useStage(player)
console.log("re-render")
  return(
    <StyledTetrisWrapper>
      <StyledTetris>
      <Stage  stage = {stage}/>
      <aside>
        {gameover ? (
          <div>
          <Display gameover={gameover} text = "BOOM! Oh wait...Game Over." />
          <Display text = "Score" />
          <Display text = "Lines" />
        <Display text = "Level" />
          </div>
        ): (
          <div>
        <Display text = "Score" />
        <Display text = "Lines" />
        <Display text = "Level" />
        <Start />
        </div>
        )}
        
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris