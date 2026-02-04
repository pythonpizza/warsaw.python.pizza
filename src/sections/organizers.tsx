import React from "react";
import { Container, Grid, Heading, Paragraph } from "theme-ui";

import Organizer from "./organizer";
import { ORGANIZERS } from "~/data/organizers";


export const OrganizerSection = () => {
  return (
    <Container id="organizers" variant="smallContainer">
      <Heading>Organizers</Heading>
      <Paragraph>
        Python Pizza is brought to life by volunteers. Everyone from our
        organizing team to our amazing speakers are donating their time to make
        this event happen.
      </Paragraph>
      <br />
      <Paragraph>By the community for the community. </Paragraph>
      <br />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Grid columns={[2, 2, 2, 3]} gap="primary">
          {ORGANIZERS.map((org) => (
            <Organizer key={org.index} name={org.name} image={org.image} />
          ))}
        </Grid>
      </div>
    </Container>
  );
};
