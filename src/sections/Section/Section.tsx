import { CSSProperties, PropsWithChildren } from "react";
import { Link } from "react-scroll";
import styles from "./Section.module.css";
import arrowIcon from "../../assets/arrow-down-circle.svg";

interface SectionProps extends PropsWithChildren {
  id?: string;
  to?: string;
  className?: string;
  style?: CSSProperties;
  center?: boolean;
}

export default function Section({
  children,
  id,
  to,
  className = "",
  style,
  center = false,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${className} ${center ? styles.center : ""}`}
      style={style}
      {...props}
    >
      {children}
      {!!to && (
        <Link className={styles.arrowBtn} to={to} duration={1000} smooth>
          <img src={arrowIcon} className={styles.arrow} alt="arrow down" />
        </Link>
      )}
    </section>
  );
}
