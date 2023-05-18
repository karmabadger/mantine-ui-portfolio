import React from "react";
import {
  SiAssemblyscript,
  SiDjango,
  SiElectron,
  SiExpress,
  SiJavascript,
  SiMongodb,
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
import { Box, Card, Center, Flex, Image, ThemeIcon } from "@mantine/core";

import { DiJava } from "react-icons/di";
import Link from "next/link";

import CSharpIcon from "@/components/icons/CSharpIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import UnityIcon from "@/components/icons/UnityIcon";
import CIcon from "@/components/icons/CIcon";
import {
  JavaIcon,
  NumpyIcon,
  PandasIcon,
  ScikitLearnIcon,
  TokioIcon,
  WebsocketIcon,
} from "@/components/icons";
import {
  AiOutlineReddit,
  AiOutlineTwitter,
  AiTwotoneSetting,
} from "react-icons/ai";
import { BsReddit } from "react-icons/bs";
import { FaHardHat } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";

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

const techIconSize = 25;
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
        icon: <TaichiIcon size={techIconSize} />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <PythonIcon size={techIconSize} />,
      },
    ],
    links: (
      <>
        <Link href="https://github.com/karmabadger/2d-softbody-simulations">
          Github
        </Link>
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
      "A hypercasual mobile game for Android made using Unity3d with custom assets made from scratch.",
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
        icon: <UnityIcon size={techIconSize} />,
      },
    ],
    languages: [
      {
        name: "C#",
        icon: (
          <Center>
            <CSharpIcon size={techIconSize} />
          </Center>
        ),
      },
    ],
    links: (
      <>
        <Flex direction="column" gap={10}>
          <Link href="https://looper.bumpystudio.xyz/">
            Click here to try it out on your browser!
          </Link>
          <Link href="https://gitlab.com/wenxuan27/looper-game">
            Repository
          </Link>
        </Flex>
      </>
    ),
  },
  {
    id: "repo-d",
    name: "Repo-Daemon (WIP)",
    image: <Image src="/ferris_banner.png" alt="Ferris Banner" />,
    description:
      "A simple command line daemon that listen for git events and webhook events and automatically updates, build and deploys code from a git repository on a remote server. Work in progress.",
    tools: [
      {
        name: "Rust",
        type: "language",
      },
      {
        name: "Tokio",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "Tokio",
        icon: <TokioIcon size={techIconSize} />,
      },
    ],
    languages: [
      {
        name: "Rust",
        icon: <SiRust size={techIconSize} />,
      },
    ],
    links: (
      <>
        <Flex direction="column" gap={10}>
          <Link href="">Repository</Link>
        </Flex>
      </>
    ),
  },
  {
    id: "c-lite-compiler",
    name: "C-Lite Compiler",
    image: <Image src="/java_banner.png" alt="Java Banner" />,
    description:
      "A compiler for a subset of the C programming language. The compiler is implemented in Java using a custom visitor design pattern. The compiler generates MIPS assembly code that can be run on the Mars MIPS simulator.",
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
    technologies: [
      {
        name: "Mars MIPS Simulator",
        icon: <JavaIcon size={techIconSize} />,
      },
    ],
    languages: [
      {
        name: "Java",
        icon: <JavaIcon size={techIconSize} />,
      },
      {
        name: "C",
        icon: <CIcon size={techIconSize} />,
      },
      {
        name: "MIPS Assembly",
        icon: <SiAssemblyscript size={techIconSize} color="#007ACC" />,
      },
    ],
    // links: <>{/* <a href="">Github</a> */}</>,
  },
  {
    id: "mcgame-jam-2020",
    name: "McGame Jam 2020",
    image: (
      <Image src="mcgamejam2020_banner.png" alt="McGame Jam 2020 Banner" />
    ),
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
        icon: <UnityIcon size={techIconSize} />,
      },
    ],
    languages: [
      {
        name: "C#",
        icon: <CSharpIcon size={techIconSize} />,
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
    id: "smolsweep",
    name: "Smolsweep",
    description: "An NFT marketplace Aggregator.",
    image: (
      <Image src="/smolsweepv0_banner.png" alt="Smolsweep Project Banner" />
    ),
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
        icon: <NumpyIcon size={techIconSize} />,
      },
      {
        name: "pandas",
        icon: <PandasIcon size={techIconSize} />,
      },
      {
        name: "scikit-learn",
        icon: <ScikitLearnIcon size={techIconSize} />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <PythonIcon size={techIconSize} />,
      },
    ],
    links: (
      <>
        <Flex>
          <Link href="https://github.com/karmabadger/Pharmahacks2019">
            Github
          </Link>
        </Flex>
      </>
    ),
  },
  {
    id: "pharmahacks-2019",
    name: "Pharmahacks 2019 (Winner)",
    image: <Image src="/pharmahacks_banner.png" alt="Pharmahacks Banner" />,
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
        icon: <NumpyIcon size={techIconSize} />,
      },
      {
        name: "pandas",
        icon: <PandasIcon size={techIconSize} />,
      },
      {
        name: "scikit-learn",
        icon: <ScikitLearnIcon size={techIconSize} />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <PythonIcon size={techIconSize} />,
      },
    ],
    links: (
      <>
        <Flex>
          <Link href="https://github.com/karmabadger/Pharmahacks2019">
            Github
          </Link>
        </Flex>
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
        icon: <PandasIcon size={techIconSize} />,
      },
      {
        name: "tweepy",
        icon: <AiOutlineTwitter color="#1DA1F2" size={techIconSize} />,
      },
      {
        name: "REST API",
        icon: <AiTwotoneSetting color="pink" size={techIconSize} />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <PythonIcon size={techIconSize} />,
      },
    ],
    links: (
      <>
        <Link href="https://github.com/karmabadger/covid-twitter-web-scraper-analysis">
          Github
        </Link>
      </>
    ),
  },
  {
    id: "reddit-web-scraper",
    name: "Reddit Web Scraper",
    image: <Image src="/reddit_banner.png" alt="Reddit Banner" />,
    description:
      "A web scraper for the ASB subreddit that scrapes posts and comments. The scraper is implemented in Python using the Selenium library and the Praw library and stores the data in a MongoDB database.",
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
        icon: <AiOutlineReddit size={techIconSize} color="#FF4300" />,
      },
      {
        name: "REST API",
        icon: <AiTwotoneSetting color="pink" size={techIconSize} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={techIconSize} color="#13AA52" />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <PythonIcon size={techIconSize} />,
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
    name: "Subreddit Admin GUI App",
    image: <Image src="/reddit_banner.png" alt="Reddit Banner" />,
    description:
      "A GUI app for the ASB subreddit that allows moderators to easily manage the subreddit. Built using electron.js and express.js with a REST API backend Python script using Praw.",
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
        icon: <SiElectron size={techIconSize} color="#9FEAF9" />,
      },
      {
        name: "Websockets",
        icon: <WebsocketIcon size={techIconSize} color="#FF4300" />,
      },
      {
        name: "praw",
        icon: <AiOutlineReddit size={techIconSize} color="#FF4300" />,
      },
      {
        name: "express.js",
        icon: <SiExpress size={techIconSize} color="#3C873A" stroke="100" />,
      },
      {
        name: "snoowrap.js",
        icon: <AiOutlineReddit size={techIconSize} color="#FF4300" />,
      },
    ],
    languages: [
      {
        name: "JavaScript",
        icon: <SiJavascript size={techIconSize} color="#F7DF1E" />,
      },
      {
        name: "Python",
        icon: <PythonIcon size={techIconSize} />,
      },
    ],
    links: (
      <>
        <Link href="https://github.com/karmabadger/ASB-reddit-gui-admin-app">
          Github
        </Link>
      </>
    ),
  },
  {
    id: "solidity parser",
    name: "Solidity Parser",
    image: <Image src="ferris_banner.png" alt="Rust Banner" />,
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
        icon: <SiRust size={techIconSize} />,
      },
      {
        name: "Solidity",
        icon: <SiSolidity size={techIconSize} />,
      },
    ],
  },
  {
    id: "tictactoe-solidity-on-the-blockchain",
    name: "TicTacToe on the Blockchain",
    image: <Image src="/tictactoe_banner.png" alt="Tictactoe Banner" />,
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
        icon: (
          <Image
            src="/web3js_icon.png"
            height={techIconSize}
            width={techIconSize}
            alt="Web3.js Icon"
          />
        ),
      },
      {
        name: "react.js",
        icon: <SiReact size={techIconSize} color="#61DAFB" />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs size={techIconSize} color="#339933" />,
      },
      {
        name: "Material UI",
        icon: <SiMui size={techIconSize} color="#0081CB" />,
      },
      {
        name: "hardhat",
        icon: <FaHardHat size={techIconSize} color="#F7DF1E" />,
      },
    ],
    languages: [
      {
        name: "Solidity",
        icon: <SiSolidity size={techIconSize} />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={techIconSize} color="#F7DF1E" />,
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
    image: <Image src="/django_banner.webp" alt="Django Banner" />,
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
        icon: <SiDjango size={techIconSize} color="black" />,
      },
      {
        name: "Redis",
        icon: <SiRedis size={techIconSize} color="#D82C20" />,
      },
      {
        name: "Websocket",
        icon: <WebsocketIcon size={techIconSize} color="#FF4300" />,
      },
      {
        name: "selenium",
        icon: <SiSelenium size={techIconSize} color="#43B02A" />,
      },
      {
        name: "REST API",
        icon: <AiTwotoneSetting color="pink" size={techIconSize} />,
      },
      {
        name: "MySQL",
        icon: <TbBrandMysql size={techIconSize} color="#4479A1" />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <PythonIcon size={techIconSize} />,
      },
      {
        name: "SQL",
        icon: <TbBrandMysql size={techIconSize} color="#4479A1" />,
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
        icon: (
          <Image
            src="/DOSBox_icon.png"
            height={techIconSize}
            alt="DOSBox Icon"
          />
        ),
      },
      {
        name: "TASM",
        icon: (
          <Image
            src="/DOSBox_icon.png"
            height={techIconSize}
            alt="DOSBox Icon"
          />
        ),
      },
    ],
    languages: [
      {
        name: "Assembly",
        icon: <SiAssemblyscript size={techIconSize} color="#4479A1" />,
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
