import { getText } from "../GetCurrentLanguage";
import { useEffect, useState } from "react";
import Gallery from "../PageParts/Gallery";

const AboutMe = () => {
  const [AboutMe, setAboutMe] = useState({ heading: "", paragraphs: [] });

  useEffect(() => {
    async function loadText() {
      const AboutMeHeadingAndParagraph = await getText(
        "AboutMeHeadingAndParagraph"
      );
      setAboutMe({
        heading: AboutMeHeadingAndParagraph.heading,
        paragraphs: AboutMeHeadingAndParagraph.paragraphs,
      });
    }
    loadText();
  }, []);

  return (
    <section className="section">
      <h3>{AboutMe.heading}</h3>
      {AboutMe.paragraphs?.map((paragraph, key) => {
        return <p key={key}>{paragraph}</p>;
      })}
      <Gallery />
    </section>
  );
};

export default AboutMe;
