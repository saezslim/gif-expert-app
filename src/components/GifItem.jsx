import { useFunCopy } from "../hooks";
import PropTypes from 'prop-types'

export const GifItem = ({ title, url }) => {
  const {isClicked, copyURL} = useFunCopy(url)
  return (
    <div className={isClicked ? 'card card--click' : 'card'} onClick={copyURL}>
      <h4 className="card__title">{title}</h4>
      <img className="card__img" src={url} alt={title} />
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
