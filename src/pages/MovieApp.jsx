import { useEffect, useState } from "react";
import styles from "./pagesStyleModules/MovieApp.module.css";
import Searchbar from "../components/Searchbar";
import MovieTile from "../components/MovieTile";

const url = import.meta.env.VITE_API_URL;

function MovieApp() {
  const [query, setQuery] = useState("Interstellar");
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch(`${url}&s=${query}`);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      }
    } catch (e) {
      console.error(e);
      setMovies([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchData();
    }
  };

  return (
    <div className={styles.movieAppWrapper}>
      <form className={styles.searchWrapper} onSubmit={onSearchSubmit}>
        <Searchbar query={query} onQuery={setQuery} />
        <button type="submit" className={styles.searchBtn}>
          🔎
        </button>
      </form>

      {movies.length > 0 ? (
        <div className={styles.moviesGrid}>
          {movies.map((movie) => (
            <MovieTile key={movie.imdbID} data={movie} />
          ))}
        </div>
      ) : (
        <h2>Nie znaleziono wyników...</h2>
      )}
    </div>
  );
}

export default MovieApp;
