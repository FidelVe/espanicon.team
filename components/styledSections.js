import Image from "next/image";
import styles from "../styles/styledSections.module.css";
const logoHeight = 100;
const logoWidth = 100;

export function SectionWithLogo({ path, float = "right", children }) {
  return (
    <div className={styles.container}>
      <div
        className={
          float === "right"
            ? styles.imageContainerRight
            : styles.imageContainerLeft
        }
      >
        <Image
          priority
          className={styles.image}
          src={path}
          height={logoHeight}
          width={logoWidth}
          alt="espanicon"
        />
      </div>
      {children}
    </div>
  );
}

export function Section({ colored = false, children }) {
  return (
    <section
      className={
        colored ? `${styles.section} ${styles.colored}` : styles.section
      }
    >
      {children}
    </section>
  );
}
