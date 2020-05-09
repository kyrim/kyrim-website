import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { Image, Input } from "make-my-ui";

import { Timeline } from "../components/jobs";
import { Pill } from "../components/pill";
import { skills } from "../data/skills";
import { Project } from "../components/project";
import { projects } from "../data/projects";

import { Title } from "../components/title";
import { Subtitle } from "../components/subtitle";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const BaseHero = styled.div`
  position: relative;
  min-height: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 1rem 2rem;

  @media only screen and (min-width: 768px) {
    padding: 1rem 10rem;
  }
`;

const WavyHero = styled(BaseHero)`
  align-items: center;
  flex-direction: column;
  background: linear-gradient(180deg, #6e48aa 0%, rgba(110, 72, 170, 0) 100%),
    #9d50bb;
`;

const TopHero = styled(WavyHero)`
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const ProfilePicture = styled.picture`
  z-index: 1;
  margin-top: 1rem;

  & > img {
    width: 240px;
    height: 240px;
    border-radius: 50% 50%;
    border: 2px solid ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.boxShadow};
    vertical-align: middle;
  }
`;

const ProfilePic = styled.img`
  z-index: 1;
  margin-top: 1rem;
  width: 240px;
  height: 240px;
  border-radius: 50% 50%;
  border: 2px solid ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.boxShadow};
  vertical-align: middle;
`;

const AboutMe = styled(BaseHero)`
  background-image: linear-gradient(white, transparent);
  color: ${(props) => props.theme.colors.darkComplementary};
  margin-bottom: 5rem;
`;

const SkillHero = styled(WavyHero)``;

const ShiftedDiv = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -5rem;
  margin-bottom: 7.5rem;
`;

const SearchInput = styled(Input)`
  margin-bottom: 1rem;
  & * {
    color: ${(props) => props.theme.colors.white};
  }
`;

const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const NoExperienceMessage = styled.span`
  margin: 0 0 0.5rem 0;
  color: #ffffff;
  text-shadow: ${(props) => props.theme.boxShadow};
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  gap: 1rem;
`;

const Wave = styled.svg`
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 7.5rem;
`;

const BottomOfHeroWave = () => (
  <Wave viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path
      fill="white"
      fillOpacity="1"
      d="M0,224L48,208C96,192,192,160,288,128C384,96,480,64,576,85.3C672,107,768,181,864,224C960,267,1056,277,1152,245.3C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </Wave>
);

const Footer = styled.footer`
  background-image: linear-gradient(white, transparent);
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  padding: 0.5rem 1rem;

  @media only screen and (min-width: 768px) {
    padding: 1rem 10rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkIcons = styled(Image)`
  width: 64px;
  margin-right: 1rem;
`;

const FooterText = styled.p`
  color: ${(props) => props.theme.colors.darkComplementary};
`;

export default function Home() {
  const [searchString, setSearchString] = useState("");

  const activatedSkills = skills.map((x) => ({
    ...x,
    active:
      !searchString ||
      x.name.toLowerCase().includes(searchString.toLowerCase()) ||
      x.type.toLowerCase().includes(searchString.toLowerCase()),
  }));

  return (
    <div className="container">
      <Head>
        <title>Kyrim Steele - Full Stack Software Engineer</title>
      </Head>

      <Main>
        <TopHero>
          <Title>Hello! I'm Kyrim,</Title>
          <Subtitle>a Full Stack Web Software Engineer.</Subtitle>

          <ProfilePic
            src={require("../images/kyrim.jpg")}
            alt="A Picture of kyrim"
          />

          {/* <ProfilePicture>
            <source srcSet="/kyrim.webp" type="image/webp" />
            <source srcSet="/kyrim.jpg" type="image/jpeg" />
            <img src="/kyrim.jpg" alt="A Picture of kyrim" />
          </ProfilePicture> */}
          <BottomOfHeroWave />
        </TopHero>

        <AboutMe>
          <p>
            One of my very first memories as a child is playing on a computer
            loaded with Windows 95, finding games to play (3D Pinball!) and
            exploring all parts of the operating system.
          </p>
          <p>
            Ever since then, I've always had a huge excitement for electronics
            and the many incredible ways software and hardware can and has
            changed the world. That's why i've gained experience at places such
            as:
          </p>
        </AboutMe>

        <SkillHero>
          <ShiftedDiv>
            <Timeline />

            <Subtitle>My Skills</Subtitle>
            <SearchInput
              color="#ffffff"
              label="Type React, C#, Frontend, database etc..."
              inputProps={{
                onChange: (v) => setSearchString(v.target.value),
              }}
            />
            <PillContainer>
              {activatedSkills.length > 0 ? (
                activatedSkills.map((skill) => (
                  <Pill
                    key={skill.name}
                    type={skill.type}
                    active={skill.active}
                  >
                    {skill.name}
                  </Pill>
                ))
              ) : (
                <NoExperienceMessage>
                  I don't have experience with that yet, but I'm always up for a
                  challenge!
                </NoExperienceMessage>
              )}
            </PillContainer>

            <Subtitle>My Projects</Subtitle>
            <ProjectContainer>
              {projects.map((project) => (
                <Project {...project} key={project.name} />
              ))}
            </ProjectContainer>
          </ShiftedDiv>
          <BottomOfHeroWave />
        </SkillHero>
        <Footer>
          <SocialMediaIcons>
            <a href="https://www.linkedin.com/in/kyrim-steele-963bb58b/">
              <LinkIcons src="/linkedin.png" alt="My LinkedIn profile" />
            </a>
            <a href="https://github.com/kyrim">
              <LinkIcons src="/git.png" alt="My github page" />
            </a>
          </SocialMediaIcons>
          <FooterText>
            You can see the full source code for this website{" "}
            <a href="https://github.com/kyrim/kyrim-website">here.</a>
          </FooterText>
        </Footer>
      </Main>
    </div>
  );
}
