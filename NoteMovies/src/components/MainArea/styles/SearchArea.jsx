import { ButtonST, ContainerST } from "./Default.styles"

import { styled } from "@mui/material"

export const SearchContainer = styled(ContainerST)`
  height: 50%;
`

export const SearchButton = styled(ButtonST)`
  background-color: #ff0202;
  height: 100px;
  width: 390px;
  margin: 5px;
  :hover {
    background-color: #cc0202;
  }
`

export const OptionsButton = styled(SearchButton)`
  width: 100px;
`
