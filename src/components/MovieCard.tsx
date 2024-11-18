import "./MovieCard.css";
import { useContext } from "react";
import { LikedListContext, ModalContext } from "../context/MovieContext";
import { Movie } from "../types/Movie";
import MovieModal from "./MovieModal";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { activeMovieIDModal, setActiveMovieIDModal } = useContext(ModalContext)
  const { likedList, setLikedList } = useContext(LikedListContext);
  const liked = likedList.includes(movie.id);

  const handleLike = () => {
    let newLikedList: number[] = [];

    if (liked)
      newLikedList = likedList.filter((likedId) => likedId !== movie.id);
    else newLikedList = [...likedList, movie.id];
    setLikedList(newLikedList);
  };

  const handleModal = () => {
    setActiveMovieIDModal(movie.id)
  }

  return (
    <div className="card">
      <img
        className="cardImage"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
        <div className="title" onClick={handleModal}>
          {movie.title}
        </div>
      <div className="rating">
        <div className="rating-value">
          <i className="ion-star"></i>
          <div>{movie.vote_average}</div>
        </div>
        {liked ? (
          <i className="ion-ios-heart" onClick={handleLike}></i>
        ) : (
          <i className="ion-ios-heart-outline" onClick={handleLike}></i>
        )}
      </div>
      {activeMovieIDModal === movie.id && <MovieModal movieID={movie.id} /> }
    </div>
  );
};

export default MovieCard;
