import styled from "styled-components";
import Color from "color";

export type PillType =
  | "frontend"
  | "backend"
  | "fullstack"
  | "databases"
  | "caches"
  | "source control";

const getPillColor = (type: PillType) => {
  switch (type) {
    case "frontend":
      return "#009721";
    case "backend":
      return "#970000";
    case "fullstack":
      return "#970091";
    case "databases":
      return "#006197";
    case "caches":
      return "#978800";
    case "source control":
      return "#150097";
    default:
      return "#000000";
  }
};

export const Pill = styled.span<{ type: PillType }>`
  display: inline-block;
  height: max-content;
  background-color: ${(props) =>
    Color(props.theme.colors.primary).mix(Color("white"), 0.95).toString()};

  font-size: 2rem;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;
  margin-left: 1rem;

  color: ${(props) => getPillColor(props.type)};

  border: 2px solid ${(props) => getPillColor(props.type)};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${(props) => props.theme.borderRadius};
`;
