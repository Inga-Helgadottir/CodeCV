import "../../Styles/Header.css";
import "../../Styles/ColorVariables.css";
import imgOfMe from "../../images/newCVpic.jpg";
import UpdateLanguage from "../../Components/PageParts/UpdateLanguage";
import { getText } from "../GetCurrentLanguage";
import { useEffect, useState } from "react";

const Header = () => {
  const [HeaderHeading, setHeaderHeading] = useState("");
  const [HeaderContent, setHeaderContent] = useState("");

  useEffect(() => {
    setHeaderHeading(getText("HeaderHeading"));
    setHeaderContent(getText("HeaderContent"));
  }, []);

  const updateLanguage = (updateTo) => {
    localStorage.setItem("CurrentLanguage", updateTo);
    window.location.reload();
  };

  return (
    <header>
      <img className="headerImg" src={imgOfMe} alt="Me" />
      <section className="headerSection">
        <h1 className="HeaderText">Inga Helgadottir</h1>
        <h2 className="HeaderText">{HeaderHeading}</h2>
        <p className="HeaderText">{HeaderContent}</p>
      </section>
      <UpdateLanguage updateLanguage={updateLanguage} />
    </header>
  );
};

export default Header;
