import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout.js";
import { SectionWithLogo, Section } from "../components/styledSections.js";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <SectionWithLogo path="/images/icon-logo.png">
          <p>About page</p>
        </SectionWithLogo>
      </Section>
    </Layout>
  );
}
