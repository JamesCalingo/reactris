import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetromino"
function Cell ({ type }) {
  return(
<StyledCell type={0} color={TETROMINOS[0].color}>X</StyledCell>
  )
}

export default Cell;