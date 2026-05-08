import { getText } from "../GetCurrentLanguage";
import { useEffect, useState } from "react";
import "../../Styles/AboutMe.css";

const AboutMe = (currentLanguage) => {
  const [aboutMe, setAboutMe] = useState({ heading: "", paragraphs: [] });

  useEffect(() => {
    localStorage.setItem("chosenNavElement", 1);

    async function loadText() {
      let AboutMeHeadingAndParagraph = getText("AboutMeHeadingAndParagraph");
      setAboutMe({
        heading: AboutMeHeadingAndParagraph.heading,
        paragraphs: AboutMeHeadingAndParagraph.paragraphs,
      });
    }
    loadText();
  }, [currentLanguage]);

  return (
    <section className="section aboutMeSection">
      <h3 id="aboutMeHeading">{aboutMe.heading}</h3>
      {aboutMe.paragraphs?.map((paragraph, key) => {
        return <p key={key}>{paragraph}</p>;
      })}
    </section>
  );
};

export default AboutMe;
