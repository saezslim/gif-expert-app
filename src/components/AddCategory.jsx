import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("")
  
  const onInputChange = ({target}) => setInputValue(target.value)
  
  const onSubmit = (event) => {
    event.preventDefault()
    const originalValue = inputValue.trim()
    if(originalValue <= 3) return // Valida que el input al menos tenga 3 caracteres.
    onNewCategory(originalValue)
    setInputValue('')// Se limpia el input
  }
  return(
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        className="inputSearch"
      />
    </form>
  )
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func
}