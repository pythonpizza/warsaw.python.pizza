import { Container, Paragraph } from "theme-ui";

import { AnchorHeading } from "~/components/anchor-heading";
import { ScheduleCard } from "~/components/schedule-card";
import { SCHEDULE } from "~/data/schedule";

export const Schedule = () => (
  <Container id="schedule" variant="smallContainer">
    <AnchorHeading anchor="schedule">Program</AnchorHeading>

    <Paragraph>
      Join us for a full day of Python talks, coffee breaks, lightning talks,
      and pizza.
    </Paragraph>

    {SCHEDULE.map((schedule, index) => (
      <ScheduleCard
        variant={schedule.label ? "info" : "talk"}
        key={`${schedule.when}-${schedule.title ?? schedule.label}`}
        schedule={schedule}
        invert={!(index % 2)}
      />
    ))}
  </Container>
);
