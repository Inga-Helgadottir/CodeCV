import * as Dansk from "../Text/Dansk";
import * as English from "../Text/English";

let CurrentLanguage = "dk";

export const getCurrentLanguage = () => {
  let isWhichLanguage = localStorage.getItem("CurrentLanguage");

  if (isWhichLanguage === "") {
    localStorage.setItem("CurrentLanguage", "dk");
  } else {
    if (isWhichLanguage === "eng") {
      CurrentLanguage = "eng";
    } else {
      CurrentLanguage = "dk";
    }
  }
  return CurrentLanguage;
};

export const getText = (whichText) => {
  let currentLanguage = getCurrentLanguage();
  if (currentLanguage === "eng") {
    switch (whichText) {
      case "HeaderHeading":
        return English.HeaderHeading_eng;
      case "HeaderContent":
        return English.HeaderContent_eng;
      case "AboutMeHeadingAndParagraph":
        return English.AboutMeHeadingAndParagraph_eng;
      case "ExperienceHeadingsAndParagraphs":
        return English.ExperienceHeadingsAndParagraphs_eng;
      case "EducationHeadingAndParagraphs":
        return English.EducationHeadingAndParagraphs_eng;
      case "NavBarOptions":
        return English.NavBarOptions_eng;
      case "CoursesHeadingAndParagraphs":
        return English.CoursesHeadingAndParagraphs_eng;
      case "NoContentPage":
        return English.NoPage_eng;
      default:
        return "fejl";
    }
  } else {
    switch (whichText) {
      case "HeaderHeading":
        return Dansk.HeaderHeading_dk;
      case "HeaderContent":
        return Dansk.HeaderContent_dk;
      case "AboutMeHeadingAndParagraph":
        return Dansk.AboutMeHeadingAndParagraph_dk;
      case "ExperienceHeadingsAndParagraphs":
        return Dansk.ExperienceHeadingsAndParagraphs_dk;
      case "EducationHeadingAndParagraphs":
        return Dansk.EducationHeadingAndParagraphs_dk;
      case "NavBarOptions":
        return Dansk.NavBarOptions_dk;
      case "CoursesHeadingAndParagraphs":
        return Dansk.CoursesHeadingAndParagraphs_dk;
      case "NoContentPage":
        return Dansk.NoPage_dk;
      default:
        return "fejl";
    }
  }
};
