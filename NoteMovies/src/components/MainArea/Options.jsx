import { OptionContainer, SaveButton, ToggleButtonGroupST, ToggleButtonST } from "./styles/Options.styles"

import { useEffect, useState } from "react"

const Options = () => {
  const [streamings, setStreamings] = useState([1, 2, 3, 4, 5])
  const handleStreamings = (event, newSelectedButtons) => {
    setStreamings(newSelectedButtons)
  }

  const [categories, setCategories] = useState([11, 22, 33, 44, 55, 111, 222, 333, 444, 555])
  const handleCategories = (event, newSelectedButtons) => {
    setCategories(newSelectedButtons)
  }

  const save = () => {
    console.log(streamings, categories)
  }

  return (
    <OptionContainer disableGutters>
      <ToggleButtonGroupST value={streamings} onChange={handleStreamings}>
        <ToggleButtonST value={1}>HBO</ToggleButtonST>
        <ToggleButtonST value={2}>Netflix</ToggleButtonST>
        <ToggleButtonST value={3}>Prime</ToggleButtonST>
        <ToggleButtonST value={4}>Star+</ToggleButtonST>
        <ToggleButtonST value={5}>Disney+</ToggleButtonST>
      </ToggleButtonGroupST>
      <ToggleButtonGroupST value={categories} onChange={handleCategories}>
        <ToggleButtonST value={11}>Ação</ToggleButtonST>
        <ToggleButtonST value={22}>Aventura</ToggleButtonST>
        <ToggleButtonST value={33}>Ficção</ToggleButtonST>
        <ToggleButtonST value={44}>Terror</ToggleButtonST>
        <ToggleButtonST value={55}>Romance</ToggleButtonST>
      </ToggleButtonGroupST>
      <SaveButton onClick={save}>Salvar</SaveButton>
    </OptionContainer>
  )
}

export default Options
