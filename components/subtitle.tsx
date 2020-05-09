import styled from "styled-components";
import { H2 } from "make-my-ui";

export const Subtitle = styled(H2)`
  margin: 0 0 0.5rem 0;
  color: #ffffff;
  text-shadow: ${(props) => props.theme.boxShadow};
`;
