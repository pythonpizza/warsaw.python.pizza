import { linkedInLink, type ProfileLink } from "./profile-links";

export type OrganizerLink = ProfileLink;

export type Organizer = {
  name: string;
  image: string;
  index: number;
  links?: OrganizerLink[];
};

export const ORGANIZERS: Organizer[] = [
  {
    name: "Piotr Grędowski",
    image: "/organizers/piotr-gredowski.jpeg",
    index: 1,
    links: [linkedInLink("https://pl.linkedin.com/in/piotrgredowski")],
  },
  {
    name: "Dorota Ostrowska",
    image: "/organizers/dorota-ostrowska.jpeg",
    index: 2,
    links: [linkedInLink("https://www.linkedin.com/in/ostrowska-dorota/")],
  },
  {
    name: "Natalia Traczewska",
    image: "/organizers/natalia-traczewska.jpg",
    index: 3,
    links: [linkedInLink("https://pl.linkedin.com/in/natalia-traczewska")],
  },
  {
    name: "Data Science Club PJATK",
    image: "/organizers/dsc-pjatk.png",
    index: 4,
    links: [],
  },
];
