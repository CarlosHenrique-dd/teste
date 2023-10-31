import { SubTextST, TextST, TittleContainer } from "./styles/TittleArea.styles"

const TittleArea = () => {
  return (
    <TittleContainer>
      <TextST>
        Note <span style={{ color: "#2d48c2" }}>Movies</span>
      </TextST>
      <SubTextST>Assista Mais, Escolha menos</SubTextST>
    </TittleContainer>
  )
}

export default TittleArea
