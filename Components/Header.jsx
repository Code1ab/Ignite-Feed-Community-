import styles from "./Header.module.css";
import ignitelogo from "../assets/Ignite.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ignitelogo} alt="Logo do ignite" />
    </header>
  );
}
