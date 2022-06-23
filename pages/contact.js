import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout.js";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Contact page</p>
      </section>
    </Layout>
  );
}
