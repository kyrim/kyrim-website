import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { Panel, Image, H1, H2, Input } from "make-my-ui";

import { Pill } from "../components/pill";
import { skills } from "../data/skills";
import { Project } from "../components/project";
import { projects } from "../data/projects";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div`
  align-items: center;
  flex-direction: column;
  background: linear-gradient(180deg, #6e48aa 0%, rgba(110, 72, 170, 0) 100%),
    #9d50bb;
  position: relative;
  min-height: 20rem;
  width: 100%;
  display: flex;
  padding: 1rem;
`;

const TopHero = styled(Hero)`
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const ProfilePic = styled(Image)`
  margin-top: 1rem;
  z-index: 1;
  width: 256px;
  height: 256px;
  border-radius: 50% 50%;
  border: 2px solid #f1efff;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const Title = styled(H1)`
  margin: 0 0 1rem 0;
  font-weight: bold;
  color: #ffffff;
  text-shadow: ${(props) => props.theme.boxShadow};
`;

const Subtitle = styled(H2)`
  margin: 0 0 1rem 0;
  color: #ffffff;
  text-shadow: ${(props) => props.theme.boxShadow};
`;

const AboutMe = styled.div`
  font-size: 2rem;
  padding: 1rem 10rem;
  color: ${(props) => props.theme.colors.darkComplementary};
  margin-bottom: 10rem;
`;

const ExperienceHero = styled(Hero)`
  padding: 1rem 10rem;
`;

const ShiftedDiv = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -10rem;
  margin-bottom: 15rem;
`;

const TimelinePanel = styled(Panel)`
  width: 100%;
  height: 20rem;
  margin-bottom: 2rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

const SearchInput = styled(Input)`
  margin-bottom: 2rem;
  & * {
    color: ${(props) => props.theme.colors.white};
  }
  font-size: 2rem;
`;

const PillContainer = styled.div`
  min-height: 25rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const NoExperienceMessage = styled.span`
  font-size: 2rem;
  margin: 0 0 1rem 0;
  color: #ffffff;
  text-shadow: ${(props) => props.theme.boxShadow};
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const Wave = styled.svg`
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
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
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkIcons = styled(Image)`
  margin-right: 2rem;
`;

const FooterText = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.darkComplementary};
`;

export default function Home() {
  const [searchString, setSearchString] = useState("");

  const filteredSkills = skills.filter(
    (x) =>
      !searchString ||
      x.name.toLowerCase().includes(searchString.toLowerCase()) ||
      x.type.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <div className="container">
      <Head>
        <title>Kyrim Steele - Full Stack Software Engineer</title>
      </Head>

      <Main>
        <TopHero>
          <Title>Hello! I'm Kyrim,</Title>
          <Subtitle>a Full Stack Web Software Engineer.</Subtitle>
          <ProfilePic src="./kyrim.jpeg" alt="A Picture of Kyrim" />
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
            changed the world.
          </p>
        </AboutMe>

        <ExperienceHero>
          <ShiftedDiv>
            <TimelinePanel>
              <div>Timeline</div>
            </TimelinePanel>

            <Subtitle>Experience</Subtitle>
            <SearchInput
              color="#ffffff"
              label="Type React, C#, Frontend, database etc..."
              inputProps={{
                onChange: (v) => setSearchString(v.target.value),
              }}
            />
            <PillContainer>
              {filteredSkills.length > 0 ? (
                filteredSkills.map((skill) => (
                  <Pill key={skill.name} type={skill.type}>
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

            <Subtitle>Projects</Subtitle>
            <ProjectContainer>
              {projects.map((project) => (
                <Project {...project} key={project.name} />
              ))}
            </ProjectContainer>
          </ShiftedDiv>
          <BottomOfHeroWave />
        </ExperienceHero>
        <Footer>
          <SocialMediaIcons>
            <a href="https://www.linkedin.com/in/kyrim-steele-963bb58b/">
              <LinkIcons src="./linkedin.png" alt="My LinkedIn profile" />
            </a>
            <a href="https://github.com/kyrim">
              <LinkIcons src="./git.png" alt="My github page" />
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
