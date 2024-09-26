import React from 'react';
import './styles.css';
import { FaStar } from 'react-icons/fa';

export default function StarsRating({ StarsNumber = 5 }) {
  const [stars, setStars] = React.useState(0);
  const [index, setIndex] = React.useState(0);

  function click(index) {
    setStars(index);
  }
  function hover(index) {
    setIndex(index);
  }
  function leave() {
    setIndex(stars);
  }

  return (
    <div className="rating">
    <div className="stars-container">
      {[...Array(StarsNumber)].map((star, i) => {
        i = i + 1;
        return (
          <FaStar
            key={i}
            className={
              i <= (index || stars)
                ? 'stars-star-active'
                : 'stars-star-inactive'
            }
            size={35}
            onClick={() => click(i)}
            onMouseMove={() => hover(i)}
            onMouseLeave={() => leave()}
          />
        );
      })}
    </div>
    <div className="rating-text">{`${stars}/${StarsNumber}`} Stars</div>
    </div>
  );
}
