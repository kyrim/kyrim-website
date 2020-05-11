import styled from "styled-components";
import { Panel, Link } from "make-my-ui";
import Color from "color";

export interface Props {
  name: string;
  description: string;
  sourceUrl?: string;
  websiteUrl?: string;
}

const ProjectPanel = styled(Panel)`
  margin-right: 1rem;
  margin-bottom: 1rem;
  min-width: 10rem;
  max-width: 25rem;
  flex: 1 1 33%;
  background-color: ${(props) =>
    Color(props.theme.colors.primary).mix(Color("white"), 0.95).toString()};
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.colors.primary};
  overflow: hidden;
`;

const Title = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};

  padding: 0.5rem;
  margin: 0;
  border-bottom: 2px solid
    ${(props) =>
      Color(props.theme.colors.primary).mix(Color("white"), 0.85).toString()};
  color: ${(props) => props.theme.colors.darkComplementary};
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.darkComplementary};

  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
`;

const Links = styled.div`
  padding: 0.5rem;
  background-color: ${(props) =>
    Color(props.theme.colors.primary).mix(Color("white"), 0.9).toString()};
  color: ${(props) => props.theme.colors.darkComplementary};
  display: flex;
  flex-direction: row;
  margin-top: auto;
  justify-content: space-around;
  width: 100%;
`;

export const Project = ({
  name,
  description,
  sourceUrl,
  websiteUrl,
}: Props) => {
  return (
    <ProjectPanel>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Links>
        {sourceUrl && (
          <Link href={sourceUrl} ariaLabel="Source for project">
            Source
          </Link>
        )}
        {websiteUrl && (
          <Link href={websiteUrl} ariaLabel="Source for Website">
            Website
          </Link>
        )}
      </Links>
    </ProjectPanel>
  );
};
