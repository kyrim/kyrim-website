import styled from "styled-components";
import Color from "color";
import { Image } from "make-my-ui";

const JobsContainer = styled.div`
  background: radial-gradient(
    circle farthest-side,
    ${(props) =>
        Color(props.theme.colors.primary).mix(Color("white"), 0.3).toString()}
      0%,
    transparent 25%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-bottom: 2rem;
`;

const JobImage = styled(Image)`
  margin-right: 3rem;
  margin-bottom: 3rem;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const Timeline = () => {
  return (
    <JobsContainer>
      <JobImage
        src="./swinburne.png"
        alt="Swinburne University of Technology"
      />
      <JobImage src="./siemens.png" alt="Siemens" />
      <JobImage src="./compass.png" alt="Compass Education" />
    </JobsContainer>
  );
};
