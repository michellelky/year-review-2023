import { motion, useDragControls } from "framer-motion";
import Section from "../Section";
import styles from "./EndSection.module.css";

interface Props {
  id?: string;
  to?: string;
}

export default function EndSection({ id }: Props) {
  const controls = useDragControls();

  return (
    <Section id={id} style={{ backgroundColor: `var(--color-cream)` }} center>
      <p className={styles.endSubtitle}>Here’s to another amazing year.</p>

      <motion.h1
        drag="y"
        dragControls={controls}
        dragConstraints={{ top: -400, bottom: 300 }}
        className={styles.endTitle}
      >
        Hi 2024
      </motion.h1>
    </Section>
  );
}
