import { CSSProperties, PropsWithChildren } from "react";
import styles from "./Section.module.css";
import arrowIcon from "../../assets/arrow-down-circle.svg";

interface SectionProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
  center?: boolean;
  hideScroll?: boolean;
}

export default function Section({
  children,
  className = "",
  style,
  center = false,
  hideScroll = false,
  ...props
}: SectionProps) {
  const scrollDown = () => {
    if (window) {
      window.scrollBy({ left: 0, top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      className={`${className} ${center ? styles.center : ""}`}
      style={style}
      {...props}
    >
      {children}
      {!hideScroll && (
        <button
          className={styles.arrowBtn}
          onClick={scrollDown}
          aria-label="scroll"
        >
          <img src={arrowIcon} className={styles.arrow} alt="arrow down" />
        </button>
      )}
    </section>
  );
}
