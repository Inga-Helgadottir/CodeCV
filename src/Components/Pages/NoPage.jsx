import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";

const NoPage = () => {
  const [noPageText, setNoPageText] = useState("");

  useEffect(() => {
    const NoPageText = getText("NoContentPage");

    setNoPageText(NoPageText);
  }, []);

  return (
    <div className="container">
      <h2>{noPageText.heading}</h2>
      <a href="/">{noPageText.content}</a>
    </div>
  );
};

export default NoPage;
