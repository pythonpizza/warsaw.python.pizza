import {Container, Heading, Paragraph} from "theme-ui";

import { ScheduleCard } from "~/components/schedule-card";
import { SCHEDULE } from "~/data/schedule";

export const Schedule = () => (
  <Container id="schedule" variant="smallContainer">
    <Heading>Program</Heading>

    <Paragraph>
      We would like to thank everyone who submitted their proposals! We are now compiling the final version of the event schedule.
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
