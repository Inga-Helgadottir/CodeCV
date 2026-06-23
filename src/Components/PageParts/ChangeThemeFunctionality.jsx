export const getCurrentTheme = () => {
  let currentTheme = localStorage.getItem("currentTheme");
  if (currentTheme === "") {
    localStorage.setItem("currentTheme", "light");
    setLightTheme();
    return "light";
  } else if (currentTheme === "dark") {
    setDarkTheme();
    return "dark";
  } else {
    return currentTheme;
  }
};

export const setLightTheme = () => {
  localStorage.setItem("currentTheme", "light");
  let themeObject = {
    headerBackgroundColorGradient:
      "linear-gradient(to right, #2ec4b6, #3abeff)",

    primaryTextColor: "#0f172a",
    primaryBackgroundColor: "#c1d6e0",
    secondaryBackgroundColor: "#f8fafc",

    navigationalBackgroundColor: "#3abeff",
    navAndFooterLinkAndBorderColor: "#0f172a",
    navAndFooterLinkHoverColor: "#14b8a6",
    navLinkChosenColor: "#00ffe2",

    sectionLinkColor: "#3abeff",
    sectionLinkHoverColor: "#14b8a6",

    galleryArrowColor: "#0f172a",
    galleryArrowColorHover: "#0b766a",

    backToTheTopArrowTextAndBorderColor: "#0f172a",
    backToTheTopArrowTextAndBorderColorHover: "#3abeff",
    backToTheTopBackgroundColor: "#3abeff",
    backToTheTopBackgroundColorHover: "#0f172a",
  };
  setProperties(themeObject);
};

export const setDarkTheme = () => {
  localStorage.setItem("currentTheme", "dark");
  let themeObject = {
    headerBackgroundColorGradient:
      "linear-gradient(to right,#5e1180,#063b8c,#06777a)",
    primaryTextColor: "#f8fafc",
    primaryBackgroundColor: "#233765",
    secondaryBackgroundColor: "#0f172a",

    navigationalBackgroundColor: "#0f172a",
    navAndFooterLinkAndBorderColor: "#3abeff",
    navAndFooterLinkHoverColor: "#14b8a6",
    navLinkChosenColor: "#00ffe2",

    sectionLinkColor: "#3abeff",
    sectionLinkHoverColor: "#14b8a6",

    galleryArrowColor: "#00ffe2",
    galleryArrowColorHover: "#3abeff",

    backToTheTopArrowTextAndBorderColor: "#3abeff",
    backToTheTopArrowTextAndBorderColorHover: "#0f172a",
    backToTheTopBackgroundColor: "#0f172a",
    backToTheTopBackgroundColorHover: "#3abeff",
  };
  setProperties(themeObject);
};

const setProperties = (colorObject) => {
  document.documentElement.style.setProperty(
    "--headerBackgroundColorGradient",
    colorObject.headerBackgroundColorGradient,
  );
  document.documentElement.style.setProperty(
    "--primaryTextColor",
    colorObject.primaryTextColor,
  );
  document.documentElement.style.setProperty(
    "--primaryBackgroundColor",
    colorObject.primaryBackgroundColor,
  );
  document.documentElement.style.setProperty(
    "--secondaryBackgroundColor",
    colorObject.secondaryBackgroundColor,
  );
  document.documentElement.style.setProperty(
    "--navigationalBackgroundColor",
    colorObject.navigationalBackgroundColor,
  );
  document.documentElement.style.setProperty(
    "--navAndFooterLinkAndBorderColor",
    colorObject.navAndFooterLinkAndBorderColor,
  );
  document.documentElement.style.setProperty(
    "--navAndFooterLinkAndBorderColor",
    colorObject.navAndFooterLinkAndBorderColor,
  );
  document.documentElement.style.setProperty(
    "--navAndFooterLinkHoverColor",
    colorObject.navAndFooterLinkHoverColor,
  );
  document.documentElement.style.setProperty(
    "--navLinkChosenColor",
    colorObject.navLinkChosenColor,
  );
  document.documentElement.style.setProperty(
    "--sectionLinkColor",
    colorObject.sectionLinkColor,
  );
  document.documentElement.style.setProperty(
    "--sectionLinkHoverColor",
    colorObject.sectionLinkHoverColor,
  );
  document.documentElement.style.setProperty(
    "--galleryArrowColor",
    colorObject.galleryArrowColor,
  );
  document.documentElement.style.setProperty(
    "--galleryArrowColorHover",
    colorObject.galleryArrowColorHover,
  );
  document.documentElement.style.setProperty(
    "--backToTheTopArrowTextAndBorderColor",
    colorObject.backToTheTopArrowTextAndBorderColor,
  );
  document.documentElement.style.setProperty(
    "--backToTheTopArrowTextAndBorderColorHover",
    colorObject.backToTheTopArrowTextAndBorderColorHover,
  );
  document.documentElement.style.setProperty(
    "--backToTheTopBackgroundColor",
    colorObject.backToTheTopBackgroundColor,
  );
  document.documentElement.style.setProperty(
    "--backToTheTopBackgroundColorHover",
    colorObject.backToTheTopBackgroundColorHover,
  );
};
