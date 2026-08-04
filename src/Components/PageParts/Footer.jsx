import "../../Styles/Footer.css";
import "../../Styles/NavAndFooter.css";
import { useState, useEffect } from "react";
import { getText } from "../../Components/GetCurrentLanguage";

const Footer = (currentLanguage) => {
  const [heading, setHeading] = useState("");

  useEffect(() => {
    setHeading(getText("FooterHeading"));
  }, [currentLanguage]);

  return (
    <footer>
      <h3>{heading}</h3>

      <div className="footerDiv">
        <a
          href="https://www.linkedin.com/in/inga-helgadottir/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn: Inga-helgadottir
        </a>
        <a
          href="https://github.com/Inga-Helgadottir"
          rel="noreferrer"
          target="_blank"
        >
          GitHub: Inga-Helgadottir
        </a>
      </div>
      <div className="footerDiv footerDiv2">
        <a
          href="mailto:s.inga.helgadottir95@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          Email: s.inga.helgadottir95@gmail.com
        </a>
        <a href="https://github.com/SIngaH" rel="noreferrer" target="_blank">
          GitHub: SIngaH
        </a>
      </div>
    </footer>
  );
};

export default Footer;
