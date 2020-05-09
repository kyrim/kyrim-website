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

const JobPicture = styled.picture`
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};

  & > img {
    vertical-align: middle;
  }
`;

export const Timeline = () => {
  return (
    <JobsContainer>
      <JobPicture>
        <source srcSet="/swinburne.webp" type="image/webp" />
        <source srcSet="/swinburne.jpg" type="image/jpeg" />
        <img src="/swinburne.jpg" alt="Swinburne University of Technology" />
      </JobPicture>

      <JobPicture>
        <source srcSet="/siemens.webp" type="image/webp" />
        <source srcSet="/siemens.jpg" type="image/jpeg" />
        <img src="/siemens.jpg" alt="Siemens" />
      </JobPicture>

      <JobPicture>
        <source srcSet="/compass.webp" type="image/webp" />
        <source srcSet="/compass.jpg" type="image/jpeg" />
        <img src="/compass.jpg" alt="Compass Education" />
      </JobPicture>
    </JobsContainer>
  );
};
