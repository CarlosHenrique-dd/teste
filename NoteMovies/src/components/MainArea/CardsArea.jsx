/* eslint-disable no-unused-vars */
import { CardsContainer } from "./styles/CardsArea.styles"

import Card from "./Card"

import PropsTypes from "prop-types"

const CardsArea = (props) => {
  const movie1 = JSON.parse(localStorage.getItem("movies"))

  return <CardsContainer disableGutters>{movie1 && movie1.map((item) => <Card key={item.id} movie={item} open={props.open} />)}</CardsContainer>
}

export default CardsArea

CardsArea.propTypes = {
  movie: PropsTypes.object,
}
