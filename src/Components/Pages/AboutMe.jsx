import "../../Styles/AboutMe.css";
import Section from "../PageParts/Section";
import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";

const AboutMe = ({ currentLanguage, setCurrentPage }) => {
  const [aboutMe, setAboutMe] = useState({ heading: "", paragraphs: [] });

  useEffect(() => {
    localStorage.setItem("chosenNavElement", 1);
    setCurrentPage(1);

    async function loadText() {
      let AboutMeHeadingAndParagraph = getText("AboutMeHeadingAndParagraph");
      setAboutMe(AboutMeHeadingAndParagraph);
    }
    loadText();
  }, [currentLanguage, setCurrentPage]);

  return <Section option={aboutMe} />;
};

export default AboutMe;
