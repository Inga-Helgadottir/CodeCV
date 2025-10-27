import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";
import Section from "../PageParts/Section";

const MyExperience = () => {
  const [Experience, setExperience] = useState("");

  useEffect(() => {
    localStorage.setItem("chosenNavElement", 2);
    const ExperienceHeadingsAndParagraphs = getText(
      "ExperienceHeadingsAndParagraphs"
    );

    setExperience(ExperienceHeadingsAndParagraphs);
  }, []);

  return <Section option={Experience} />;
};

export default MyExperience;
