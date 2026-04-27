import { Box, Container, Flex, NavLink } from "theme-ui";

import { genericInformation } from "~/data/generic";

import { Logo } from "./logo";

type LinkComponent = React.FC<{ href: string; children: React.ReactNode }>;

const MenuLink: LinkComponent = ({ href, children }) => {
  return (
    <NavLink
      sx={{
        background:
          "linear-gradient(0deg, #fff .2rem,transparent 0) no-repeat 50%",
        transition: "background-size .3s cubic-bezier(.165,.84,.44,1)",
        backgroundSize: "0 100%",
        p: ".4rem",
        "&:hover": {
          backgroundSize: "100% 100%",
        },
      }}
      mt={["secondary", 0]}
      ml={[0, "secondary"]}
      href={href}
    >
      {children}
    </NavLink>
  );
};

const MenuButton: LinkComponent = ({ children, href }) => (
  <Box
    sx={{
      perspective: "24rem",
      p: ".4rem",
    }}
    mt={["secondary", 0]}
    ml={[0, "secondary"]}
  >
    <NavLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        padding: "1rem 2.4rem",
        border: "1px solid white",
        borderRadius: "10rem",
        background: "white",
        color: "primary",
        transition: `transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
          box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)`,
        "&:hover": {
          // transform: "translateZ(2.6rem) rotateX(-12deg) rotateY(-10deg)",
          boxShadow: "0.6rem 0.4rem 2.4rem -0.8rem rgba(25, 0, 0, 0.5)",
          color: "primary",
        },
      }}
    >
      {children}
    </NavLink>
  </Box>
);

export const ContentButton: LinkComponent = ({ children, href }) => (
  <Box
    sx={{
      perspective: "24rem",
      p: ".4rem",
    }}
    mt={["secondary", 0]}
    ml={[0, "secondary"]}
  >
    <NavLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        padding: "1rem 2.4rem",
        border: "1px solid white",
        borderRadius: "10rem",
        background: "primary",
        color: "white",
        transition: `transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
          box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)`,
        "&:hover": {
          transform: "translateZ(2.6rem) rotateX(-12deg) rotateY(-10deg)",
          boxShadow: "0.6rem 0.4rem 2.4rem -0.8rem rgba(25, 0, 0, 0.5)",
          color: "white",
        },
      }}
    >
      {children}
    </NavLink>
  </Box>
);

export const Header = () => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 10,

      width: "100%",
    }}
  >
    <Container
      sx={{
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: ["column", null, "row"],

        color: "white",
        p: "secondary",
      }}
    >
      <Logo />
      <Flex
        sx={{
          alignItems: "center",
          flexDirection: ["column", "row"],
          zIndex: 5,
        }}
        as="nav"
      >
        <MenuLink href="#about">About 🍕</MenuLink>
        <MenuLink href="#cfp">CFP 🙋🏻‍♀️</MenuLink>
        <MenuLink href="#schedule">Program 📅</MenuLink>
        <MenuLink href="#organizers">Organizers 👩🏻</MenuLink>
        <MenuLink href="#venue">Venue 🏰</MenuLink>
        <MenuLink href="#sponsors">Sponsors 💛</MenuLink>
        <MenuLink href="#coc">CoC 💂</MenuLink>
        <MenuButton href={genericInformation.ticketsUrl}>
          Buy tickets 🎫
        </MenuButton>
      </Flex>
    </Container>
  </Box>
);

export const FloatingTicketsButton = () => (
  <NavLink
    href={genericInformation.ticketsUrl}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      position: "fixed",
      right: ["1.2rem", "2rem"],
      bottom: ["1.2rem", "2rem"],
      zIndex: 20,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: ["13.6rem", "16rem"],
      px: ["1.6rem", "2.4rem"],
      py: ["1rem", "1.2rem"],
      border: "1px solid white",
      borderRadius: "10rem",
      background: "primary",
      boxShadow: "0.6rem 0.4rem 2.4rem -0.8rem rgba(25, 0, 0, 0.5)",
      color: "white",
      fontSize: ["smallBody", "body"],
      fontWeight: "bold",
      textAlign: "center",
      transition: `transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
        box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)`,
      "&:hover, &:focus": {
        color: "white",
        transform: "translateY(-0.2rem)",
        boxShadow: "0.8rem 0.6rem 3rem -0.8rem rgba(25, 0, 0, 0.6)",
      },
    }}
  >
    Buy tickets 🎫
  </NavLink>
);
