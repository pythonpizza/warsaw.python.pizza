import { Box, Container, Grid, Heading, Paragraph } from "theme-ui";

const venuePhotos = [
  "/venue/pjatk-outside-1.jpeg",
  "/venue/pjatk-outside-2.jpeg",
  "/venue/pjatk-inside-1.jpeg",
  "/venue/pjatk-inside-2.jpeg",
  "/venue/pjatk-inside-3.jpeg",
  "/venue/pjatk-inside-4.jpeg",
];

export const Venue = () => (
  <Container id="venue" variant="smallContainer">
    <Heading>Venue</Heading>
    <Paragraph>
      📍 PJAIT building A, Auditorium, Koszykowa 86, Warsaw, Poland
    </Paragraph>

    <Grid columns={1} gap={3} sx={{ mt: "secondary" }}>
      {venuePhotos.map((photo, index) => (
        <Box
          key={photo}
          as="img"
          src={photo}
          alt={`PJAIT venue photo ${index + 1}`}
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      ))}
    </Grid>
  </Container>
);
