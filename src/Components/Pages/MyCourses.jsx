import Section from "../PageParts/Section";
import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";

const MyCourses = ({ currentLanguage, setCurrentPage }) => {
  const [courses, setCourses] = useState("");

  useEffect(() => {
    localStorage.setItem("chosenNavElement", 4);
    setCurrentPage(4); // id: 4 = "Courses"

    let CoursesHeadingAndParagraphs = getText("CoursesHeadingAndParagraphs");

    setCourses(CoursesHeadingAndParagraphs);
  }, [currentLanguage, setCurrentPage]);

  return <Section option={courses} />;
};

export default MyCourses;
