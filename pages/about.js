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
      <div className={styles.container}>
        <Section>
          <SectionWithLogo path="/images/espanicon-logo.png">
            <h1>
              <i>"everything changed when the Fire Nation attacked.."</i>
            </h1>
            <p>
              Do you know where that quote comes from?, Is just one off the{" "}
              <a
                href="https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender"
                target="_blank"
              >
                greatest TV shows in history
              </a>{" "}
              (<i>taking my bias into account, of course</i>). <b>Espanicon</b>{" "}
              history is not as interesting as <b>Avatar</b> but if you are
              interested in knowing you are welcome to continue reading!.
            </p>
            <p>
              The <b>Espanicon</b> project started in Q1 of 2020, but we have
              been a part of the <b>ICON</b> ecosystem since almost their
              beginnings.{" "}
            </p>
            <p>
              The initial goal was to simply run a validator node and help with
              the decentralization of the <b>ICON</b> Network, but it quickly
              transformed into a collaboration project that grew more than
              anything I ever imagined blowing past any crazy expectation I had
              at the beginning.
            </p>

            <p>
              Since 2020 I've had the opportunity of collaborating with many
              awesome projects, and continue to look forward to all the
              surprises that comes with being a part of the <b>ICON</b>{" "}
              ecosystem. If you like <b>Espanicon</b> and want to support this
              project you can do so by <b>delegating</b> your staked <b>ICX</b>{" "}
              into the{" "}
              <b>
                <a
                  href="https://tracker.icon.foundation/address/hx9fa9d224306b0722099d30471b3c2306421aead7"
                  target="_blank"
                >
                  Espanicon validator node
                </a>
              </b>
              , we really appreciate your support!.
            </p>
          </SectionWithLogo>
        </Section>
      </div>
    </Layout>
  );
}
