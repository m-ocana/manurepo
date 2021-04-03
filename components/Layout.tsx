import Head from "next/head";
import Link from "next/link";
import BackToHome from "./BackToHome";
import utilStyles from "../styles/utils.module.css";
import styled from "styled-components";

export const title = "The Manurepo";

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderImage = styled.img<{ home?: boolean }>`
  height: ${(p) => (p.home ? "8rem" : "6rem")};
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
        <meta name="og:title" content={title} />
      </Head>
      <Header>
        {home ? (
          <>
            <HeaderImage src="/images/repo.svg" alt={title} home={true} />
            <h1 className={utilStyles.heading2Xl}>{title}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <>
                <a>
                  <HeaderImage src="/images/repo.svg" alt={title} />
                </a>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{title}</a>
                  </Link>
                </h2>
              </>
            </Link>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && <BackToHome />}
    </Container>
  );
}
