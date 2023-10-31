import { Container } from "@mui/material"
import MovieDetail from "../MainArea/MovieDetail"

const Slider = () => {
  return (
    <Container maxWidth="100%" disableGutters style={{ border: "1px solid black" }}>
      <MovieDetail />
    </Container>
  )
}

export default Slider
