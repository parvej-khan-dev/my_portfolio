import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub,FaLink } from "react-icons/fa";
import {
  Button,
  CardInfo,
  HeaderThree,
  PictureImg,
  Picture,
  Hr,
  ImgContainer,
  Tag,
  TagList,
  TitleContent,
} from "./CardStyles";
import { BsPlusCircleFill } from "react-icons/bs";
import ProjectModal from "../Modal/ProjectModal";
import Link from "next/link";

const variants = {
  pageInitial: {
    opacity: 0,
    scale: 0.5,
  },
  pageAnimate: {
    opacity: 1,
    scale: 1,
  },
  pageExit: {
    opacity: 0,
    scale: 0.5,
  },
};

const ProjectCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const toggleModal = () => setIsOpen(!isOpen);

  const {
    title,
    description,
    tags,
    image,
    imageWebp,
    images,
    github,
    live_link,
  } = item;
  console.log(item, "item");
  return (
    <motion.div
      key={title}
      className="project-card"
      layout
      initial="pageInitial"
      animate="pageAnimate"
      variants={variants}
      transition={{ type: "tween" }}
    >
      <ImgContainer>
        <Picture>
          <source srcSet={imageWebp} type="image/webp" />
          <PictureImg src={image} alt={title} />
        </Picture>

        <Button
          type="button"
          aria-label="Open Project Gallery in a modal window"
          onClick={openModal}
        >
          <BsPlusCircleFill />
        </Button>
        <ProjectModal
          isOpen={isOpen}
          toggleModal={toggleModal}
          title={title}
          images={images}
        />
      </ImgContainer>
      <TitleContent>
        <HeaderThree title>{title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo className="card-info">
        {description.substr(0, 227)}...{" "}
      </CardInfo>
      <div className="card-footer">
        <TitleContent style={{ marginTop: "20px" }}>
          <b>Stack</b>
        </TitleContent>
        <TagList>
          {tags.map((t, i) => {
            return <Tag key={i}>{t}</Tag>;
          })}
        </TagList>
        <TitleContent style={{ marginTop: "20px" }}>
          <b>Check Project Live </b>
        </TitleContent>
        <TagList>
          <Tag style={{ marginRight: "20px" }}>
          
            {github ? (
              <a href={github} target="_blank">
               <FaGithub />   Github
              </a>
            ) : (
              "N/A"
            )}
           
          </Tag>


          
          <Tag style={{ marginRight: "20px" , justifyContent:"space-around"}}>
         
          {live_link ? (
              <a href={live_link} target="_blank">
               <FaLink />  Live
              </a>
            ) : (
              "N/A"
            )}
           
          </Tag>
        </TagList>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
