import React, { useState } from "react";
import Stage from "./Stage"
import Display from "./Display"
import Start from "./Start"
import { StyledTetris , StyledTetrisWrapper} from "./styles/StyledTetris";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage"
import { createStage } from "../gameHelpers"

function Tetris () {

const [dropTime, setDropTime] = useState(null);
const [gameover, setGameOver] = useState(false);

const [player, updatePlayerPos, resetPlayer] = usePlayer ();
const [stage, setStage] = useStage(player)
console.log("re-render")

const movePlayer = dir =>{
updatePlayerPos({x: dir, y:0})
}

const startGame = () =>{
setStage(createStage());
resetPlayer()
}

const drop = () =>{
updatePlayerPos({x:0, y:1, collided: false})
}

const dropPlayer = () => {
drop()
}

const move = ([ keyCode ]) => {
if(!gameover){
  if(keyCode  === 37){
    movePlayer(-1)
  }
  else if(keyCode === 39){
    movePlayer(1)
  }
  else if(keyCode === 40){
    dropPlayer()
  }
}
}

  return(
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e =>move[e]}>
      <StyledTetris>
      <Stage  stage = {stage} />
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
        <Start callback={startGame} />
        </div>
        )}
        
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris