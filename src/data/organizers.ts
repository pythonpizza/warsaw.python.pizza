export type OrganizerLink = {
  url: string;
  icon: string;
  label: string;
};

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
    links: [
      {
        url: "https://pl.linkedin.com/in/piotrgredowski",
        icon: "/socials/linkedin.png",
        label: "LinkedIn",
      },
    ],
  },
  {
    name: "Dorota Ostrowska",
    image: "/organizers/dorota-ostrowska.jpeg",
    index: 2,
    links: [
      {
        url: "https://www.linkedin.com/in/ostrowska-dorota/",
        icon: "/socials/linkedin.png",
        label: "LinkedIn",
      },
    ],
  },
  {
    name: "Natalia Traczewska",
    image: "/organizers/natalia-traczewska.jpg",
    index: 3,
    links: [
      {
        url: "https://pl.linkedin.com/in/natalia-traczewska",
        icon: "/socials/linkedin.png",
        label: "LinkedIn",
      },
    ],
  },
  {
    name: "Data Science Club PJATK",
    image: "/organizers/dsc-pjatk.png",
    index: 4,
    links: [],
  },
];
