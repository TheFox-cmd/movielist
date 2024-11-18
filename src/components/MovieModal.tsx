import "./MovieModal.css";
import { useContext } from "react";
import { ModalContext } from "../context/MovieContext";
import useMovieDetail from "../hooks/useMovieDetail";

interface MovieModalProps {
  movieID: number;
}

const MovieModal: React.FC<MovieModalProps> = ({ movieID }) => {
  const { setActiveMovieIDModal } = useContext(ModalContext);

  const movie = useMovieDetail(movieID);
  if (!movie) return null;

  const onClose = () => {
    setActiveMovieIDModal(null);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="close">
          <i className="ion-close-round" onClick={onClose}></i>
        </div>
        <div className="modal-content-wrapper">
          <img
            className="modal-image"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="model-content">
            <div className="modal-title category">{movie.title}</div>
            <div className="modal-overview">
              <div className="category">Overview</div>
              <div className="movie-overview">{movie.overview}</div>
            </div>
            <div className="modal-genre">
              <div className="category">Genres</div>
              <div className="genre-wrapper">
                {movie.genres.map((genre) => (
                  <div key={genre.id} className="genre">
                    {genre.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-rating">
              <div className="category">Rating</div>
              <div className="movie-rating">{movie.vote_average}</div>
            </div>
            <div className="modal-production">
              <div className="category">Production Companies</div>
              <div className="production-wrapper">
                {movie.production_companies.map((company) => (
                  <img
                    className="company"
                    key={company.id}
                    src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                    alt={company.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
