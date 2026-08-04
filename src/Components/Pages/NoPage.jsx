import "../../Styles/NoPage.css";
import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";
import LinkButton from "../PageParts/LinkButton";

const NoPage = (currentLanguage) => {
  const [noPageText, setNoPageText] = useState("");

  useEffect(() => {
    let NoPageText = getText("NoContentPage");
    setNoPageText(NoPageText);
  }, [currentLanguage]);

  return (
    <div className="noPageContainer">
      <h2>{noPageText.heading}</h2>
      <img src="https://http.cat/404" alt="cat" />

      {/* Back to the startpage button */}
      <LinkButton link={"/"} text={noPageText.content} target={""} />
    </div>
  );
};

export default NoPage;
