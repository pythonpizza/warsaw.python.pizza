import { Box, Container, Heading, Paragraph } from "theme-ui";

import { ContentButton } from "~/components/header";

export const CFP = () => (
  <Container id="cfp" variant="smallContainer">
    <Heading>Call For Proposals is open until <s>31st December</s> 7th January</Heading>
    <Paragraph>
      <a
        href="https://forms.gle/ktaNSjRsrt6YcQEK9"
        target="_blank"
        rel="noopener noreferrer"
      >
        Share
      </a>{" "}
      with us your ideas! Each talk will be 10-minutes long. They can be given
      in person only. We will have a live stream of the event. The applications
      are reviewed on a rolling basis. Apply now to secure a spot and join the
      party 🎊.
    </Paragraph>
    <Paragraph sx={{ p: "2rem" }}>
      If you&apos;re not sure which topic you would like to talk about – you can
      send multiple proposals :)
    </Paragraph>
    <Paragraph sx={{ p: "2rem" }}>
      We are looking for first-time speakers! It is a good opportunity to get
      started with public speaking with these mini 10-min talks! 🎤
    </Paragraph>
    <Paragraph sx={{ p: "2rem" }}>
      We are looking for experienced speakers! It is a great opportunity to
      inspire a new generation of 🐍 loving people!
    </Paragraph>
    <Box sx={{ m: "5rem" }}>
      <ContentButton href="https://forms.gle/ktaNSjRsrt6YcQEK9">
        Click here to send your Proposal
      </ContentButton>
    </Box>{" "}
  </Container>
);
