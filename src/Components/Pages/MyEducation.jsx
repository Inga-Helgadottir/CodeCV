import Section from "../PageParts/Section";
import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";

const MyEducation = ({ currentLanguage, setCurrentPage }) => {
  const [education, setEducationContent] = useState({});

  useEffect(() => {
    localStorage.setItem("chosenNavElement", 3);
    setCurrentPage(3); // id: 3 = "Education"

    let educationHeadingAndParagraphs = getText(
      "EducationHeadingAndParagraphs",
    );

    setEducationContent(educationHeadingAndParagraphs);
  }, [currentLanguage, setCurrentPage]);

  return <Section option={education} />;
};

export default MyEducation;
