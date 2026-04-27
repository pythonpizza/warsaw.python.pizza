export type ProfileLink = {
  url: string;
  icon: string;
  label: string;
};

export const linkedInLink = (url: string): ProfileLink => ({
  url,
  icon: "/socials/linkedin.png",
  label: "LinkedIn",
});
