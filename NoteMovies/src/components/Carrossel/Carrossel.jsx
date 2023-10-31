import { Container } from "@mui/material"

import "./CategoriesMenu.css"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider from "react-slick"
import CardGeneroMenu from "./CardGeneroMenu"

const Carrossel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  }
  return (
    <div className="div-menu">
      <div className="categ-menu">
        {/* <h1>Categorias</h1> */}

        <Slider {...settings}>
          <div className="list-card">
            <h3>Ação</h3>

            <CardGeneroMenu nome={"A Origem"} path={"/k3UoZhRHg6h2XYzwNAJJvGC2yev.jpg"} />
            <CardGeneroMenu nome={"Batman: O Cavaleiro das Trevas"} path={"/iGZX91hIqM9Uu0KGhd4MUaJ0Rtm.jpg"} />
            <CardGeneroMenu nome={"Avatar"} path={"/8x4TSGxaIIzTgQXyplBn1Y8mjlX.jpg"} />
            <CardGeneroMenu nome={"A Origem"} path={"/k3UoZhRHg6h2XYzwNAJJvGC2yev.jpg"} />
            <CardGeneroMenu nome={"Batman: O Cavaleiro das Trevas"} path={"/iGZX91hIqM9Uu0KGhd4MUaJ0Rtm.jpg"} />
            <CardGeneroMenu nome={"Avatar"} path={"/8x4TSGxaIIzTgQXyplBn1Y8mjlX.jpg"} />
            <CardGeneroMenu nome={"Avatar"} path={"/8x4TSGxaIIzTgQXyplBn1Y8mjlX.jpg"} />
            <CardGeneroMenu nome={"A Origem"} path={"/k3UoZhRHg6h2XYzwNAJJvGC2yev.jpg"} />
            <CardGeneroMenu nome={"Batman: O Cavaleiro das Trevas"} path={"/iGZX91hIqM9Uu0KGhd4MUaJ0Rtm.jpg"} />
            <CardGeneroMenu nome={"Avatar"} path={"/8x4TSGxaIIzTgQXyplBn1Y8mjlX.jpg"} />
          </div>
          <div className="list-card">
            <h3>Ficção</h3>
            <CardGeneroMenu nome={"Interestelar"} path={"/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg"} />
            <CardGeneroMenu nome={"Os Vingadores: The Avengers"} path={"/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg"} />
            <CardGeneroMenu nome={"Vingadores: Guerra Infinita"} path={"/rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg"} />
            <CardGeneroMenu nome={"Interestelar"} path={"/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg"} />
            <CardGeneroMenu nome={"Os Vingadores: The Avengers"} path={"/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg"} />
            <CardGeneroMenu nome={"Vingadores: Guerra Infinita"} path={"/rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg"} />
            <CardGeneroMenu nome={"Vingadores: Guerra Infinita"} path={"/rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg"} />
            <CardGeneroMenu nome={"Interestelar"} path={"/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg"} />
            <CardGeneroMenu nome={"Os Vingadores: The Avengers"} path={"/u49fzmIJHkb1H4oGFTXtBGgaUS1.jpg"} />
            <CardGeneroMenu nome={"Vingadores: Guerra Infinita"} path={"/rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg"} />
          </div>
          <div className="list-card">
            <h3>Terror</h3>
            <CardGeneroMenu nome={"O Segredo da Cabana"} path={"/raOYAZFVpWyL9teEzLDEwtP8lm9.jpg"} />
            <CardGeneroMenu nome={"O Exorcista"} path={"/mdKnZaCbNWq8CMhN8GxGZXIEC9j.jpg"} />
            <CardGeneroMenu nome={"O Homem nas Trevas"} path={"/6F9QUWhGpZtYH0ibbuLJ49k91tZ.jpg"} />
            <CardGeneroMenu nome={"O Segredo da Cabana"} path={"/raOYAZFVpWyL9teEzLDEwtP8lm9.jpg"} />
            <CardGeneroMenu nome={"O Exorcista"} path={"/mdKnZaCbNWq8CMhN8GxGZXIEC9j.jpg"} />
            <CardGeneroMenu nome={"O Homem nas Trevas"} path={"/6F9QUWhGpZtYH0ibbuLJ49k91tZ.jpg"} />
            <CardGeneroMenu nome={"O Homem nas Trevas"} path={"/6F9QUWhGpZtYH0ibbuLJ49k91tZ.jpg"} />
            <CardGeneroMenu nome={"O Segredo da Cabana"} path={"/raOYAZFVpWyL9teEzLDEwtP8lm9.jpg"} />
            <CardGeneroMenu nome={"O Exorcista"} path={"/mdKnZaCbNWq8CMhN8GxGZXIEC9j.jpg"} />
            <CardGeneroMenu nome={"O Homem nas Trevas"} path={"/6F9QUWhGpZtYH0ibbuLJ49k91tZ.jpg"} />
          </div>

          <div className="list-card">
            <h3>Romance</h3>
            <CardGeneroMenu nome={"A Culpa é das Estrelas"} path={"/lW1HA1JqXxKp1x5eSzEqTNxfIgA.jpg"} />
            <CardGeneroMenu nome={"Diário de uma Paixão"} path={"/A07izLVyZCrmq0HTvFg6qdqiZE5.jpg"} />
            <CardGeneroMenu nome={"A Teoria de Tudo"} path={"/6q1XGbTJQqOGUpX9OlO0bGmtpql.jpg"} />
            <CardGeneroMenu nome={"A Culpa é das Estrelas"} path={"/lW1HA1JqXxKp1x5eSzEqTNxfIgA.jpg"} />
            <CardGeneroMenu nome={"Diário de uma Paixão"} path={"/A07izLVyZCrmq0HTvFg6qdqiZE5.jpg"} />
            <CardGeneroMenu nome={"A Teoria de Tudo"} path={"/6q1XGbTJQqOGUpX9OlO0bGmtpql.jpg"} />
            <CardGeneroMenu nome={"A Teoria de Tudo"} path={"/6q1XGbTJQqOGUpX9OlO0bGmtpql.jpg"} />
            <CardGeneroMenu nome={"A Culpa é das Estrelas"} path={"/lW1HA1JqXxKp1x5eSzEqTNxfIgA.jpg"} />
            <CardGeneroMenu nome={"Diário de uma Paixão"} path={"/A07izLVyZCrmq0HTvFg6qdqiZE5.jpg"} />
            <CardGeneroMenu nome={"A Teoria de Tudo"} path={"/6q1XGbTJQqOGUpX9OlO0bGmtpql.jpg"} />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Carrossel
