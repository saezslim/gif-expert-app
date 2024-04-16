import PropTypes from 'prop-types'
import {useFetchGifs} from "../hooks/useFetchGifs"
import { GifItem, LoadingScreen } from './'


export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category)

  return (
    <div className="grid-card">
      <h3 className="grid-card__title" aria-label='cardTitle'>{category}</h3>

      {
        !isLoading ?
        images.map((image) => (
          <GifItem key={image.id} {...image} />
        )) :
        <LoadingScreen />
    }
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
