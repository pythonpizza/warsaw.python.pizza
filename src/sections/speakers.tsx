import React from "react";
import { Container, Heading } from "theme-ui";

import Speaker from "./speaker";

const speakersData = [
  {
    name: "name1",
    affiliation: "some description 1",
    image: "/speakers/pizza-square.png",
    index: 1,
  },
  {
    name: "name2",
    affiliation: "some description 2",
    image: "/speakers/pizza-square.png",
    index: 2,
  },
];

export const SpeakersSection = () => {
  return (
    <Container id="keynote" variant="smallContainer">
      <Heading>Keynote speakers</Heading>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {speakersData.map((speaker) => (
          <Speaker
            key={speaker.index}
            name={speaker.name}
            affiliation={speaker.affiliation}
            image={speaker.image}
          />
        ))}
      </div>
    </Container>
  );
};
