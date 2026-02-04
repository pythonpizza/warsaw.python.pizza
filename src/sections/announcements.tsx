import { Container, Heading, Paragraph } from "theme-ui";

import { ContentButton } from "~/components/header";

export const Announcements = () => (
  <Container id="announcements" variant="smallContainer">
    <Heading>Sign up for important announcements</Heading>
    <Paragraph>
      If you&apos;re interested in receiving notifications about our schedule or
      ticket sales, please fill in the linked form. You will receive only four
      emails from us:
    </Paragraph>

    <ol style={{ textAlign: "left" }}>
      <li>Notification when the ticket sales starts.</li>
      <li>
        A reminder 24 hours prior to the Call for Proposals (CFP) closing, in
        case you&apos;d like to submit a last-minute proposal
      </li>
      <li>Announcement of the event schedule</li>
      <li>
        A final reminder shortly before the event or when tickets are running
        low.
      </li>
    </ol>

    <ContentButton href="#TODO">Sign up for the Announcements!</ContentButton>
  </Container>
);
