import { Image } from "@mantine/core";

type EducationDataProps = {
  id: string;
  degreeData: DegreeData;
  courses?: Course[];
};

type DegreeData = {
  school: string;
  degree: string;
  major: string;
  minors?: string[];
  time: string;
  link?: string;
  image: React.ReactNode;
};

type Course = {
  id: string;
  title: string;
  description: string;
  link?: string;
};

const data: EducationDataProps[] = [
  {
    id: "mcgill-university-bachelor-of-science",
    degreeData: {
      school: "McGill University",
      degree: "Bachelor of Science",
      major: "Computer Science",
      time: "2019 - 2022",
      link: "https://www.mcgill.ca/",
      image: (
        <Image
          src="/mcgill_banner_2x.jpg"
          height={400}
          alt="Mcgill Banner"
          //   fit="contain"
          radius=""
        />
      ),
    },
    courses: [
      {
        id: "comp-520",
        title: "Compiler Design",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-520",
      },
      {
        id: "comp-521",
        title: "Computer Games",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-521",
      },
      {
        id: "comp-551",
        title: "Applied Machine Learning",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-551",
      },
      {
        id: "comp-557",
        title: "Computer Graphics",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-557",
      },
      {
        id: "comp-559",
        title: "Computer Animation",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-559",
      },
      {
        id: "comp-558",
        title: "Computer Vision",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-558",
      },
      {
        id: "comp-330",
        title: "Theory of Computation",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-330",
      },
      {
        id: "comp-251",
        title: "Data Structures and Algorithms",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-251",
      },
      {
        id: "comp-360",
        title: "Algorithm Design",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-360",
      },
      {
        id: "comp-451",
        title: "Database Design",
        description: "",
      },
      {
        id: "comp-350",
        title: "Numerical Computing",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-350",
      },
      {
        id: "comp-409",
        title: "Parallel Computing",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-409",
      },
      {
        id: "comp-521",
        title: "Computer Games",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-521",
      },
      {
        id: "comp-598",
        title: "Introduction to Data Science",
        description: "",
      },
      {
        id: "comp-250",
        title: "Intro to Computer Science",
        description:
          "Introduction to computer science and programming. Topics include: fundamental programming constructs (procedures, loops, conditionals, recursion) and data structures (lists, trees, stacks, queues, sets) basic algorithmic analysis, and an introduction to the principles of object-oriented programming.",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-250",
      },
      {
        id: "comp-206",
        title: "Intro to Software Systems",
        description:
          "Introduction to software systems, their underlying principles, and their application. Topics include: Unix, programming tools (editors, compilers, makefiles, debuggers, profilers), elementary software design principles, data structures, and basic algorithms.",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-206",
      },
      {
        id: "comp-273",
        title: "Intro to Computer Systems",
        description:
          "Introduction to computer systems, their underlying principles, and their application. Topics include: Unix, programming tools (editors, compilers, makefiles, debuggers, profilers), elementary software design principles, data structures, and basic algorithms.",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-273",
      },
      {
        id: "comp-302",
        title: "Programming Languages and Paradigms",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-302",
      },
      {
        id: "comp-303",
        title: "Software Development",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/comp-303",
      },
      {
        id: "math-240",
        title: "Discrete Structures",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/math-240",
      },
      {
        id: "math-340",
        title: "Discrete Structures II",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/math-340",
      },
      {
        id: "math-323",
        title: "Probability",
        description: "",
        link: "https://www.mcgill.ca/study/2021-2022/courses/math-323",
      },
    ],
  },
  {
    id: "John-Abbott-College",
    degreeData: {
      school: "John Abbott College",
      degree: "DEC",
      major: "Arts and Science",
      time: "2017 - 2019",
      link: "https://www.johnabbott.qc.ca/",
      image: (
        <Image
          src="/johnabbott_banner.webp"
          alt="John Abbott College Banner"
          height={400}
        />
      ),
    },
  },
];

export { data, type EducationDataProps, type DegreeData };
