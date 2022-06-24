import Head from "next/head";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import Layout, { siteTitle } from "../components/layout.js";
import Card, { ArticleCard } from "../components/card.js";
import { SectionWithLogo, Section } from "../components/styledSections.js";
import { getMediumData, getDevToData } from "../utils/projects.js";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

export async function getStaticProps() {
  let articles = {};
  const mediumData = await getMediumData();
  const devToData = await getDevToData();
  console.log("devToData");
  console.log(devToData);

  articles.medium = [...JSON.parse(mediumData).items];
  // TODO: parse the devto articles to show them
  articles.devto = [...JSON.parse(devToData).items];
  return {
    props: {
      articles
    }
  };
}

export default function Projects({ articles }) {
  console.log(articles);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <SectionWithLogo path="/images/espanicon-logo.png">
          <h1>Building, writing, talking and more building..</h1>
          <p>
            As part of the <b>ICON</b> community we have helped the ecosystem
            grow in many ways, from building projects of our own, to
            collaborating with other teams in development projects and
            translation projects to writing <b>ICON</b> related articles in{" "}
            <b>
              <a href="https://espanicon.medium.com/" target="_blank">
                Medium
              </a>
            </b>{" "}
            and{" "}
            <b>
              <a href="https://dev.to/espanicon" target="_blank">
                dev.to
              </a>
            </b>{" "}
            and actively participating in <b>ICON</b> related social sites and
            helping moderate some of the channels (
            <i>yeah is a full time job basically!</i>).
          </p>
        </SectionWithLogo>
      </Section>
      <Section>
        <h2>Projects</h2>
        <div className={styles.container}>
          <Card
            title="Login with ICON"
            link="https://github.fidel.engineer/ICON-login-react-component/"
            tags="js, hmtl, css, react, web3"
          >
            <p>
              <b>Login with ICON</b> is a web3 <i>proof of concept</i> app
              created with React. The apps allows the user to login via web
              using an ICON wallet (granted that the user has the wallet
              installed) or by using a Ledger device.
            </p>
          </Card>
          <Card
            title="SUPERNODE Racing"
            link="https://supernode.racing/"
            tags="js, hmtl, css, react, web3"
          >
            <p>
              <b>SUPERNODE Racing</b> is an exciting new NFT game coming to the{" "}
              <b>ICON</b> ecosystem, we are working with them to create the
              marketplace app that will allow the players to login with an ICON
              wallet to buy and sell items, create auctions, place bids, etc.
            </p>
          </Card>
        </div>

        <h2>Articles</h2>
        <div className={styles.container}>
          {articles.medium.map(data => (
            <ArticleCard key={uuidv4()} data={data} />
          ))}
        </div>
      </Section>
    </Layout>
  );
}
