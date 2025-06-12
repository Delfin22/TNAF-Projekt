import styles from "./styleModules/MovieTile.module.css";

function MovieTile({ data }) {
  return (
    <div className={styles.movieTile}>
      <img src={data.Poster} alt={data.Title} className={styles.poster} />
      <div className={styles.info}>
        <h3 className={styles.title}>{data.Title}</h3>
        <p className={styles.year}>{data.Year}</p>
        <p className={styles.type}>{data.Type}</p>
      </div>
    </div>
  );
}

export default MovieTile;
