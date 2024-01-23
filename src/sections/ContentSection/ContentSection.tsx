import { Fragment, PropsWithChildren } from "react";
import Section from "../Section";
import styles from "./ContentSection.module.css";

interface ContentSectionProps extends PropsWithChildren {
  id: string;
  to?: string;
  title: string;
  body: string;
  bgColor: string;
  accent: string;
  renderGraphic: () => React.ReactNode;
}

export default function ContentSection({
  id,
  to,
  title,
  body,
  bgColor,
  accent,
  renderGraphic,
}: ContentSectionProps) {
  const formatTitle = () => {
    const regex = /\{(.*)\}/;
    const result = title.match(regex);

    if (result) {
      const highlight = result[1];
      const titleArr = title.split(regex);

      return titleArr.map((s) => {
        if (s === highlight) {
          const addLine = highlight.length > 10;
          return (
            <Fragment key={s}>
              {addLine && <br />}
              <span
                className={styles.highlight}
                style={{
                  color: `var(--color-${accent})`,
                  marginLeft: addLine ? 0 : 4,
                }}
              >
                {s}
              </span>
            </Fragment>
          );
        } else {
          return <span key={s}>{s}</span>;
        }
      });
    }
    return title;
  };

  return (
    <Section
      id={id}
      to={to}
      style={{ backgroundColor: `var(--color-${bgColor})` }}
    >
      <div className={styles.graphicsContainer}>{renderGraphic()}</div>

      <div className={styles.contentContainer}>
        <h2 className={styles.header}>{formatTitle()}</h2>
        <p className={styles.body}>{body}</p>
      </div>
    </Section>
  );
}
