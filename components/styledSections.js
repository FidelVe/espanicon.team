import Image from "next/image";
import styles from "../styles/styledSections.module.css";
const logoHeight = 100;
const logoWidth = 100;

export function SectionWithLogo({ path, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
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

export function Section({ children }) {
  return <section className={styles.section}>{children}</section>;
}
