import { PillType } from "../components/pill";

export interface skill {
  name: string;
  type: PillType;
}

export const skills: skill[] = [
  {
    name: "ReactJS",
    type: "frontend",
  },
  {
    name: "ExtJS",
    type: "frontend",
  },
  {
    name: "elm",
    type: "frontend",
  },
  {
    name: "jQuery",
    type: "frontend",
  },
  {
    name: "Bootstrap",
    type: "frontend",
  },
  {
    name: "C#",
    type: "backend",
  },
  {
    name: "VB",
    type: "backend",
  },
  {
    name: ".NET",
    type: "backend",
  },
  {
    name: "Node.js",
    type: "backend",
  },
  {
    name: "SQL",
    type: "backend",
  },
  {
    name: "Elixir",
    type: "backend",
  },
  {
    name: "Phoenix Framework",
    type: "backend",
  },
  {
    name: "PHP",
    type: "backend",
  },
  {
    name: "Javascript",
    type: "fullstack",
  },
  {
    name: "Meteor",
    type: "fullstack",
  },
  {
    name: "Next.js",
    type: "fullstack",
  },
  {
    name: "MongoDB",
    type: "databases",
  },
  {
    name: "Microsoft SQL Server",
    type: "databases",
  },
  {
    name: "MySQL",
    type: "databases",
  },
  {
    name: "Postgres",
    type: "databases",
  },
  {
    name: "Couchbase",
    type: "caches",
  },
  {
    name: "Redis",
    type: "caches",
  },
  {
    name: "SVN",
    type: "source control",
  },
  {
    name: "Git",
    type: "source control",
  },
];
