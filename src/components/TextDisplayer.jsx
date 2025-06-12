import styles from "./styleModules/TextDisplayer.module.css";

function TextDisplayer({ children }) {
  return <div className={styles.textDisplayer}>{children}</div>;
}

export default TextDisplayer;
