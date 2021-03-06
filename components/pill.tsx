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
      return "#006115";
    case "backend":
      return "#970000";
    case "fullstack":
      return "#970091";
    case "databases":
      return "#005D8F";
    case "caches":
      return "#5C5300";
    case "source control":
      return "#150097";
    default:
      return "#000000";
  }
};

export const Pill = styled.span<{ type: PillType; active: boolean }>`
  opacity: ${(props) => (props.active ? 1 : 0.25)};
  display: inline-block;
  height: max-content;

  background-color: ${(props) =>
    Color(props.theme.colors.primary).mix(Color("white"), 0.9).toString()};

  padding: 0.25rem 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;

  color: ${(props) => getPillColor(props.type)};
  border: 2px solid #6e48aa;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${(props) => props.theme.borderRadius};
`;
