/** @jsxRuntime classic */
/** @jsxImportSource theme-ui */
import { format } from "date-fns";
import { Box, Card, Heading, Image, Link, Text, jsx } from "theme-ui";

import type { Event } from "~/data/schedule";
import type { Speaker } from "~/data/speakers";
import { SPEAKERS } from "~/data/speakers";

import { Avatar } from "./avatar";

type Props = {
  variant?: "talk" | "info";
  invert?: boolean;
  schedule: Event;
};

const formatTime = (time: string) => format(new Date(time), "HH:mm");

const formatTimeRange = ({ when, until }: Event) => {
  if (!when) {
    return null;
  }

  if (!until) {
    return formatTime(when);
  }

  return `${formatTime(when)}-${formatTime(until)}`;
};

const TalkCard: React.FC<{
  invert: Props["invert"];
  schedule: Props["schedule"];
}> = ({ invert, schedule }) => {
  const speakers: Speaker[] =
    schedule.speakerIds?.map((id) => SPEAKERS[id]) ?? [];
  const photos = speakers.flatMap((speaker) =>
    speaker.image ? [speaker.image] : [],
  );

  return (
    <Card
      sx={{
        minHeight: ["auto", "12.8rem"],
        border: schedule.isKeynote ? ".3rem solid #ed4337" : undefined,
        borderRadius: ["3.2rem", "10rem"],
        boxShadow: schedule.isKeynote ? "0 8px 32px -12px #ed4337" : undefined,
        p: photos.length
          ? [
              "3rem 1.5rem 1.5rem",
              invert ? "2rem 17rem 2rem 10rem" : "2rem 10rem 2rem 17rem",
            ]
          : ["2.4rem 1.5rem 1.5rem", "2rem 10rem"],
      }}
    >
      {photos.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: invert ? "auto" : 0,
            right: invert ? 0 : "auto",
            transform: "translateY(-50%)",
            display: ["none", "flex"],
            alignItems: "center",
            justifyContent: "center",
            width: photos.length > 1 ? "14.4rem" : undefined,
            height: photos.length > 1 ? "14.4rem" : undefined,
          }}
        >
          {photos.map((photo, index) => (
            <Avatar
              key={photo}
              src={photo}
              sx={{
                width: photos.length > 1 ? "10rem" : "14.4rem",
                height: photos.length > 1 ? "10rem" : "14.4rem",
                position: photos.length > 1 ? "absolute" : undefined,
                top:
                  photos.length > 1 ? (index === 0 ? 0 : "4.4rem") : undefined,
                left:
                  photos.length > 1 ? (index === 0 ? 0 : "4.4rem") : undefined,
                zIndex: photos.length - index,
                border: photos.length > 1 ? ".4rem solid white" : undefined,
                boxShadow:
                  photos.length > 1 ? "2px 8px 24px -8px #ed4337" : undefined,
              }}
            />
          ))}
        </Box>
      )}

      {photos.length > 0 && (
        <Box
          sx={{
            display: ["flex", "none"],
            alignItems: "center",
            justifyContent: "center",
            width: photos.length > 1 ? "7.2rem" : undefined,
            height: photos.length > 1 ? "7.2rem" : undefined,
            mb: "1rem",
            position: "relative",
          }}
        >
          {photos.map((photo, index) => (
            <Avatar
              key={photo}
              src={photo}
              sx={{
                width: photos.length > 1 ? "4.8rem" : "6.4rem",
                height: photos.length > 1 ? "4.8rem" : "6.4rem",
                position: photos.length > 1 ? "absolute" : undefined,
                top:
                  photos.length > 1 ? (index === 0 ? 0 : "2.4rem") : undefined,
                left:
                  photos.length > 1 ? (index === 0 ? 0 : "2.4rem") : undefined,
                zIndex: photos.length - index,
                border: photos.length > 1 ? ".3rem solid white" : undefined,
                boxShadow:
                  photos.length > 1 ? "2px 8px 24px -8px #ed4337" : undefined,
              }}
            />
          ))}
        </Box>
      )}

      <Heading
        as="h2"
        sx={{
          mt: 0,
          mb: ["1rem", ".5rem"],
          fontSize: ["1.7rem", "body"],
          lineHeight: ["1.25", "heading"],
          color: "text",
          overflowWrap: "break-word",
        }}
      >
        {schedule.title}
      </Heading>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: ".75rem",
          rowGap: ".35rem",
          flexWrap: "wrap",
          fontSize: ["1.35rem", "body"],
        }}
      >
        {schedule.isKeynote && (
          <Text
            sx={{
              display: "inline-flex",
              alignItems: "center",
              color: "primary",
              fontFamily: "heading",
              fontSize: "smallBody",
              fontWeight: "heading",
            }}
          >
            Keynote speaker
          </Text>
        )}
        {speakers.map((speaker) => (
          <Text
            key={speaker.name}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: ".4rem",
              flexWrap: "wrap",
            }}
          >
            {speaker.name}
            {speaker.links?.map((link) => (
              <Link
                key={`${speaker.name}-${link.url}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${speaker.name} ${link.label}`}
                title={`${speaker.name} ${link.label}`}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  lineHeight: 0,
                }}
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  sx={{
                    width: "16px",
                    height: "16px",
                    display: "block",
                    filter: "brightness(0)",
                  }}
                />
              </Link>
            ))}
          </Text>
        ))}
      </Box>
    </Card>
  );
};

const InfoCard: React.FC<{ schedule: Props["schedule"] }> = ({ schedule }) => (
  <Card
    sx={{
      p: ["1.5rem 1.25rem", "2rem 10rem"],
      borderRadius: ["2.4rem", "10rem"],
      backgroundColor: "primary",
      color: "white",
      backgroundImage: `linear-gradient(
          45deg,
          transparent 25%,
          rgba(0, 0, 0, 0.05) 25%,
          rgba(0, 0, 0, 0.05) 50%,
          transparent 50%,
          transparent 75%,
          rgba(0, 0, 0, 0.05) 75%
        )`,
      backgroundSize: "4.8rem 4.8rem",
      backgroundRepeat: "repeat",
      animation: "bg-move 2s infinite linear",
      "@keyframes bg-move": {
        "0%": {
          backgroundPositionX: 0,
        },
        "100%": {
          backgroundPositionX: "4.8rem",
        },
      },
    }}
  >
    <Text
      sx={{
        fontSize: ["smallBody", "body"],
      }}
    >
      {schedule.label}
    </Text>
  </Card>
);

export const ScheduleCard: React.FC<Props> = ({
  variant = "talk",
  invert = false,
  schedule,
}) => {
  const hasPhotos = Boolean(
    schedule.speakerIds?.some((id) => SPEAKERS[id]?.image),
  );

  return (
    <Box
      sx={{
        position: "relative",
        mt:
          variant === "talk"
            ? hasPhotos
              ? ["3.2rem", "primary"]
              : ["3rem", "primary"]
            : ["3rem", "primary"],
      }}
    >
      {variant === "talk" && <TalkCard schedule={schedule} invert={invert} />}
      {variant === "info" && <InfoCard schedule={schedule} />}

      {formatTimeRange(schedule) && (
        <Text
          key="when"
          sx={{
            position: "absolute",
            zIndex: 1,
            top: 0,
            left: "50%",
            transform: "translate(-50%, -50%)",
            px: [".75rem", "1rem"],
            py: ".35rem",
            borderRadius: "999px",
            backgroundColor: variant === "info" ? "white" : "primary",
            boxShadow: "0 4px 16px -8px #464444",
            color: variant === "info" ? "primary" : "white",
            fontFamily: "heading",
            fontSize: ["1.35rem", "smallBody"],
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          {formatTimeRange(schedule)}
        </Text>
      )}
    </Box>
  );
};
