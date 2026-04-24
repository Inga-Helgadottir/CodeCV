import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";
import Section from "../PageParts/Section";

const MyEducation = () => {
  const [education, setEducationContent] = useState({});

  useEffect(() => {
    localStorage.setItem("chosenNavElement", 3);
    let educationHeadingAndParagraphs = getText(
      "EducationHeadingAndParagraphs",
    );

    setEducationContent(educationHeadingAndParagraphs);
  }, []);

  return <Section option={education} />;
};

export default MyEducation;
