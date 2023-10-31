import { MainContainer, SemiContainer } from "./styles/MainArea.styles"

import { useState } from "react"

import Options from "./Options"
import SearchArea from "./SearchArea"
import TittleArea from "./TittleArea"
import CardsArea from "./CardsArea"

const MainArea = (props) => {
  const [showOptions, setShowOptions] = useState(false)
  const handleShowOptions = () => {
    setShowOptions(!showOptions)
  }

  const [showDetails, setShowDetails] = useState(false)
  const handleShowDetails = () => {
    setShowDetails(true)
  }

  return (
    <MainContainer maxWidth="100%" disableGutters>
      <SemiContainer disableGutters>
        {showOptions ? <Options /> : <TittleArea />}
        <SearchArea showOptions={handleShowOptions} details={handleShowDetails} />
      </SemiContainer>
      <SemiContainer disableGutters>{showDetails ? <CardsArea open={props.open} /> : <img src="family.png" style={{ height: "100%" }} />}</SemiContainer>
    </MainContainer>
  )
}

export default MainArea
