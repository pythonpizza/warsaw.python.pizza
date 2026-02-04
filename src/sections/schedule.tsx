import {Container, Heading, Paragraph} from "theme-ui";

import { ScheduleCard } from "~/components/schedule-card";
import { SCHEDULE } from "~/data/schedule";

export const Schedule = () => (
  <Container id="schedule" variant="smallContainer">
    <Heading>Program</Heading>

    <Paragraph>
      The full schedule will be announced soon! Stay tuned for exciting Python talks and presentations.
    </Paragraph>

    {SCHEDULE.map((schedule, index) => (
      <ScheduleCard
        variant={schedule.label ? "info" : "talk"}
        key={schedule.when}
        schedule={schedule}
        invert={!(index % 2)}
      />
    ))}
  </Container>
);
