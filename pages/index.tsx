import Head from "next/head";

import styled from "styled-components";
import { Image } from "make-my-ui";
const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const TopHero = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 5rem 10rem;
  min-height: 30rem;
`;

const Wave = styled.svg`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const ProfilePic = styled(Image)`
  width: 256px;
  height: 256px;
  border-radius: 50% 50%;
  border: 2px solid #f1efff;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
`;

const TopHeroTitleSection = styled.div`
  margin-left: 6rem;
`;

const TopHeroTitle = styled.h1`
  margin: 0 0 1rem 0;
  font-size: 4rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.12);
`;

const TopHeroSubTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 3rem;
  color: #ffffff;
  font-weight: regular;
  text-shadow: 0px 6px 4px rgba(0, 0, 0, 0.12);
`;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kyrim Steele - Software Engineer</title>
      </Head>

      <Main>
        <TopHero>
          <ProfilePic src="./kyrim.jpeg" alt="A Picture of Kyrim" />
          <TopHeroTitleSection>
            <TopHeroTitle>Hello! I'm Kyrim,</TopHeroTitle>
            <TopHeroSubTitle>a Full Stack Software Engineer.</TopHeroSubTitle>
          </TopHeroTitleSection>
          <Wave viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#6e48aa", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#9d50bb", stopOpacity: 1 }}
              />
            </linearGradient>
            <path
              d="M 0 100, C150 25 350 175 500 100, L 500 00, L 0 0, Z"
              style={{
                stroke: "none",
                fill: "url(#grad1)",
              }}
            ></path>
          </Wave>
        </TopHero>
      </Main>
    </div>
  );
}

//linear-gradient(180deg, #6e48aa 0%, rgba(110, 72, 170, 0) 100%), #9d50bb;
