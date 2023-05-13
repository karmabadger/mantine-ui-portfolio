import Image from "next/image";
import React from "react";
import { SiPython } from "react-icons/si";

import TaichiIcon from "@/components/icons/TaichiIcon";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  technologies: {
    name: string;
    icon: React.ReactNode;
  }[];
  languages: {
    name: string;
    icon: React.ReactNode;
  }[];
  link?: string;
};

const data = [
  {
    id: "soft-body-simulation",
    title: "Soft Body Simulation",
    description:
      "A soft body simulation using a mass-spring system. The simulation is implemented in Python using Taichi.",
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
    link: "something.io",
  },
];

export { data, type ProjectCardProps };
