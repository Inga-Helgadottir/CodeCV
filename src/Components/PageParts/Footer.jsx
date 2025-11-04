import "../../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <h3>Kontakt oplysninger</h3>
      <div className="footerDiv">
        <a
          href="mailto:s.inga.helgadottir95@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          s.inga.helgadottir95@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/inga-helgadottir/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn: inga-helgadottir
        </a>
      </div>
      <div className="footerDiv2">
        <a
          href="https://github.com/Inga-Helgadottir"
          rel="noreferrer"
          target="_blank"
        >
          GitHub: Inga-Helgadottir
        </a>
      </div>
    </footer>
  );
};

export default Footer;
