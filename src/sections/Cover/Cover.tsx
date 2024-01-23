import Section from "../Section";
import styles from "./Cover.module.css";

interface Props {
  id?: string;
  to?: string;
}

export default function Cover({ to }: Props) {
  return (
    <Section to={to} center>
      <div className={styles.titleWrapper}>
        <h1>2</h1>
        <h1>0</h1>
        <h1>2</h1>
        <h1>3</h1>
      </div>
      <p className={styles.subtitle}>Look back at 2023, I...</p>
    </Section>
  );
}
