import TextDisplayer from "../components/TextDisplayer";
import styles from "./pagesStyleModules/Home.module.css";
function Home() {
  return (
    <div className={styles.homeWrapper}>
      <TextDisplayer>
        Witaj w MovieApp – Twoim osobistym przewodniku po świecie kina! Wyszukuj
        filmy, sprawdzaj obsadę, opisy, oceny i odkrywaj nowości dzięki OMDb
        API. Niezależnie od tego, czy szukasz klasyki, nowości, czy zapomnianych
        perełek – jesteś w dobrym miejscu.
      </TextDisplayer>
    </div>
  );
}

export default Home;
