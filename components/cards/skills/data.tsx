import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiRust,
  SiSolidity,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiDjango,
  SiElectron,
  SiDocker,
  SiMongodb,
  SiGraphql,
  SiPostgresql,
  SiChakraui,
  SiMui,
  SiSharp,
  SiAssemblyscript,
  SiMysql,
  SiRedis,
  SiPhp,
} from "react-icons/si";
import { DiJava, DiRust } from "react-icons/di";
import {
  CIcon,
  CPlusPlusIcon,
  CSharpIcon,
  JavaIcon,
  PythonIcon,
  SharpjsIcon,
  TaichiIcon,
  TokioIcon,
  UnityIcon,
  WebsocketIcon,
} from "@/components/icons";
import { Image } from "@mantine/core";
import { FaHardHat } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { TbBrandMantine } from "react-icons/tb";
import { BsFillPencilFill } from "react-icons/bs";

type Language = {
  name: string;
  icon: React.ReactNode;
};

type Technology = {
  name: string;
  icon: React.ReactNode;
};

const techIconSize = 25;

const languagesData: Language[] = [
  {
    name: "Rust",
    icon: <SiRust size={techIconSize} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={techIconSize} color="#007ACC" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={techIconSize} color="#F7DF1E" />,
  },
  {
    name: "Java",
    icon: <JavaIcon size={techIconSize} />,
  },
  {
    name: "Python",
    icon: <PythonIcon size={techIconSize} />,
  },
  {
    name: "Solidity",
    icon: <SiSolidity size={techIconSize} />,
  },
  {
    name: "C#",
    icon: <CSharpIcon size={techIconSize} />,
  },
  {
    name: "C",
    icon: <CIcon size={techIconSize} />,
  },
  {
    name: "C++",
    icon: <CPlusPlusIcon size={techIconSize} />,
  },
  {
    name: "x86 Assembly",
    icon: <SiAssemblyscript size={techIconSize} color="#007ACC" />,
  },
  {
    name: "PHP",
    icon: <SiPhp size={techIconSize} color="#777BB4" />,
  },
];

const technologiesData: Technology[] = [
  {
    name: "Node.js",
    icon: <SiNodedotjs size={techIconSize} color="#339933" />,
  },
  {
    name: "Fastify.js",
    icon: <SiFastify size={techIconSize} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={techIconSize} color="#339933" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={techIconSize} />,
  },
  {
    name: "Actix Web",
    icon: <SiRust size={techIconSize} />,
  },
  {
    name: "Tokio",
    icon: <TokioIcon size={techIconSize} />,
  },
  {
    name: "React",
    icon: <SiReact size={techIconSize} color="#61DAFB" />,
  },
  {
    name: "Unity3D",
    icon: <UnityIcon size={techIconSize} />,
  },
  {
    name: "Electron.js",
    icon: <SiElectron size={techIconSize} color="#47848F" />,
  },
  {
    name: "Docker",
    icon: <SiDocker size={techIconSize} color="#2496ED" />,
  },
  {
    name: "Foundry",
    icon: (
      <Image
        src="/foundry_icon.png"
        height={techIconSize}
        width={techIconSize}
        alt="Foundry Icon"
      />
    ),
  },
  {
    name: "Hardhat",
    icon: <FaHardHat size={techIconSize} color="#F7DF1E" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={techIconSize} color="#47A248" />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql size={techIconSize} color="#E10098" />,
  },
  {
    name: "REST API",
    icon: <AiTwotoneSetting size={techIconSize} color="pink" />,
  },
  {
    name: "Websockets",
    icon: <WebsocketIcon size={techIconSize} color="#FF4300" />,
  },
  {
    name: "Chakra UI",
    icon: <SiChakraui size={techIconSize} color="#319795" />,
  },
  {
    name: "Mantine UI",
    icon: <TbBrandMantine color="#339af0" size={techIconSize} />,
  },
  {
    name: "Material UI",
    icon: <SiMui size={techIconSize} color="#0081CB" />,
  },
  {
    name: "SharpJS",
    icon: <SharpjsIcon size={techIconSize} />,
  },
  {
    name: "Jimp.js",
    icon: <BsFillPencilFill size={techIconSize} color="red" />,
  },
  {
    name: "Django",
    icon: <SiDjango size={techIconSize} />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={techIconSize} color="#4479A1" />,
  },
  {
    name: "Redis",
    icon: <SiRedis size={techIconSize} color="#DC382D" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={techIconSize} color="#336791" />,
  },
  {
    name: "Ethers.js",
    icon: (
      <Image
        src="/ethers_icon.png"
        height={techIconSize - 5}
        width={techIconSize}
        alt="Ethers.js Icon"
      />
    ),
  },
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
    name: "OpenGL",
    icon: (
      <Image
        src="/opengl_icon.png"
        height={techIconSize}
        width={techIconSize}
        alt="OpenGL Icon"
      />
    ),
    
  },
  {
    name: "p5.js",
    icon: (
      <Image
        src="/p5js_icon.png"
        height={techIconSize}
        width={techIconSize}
        alt="p5.js Icon"
      />
    ),
  },
  {
    name: "Taichi",
    icon: <TaichiIcon size={techIconSize} />,
  },
];

export { languagesData, technologiesData };
