import { useState } from "react"

import MainArea from "./components/MainArea/MainArea"
import Navbar from "./components/Navbar.jsx/Navbar"
import Slider from "./components/Slider/slider"
import Carrossel from "./components/Carrossel/Carrossel"
import Footer from "./components/Footer/Footer"

function App() {
  const [openDetail, setDetail] = useState(false)
  const handleDetail = () => {
    setDetail(true)
  }
  return (
    <>
      <Navbar />
      <MainArea open={handleDetail} />
      {openDetail ? <Slider /> : <a></a>}
      <Carrossel />
      <Footer />
    </>
  )
}

export default App
