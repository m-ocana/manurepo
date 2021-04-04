import Head from "next/head";
import Link from "next/link";
import Header from "./Header";
import BackToHome from "./BackToHome";
import utilStyles from "../styles/utils.module.css";
import styled from "styled-components";
import { TITLE } from "../globals/site";

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Collection of cheatsheets, snippets and utils"
        />
        <meta name="og:title" content={TITLE} />
      </Head>
      <Header home={home} />
      <main>{children}</main>
      {!home && <BackToHome />}
    </Container>
  );
}
