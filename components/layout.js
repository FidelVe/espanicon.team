import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import ContactItems from "./contactItems.js";

const name = "Espanicon";
export const siteTitle = "Espanicon.team";
const height = 100;
const width = height * 3.06976744186;

function SectionBreak() {
  return (
    <div className={styles.breakContainer}>
      <div className={`${styles.breakSection} ${styles.breakOne}`}></div>
      <div className={`${styles.breakSection} ${styles.breakTwo}`}></div>
      <div className={`${styles.breakSection} ${styles.breakThree}`}></div>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Espanicon.team Prep official website"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <input id="menu-toggle" className={styles.menuToggle} type="checkbox" />
      <label className={styles.menuButtonContainer} htmlFor="menu-toggle">
        <div className={styles.menuButton}></div>
      </label>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerSection}>
            <div className={styles.logoContainer}>
              <Link href="/">
                <div>
                  <Image
                    priority
                    className={styles.logo}
                    src="/images/espanicon.png"
                    height={height}
                    width={width}
                    alt="espanicon"
                  />
                </div>
              </Link>
              <div className={styles.hamburguerMenuShadow}></div>
            </div>
            <div className={styles.routesContainer}>
              <div className={styles.routesSection}>
                <Link href="/about/">
                  <a>About</a>
                </Link>
              </div>
              <div className={styles.routesSection}>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </div>
              <div className={styles.routesSection}>
                <Link href="/contact/">
                  <a>Contact</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <SectionBreak />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Visit Espanicon @</p>
        <ContactItems />
      </footer>
    </div>
  );
}
