import "../../Styles/Header.css";
import "../../Styles/ColorVariables.css";
import imgOfMe from "../../images/newCVpic.jpg";
import UpdateLanguage from "../../Components/PageParts/UpdateLanguage";
import { getText } from "../../Components/GetCurrentLanguage";
import { useEffect, useState } from "react";
import ChangeTheme from "../PageParts/ChangeTheme";

const Header = ({ currentLanguage, setCurrentLanguage }) => {
  const [HeaderHeading, setHeaderHeading] = useState("");
  const [HeaderContent, setHeaderContent] = useState("");

  useEffect(() => {
    setHeaderHeading(getText("HeaderHeading"));
    setHeaderContent(getText("HeaderContent"));
  }, [currentLanguage]);

  return (
    <header>
      <img className="headerImg" src={imgOfMe} alt="Me" />
      <section className="headerSection">
        <h1 className="HeaderText">Inga Helgadottir</h1>
        <h2 className="HeaderText">{HeaderHeading}</h2>
        <p className="HeaderText">{HeaderContent}</p>
        <ChangeTheme currentLanguage={currentLanguage} />
      </section>
      <UpdateLanguage
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
    </header>
  );
};

export default Header;
