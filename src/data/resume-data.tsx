import {
  CGILogo,
  InteracLogo,
  JarockiMeLogo,
  KohoLogo,
  RBILogo,
  TCSLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sai Krishna Vangala",
  initials: "SV",
  location: "Toronto, Canada, ET",
  locationLink: "https://www.google.com/maps/place/Toronto",
  about:
    "Senior Software Engineer and Tech Lead, Builder and Mentor with a passion for Innovation and Problem Solving",
  summary:
    "As a seasoned Senior Engineer and Tech Lead, I have a proven track record of leading successful product launches with diverse, cross-functional teams. My expertise includes team leadership, fostering innovation, and delivering high-quality solutions using various programming languages and cloud technologies. I am dedicated to nurturing cohesive teams and championing a culture of excellence.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "saikris12@gmail.com",
    tel: "+1(437)-995-0408",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/saikris12",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saikrishnavangala",
        icon: LinkedInIcon,
      },
      {
        name: "Medium",
        url: "https://medium.com/@saikris12",
        icon: MediumIcon,
      },
    ],
  },
  education: [
    {
      school: "Andhra University",
      degree: "Bachelor's Degree in Science",
      start: "2005",
      end: "2008",
    },
  ],
  work: [
    {
      company: "Restaurant Brands International (RBI)",
      link: "https://www.rbi.com",
      badges: ["Remote"],
      title: "Tech Lead",
      logo: RBILogo,
      start: "2022",
      end: "2025",
      description:
        "Successfully led a team in the development and nationwide launch of the Tims Mastercard, driving product development from scratch. Assembled and nurtured a high-performing team, fostering collaboration and innovation. Guided the team through the entire product lifecycle, from concept to market launch.",
    },
    {
      company: "Koho Financial Inc",
      link: "https://www.koho.ca/",
      badges: ["Remote"],
      title: "Senior Software Engineer - Payments",
      logo: KohoLogo,
      start: "2021",
      end: "2022",
      description:
        "Part of a team that built an in-house ledger and money movement channels, ensuring robust and scalable solutions. Developed the payments infrastructure, enhancing transaction efficiency and reliability. Mentored and coached developers, fostering a collaborative and growth-oriented environment.",
    },
    {
      company: "Interac Corp",
      link: "https://www.interac.ca",
      badges: [],
      title: "Senior Software Engineer",
      logo: InteracLogo,
      start: "2018",
      end: "2021",
      description:
        "As a key member of a high-performance team, played a crucial role in driving organizational innovation through tech stack modernization. Made significant contributions to the notifications system, enhancing its scalability and robustness to support growing demands. ",
    },
    {
      company: "CGI Inc",
      link: "https://www.cgi.com",
      badges: [],
      title: "Senior Software Engineer",
      logo: CGILogo,
      start: "2014",
      end: "2018",
      description:
        "As a consultant, I drove innovation and transformation for leading financial institutions in the USA and Canada. Leveraged full stack development expertise to deliver seamless, end-to-end solutions. Led a team of developers, fostering collaboration and guiding them through complex projects to successful outcomes.",
    },
    {
      company: "Tata Consultancy Services",
      link: "https://www.tcs.com",
      badges: [],
      title: "IT Analyst",
      logo: TCSLogo,
      start: "2008",
      end: "2014",
      description:
        "Developed a wide range of skills from front-end to back-end development, enabling the creation of innovative and effective solutions. uccessfully built and implemented solutions for major brands, including Singapore Airlines and USAA, demonstrating the ability to meet high standards and deliver impactful results.",
    },
  ],
  skills: [
    "Node.js",
    "Go",
    "GraphQL",
    "Java",
    "AWS",
    "System Architecture",
    "Remote Team Leadership"
  ],
  projects: [
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
