import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { DiJava, DiRust } from "react-icons/di";

type Language = {
  name: string;
  icon: React.ReactNode;
};

type Technology = {
  name: string;
  icon: React.ReactNode;
};

const languagesData: Language[] = [
  {
    name: "TypeScript",
    icon: <SiTypescript size="1.5rem" />,
  },
  {
    name: "Rust",
    icon: <DiRust size="1.5rem" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size="1.5rem" />,
  },
  {
    name: "Python",
    icon: <SiPython size="1.5rem" />,
  },
  {
    name: "Java",
    icon: <DiJava size="1.5rem" />,
  },
];

const technologiesData: Technology[] = [
  {
    name: "React",
    icon: <SiReact size="1.5rem" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size="1.5rem" />,
  },
];

export { languagesData, technologiesData };
