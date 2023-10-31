/* eslint-disable react/prop-types */
import "./CardGeneroMenu.css"

const CardGeneroMenu = ({ nome, path }) => {
  const link = "https://image.tmdb.org/t/p/w500"
  return (
    <div className="filmCard" style={{ height: "20px" }}>
      <img src={link + path} alt="" style={{ height: "100%", borderTopLeftRadius: "12px" }} />
      <p className="textCard">{nome}</p>
    </div>
  )
}

export default CardGeneroMenu
