import Section from "../PageParts/Section";
import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";

const MyExperience = ({ currentLanguage, setCurrentPage }) => {
  const [experience, setExperience] = useState("");

  useEffect(() => {
    localStorage.setItem("chosenNavElement", 2);
    setCurrentPage(2); // id: 2 = "Experience"

    let ExperienceHeadingsAndParagraphs = getText(
      "ExperienceHeadingsAndParagraphs",
    );

    setExperience(ExperienceHeadingsAndParagraphs);
  }, [currentLanguage, setCurrentPage]);

  return <Section option={experience} />;
};

export default MyExperience;
