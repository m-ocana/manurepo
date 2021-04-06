import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Date from "../components/Date";
import styled from "styled-components";
import utilStyles from "../styles/utils.module.css";
import { TITLE } from "../globals/site";
import { cheatsheets } from "../lib/collections";

const Section = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  padding-bottom: 1px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0 0 1.25rem;
`;

export default function Home({ allCheatsheets }) {
  return (
    <Layout home>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Section>
        <p>A collection of cheatsheets, snippets and utils for developers.</p>
      </Section>
      <Section>
        <SectionTitle>Cheatsheets</SectionTitle>
        <List>
          {allCheatsheets.map(({ id, date }) => (
            <ListItem key={id}>
              <Link href={`/cheatsheets/${id}`}>
                <a>{id}</a>
              </Link>
              <br />
            </ListItem>
          ))}
        </List>
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allCheatsheets = cheatsheets.getAll();
  return {
    props: { allCheatsheets },
  };
};
