import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";

const NoPage = (currentLanguage) => {
  const [noPageText, setNoPageText] = useState("");

  useEffect(() => {
    let NoPageText = getText("NoContentPage");

    setNoPageText(NoPageText);
  }, [currentLanguage]);

  return (
    <div className="container">
      <h2>{noPageText.heading}</h2>
      <a href="/">{noPageText.content}</a>
    </div>
  );
};

export default NoPage;
