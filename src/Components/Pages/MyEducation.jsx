import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";
import Section from "../PageParts/Section";

const MyEducation = () => {
  const [Education, setEducationContent] = useState({});

  useEffect(() => {
    const EducationHeadingAndParagraphs = getText(
      "EducationHeadingAndParagraphs"
    );

    setEducationContent(EducationHeadingAndParagraphs);
  }, []);

  return <Section option={Education} />;
};

export default MyEducation;
