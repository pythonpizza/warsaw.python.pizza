import { Container, Heading, Paragraph } from "theme-ui";

export const Sponsors = () => (
  <Container id="sponsors">
    <Heading mb="primary">Sponsors</Heading>
    <Paragraph>
      We are looking for sponsors for Warsaw Python Pizza! If you are interested, please{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:warsawpythonpizza@gmail.com?subject=[Sponsoring Warsaw Python Pizza]"
      >
        contact us!
      </a>
      .
    </Paragraph>
  </Container>
);
