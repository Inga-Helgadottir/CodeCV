import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";
import Section from "../PageParts/Section";
import { getCurrentLanguage } from "../GetCurrentLanguage";

const MyCourses = ({ currentLanguage, setCurrentPage }) => {
  const [courses, setCourses] = useState("");

  useEffect(() => {
    localStorage.setItem("chosenNavElement", 4);
    setCurrentPage(4);
    let CoursesHeadingAndParagraphs = getText("CoursesHeadingAndParagraphs");

    setCourses(CoursesHeadingAndParagraphs);
    getCurrentLanguage();
  }, [currentLanguage, setCurrentPage]);

  return <Section option={courses} />;
};

export default MyCourses;
