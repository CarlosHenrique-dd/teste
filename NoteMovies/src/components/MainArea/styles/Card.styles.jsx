import { ButtonST, ContainerST } from "./Default.styles"

import { styled } from "@mui/material"

export const CardContainer = styled(ContainerST)`
  display: block;
  height: 90%;
  width: 30%;
`

export const CardImage = styled("img")`
  height: 100%;
`

export const ButtonAddition = styled(ButtonST)`
  cursor: default;
  position: absolute;

  border-bottom-right-radius: 100px;
`
