import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com",
  },
] as const;


export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/deakinrover",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/deakinroverteam",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/company/deakin-competitive-robotics/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "/sponsor",
      },
      {
        name: "About Project",
        icon: null,
        link: "about-project",
      },
      {
        name: "Contact Us",
        icon: null,
        link: "/contact",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Goals",
    link: "/#past-achievements",
  },
  {
    title: "Gallery",
    link: "/#gallery",
  },
  {
    title: "Sponsor",
    link: "/sponsor",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/deakin_rover",
};
