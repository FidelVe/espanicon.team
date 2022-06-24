import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout.js";
import { SectionWithLogo, Section } from "../components/styledSections.js";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <SectionWithLogo path="/images/espanicon-logo.png">
          <h1>Login with ICON </h1>
          <p>
            <b>Login with ICON</b> is a web3 <i>proof of concept</i> app created
            with React. The apps allows the user to login via web using an{" "}
            <b>ICON</b> wallet (granted that the user has the wallet installed)
            or by using a <b>Ledger</b> device.
          </p>
        </SectionWithLogo>
      </Section>
    </Layout>
  );
}
