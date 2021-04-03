import Link from "next/link";
import styled from "styled-components";

const BackToHomeContainer = styled.div`
  margin: 3rem 0 0;
`;

export default function BackToHome() {
  return (
    <BackToHomeContainer>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </BackToHomeContainer>
  );
}
