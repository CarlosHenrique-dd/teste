import { ButtonST, ContainerST } from "./Default.styles"

import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material"

export const OptionContainer = styled(ContainerST)`
  display: flex;
  height: 50%;
`
export const ToggleButtonGroupST = styled(ToggleButtonGroup)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const ToggleButtonST = styled(ToggleButton)`
  background-color: #fff;
  width: 100px;
  margin: 2px;
  border-radius: 0px;
`

export const SaveButton = styled(ButtonST)`
  height: 100;
  width: 390px;
  background-color: #0000ff;
  border-radius: 20px;
  :hover {
    background-color: #0707bd;
  }
`
