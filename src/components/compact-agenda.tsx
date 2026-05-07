/** @jsxRuntime classic */
/** @jsxImportSource theme-ui */
import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { Box, Flex, Text, jsx } from "theme-ui";

import type { Event } from "~/data/schedule";
import { SPEAKERS } from "~/data/speakers";

type AgendaHighlight = {
  currentIndex: number | null;
  nextIndex: number | null;
};

type ReferenceTime = {
  isFixed: boolean;
  time: Date | null;
};

const getStartTime = (event: Event) =>
  event.when ? new Date(event.when).getTime() : Number.POSITIVE_INFINITY;

const getEndTime = (event: Event) =>
  event.until ? new Date(event.until).getTime() : getStartTime(event);

export const getAgendaHighlight = (
  schedule: Event[],
  referenceTime: Date,
): AgendaHighlight => {
  const referenceTimestamp = referenceTime.getTime();
  const currentIndex = schedule.findIndex((event) => {
    const startTime = getStartTime(event);
    const endTime = getEndTime(event);

    return startTime <= referenceTimestamp && referenceTimestamp < endTime;
  });
  const nextIndex = schedule.findIndex(
    (event) => getStartTime(event) > referenceTimestamp,
  );

  return {
    currentIndex: currentIndex === -1 ? null : currentIndex,
    nextIndex: nextIndex === -1 ? null : nextIndex,
  };
};

const getReferenceTime = () => {
  if (typeof window === "undefined") {
    return { isFixed: false, time: null };
  }

  const highlightTime = new URLSearchParams(window.location.search).get(
    "highlightTime",
  );

  if (highlightTime) {
    const normalizedHighlightTime = highlightTime.match(
      /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/,
    )
      ? highlightTime.replace(" ", "T")
      : highlightTime.replace(/ (\d{2}:\d{2})$/, "+$1");
    const parsedTime = new Date(normalizedHighlightTime);

    if (!Number.isNaN(parsedTime.getTime())) {
      return { isFixed: true, time: parsedTime };
    }
  }

  return { isFixed: false, time: new Date() };
};

const formatTime = (time: string) => format(new Date(time), "HH:mm");

const getTitle = (event: Event) => event.title ?? event.label ?? "";

const getSpeakers = (event: Event) =>
  event.speakerIds
    ?.map((speakerId) => SPEAKERS[speakerId]?.name)
    .filter(Boolean)
    .join(", ");

export const CompactAgenda: React.FC<{ schedule: Event[] }> = ({
  schedule,
}) => {
  const [reference, setReference] = useState<ReferenceTime>({
    isFixed: false,
    time: null,
  });

  useEffect(() => {
    const initialReference = getReferenceTime();

    setReference(initialReference);

    if (initialReference.isFixed) {
      return;
    }

    let interval: number | undefined;
    const timeout = window.setTimeout(
      () => {
        setReference(getReferenceTime());
        interval = window.setInterval(() => {
          setReference(getReferenceTime());
        }, 60_000);
      },
      60_000 - (Date.now() % 60_000),
    );

    return () => {
      window.clearTimeout(timeout);
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, []);

  const highlight = useMemo(
    () =>
      reference.time
        ? getAgendaHighlight(schedule, reference.time)
        : { currentIndex: null, nextIndex: null },
    [schedule, reference.time],
  );

  return (
    <Box
      as="ol"
      sx={{
        listStyle: "none",
        display: "grid",
        gap: ".4rem",
        m: 0,
        p: 0,
      }}
    >
      {schedule.map((event, index) => {
        const isCurrent = highlight.currentIndex === index;
        const isNext = highlight.nextIndex === index;
        const speakers = getSpeakers(event);

        return (
          <Box
            as="li"
            key={`${event.when}-${getTitle(event)}`}
            sx={{
              display: "grid",
              gridTemplateColumns: "4.2rem minmax(0, 1fr) auto",
              gridTemplateRows: "auto auto",
              alignItems: "start",
              gap: ".6rem",
              rowGap: ".15rem",
              minHeight: 0,
              px: ".75rem",
              py: ".5rem",
              border: "1px solid",
              borderColor: isCurrent || isNext ? "primary" : "#eee",
              borderRadius: ".8rem",
              backgroundColor: isCurrent
                ? "primary"
                : isNext
                  ? "#fff4f2"
                  : "white",
              boxShadow: isCurrent
                ? "0 .8rem 2.4rem -1.6rem rgba(237, 67, 55, .75)"
                : undefined,
              color: isCurrent ? "white" : "text",
            }}
          >
            <Text
              sx={{
                fontFamily: "heading",
                fontSize: "1.2rem",
                fontWeight: "heading",
                lineHeight: 1,
                color: isCurrent ? "white" : "primary",
                whiteSpace: "nowrap",
                gridColumn: 1,
                gridRow: 1,
              }}
            >
              {event.when ? formatTime(event.when) : ""}
            </Text>

            <Box
              sx={{
                minWidth: 0,
                gridColumn: "2 / span 2",
                gridRow: "1 / span 2",
                textAlign: "left",
              }}
            >
              {speakers && (
                <Text
                  sx={{
                    display: "block",
                    pr: isCurrent || isNext ? "4.1rem" : 0,
                    fontSize: "1.1rem",
                    lineHeight: 1,
                    opacity: isCurrent ? 0.92 : 0.72,
                    overflowWrap: "anywhere",
                  }}
                >
                  {speakers}
                </Text>
              )}

              <Text
                sx={{
                  display: "block",
                  mt: speakers ? ".2rem" : 0,
                  fontFamily: "heading",
                  fontSize: ["1.15rem", "1.3rem"],
                  fontWeight: "heading",
                  lineHeight: 1.15,
                  overflowWrap: "anywhere",
                }}
              >
                {getTitle(event)}
              </Text>
            </Box>

            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "center",
                minWidth: "3.5rem",
                gridColumn: 3,
                gridRow: 1,
              }}
            >
              {(isCurrent || isNext) && (
                <Text
                  sx={{
                    px: ".45rem",
                    py: ".2rem",
                    borderRadius: "999px",
                    backgroundColor: isCurrent ? "white" : "primary",
                    color: isCurrent ? "primary" : "white",
                    fontFamily: "heading",
                    fontSize: ".9rem",
                    fontWeight: "heading",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {isCurrent ? "Now" : "Next"}
                </Text>
              )}
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};
