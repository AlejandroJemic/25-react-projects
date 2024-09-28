import './styles.css';
import useApiData from '../../hooks/useApiData';
import { useState, useEffect } from 'react';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';

// https://api.themoviedb.org/3/movie/now_playing?api_key=835bad10fdf10d138494848e0f0b9c18&language=es-ES
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

export default function ImageSlider() {
  const _apiKey = '835bad10fdf10d138494848e0f0b9c18';
  const _url = 'https://api.themoviedb.org/3/movie/now_playing';
  const _language = 'en-US';

  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);

  const { data, isLoading, error } = useApiData(
    `${_url}?api_key=${_apiKey}&language=&${_language}`
  );

  useEffect(() => {
    if (data && data.results && data.results.length) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <>
      <div className="slider-container">
        {isLoading && <MovieSpinner />}
        {error && <MovieError error={error} />}
        {movies.length > 0 && (
          <>
            <div className="slider">
              <BsArrowLeftCircleFill
                className="arrow"
                onClick={() => setIndex(index > 0 ? index - 1 : 0)}
              />

              <MovieSlider movies={movies} index={index} />

              <BsArrowRightCircleFill
                className="arrow"
                onClick={() =>
                  setIndex(index < movies.length - 1 ? index + 1 : index)
                }
              />
            </div>
            <span className="silider-Indicators">
              {movies.map((_, i) => (
                <button
                  key={i}
                  className={index === i ? 'indicator i-active' : 'indicator'}
                  onClick={() => setIndex(i)}
                ></button>
              ))}
            </span>
          </>
        )}
      </div>
    </>
  );
}

function MovieSpinner() {
  return <div className="spinner"></div>;
}

function MovieError({ error }) {
  return (
    <div className="error-container">
      <p>{error}</p>
    </div>
  );
}

function MovieSlider({ movies, index }) {
  return (
    <div className="movie-container">
      {movies.map((movie, movieIndex) => {
        if (movieIndex === index) {
          return (
            <div key={movieIndex}>
              <div className="movie-title">{`${movie.title}`}</div>
              <img
                alt=""
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                className="movie-image"
              />
            </div>
          );
        } else return null;
      })}
    </div>
  );
}
