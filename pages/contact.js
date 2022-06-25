import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout.js";
import { SectionWithLogo, Section } from "../components/styledSections.js";
import ContactItems from "../components/contactItems.js";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <SectionWithLogo path="/images/icon-logo.png" float="left">
          <h1>Interested in building cool things in the ICON ecosystem?</h1>
          <p>
            Are you part of a validator team in the <b>ICON</b> Network looking
            to collaborate? or are you a newcomer looking for someone with
            experience working in the <b>ICON</b> ecosystem to built an exciting
            and new project?.
          </p>

          <p>
            If you check one of those boxes (or even if you just want to chat!)
            you can contact me via email at <i>info@espanicon.team</i>, or any
            of the following social sites and platforms (if you want the
            quickest reply from me I suggest you try <b>Twitter</b> or{" "}
            <b>Telegram</b> first).
          </p>
          <div className={styles.contactContainer}>
            <ContactItems height={100} width={100} />
          </div>
        </SectionWithLogo>
      </Section>
    </Layout>
  );
}
