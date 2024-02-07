type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
};

export const routes: Route[] = [
  {
    title: "Services",
    path: "/",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Nicolas",
    path: "/nicolas",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];


export const footer_columns = [
    {
      title: "Pages",
      links: [
        {
          name: "Services",
          link: "/",
          icon: "",
          leavesWebsite: false,
        },
        {
          name: "Portfolio",
          link: "/portfolio",
          icon: "",
          leavesWebsite: false,
        },
        {
          name: "Nicolas",
          link: "/nicolas",
          icon: "",
          leavesWebsite: false,
        },
        {
          name: "Contact",
          link: "/contact",
          icon: "",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/NicolasF-N7",
          icon: "/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/nicolas-foin-a211b0197/",
          icon: "/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:contact@foin-dev-web.fr",
          icon: "/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Services",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Portfolio",
          link: "/portfolio",
          leavesWebsite: false,
        },
        {
          name: "Nicolas",
          link: "/nicolas",
          leavesWebsite: false,
        },
        {
          name: "Contact",
          link: "/contact",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/NicolasF-N7",
          icon: "/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/nicolas-foin-a211b0197/",
          icon: "/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:contact@foin-dev-web.fr",
          icon: "/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ]
};
