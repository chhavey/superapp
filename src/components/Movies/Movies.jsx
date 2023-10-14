import React, { useState, useEffect } from "react";
import styles from "./movies.module.css";
import profile from "../../assets/profile-icon.png";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [movie, setMovie] = useState([]);
  const genres = localStorage.getItem("category");
  const [selectedGenre, setSelectedGenre] = useState([]);
  const navigate = useNavigate();

  const dashboard = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    const fetchGenre = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=43258e9a65aba808ac032cfc1ff28cf0&language=en-US`
      );
      const genresData = await data.json();
      const response = genresData.genres.filter((genre) =>
        genres.includes(genre.name)
      );
      setSelectedGenre(response);
      fetchMovie(response.map((item) => item.id));
    };
    fetchGenre();
  }, [genres]);

  const fetchMovie = async (genreIds) => {
    const genreMovies = {};

    for (const genre of genreIds) {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=43258e9a65aba808ac032cfc1ff28cf0&language=en-US&sort_by=popularity.desc&with_genres=${genre}`
      );
      const movies = await data.json();
      genreMovies[genre] = movies.results.splice(4, 4);
    }
    setMovie(genreMovies);
  };

  return (
    <div className={styles.moviesCard}>
      <div className={styles.header}>
        <div className={styles.title}>Super app</div>
        <img
          className={styles.profile}
          src={profile}
          onClick={dashboard}
          alt="profile"
        />
      </div>

      <div className={styles.browseMovies}>
        <div className={styles.subTitle}>
          Entertainment according to your choice
        </div>

        <div className={styles.displayMovies}>
          {selectedGenre.map((genre, index) => {
            return (
              <div className={styles.genreContainer} key={index}>
                <span className={styles.genreName}>{genre.name}</span>
                <div className={styles.movie}>
                  {movie[genre.id] &&
                    movie[genre.id].map((movie, index) => {
                      return (
                        <img
                          key={index}
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          className={styles.moviePoster}
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Movies;
