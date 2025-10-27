import UKflag from "../../images/UKflag.svg";
import DKflag from "../../images/DKflag.svg";

const UpdateLanguage = ({ updateLanguage }) => {
  return (
    <section className="updateLanguage">
      <img
        className="flag"
        onClick={() => updateLanguage("eng")}
        src={UKflag}
        alt="The UK flag"
      ></img>

      <img
        className="flag"
        onClick={() => updateLanguage("dk")}
        src={DKflag}
        alt="The UK flag"
      ></img>
    </section>
  );
};

export default UpdateLanguage;
