/** @jsxRuntime classic */
/** @jsxImportSource theme-ui */
import Head from "next/head";
import NextLink from "next/link";
import { Box, Container, Heading, Link, jsx } from "theme-ui";

import { CompactAgenda } from "~/components/compact-agenda";
import { SCHEDULE } from "~/data/schedule";

const AgendaPage = () => (
  <Box
    sx={{
      minHeight: "100vh",
      backgroundColor: "#fffaf9",
    }}
  >
    <Head>
      <title>Agenda for May 9, 2026 | Warsaw Python Pizza</title>
      <meta
        name="description"
        content="Compact day-of agenda for Warsaw Python Pizza on May 9, 2026."
      />
    </Head>

    <Container
      sx={{
        width: "100%",
        maxWidth: "56rem",
        px: ["1rem", "secondary"],
        pt: ["1.2rem", "secondary"],
        pb: ["6rem", "7rem"],
      }}
    >
      <Box
        as="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 2,
          mx: ["-1rem", "-2rem"],
          mb: "1rem",
          px: ["1rem", "2rem"],
          py: ".9rem",
          backgroundColor: "rgba(255, 250, 249, .94)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #f2d1cd",
          textAlign: "center",
        }}
      >
        <Heading
          as="h1"
          sx={{
            m: 0,
            color: "text",
            fontFamily: "heading",
            fontSize: ["1.25rem", "1.6rem"],
            lineHeight: 1.15,
          }}
        >
          Agenda for Warsaw Python Pizza, May 9 2026
        </Heading>
      </Box>

      <CompactAgenda schedule={SCHEDULE} />
    </Container>

    <Link
      as={NextLink}
      href="/"
      sx={{
        position: "fixed",
        right: ["1rem", "1.6rem"],
        bottom: ["1rem", "1.6rem"],
        zIndex: 10,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "4rem",
        height: "4rem",
        border: "1px solid",
        borderColor: "primary",
        borderRadius: "999px",
        backgroundColor: "white",
        color: "primary",
        boxShadow: "0 .8rem 2.4rem -1.2rem rgba(70, 68, 68, .4)",
        lineHeight: 1,
        transition: "transform .2s, box-shadow .2s",
        "&:hover, &:focus": {
          color: "primary",
          transform: "translateY(-.15rem)",
          boxShadow: "0 1rem 2.8rem -1.2rem rgba(70, 68, 68, .5)",
        },
      }}
      aria-label="Go to home page"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 24 24"
        width="21"
        height="21"
      >
        <path
          d="M3 10.5 12 3l9 7.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M5.5 9.5V21h13V9.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M9.5 21v-6h5v6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </Link>
  </Box>
);

export default AgendaPage;
