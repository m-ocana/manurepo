import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Date from "../components/Date";
import utilStyles from "../styles/utils.module.css";
import { TITLE } from "../globals/site";
import { cheatsheets } from "../lib/collections";

export default function Home({ allCheatsheets }) {
  return (
    <Layout home>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>A collection of cheatsheets, snippets and utils for developers.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Cheatsheets</h2>
        <ul className={utilStyles.list}>
          {allCheatsheets.map(({ id, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/cheatsheets/${id}`}>
                <a>{id}</a>
              </Link>
              <br />
              {/* <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small> */}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allCheatsheets = cheatsheets.getAll();
  return {
    props: { allCheatsheets },
  };
};
