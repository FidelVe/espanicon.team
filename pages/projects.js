import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout.js";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Projects page</p>
      </section>
    </Layout>
  );
}