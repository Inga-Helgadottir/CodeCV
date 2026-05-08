import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";
import Section from "../PageParts/Section";
import { getCurrentLanguage } from "../GetCurrentLanguage";

const MyEducation = ({ currentLanguage, setCurrentPage }) => {
  const [education, setEducationContent] = useState({});

  useEffect(() => {
    localStorage.setItem("chosenNavElement", 3);
    setCurrentPage(3);

    let educationHeadingAndParagraphs = getText(
      "EducationHeadingAndParagraphs",
    );

    setEducationContent(educationHeadingAndParagraphs);
    getCurrentLanguage();
  }, [currentLanguage, setCurrentPage]);

  return <Section option={education} />;
};

export default MyEducation;
