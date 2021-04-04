import Link from "next/link";
import styled from "styled-components";
import { TITLE } from "../globals/site";

const IMG_PATH = "/images/repo.svg";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderImage = styled.img<{ home?: boolean }>`
  height: ${(p) => (p.home ? "8rem" : "6rem")};
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

const LinkWrapper = styled.a`
  display: contents;
  color: black;
  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

function HomeHeader() {
  return (
    <>
      <HeaderImage src={IMG_PATH} alt={TITLE} home />
      <H1>{TITLE}</H1>
    </>
  );
}

function StandardHeader() {
  return (
    <Link href="/">
      <LinkWrapper>
        <HeaderImage src={IMG_PATH} alt={TITLE} />
        <H2>{TITLE}</H2>
      </LinkWrapper>
    </Link>
  );
}

export default function Header({ home }: { home?: boolean }) {
  return (
    <HeaderContainer>
      {home ? <HomeHeader /> : <StandardHeader />}
    </HeaderContainer>
  );
}
