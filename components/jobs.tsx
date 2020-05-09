import styled from "styled-components";
import Color from "color";
import { Image } from "make-my-ui";

const JobsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 1rem;
`;

const JobImage = styled(Image)`
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const Timeline = () => {
  return (
    <JobsContainer>
      <JobImage src="/swinburne.png" alt="Swinburne University of Technology" />
      <JobImage src="/siemens.png" alt="Siemens" />
      <JobImage src="/compass.png" alt="Compass Education" />
    </JobsContainer>
  );
};
