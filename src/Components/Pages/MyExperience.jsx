import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";
import Section from "../PageParts/Section";

const MyExperience = (currentLanguage) => {
  const [experience, setExperience] = useState("");

  useEffect(() => {
    localStorage.setItem("chosenNavElement", 2);
    let ExperienceHeadingsAndParagraphs = getText(
      "ExperienceHeadingsAndParagraphs",
    );

    setExperience(ExperienceHeadingsAndParagraphs);
  }, [currentLanguage]);

  return <Section option={experience} />;
};

export default MyExperience;
