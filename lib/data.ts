import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import visualdynamicsImg from "@/assets/visualdynamics.png";
import plasmoqsarImg from "@/assets/plasmoqsar.png";
import plasmoiaImg from "@/assets/plasmoia.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  }
] as const;

export const experiencesData = [
  {
    title: "BSc. in Computer Science",
    location: "Porto Velho, RO",
    description:
      "4 years are not 4 months. Here I learned how computers really work, how those boxes of aluminum and silica do the things I love the most. During this, I've met many people and various professors that helped to shape me to who I am today. That is also where things started to get fun, with research and development projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Porto Velho, RO",
    description:
      "I started to work with Fiocruz on Visual Dynamics, a web platform to help researchers with GROMACS simulations. Here I had to learn everything, from work in a corporate manner to DevOps. It is still a project I am involved.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Senior IT Technical Developer 1",
    location: "Remote",
    description:
      "I have started working on a project that aims to digitalize and improve the overall processes that run through a city.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Visual Dynamics",
    description:
      "Web Platform made for automating GROMACS simulations.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma", "Flask", "Celery", "GROMACS"],
    imageUrl: visualdynamicsImg,
  },
  {
    title: "PlasmoQSAR",
    description:
      "A web application that calculates the pEC50 value (and EC50%) against Plasmodium Falciparum.",
    tags: ["React", "Next.js", "Nest.js", "PostgreSQL", "Mantine", "Prisma", "Mold2", "BullMQ"],
    imageUrl: plasmoqsarImg,
  },
  {
    title: "PlasmoIA",
    description:
      "A web application that uses AI to identify if a cell is infected with Plasmodium Falciparum.",
    tags: ["React", "Next.js", "PostgreSQL", "Mantine", "Prisma", "FastAPI"],
    imageUrl: plasmoiaImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MobX",
  "MobX State Tree",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Framer Motion",
] as const;
