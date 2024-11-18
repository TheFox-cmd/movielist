import useMovie from "../hooks/useMovie";
import { Movie } from "../types/Movie";
import { useState } from "react";
import MovieCard from "./MovieCard";
import "./Home.css";

const movieTypeList = ["popular", "now_playing", "top_rated", "upcoming"];

const Home = () => {
  const [movieType, setMovieType] = useState<string>("popular");
  const [page, setPage] = useState<number>(1);
  const { movies: movieList, totalPage } = useMovie(movieType, page);

  const handleMovieTypeChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void = (e) => {
    setMovieType(e.target.value);
    setPage(1);
  };

  const handlePagination: (isNext: boolean) => void = (isNext) => {
    if (isNext && page !== totalPage) setPage(page + 1);
    else if (!isNext && page > 1) setPage(page - 1);
  };

  console.log(movieList); 

  return (
    <>
      <div className="select">
        <select
          name="movieType"
          id="movieType"
          onChange={handleMovieTypeChange}
        >
          {movieTypeList.map((type: string, index: number) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="pagination">
        <button onClick={() => handlePagination(false)}>prev</button>
        <div className="page-wrapper">
          {page}/{totalPage}
        </div>
        <button onClick={() => handlePagination(true)}>next</button>
      </div>
      <div className="movie-page-wrapper">
        <div className="movielist-page">
          {movieList.map((movie: Movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

// TODO: Movie List
// * 5. Modal for Movie Details
