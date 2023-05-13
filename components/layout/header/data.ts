type NavbarLink = {
  href: string;
  label: string;
  name: string;
};

const links: NavbarLink[] = [
  {
    href: "/",
    label: "Home",
    name: "home",
  },
  {
    href: "/projects",
    label: "Projects",
    name: "projects",
  },
  {
    href: "/skills",
    label: "Skills",
    name: "skills",
  },
  {
    href: "/experience",
    label: "Experience",
    name: "experience",
  },
  {
    href: "/education",
    label: "Education",
    name: "education",
  },
  {
    href: "/contact",
    label: "Contact",
    name: "contact",
  },
];

export { links, type NavbarLink };
