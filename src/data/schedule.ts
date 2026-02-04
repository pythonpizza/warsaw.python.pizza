export type Event = {
  label?: string;
  name?: string;
  title?: string;
  photo?: string;
  link?: string;
  when?: string;
};

export const SCHEDULE: Event[] = [
  {
    label: "Doors Open / Registration",
    title: "Registration",
    when: "2026/02/21 9:30 AM UTC+1",
  },
  {
    label: "Opening Session",
    title: "Opening Session",
    when: "2026/02/21 10:00 AM UTC+1",
  },
  {
    title: "Nelsie: Programmable Approach to Slides with Python",
    name: "Ada Böhm",
    when: "2026/02/21 10:12 AM UTC+1",
    photo: "speakers/ada_bohm.jpg",
  },
  {
    title: "I Scratched My Itch, and So Should You",
    name: "Karolina Surma",
    when: "2026/02/21 10:24 AM UTC+1",
    photo: "speakers/karolina_surma.webp",
  },
  {
    title: "Fromager: Building Your Own Python Package Index",
    name: "Martin Čurlej",
    when: "2026/02/21 10:36 AM UTC+1",
    photo: "speakers/martin_curlej.png",
  },
  {
    title: "Not-So-Smart Power Plugs, but at Least No Cloud Required",
    name: "Christian Leitold",
    when: "2026/02/21 10:48 AM UTC+1",
    photo: "speakers/christian_leitold.jpg",
  },
  {
    label: "Coffee Break",
    title: "Coffee Break",
    when: "2026/02/21 11:00 AM UTC+1"
  },
  {
    title: "Tips for Better Tests",
    name: "Kuba Beránek",
    when: "2026/02/21 11:24 AM UTC+1",
    photo: "speakers/kuba_beranek.jpg",
  },
  {
    title: "The Quest for Bad Apple on an Ikea Obegränsad Display",
    name: "Lukasz Taczuk",
    when: "2026/02/21 11:36 AM UTC+1",
    photo: "speakers/lukasz_taczuk.jpg",
  },
  {
    title: "DevOps: You Own More Than You Think",
    name: "Janusz Kamienski",
    when: "2026/02/21 11:48 AM UTC+1",
    photo: "speakers/janusz_kamienski.jpg",
  },
  {
    title: "Taxonomy of AI Frameworks",
    name: "Jiri Podivin",
    when: "2026/02/21 12:00 PM UTC+1",
    photo: "speakers/jiri_podivin.jpg",
  },
  {
    title: "How to Make Music with Python in 2026",
    name: "Moisés Guimarães",
    when: "2026/02/21 12:12 PM UTC+1",
    photo: "speakers/moises.jpeg"
  },
  {
    label: "Lunch Break",
    title: "Pizza",
    when: "2026/02/21 12:24 PM UTC+1"
  },
  {
    title: "MCP: The Missing Link Between AI and Your Python Code",
    name: "Tetiana Kukhelna",
    when: "2026/02/21 1:24 PM UTC+1",
    photo: "speakers/tetiana_kukhelna.jpg",
  },
  {
    title: "Advent of Code Toolkit",
    name: "Miloslav Homer",
    when: "2026/02/21 1:36 PM UTC+1",
    photo: "speakers/miloslav_homer.jpg",
  },
  {
    title: "Mob Programming as a Way of Sharing Knowledge in a Team",
    name: "Robert Batůšek",
    when: "2026/02/21 1:48 PM UTC+1",
    photo: "speakers/robert_batusek.png",
  },
  {
    title: "It's Not Open Source, It's Just Public Code: A Guide to Reusable Repositories",
    name: "Ondřej Chrastina",
    when: "2026/02/21 2:00 PM UTC+1",
    photo: "speakers/ondrej_chrastina.jpg",
  },
  {
    title: "Software Bill-of-Materials in Python Wheels",
    name: "Miro Hrončok",
    when: "2026/02/21 2:12 PM UTC+1",
    photo: "speakers/miro_hroncok_pizza.jpeg",
  },
  {
    label: "Coffee Break",
    title: "Coffee Break",
    when: "2026/02/21 2:24 PM UTC+1"
  },
  {
    title: "Polars vs Pandas",
    name: "David Slavíček",
    when: "2026/02/21 3:00 PM UTC+1",
    photo: "speakers/david_slavicek.png",
  },
  {
    title: "Teaching Programming Course in High School in the Age of LLMs",
    name: "Alexandr Mikula",
    when: "2026/02/21 3:12 PM UTC+1",
    photo: "speakers/pizza-square.png",
  },
  {
    title: "Don't Be Scared When PostgreSQL Stops Using Your Indexes",
    name: "Szymon Cader",
    when: "2026/02/21 3:24 PM UTC+1",
    photo: "speakers/szymon_cader.jpg",
  },
  {
    title: "Turn \"Your Function\" --into \"a CLI App\"",
    name: "Jan Pipek",
    when: "2026/02/21 3:36 PM UTC+1",
    photo: "speakers/jan_pipek.jpg",
  },
  {
    label: "Short Break",
    title: "Bio Break",
    when: "2026/02/21 3:48 PM UTC+1"
  },
  {
    title: "Python and openpyxl to Follow \"Corporate Standard\"",
    name: "Vladimír Návrat",
    when: "2026/02/21 4:00 PM UTC+1",
    photo: "speakers/vladimir_navrat.jpg",
  },
  {
    title: "Python on the Edge",
    name: "Viktor Valaštín",
    when: "2026/02/21 4:12 PM UTC+1",
    photo: "speakers/viktor_valastin.jpeg",
  },
  {
    title: "From Senior Programmer to Vibe Coder (and Back Again)",
    name: "Václav Toth",
    when: "2026/02/21 4:24 PM UTC+1",
    photo: "speakers/vaclav_toth.jpg",
  },
  {
    title: "Search, Don't Scan",
    name: "Honza Kral",
    when: "2026/02/21 4:36 PM UTC+1",
    photo: "speakers/honza_kral.jpg",
  },
  {
    label: "Community Announcements",
    title: "Community Announcements",
    when: "2026/02/21 4:48 PM UTC+1"
  },
  {
    label: "Closing Session",
    title: "Closing Session",
    when: "2026/02/21 5:00 PM UTC+1"
  },
  {
    label: "Network & Chill",
    title: "Network and Chill",
    when: "2026/02/21 5:12 PM UTC+1",
  },
  {
    label: "The End",
    title: "The End",
    when: "2026/02/21 6:00 PM UTC+1"
  },
];
