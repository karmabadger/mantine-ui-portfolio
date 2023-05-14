import KPRIcon from "@/components/icons/KPRIcon";
import SharpjsIcon from "@/components/icons/SharpjsIcon";
import Image from "next/image";
import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import {
  SiCss3,
  SiElectron,
  SiJavascript,
  SiNodedotjs,
  SiPandas,
  SiPlotly,
  SiPython,
  SiRust,
  SiSolidity,
  SiTypescript,
} from "react-icons/si";

import TokioIcon from "@/components/icons/TokioIcon";

import { RiRemoteControlLine } from "react-icons/ri";

type ExperienceCardProps = {
  id: string;
  imageData: {
    src: string;
    alt: string;
  };
  jobData: {
    companyName: string;
    title: string;
    time: string;
    icon?: React.ReactNode;
    link?: string;
  };
  projectsData: {
    name: string;
    description: string;
    technologies: {
      name: string;
      type: "language" | "technology";
    }[];
    link?: string;
  }[];
  technologiesData: {
    technologies: {
      name: string;
      icon: React.ReactNode;
    }[];
    languages: {
      name: string;
      icon: React.ReactNode;
    }[];
  };
};

const data: ExperienceCardProps[] = [
  // experience at Cyberbrokers
  {
    id: "cyberbrokers",
    imageData: {
      src: "/cyberbrokers_banner.avif",
      alt: "Cyberbrokers",
    },
    jobData: {
      companyName: "Cyberbrokers",
      title: "Software Engineer and Consultant",
      link: "https://www.cyberbrokers.com/",
      time: "2022-2023",
      icon: (
        <Image
          src="/cyberbrokers_icon.png"
          alt="cyberbrokers-icon"
          width={50}
          height={50}
        />
      ),
    },
    projectsData: [
      {
        name: "Custom Discord Command RPC Bot Server",
        description: "Creating a custom RPC server for Discord bots",
        technologies: [
          {
            name: "Rust",
            type: "language",
          },
          {
            name: "TS",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "GRPC",
            type: "technology",
          },
          {
            name: "discord.js",
            type: "technology",
          },
          {
            name: "Tokio",
            type: "technology",
          },
          {
            name: "TCP",
            type: "technology",
          },
          {
            name: "websockets",
            type: "technology",
          },
        ],
      },
      {
        name: "Custom Discord Invoke AI Stable Diffusion Bot",
        description:
          "Creating a custom Discord bot with a queueing system for an Invoke AI server",
        technologies: [
          {
            name: "TS",
            type: "language",
          },
          {
            name: "JS",
            type: "language",
          },
          {
            name: "Python",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "discord.js",
            type: "technology",
          },
          {
            name: "Invoke-AI",
            type: "technology",
          },
        ],
      },
    ],
    technologiesData: {
      technologies: [
        {
          name: "Node.js",
          icon: <SiNodedotjs color="#68A063" />,
        },
        {
          name: "GRPC",
          icon: (
            <Image
              src="/grpc_icon.ico"
              width={16}
              height={16}
              alt="GRPC Icon"
            />
          ),
        },
        {
          name: "Discord.js",
          icon: (
            <Image
              src="/discordjs_icon.png"
              width={16}
              height={16}
              alt="Discord.js Icon"
            />
          ),
        },
        {
          name: "Tokio",
          icon: <TokioIcon size={16} />,
        },
        {
          name: "Invoke-AI",
          icon: (
            <Image
              src="/invokeai_icon.png"
              width={16}
              height={16}
              alt="Invoke-AI Icon"
            />
          ),
        },
      ],
      languages: [
        {
          name: "Rust",
          icon: <SiRust />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript color="#3178c6" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript color="#F0DB4F" />,
        },
        {
          name: "Python",
          icon: <SiPython />,
        },
      ],
    },
  },
  {
    id: "kprverse",
    imageData: {
      src: "/kpr_banner.png",
      alt: "KPRVerse",
    },
    jobData: {
      companyName: "Kprverse (kprverse.com)",
      title: "Software Engineer and Consultant",
      link: "www.kprverse.com",
      time: "2021-2023",
      icon: <KPRIcon size={50} />,
    },
    projectsData: [
      {
        name: "Custom Art Generator",
        description:
          "Design and development of an entire custom art generator along with a suite of tools from scratch using Typescript and Sharp.js (blazingly fast image manipulation library). true randomness, With over 1000 assets, hundreds of of logical rules, and a over 10 000 quality pieces to generate out of unimaginably large number of possibilities, I had to design a system that would be able to handle all of the numerous different requirements and edge cases as well as optimize it to compute as fast as possible. Requirements were also constantly changing with new ones added often. The result is a blazingly fast and optimized (the bottleneck was the image manipulation library) and flexible system that was able to handle the load.",
        technologies: [
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "Sharp.js",
            type: "technology",
          },
          {
            name: "Image Manipulation",
            type: "technology",
          },
        ],
      },
      {
        name: "Smart Contract Engineering",
        description:
          "Design and development of the original smart contract library that would be used for the KPR project. The library passed an audit by a third party and was used as a base for the entire project. The library was also optimized to be as gas efficient as possible and to be able to handle all of the different use cases that were required.",
        technologies: [
          {
            name: "Solidity",
            type: "language",
          },
          {
            name: "Foundry",
            type: "technology",
          },
          {
            name: "hardhat",
            type: "technology",
          },
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Smart Contracts",
            type: "technology",
          },
        ],
      },
      {
        name: "Infrastructure, Deployment, and DevOps",
        description:
          "Design and development of the original smart contract library that would be used for the KPR project. The library passed an audit by a third party and was used as a base for the entire project. The library was also optimized to be as gas efficient as possible and to be able to handle all of the different use cases that were required.",
        technologies: [
          {
            name: "Next.js",
            type: "technology",
          },
          {
            name: "React.js",
            type: "technology",
          },
          {
            name: "Typescript",
            type: "language",
          },
        ],
      },
    ],
    technologiesData: {
      technologies: [
        {
          name: "Node.js",
          icon: <SiNodedotjs color="#68A063" />,
        },
        {
          name: "Sharp.js",
          icon: <SharpjsIcon />,
        },
        {
          name: "Jimp.js",
          icon: <BsFillPencilFill />,
        },
        {
          name: "Foundry",
          icon: (
            <Image
              src="/foundry_icon.png"
              height={17}
              width={17}
              alt="Foundry"
            />
          ),
        },
      ],
      languages: [
        {
          name: "Solidity",
          icon: <SiSolidity />,
        },
        {
          name: "Typescript",
          icon: <SiTypescript color="#3178c6" />,
        },
        {
          name: "Javascript",
          icon: <SiJavascript color="#F0DB4F" />,
        },
      ],
    },
  },
  // shift
  {
    id: "shift",
    imageData: {
      src: "/shift_banner.png",
      alt: "Shift",
    },
    jobData: {
      companyName: "Astrolabs (shift.lol)",
      title: "Founder and Lead Software Engineer",
      link: "https://www.shift.lol/",
      time: "2021-2022",
      icon: (
        <Image src="/shift_icon.jpg" alt="shift-icon" width={50} height={50} />
      ),
    },
    projectsData: [
      {
        name: "Shift Web Backend Application",
        description: "",
        technologies: [
          {
            name: "Rust",
            type: "language",
          },
          {
            name: "TS",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "JS",
            type: "language",
          },
          {
            name: "MongoDB",
            type: "technology",
          },
          {
            name: "Mongoose.js",
            type: "technology",
          },
          {
            name: "Actix-Web",
            type: "technology",
          },
          {
            name: "React.js",
            type: "technology",
          },
          {
            name: "Next.js",
            type: "technology",
          },
          {
            name: "Fastify.js",
            type: "technology",
          },
          {
            name: "REST API",
            type: "technology",
          },
          {
            name: "GraphQL",
            type: "technology",
          },
          {
            name: "Tokio",
            type: "technology",
          },
          {
            name: "Websockets",
            type: "technology",
          },
          {
            name: "LRU-cache",
            type: "technology",
          },
        ],
        link: "https://www.shift.lol/",
      },
      {
        name: "Shift Smart Contracts",
        description: "",
        technologies: [
          {
            name: "Solidity",
            type: "language",
          },
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Foundry",
            type: "technology",
          },
          {
            name: "hardhat",
            type: "technology",
          },
          {
            name: "Smart Contracts",
            type: "technology",
          },
        ],
        link: "https://www.shift.lol/",
      },
      {
        name: "Shift Web Frontend Application",
        description: "",
        technologies: [
          {
            name: "React.js",
            type: "technology",
          },
          {
            name: "Next.js",
            type: "technology",
          },
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "ethers.js",
            type: "technology",
          },
        ],
        link: "https://www.shift.lol/",
      },
      {
        name: "Smolsweep Web Frontend Application",
        description: "",
        technologies: [
          {
            name: "React.js",
            type: "technology",
          },
          {
            name: "Next.js",
            type: "technology",
          },
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Javascript",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "ethers.js",
            type: "technology",
          },
          {
            name: "Chakra UI",
            type: "technology",
          },
          {
            name: "Material UI",
            type: "technology",
          },
        ],
        link: "https://www.shift.lol/",
      },
      {
        name: "Smolsweep Smart Contracts",
        description: "",
        technologies: [
          {
            name: "Solidity",
            type: "language",
          },
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Foundry",
            type: "technology",
          },
          {
            name: "hardhat",
            type: "technology",
          },
          {
            name: "Smart Contracts",
            type: "technology",
          },
        ],
        link: "https://www.shift.lol/",
      },
    ],
    technologiesData: {
      technologies: [
        {
          name: "Rust",
          icon: <SiRust size="1.5rem" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size="1.5rem" />,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs size="1.5rem" />,
        },
      ],
      languages: [
        {
          name: "Rust",
          icon: <SiRust size="1.5rem" />,
        },
      ],
    },
  },
  // Novartis Data Science Internship
  {
    id: "novartis-internship",
    imageData: {
      src: "/novartis_banner.png",
      alt: "Novartis Banner",
    },
    jobData: {
      companyName: "Novartis",
      title: "Data Science and Software Engineer Intern",
      link: "https://www.novartis.com/",
      time: "2020",
      icon: (
        <Image
          src="/novartis_icon.png"
          alt="Novartis Icon"
          width={50}
          height={50}
        />
      ),
    },
    projectsData: [
      {
        name: "Data Science",
        description: "",
        technologies: [
          {
            name: "Typescript",
            type: "language",
          },
          {
            name: "Javascript",
            type: "language",
          },
          {
            name: "Python",
            type: "language",
          },
          {
            name: "Node.js",
            type: "technology",
          },
          {
            name: "Electron.js",
            type: "technology",
          },
          {
            name: "Pandas",
            type: "technology",
          },
          {
            name: "Plotly",
            type: "technology",
          },
        ],
      },
    ],
    technologiesData: {
      technologies: [
        {
          name: "Node.js",
          icon: <SiNodedotjs color="#68A063" />,
        },
        {
          name: "Electron.js",
          icon: <SiElectron color="#68A063" />,
        },
        {
          name: "Pandas",
          icon: <SiPandas color="#68A063" />,
        },
        {
          name: "Plotly",
          icon: <SiPlotly color="#68A063" />,
        },
      ],
      languages: [
        {
          name: "Typescript",
          icon: <SiTypescript color="#3178c6" />,
        },
        {
          name: "Javascript",
          icon: <SiJavascript color="#F0DB4F" />,
        },
        {
          name: "Python",
          icon: <SiPython color="#3178c6" />,
        },
        {
          name: "CSS",
          icon: <SiCss3 color="#3178c6" />,
        },
      ],
    },
  },
];

export { data, type ExperienceCardProps };
