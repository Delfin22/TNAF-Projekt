import styles from "./styleModules/Searchbar.module.css";

function Searchbar({ query, onQuery }) {
  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        value={query}
        onChange={(e) => onQuery(e.target.value)}
        placeholder="Wyszukaj film..."
        className={styles.input}
      />
    </div>
  );
}

export default Searchbar;
