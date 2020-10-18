import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { cheatsheets } from "../../lib/collections";

export default function Cheatsheet({ id, date, name: title, contentHtml }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        {/* <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div> */}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = cheatsheets.getIds().map((id) => ({ params: { id } }));

  // Return a list of possible value for id
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const cheatsheet = await cheatsheets.get(params.id);

  return {
    props: {
      ...cheatsheet,
    },
  };
}
