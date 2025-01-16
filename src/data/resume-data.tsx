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
  avatarUrl: "https://avatars.githubusercontent.com/u/19532601?v=4",
  personalWebsiteUrl: "https://saivangala.me",
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
      company: "Tim Hortons - RBI",
      link: "https://www.rbi.com",
      badges: ["Lead", "Remote"],
      title: "Tech Lead - Tims Financial",
      logo: RBILogo,
      start: "2022",
      description:
        "Successfully led a team in the development and nationwide launch of the Tims Mastercard, driving product development from scratch. Assembled and nurtured a high-performing team, fostering collaboration and innovation. Guided the team through the entire product lifecycle, from concept to market launch.",
    },
    {
      company: "Koho Financial Inc",
      link: "https://www.koho.ca/",
      badges: ["Lead", "Remote"],
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
    "Go",
    "Node.js",
    "GraphQL",
    "Java",
    "AWS",
    "System Architecture",
    "Team Leadership"
  ],
  projects: [
    {
      title: "Transaction store",
      techStack: ["DynamoDB", "Event Bridge", "Kinesis", "Lambda", "NodeJS"],
      description: "A scalable transaction datastore that delivers real-time transaction feeds to fintech mobile app users.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://saivangala.me/",
      },
    },
    {
      title: "AI Spending Insights",
      techStack: ["DynamoDB", "Amazon Bedrock", "Lambda", "Python", "Prompt Engineering"],
      description: "An AI platform that analyzes credit card spending to provide personalized insights and recommendations.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://saivangala.me/",
      },
    },
    {
      title: "saivangala.me",
      techStack: ["Next.js", "Vercel"],
      description:
        "My personal website and blog. Built with Next.js and Vercel",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://saivangala.me/",
      },
    },
  ],
} as const;
