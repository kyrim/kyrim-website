import { Props } from "../components/project";

export interface Project extends Props {}

export const projects: Project[] = [
  {
    name: "HouseMyStuff",
    description: "A web application to manage your house hold items.",
    websiteUrl: "https://staging.housemystuff.com",
  },
  {
    name: "MakeMyUI",
    description:
      "A React UI Library built from scratch using Typescript and Styled Components.",
    sourceUrl: "https://github.com/kyrim/make-my-ui",
    websiteUrl: "https://kyrim.dev/make-my-ui/",
  },
  {
    name: "GetYourNutrients",
    description:
      "A web application to show nutrient information based on foods provided by a user.",
    sourceUrl: "https://github.com/kyrim/get-your-nutrients",
  },
];
