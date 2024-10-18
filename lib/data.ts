import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bdygif from "@/public/bdy.gif";
import yoomImg from "@/public/yoom_home.png";
import node_backendImg from "@/public/node.png";

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
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Online",
    description:
      "I graduated after 8 months of studying. I immediately found a job as a back-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Back-End Developer",
    location: "Hyderabad, IN",
    description:
      "I worked as a back-end developer for 1 year. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Mohali, Punjab, IN",
    description:
      "I'm now a full-stack developer working as a software developer at Seraphic Infosolutions. My stack includes React, Next.js, TypeScript, Tailwind, Nodejs and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Blood Donation App",
    description:
      "The app aims to facilitate the process of connecting blood donors with individuals in need of blood in their nearby locality.",
    tags: ["React.js", "Node.js", "Tailwind", "Javascript", "MongoDB"],
    imageUrl: bdygif,
    link: "https://blood-budy.vercel.app",
  },
  {
    title: "Yoom",
    description:
      "Yoom - a cutting-edge video conferencing web application that redefines virtual collaboration. Built with the powerful NextJS framework.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Redux",
      "Clerk",
      "StreamKit",
    ],
    imageUrl: yoomImg,
    link: "https://zoom-clone-dev.vercel.app/",
  },
  {
    title: "Spam Detection API",
    description:
      "The API allows users to register, mark phone numbers as spam, search for contacts by name or phone number, and view contact details along with spam likelihood.",
    tags: ["Node.js", "Typescript.js", "SQL", "Express.js", "Sequelize", "JWT"],
    imageUrl: node_backendImg,
    link: "https://github.com/parvej-khan-dev/tc_backend",
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
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "C++",
] as const;
