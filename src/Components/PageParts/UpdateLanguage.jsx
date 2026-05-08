import "../../Styles/UpdateLanguage.css";
import UKflag from "../../images/UKflag.svg";
import DKflag from "../../images/DKflag.svg";

const UpdateLanguage = ({ currentLanguage, setCurrentLanguage }) => {
  const updateLanguageFunction = (updateTo) => {
    localStorage.setItem("CurrentLanguage", updateTo);
    setCurrentLanguage(updateTo);
  };

  return (
    <section className="updateLanguage">
      <img
        className="flag"
        onClick={() => updateLanguageFunction("eng")}
        src={UKflag}
        alt="The UK flag"
        id={currentLanguage === "eng" ? "currentLanguage" : ""}
      />

      <img
        className="flag"
        onClick={() => updateLanguageFunction("dk")}
        src={DKflag}
        alt="The DK flag"
        id={currentLanguage === "dk" ? "currentLanguage" : ""}
      />
    </section>
  );
};

export default UpdateLanguage;
