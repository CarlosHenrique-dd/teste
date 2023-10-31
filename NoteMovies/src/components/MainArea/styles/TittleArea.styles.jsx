import { Typography, styled } from "@mui/material"

import { ContainerST } from "./Default.styles"

export const TittleContainer = styled(ContainerST)`
  display: grid;
  height: 50%;
`
export const TextST = styled(Typography)`
  color: red;
  font-size: 60px;
  font-weight: 500;
  text-align: center;
`

export const SubTextST = styled(TextST)`
  color: white;
  font-size: 50px;
  font-weight: 400;
`
