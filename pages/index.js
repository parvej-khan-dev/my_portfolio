import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { Analytics } from "@vercel/analytics/react"

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Parvej khan - Developer, Tech Enthusiast, Problem Solver, Mern Stack Developer,"
      description="I've been working as a full-stack developer for the past two years, specializing in JavaScript, Node.js, React, and TypeScript. My journey into web development began out of a love for creating impactful applications, and today, I take pride in building solutions that help businesses scale and innovate"
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
      <Analytics />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
