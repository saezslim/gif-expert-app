import { AddCategory } from "./"
import PropTypes from "prop-types"

export const FixedHeader = ({onNewCategory}) => {
  return(
    <header className="header">
      <h1 className="header__title">Gif Expert App</h1>
      <AddCategory onNewCategory={onNewCategory}/>
    </header>
  )
}

FixedHeader.propTypes = {
  onNewCategory: PropTypes.func
}