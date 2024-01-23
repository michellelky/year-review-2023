import { motion, useDragControls } from "framer-motion";
import Section from "../Section";
import styles from "./EndSection.module.css";

export default function EndSection() {
  const controls = useDragControls();

  return (
    <Section
      style={{ backgroundColor: `var(--color-cream)` }}
      center
      hideScroll
    >
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
