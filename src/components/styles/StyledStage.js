import styled from "styled-components";

export const StyledStage = styled.div`
display: grid;
grid-template-rows: repeat(
  ${props => props.height},
  calc (25 vw / ${props => props.width})
);
grid-template-columns: repeat(
  ${props => props.width}, 1 fr
);
grid-gap: 1px;
border: 2px solid #333;
width: 100%;
max-width: 25 vw;
background: #111
`