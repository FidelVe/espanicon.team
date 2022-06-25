import Image from "next/image";
import styles from "../styles/card.module.css";

const IMAGES = {
  react: {
    path: "/images/react-logo.png",
    width: 512,
    height: 445,
    ratio: 512 / 445
  },
  medium: {
    path: "/images/medium-logo.png",
    width: 390,
    height: 390,
    ratio: 1
  },
  devto: {
    path: "/images/dev-logo-black.png",
    width: 1998,
    height: 1998,
    ratio: 1
  },
  telegram: {
    path: "/images/telegram-logo.svg",
    width: 1000,
    height: 1000,
    ratio: 1
  }
};

function Ribbon({ position = "top" }) {
  return (
    <div className={styles.ribbonContainer}>
      <div className={`${styles.ribbonSection} ${styles.ribbonOne}`}></div>
      <div className={`${styles.ribbonSection} ${styles.ribbonTwo}`}></div>
      <div className={`${styles.ribbonSection} ${styles.ribbonThree}`}></div>
    </div>
  );
}

export function ArticleCard({ from = "medium", data }) {
  const title = data.title;
  const link = data.link;
  const tags = data.category.join(" ");
  const useImage = from === "medium" ? IMAGES.medium : IMAGES.devto;
  const height = 100;
  return (
    <div className={`${styles.main} ${styles.articleMain}`}>
      <div className={styles.articleHeader}>
        <div className={styles.headerInfo}>
          <h2>{title}</h2>
        </div>
        <div className={styles.headerBody}>
          <div className={styles.headerBodyContainer}>
            <p className={styles.linkParagraph}>
              <a href={link}>{link.slice(0, 70) + "..."}</a>
            </p>
            <p className={styles.headerTags}>Tags: {tags}</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              priority
              height={height}
              width={height * useImage.ratio}
              className={styles.image}
              alt="logo"
              src={useImage.path}
            />
          </div>
        </div>
      </div>
      {/* <div className={styles.body}>{children}</div> */}
    </div>
  );
}

export default function Card({
  title = "foo",
  link = "bar",
  tags = "baz",
  height = 100,
  logo = "react",
  children
}) {
  const useImage = logo === "react" ? IMAGES.react : IMAGES.telegram;
  return (
    <div className={styles.main}>
      <Ribbon />
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <h2>{title}</h2>
          <p>
            <a href={link}>{link}</a>
          </p>
          <p className={styles.headerTags}>Tags: {tags}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            priority
            height={height}
            width={height * IMAGES.react.ratio}
            className={styles.image}
            alt="logo"
            src={useImage.path}
          />
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
