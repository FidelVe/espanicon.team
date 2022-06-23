import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Espanicon";
export const siteTitle = "Espanicon.team";

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
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>Created by: Espanicon</p>
      </footer>
    </div>
  );
}
