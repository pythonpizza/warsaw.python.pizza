import { Container, Grid, jsx } from "theme-ui";

import { AnchorHeading } from "~/components/anchor-heading";
import { Image } from "~/components/image";
import { type Sponsor, SPONSORS } from "~/data/sponsors";

type SponsorProps = {
  sponsor: Sponsor;
};

export const SponsorItem: React.FC<SponsorProps> = ({ sponsor }) => (
  <a
    href={sponsor.link}
    rel="noopener noreferrer"
    target="_blank"
    sx={{ position: "relative" }}
  >
    <Image
      width="14rem"
      height="auto"
      objectFit="contain"
      src={sponsor.image}
      alt={sponsor.name}
    />
  </a>
);

export const Sponsors = () => (
  <Container id="sponsors">
    <AnchorHeading anchor="sponsors" mb="primary">
      Sponsors
    </AnchorHeading>
    <Grid columns={[1, 2, 2, 3]} gap="primary">
      {SPONSORS.map((sponsor) => (
        <SponsorItem key={sponsor.name} sponsor={sponsor} />
      ))}
    </Grid>
  </Container>
);
