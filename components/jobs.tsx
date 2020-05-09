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

const JobPicture = styled(Image)`
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const Timeline = () => {
  return (
    <JobsContainer>
      <JobPicture
        src={require("../images/swinburne.png")}
        alt="Swinburne University of Technology"
      />
      <JobPicture src={require("../images/siemens.png")} alt="Siemens" />
      <JobPicture
        src={require("../images/compass.png")}
        alt="Compass Education"
      />
    </JobsContainer>
  );
};
