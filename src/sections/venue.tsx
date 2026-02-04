import { Container, Heading, Paragraph } from "theme-ui";

import { Image } from "~/components/image";

export const Venue = () => (
  <Container id="venue" variant="smallContainer">
    <Heading>Venue</Heading>
    <Paragraph>
      The event will take place in{" "}
      <a href="https://impacthub.cz/en/ostrava/">Impact Hub Ostrava</a>.
    </Paragraph>
    <br />
    <Paragraph>
      If you're traveling by train, head towards "Ostrava Hlavní Nádraží" (Main Train Station).
      From there, take the trolleybus 101 to the stop "Most Miloše Sýkory" (Miloš Sýkora Bridge)
      and then walk approximately 350 meters to the venue.
      The venue is almost in the center of the city, so you can easily find many other possible
      ways to get to the venue.
    </Paragraph>
    <br />
    {/*<Paragraph>If you encounter any issues, please call #TODO.</Paragraph>*/}
    {/*<br></br>*/}
    <Paragraph>Photos of the venue</Paragraph>
    <Image
      src={"venue/hub1.webp"}
      alt="venue image"
      width="100%"
      height="auto"
      objectFit="contain"
    />
    <Image
      src={"venue/hub2.webp"}
      alt="venue image"
      width="100%"
      height="auto"
      objectFit="contain"
    />
    <Image
      src={"venue/hub3.webp"}
      alt="venue image"
      width="100%"
      height="auto"
      objectFit="contain"
    />
  </Container>
);
