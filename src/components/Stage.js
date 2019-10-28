import React from "react";
import Cell from "./Cell";
import { createStage } from "../gameHelpers"
import { StyledStage } from "./styles/StyledStage"

function Stage ({ stage }) {
  return(
    <StyledStage width={stage[0].length} height={stage.height}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]}/> ))}
    </StyledStage>
  )
}

export default Stage;