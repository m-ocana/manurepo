import { useEffect } from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import Prism from "prismjs";
import { cheatsheets } from "../../lib/collections";

export default function Cheatsheet({ name: title, contentHtml }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = cheatsheets.getIds().map((id) => ({ params: { id } }));

  // Return a list of possible value for id
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const cheatsheet = await cheatsheets.get(params.id);

  return {
    props: {
      ...cheatsheet,
    },
  };
};
