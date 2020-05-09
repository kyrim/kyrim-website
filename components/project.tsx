import styled from "styled-components";
import { Panel, H2, Link } from "make-my-ui";

export interface Props {
  name: string;
  description: string;
  sourceUrl?: string;
  websiteUrl?: string;
}

const ProjectPanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};

  padding: 1rem;
  margin: 0;
  border-bottom: 5px solid #f1efff;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.darkComplementary};
  font-size: 2rem;

  padding: 1rem;
  margin: 0 0 1rem 0;
`;

const Links = styled.div`
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
