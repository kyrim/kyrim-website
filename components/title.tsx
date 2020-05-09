import styled from "styled-components";
import { H1 } from "make-my-ui";

export const Title = styled(H1)`
  margin: 0 0 1rem 0;
  font-weight: bold;
  color: #ffffff;
  text-shadow: ${(props) => props.theme.boxShadow};
`;
