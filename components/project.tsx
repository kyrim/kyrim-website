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
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.colors.primary};
  overflow: hidden;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};

  padding: 1rem;
  margin: 0;
  border-bottom: 5px solid
    ${(props) =>
      Color(props.theme.colors.primary).mix(Color("white"), 0.9).toString()};
  color: ${(props) => props.theme.colors.darkComplementary};
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.darkComplementary};
  font-size: 2rem;

  padding: 1rem;
  margin: 0 0 1rem 0;
`;

const Links = styled.div`
  padding: 1rem;
  background-color: ${(props) =>
    Color(props.theme.colors.primary).mix(Color("white"), 0.9).toString()};
  color: ${(props) => props.theme.colors.darkComplementary};
  display: flex;
  flex-direction: row;
  margin-top: auto;
  justify-content: space-around;
  width: 100%;

  font-size: 2rem;
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
