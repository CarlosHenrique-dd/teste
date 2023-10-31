import { Button } from "@mui/material"
import { ButtonAddition, CardContainer, CardImage } from "./styles/Card.styles"

import PropsTypes from "prop-types"

const Card = (props) => {
  const link = "https://image.tmdb.org/t/p/w500"
  const movie = props.movie

  return (
    <CardContainer disableGutters style={{ borderRadius: "20px" }}>
      <Button onClick={() => props.open()} style={{ height: "100%", display: "block" }}>
        <ButtonAddition disableRipple>{movie.vote_average}</ButtonAddition>
        <CardImage src={link + movie.poster_path} style={{ borderRadius: "20px" }} />
      </Button>
    </CardContainer>
  )
}

export default Card

Card.propTypes = {
  movie: PropsTypes.object,
}
