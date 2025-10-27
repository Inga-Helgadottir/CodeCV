import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";
import Section from "../PageParts/Section";

const MyCourses = () => {
  const [courses, setCourses] = useState("");

  useEffect(() => {
    const CoursesHeadingAndParagraphs = getText("CoursesHeadingAndParagraphs");

    setCourses(CoursesHeadingAndParagraphs);
  }, []);

  return <Section option={courses} />;
};

export default MyCourses;
