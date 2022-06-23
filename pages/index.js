import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout.js";
import { SectionWithLogo, Section } from "../components/styledSections.js";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <SectionWithLogo path="/images/espanicon-logo.png">
          <h1>P-rep for the ICON Network</h1>
          <p>
            <b>Espanicon</b> is a validator node in the <b>ICON Network</b>. Our
            goal is to participate in the chain governance of the network and
            expand the <b>ICON</b> ecosystem by building projects in it and
            collaborate with other validators.
          </p>
          <p>
            If you want to support our work you can do it by simply allocating
            votes to the <b>Espanicon</b> node with your staked <b>ICX</b>,
            every vote counts!, we highly appreciate your support!.
          </p>
        </SectionWithLogo>
      </Section>
    </Layout>
  );
}
