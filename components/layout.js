import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Espanicon";
export const siteTitle = "Espanicon.team";
const height = 500;
const width = height * 3.06976744186;

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
      <header className={styles.header}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about/">
          <a>About</a>
        </Link>
        <Link href="/contact/">
          <a>Contact</a>
        </Link>
      </header>
      <div className={styles.imageContainer}>
        <Image
          priority
          className={styles.image}
          src="/images/espanicon.png"
          height={height}
          width={width}
          alt="espanicon"
        />
      </div>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>Created by: Espanicon</p>
      </footer>
    </div>
  );
}
