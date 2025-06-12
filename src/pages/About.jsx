import TextDisplayer from "../components/TextDisplayer";
import styles from "./pagesStyleModules/About.module.css";
function About() {
  return (
    <div className={styles.aboutWrapper}>
      <TextDisplayer>
        MovieApp to aplikacja stworzona z miłości do filmu i technologii.
        Korzystamy z bazy OMDb API, by dostarczyć Ci szybki dostęp do informacji
        o tysiącach filmów i seriali – zupełnie za darmo. Naszym celem jest
        stworzenie prostego i intuicyjnego narzędzia do eksplorowania świata
        kina. Twórcą aplikacji jest pasjonat programowania i filmów, który łączy
        te dwie dziedziny w praktyczny projekt.
      </TextDisplayer>
    </div>
  );
}

export default About;
