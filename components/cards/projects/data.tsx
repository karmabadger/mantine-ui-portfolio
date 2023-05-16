import React from "react";
import {
  SiDjango,
  SiElectron,
  SiExpress,
  SiJavascript,
  SiMui,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiProtools,
  SiPython,
  SiReact,
  SiRedis,
  SiRust,
  SiSelenium,
  SiSolidity,
  SiWebmoney,
} from "react-icons/si";

import TaichiIcon from "@/components/icons/TaichiIcon";
import { Box, Card, Flex, Image } from "@mantine/core";

import { DiJava } from "react-icons/di";
import Link from "next/link";

type ProjectCardProps = {
  id: string;
  name: string;
  description: string;
  image: React.ReactNode;
  tools: {
    name: string;
    type: "language" | "technology";
  }[];
  technologies: {
    name: string;
    icon: React.ReactNode;
  }[];
  languages: {
    name: string;
    icon: React.ReactNode;
  }[];
  links?: React.ReactNode;
};

const data: ProjectCardProps[] = [
  {
    id: "soft-body-simulation",
    name: "2D Soft Body Simulation",
    image: (
      <Flex direction="row">
        <video
          style={{
            flex: 1,
            maxWidth: "50%",
          }}
          autoPlay
          loop
          muted
        >
          <source src="/soft-body/10x10.mp4" type="video/mp4" />
        </video>
        <video
          style={{
            flex: 1,
            maxWidth: "50%",
          }}
          autoPlay
          loop
          muted
        >
          <source src="/soft-body/ball_8_fall.mp4" type="video/mp4" />
        </video>
      </Flex>
    ),
    description:
      "A 2D soft body simulation using a mass-spring system. The simulation is implemented in Python using Taichi.",
    tools: [
      {
        name: "Python",
        type: "language",
      },
      {
        name: "Taichi",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "Taichi",
        icon: <TaichiIcon />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <SiPython />,
      },
    ],
    links: (
      <>
        <a href="https://github.com/karmabadger/2d-softbody-simulations">
          Github
        </a>
      </>
    ),
  },
  {
    id: "looper",
    name: "Looper",
    image: (
      <Flex>
        <Image src="/looper/looper_menu.png" alt="Looper Menu" />
        <Image src="/looper/looper1.png" alt="Looper Menu" />
        <Image src="/looper/looper_gg.png" alt="Looper Menu" />
      </Flex>
    ),
    description:
      "A hypercasual mobile game for Android made using Unity3d with entirely custom assets.",
    tools: [
      {
        name: "C#",
        type: "language",
      },
      {
        name: "Unity3d",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "Unity3d",
        icon: <TaichiIcon />,
      },
    ],
    languages: [
      {
        name: "C#",
        icon: <DiJava />,
      },
    ],
    links: (
      <>
        <a href="https://gitlab.com/wenxuan27/looper-game">Github</a>
      </>
    ),
  },
  {
    id: "c-lite-compiler",
    name: "C-Lite Compiler",
    image: (
      <Image
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        height={160}
        width={320}
        alt="Norway"
      />
    ),
    description:
      "A compiler for a subset of the C programming language. The compiler is implemented in Java using a custom visitor design pattern.",
    tools: [
      {
        name: "Java",
        type: "language",
      },
      {
        name: "C",
        type: "language",
      },
    ],
    technologies: [],
    languages: [
      {
        name: "Java",
        icon: <DiJava />,
      },
      {
        name: "C",
        icon: <SiPython />,
      },
    ],
    links: (
      <>
        <a href="">Github</a>
      </>
    ),
  },
  {
    id: "mcgame-jam-2020",
    name: "McGame Jam 2020",
    image: <Image src="mcgamejam2020_banner.png" alt="Norway" />,
    description:
      "A 2D Zombie Apocalypse survival game made in 48 hours for the McGame Jam 2020. The game is made using Unity3d with entirely custom assets.",
    tools: [
      {
        name: "C#",
        type: "language",
      },
      {
        name: "Unity3d",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "Unity3d",
        icon: <TaichiIcon />,
      },
    ],
    languages: [
      {
        name: "C#",
        icon: <DiJava />,
      },
    ],
    links: (
      <>
        <Flex>
          <Link href="https://gitlab.com/wenxuan27/mcgamejame2020">
            Repository
          </Link>
        </Flex>
      </>
    ),
  },
  {
    id: "pharmahacks-2019",
    name: "Pharmahacks 2019 (Winner)",
    image: <Image src="/pharmahacks_banner.png" alt="Norway" />,
    description: "",
    tools: [
      {
        name: "Python",
        type: "language",
      },
      {
        name: "numpy",
        type: "technology",
      },
      {
        name: "pandas",
        type: "technology",
      },
      {
        name: "scikit-learn",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "numpy",
        icon: <TaichiIcon />,
      },
      {
        name: "pandas",
        icon: <TaichiIcon />,
      },
      {
        name: "scikit-learn",
        icon: <TaichiIcon />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <SiPython />,
      },
    ],
    links: (
      <>
        <a href="https://github.com/karmabadger/looper-game">Github</a>
      </>
    ),
  },
  {
    id: "covid-twitter-web-scraper-and-analyzer",
    name: "COVID Twitter Web Scraper and Analyzer",
    image: (
      <Flex direction="row">
        <Image
          src="/covid_analysis_1.png"
          style={{
            flex: 1,
            height: "100%",
          }}
          alt="Norway"
        />
        <Image
          src="/covid_analysis_2.png"
          style={{
            flex: 1,
          }}
          alt="Norway"
        />
      </Flex>
    ),
    description:
      "A web scraper for Twitter that scrapes tweets related to COVID-19 and analyzes them using sentiment analysis. The scraper is implemented in Python using the Selenium library.",
    tools: [
      {
        name: "Python",
        type: "language",
      },
      {
        name: "pandas",
        type: "technology",
      },
      {
        name: "tweepy",
        type: "technology",
      },
      {
        name: "REST API",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "pandas",
        icon: <TaichiIcon />,
      },
      {
        name: "tweepy",
        icon: <TaichiIcon />,
      },
      {
        name: "REST API",
        icon: <TaichiIcon />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <SiPython />,
      },
    ],
    links: (
      <>
        <a href="https://github.com/karmabadger/covid-twitter-web-scraper-analysis">
          Github
        </a>
      </>
    ),
  },
  {
    id: "asb-web-scraper",
    name: "ASB Web Scraper",
    image: (
      <Image
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZCUyMGJvdCUyMHNlcnZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        height={160}
        width={320}
        alt="Norway"
      />
    ),
    description:
      "A web scraper for the ASB subreddit that scrapes posts and comments.",
    tools: [
      {
        name: "Python",
        type: "language",
      },
      {
        name: "praw",
        type: "technology",
      },
      {
        name: "REST API",
        type: "technology",
      },
      {
        name: "MongoDB",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "praw",
        icon: <TaichiIcon />,
      },
      {
        name: "REST API",
        icon: <TaichiIcon />,
      },
      {
        name: "MongoDB",
        icon: <TaichiIcon />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <SiPython />,
      },
    ],
    links: (
      <>
        <a href="https://github.com/karmabadger/ASB-reddit-scraper">Github</a>
      </>
    ),
  },
  {
    id: "ASB-admin-gui-app",
    name: "ASB Admin GUI App",
    image: (
      <Image
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZCUyMGJvdCUyMHNlcnZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        height={160}
        width={320}
        alt="Norway"
      />
    ),
    description:
      "A GUI app for the ASB subreddit that allows moderators to easily manage the subreddit.",
    tools: [
      {
        name: "JS",
        type: "language",
      },
      {
        name: "Python",
        type: "language",
      },
      {
        name: "electron.js",
        type: "technology",
      },
      {
        name: "Websockets",
        type: "technology",
      },
      {
        name: "praw",
        type: "technology",
      },
      {
        name: "express.js",
        type: "technology",
      },
      {
        name: "snoowrap.js",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "electron.js",
        icon: <SiElectron />,
      },
      {
        name: "Websockets",
        icon: <TaichiIcon />,
      },
      {
        name: "praw",
        icon: <TaichiIcon />,
      },
      {
        name: "express.js",
        icon: <SiExpress />,
      },
      {
        name: "snoowrap.js",
        icon: <TaichiIcon />,
      },
    ],
    languages: [
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
      {
        name: "Python",
        icon: <SiPython />,
      },
    ],
    links: (
      <>
        <a href="https://github.com/karmabadger/ASB-reddit-gui-admin-app">
          Github
        </a>
      </>
    ),
  },
  {
    id: "solidity parser",
    name: "Solidity Parser",
    image: (
      <Image
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZCUyMGJvdCUyMHNlcnZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        height={160}
        width={320}
        alt="Norway"
      />
    ),
    description:
      "A Lexer and Parser for Solidity, a programming language for Ethereum smart contracts made using Rust.",
    tools: [
      {
        name: "Rust",
        type: "language",
      },
    ],
    technologies: [],
    languages: [
      {
        name: "Rust",
        icon: <SiRust />,
      },
    ],
  },
  {
    id: "tictactoe-solidity-on-the-blockchain",
    name: "TicTacToe on the Blockchain",
    image: (
      <Image
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZCUyMGJvdCUyMHNlcnZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        height={160}
        width={320}
        alt="Norway"
      />
    ),
    description:
      "A TicTacToe game made using Solidity, a programming language for Ethereum smart contracts.",
    tools: [
      {
        name: "Solidity",
        type: "language",
      },
      {
        name: "Web3.js",
        type: "technology",
      },
      {
        name: "react.js",
        type: "technology",
      },
      {
        name: "Node.js",
        type: "technology",
      },
      {
        name: "Material UI",
        type: "technology",
      },
      {
        name: "hardhat",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "Web3.js",
        icon: <SiWebmoney />,
      },
      {
        name: "react.js",
        icon: <SiReact />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
      },
      {
        name: "Material UI",
        icon: <SiMui />,
      },
      {
        name: "hardhat",
        icon: <SiProtools />,
      },
    ],
    languages: [
      {
        name: "Solidity",
        icon: <SiSolidity />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
      },
    ],
    links: (
      <>
        <Flex direction="column">
          <Link href="https://elegant-cray-fd9218.netlify.app/">
            Try out the Game Yourself!
          </Link>
          <Link href="https://github.com/catmaxi/tictactoe-solidity-frontend">
            Frontend Repository
          </Link>
          <Link href="https://github.com/catmaxi/tictactoe-solidity">
            Smart Contracts Repository
          </Link>
        </Flex>
      </>
    ),
  },
  {
    id: "marketplace-web-app-django",
    name: "Marketplace Web App using Django",
    image: (
      <Image
        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZCUyMGJvdCUyMHNlcnZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        height={160}
        width={320}
        alt="Norway"
      />
    ),
    description:
      "A marketplace web app made using Django, a Python web framework.",
    tools: [
      {
        name: "Django",
        type: "technology",
      },
      {
        name: "Python",
        type: "language",
      },
      {
        name: "Redis",
        type: "technology",
      },
      {
        name: "channels",
        type: "technology",
      },
      {
        name: "selenium",
        type: "technology",
      },
      {
        name: "REST API",
        type: "technology",
      },
      {
        name: "MySQL",
        type: "technology",
      },
      {
        name: "SQL",
        type: "language",
      },
    ],
    technologies: [
      {
        name: "Django",
        icon: <SiDjango />,
      },
      {
        name: "Redis",
        icon: <SiRedis />,
      },
      {
        name: "channels",
        icon: <SiDjango />,
      },
      {
        name: "selenium",
        icon: <SiSelenium />,
      },
      {
        name: "REST API",
        icon: <SiPostman />,
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <SiPython />,
      },
      {
        name: "SQL",
        icon: <SiMysql />,
      },
    ],
    links: (
      <>
        <Flex direction="column">
          <Link href="https://github.com/karmabadger/marketplace-web-app-django">
            Repository
          </Link>
        </Flex>
      </>
    ),
  },
  {
    id: "dosbox-asm-delauney-triangulation",
    name: "DOSBox ASM Delauney Triangulation",
    image: <Image src="/delauney_banner.png" alt="Norway" />,
    description:
      "A Delauney Triangulation implementation in x86 Assembly for DOSBox.",
    tools: [
      {
        name: "x86 Assembly",
        type: "language",
      },
      {
        name: "DOSBox",
        type: "technology",
      },
      {
        name: "TASM",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "DOSBox",
        icon: <TaichiIcon />,
      },
      {
        name: "TASM",
        icon: <TaichiIcon />,
      },
    ],
    languages: [
      {
        name: "Assembly",
        icon: <SiSolidity />,
      },
    ],
    links: (
      <>
        <Flex direction="column">
          <Link href="">Repository</Link>
        </Flex>
      </>
    ),
  },
  //   {
  //     id: "custom-discord-command-rpc-bot-server",
  //     name: "Custom Discord Command RPC Bot Server",
  //     description: "Creating a custom RPC server for Discord bots",
  //     image: (
  //       <Image
  //         src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZCUyMGJvdCUyMHNlcnZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
  //         height={160}
  //         width={320}
  //         alt="Norway"
  //       />
  //     ),
  //     tools: [
  //       {
  //         name: "Rust",
  //         type: "language",
  //       },
  //       {
  //         name: "TS",
  //         type: "language",
  //       },
  //       {
  //         name: "Node.js",
  //         type: "technology",
  //       },
  //       {
  //         name: "GRPC",
  //         type: "technology",
  //       },
  //       {
  //         name: "discord.js",
  //         type: "technology",
  //       },
  //       {
  //         name: "Tokio",
  //         type: "technology",
  //       },
  //       {
  //         name: "TCP",
  //         type: "technology",
  //       },
  //       {
  //         name: "websockets",
  //         type: "technology",
  //       },
  //     ],
  //     technologies: [

  //   },
];

export { data, type ProjectCardProps };
