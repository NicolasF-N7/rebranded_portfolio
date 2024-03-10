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
    title: "Accueil",
    path: "/",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Me connaitre",
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
          name: "Accueil",
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
          name: "Me connaitre",
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
          link: "/contact",
          icon: "/icons/mail-f.svg",
          leavesWebsite: false,
        },
        {
          name: "Whatsapp",
          link: "/contact",
          icon: "/icons/whatsapp-f.svg",
          leavesWebsite: false,
        },
      ],
    },
];
