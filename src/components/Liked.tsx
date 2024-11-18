import { useContext, useEffect } from "react";
import { LikedListContext } from "../context/MovieContext";
import { Movie } from "../types/Movie";
import { useState } from "react";
import MovieCard from "./MovieCard";

const Liked = () => {
  const { likedList } = useContext(LikedListContext);
  const [likedMovieList, setLikedMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovieById = async (id: number) => {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data as Movie;
      } catch (error) {
        console.error("Failed to fetch movie by id:", error);
        return {} as Movie;
      }
    };

    const getLikedMovies = async () => {
      const temp = await Promise.all(
        likedList.map(async (id) => {
          return fetchMovieById(id);
        })
      );
      setLikedMovieList(temp);
    };
    getLikedMovies();
  }, [likedList]);

  return (
    <div className="movie-page-wrapper">
      <div className="movielist-page">
        {likedMovieList.map((movie) => {
          if (movie) {
            return <MovieCard key={movie.id} movie={movie} />;
          }
        })}
      </div>
    </div>
  );
};

export default Liked;
