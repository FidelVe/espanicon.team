import Image from "next/image";
import styles from "../styles/contactItems.module.css";
import utilStyles from "../styles/utils.module.css";
import { v4 as uuidv4 } from "uuid";

const footerLinks = [
  [
    "/images/twitter-logo-black.png",
    "https://twitter.com/espanicon",
    { height: 20, width: 20, ratio: 35 / 20 }
  ],
  [
    "/images/discord-logo-black.svg",
    "https://discordapp.com/users/espanicon#4743/",
    { height: 20, width: 20, ratio: 35 / 20 }
  ],
  [
    "/images/github-logo-black.svg",
    "https://github.com/Espanicon",
    { height: 30, width: 30, ratio: 35 / 30 }
  ],
  [
    "/images/telegram-logo.svg",
    "https://t.me/Espanicon_Prep",
    { height: 35, width: 35, ratio: 35 / 35 }
  ]
];

export default function ContactItems({ height = null, width = null }) {
  return (
    <div className={styles.main}>
      {footerLinks.map(element => (
        <a href={element[1]} target="_blank" key={uuidv4()}>
          <div
            className={styles.logoContainer}
            style={{
              width:
                width === null ? element[2].width * element[2].ratio : width,
              height:
                height === null ? element[2].height * element[2].ratio : height
            }}
          >
            <Image
              priority
              className={`${utilStyles.borderCicle} ${styles.footerLogo}`}
              src={element[0]}
              height={
                height === null ? element[2].height : height / element[2].ratio
              }
              width={
                width === null ? element[2].width : width / element[2].ratio
              }
              alt="espanicon"
            />
          </div>
        </a>
      ))}
    </div>
  );
}
