import TextDisplayer from "../components/TextDisplayer";
import styles from "./pagesStyleModules/Contact.module.css";
function Contact() {
  return (
    <div className={styles.contactWrapper}>
      <TextDisplayer>
        Masz pytania, sugestie albo zauważyłeś błąd? Daj znać! 📧 Email:
        kontakt@gomov.pl 💬 Formularz kontaktowy – już wkrótce! Cenimy każdy
        feedback i staramy się stale ulepszać GoMov. Dzięki za odwiedziny! t
      </TextDisplayer>
    </div>
  );
}

export default Contact;
