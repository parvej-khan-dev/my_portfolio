import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, ExternalLinks } from "./HeroStyles";
import useDownloader from "react-use-downloader";
const Hero = () => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/resume/resume.pdf";
  const filename = "resume.pdf";

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText style={{ paddingBottom: 0 }}>
            The purpose of this portfolio website is to quickly become familiar
            with my few projects and general information about me. <br />
            Access contact links for more details and a possible collaboration.
          </SectionText>
          {/*<Button onClick={props.handleClick}>Learn More</Button>*/}

          <ExternalLinks
            href="/resume/resume.pdf"
            download="/resume/resume.pdf"
            className="link-to"
            title="download resume "
          >
            Download Resume
          </ExternalLinks>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
