import React from "react";
import { FilterContainer, Button, FilterHeading } from "./ProjectsFilterStyles";
import { SiReact, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

const ProjectsFilter = ({ filter, filterBy }) => (
  <section>
    <FilterHeading>
      Filtered by: <b>{filterBy}</b>
    </FilterHeading>
    <FilterContainer>
      <Button
        type="button"
        className={filterBy === "All" ? "active" : null}
        aria-label="Filter by All"
        onClick={() => filter("All")}
      >
        All
      </Button>
      {/* <Button
        type="button"
        className={filterBy === "JavaScript" ? "active" : null}
        aria-label="Filter by JS"
        onClick={() => filter("javascript")}
      >
        <SiJavascript />
      </Button> */}
      <Button
        type="button"
        className={filterBy === "React" ? "active" : null}
        aria-label="Filter by ReactJS"
        onClick={() => filter("react")}
      >
        <SiReact /> <span style={{ marginLeft: "0.5rem" }}>React</span>
      </Button>
      <Button
        type="button"
        className={filterBy === "Nodejs" ? "active" : null}
        aria-label="Filter by Nodejs"
        onClick={() => filter("Nodejs")}
      >
        <FaNodeJs /> <span style={{ marginLeft: "0.5rem" }}>Nodejs</span>
      </Button>
      <Button
        type="button"
        className={filterBy === "NextJS" ? "active" : null}
        aria-label="Filter by NextJS"
        onClick={() => filter("NextJS")}
      >
        <FaNodeJs /> <span style={{ marginLeft: "0.5rem" }}>NextJS</span>
      </Button>
    </FilterContainer>
  </section>
);

export default ProjectsFilter;
