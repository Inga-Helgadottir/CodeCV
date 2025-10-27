import "./Styles/App.css";
import "./Styles/TextStyles.css";
import "./Styles/ColorVariables.css";
import { useEffect, useState } from "react";
import Footer from "./Components/PageParts/Footer";
import Header from "./Components/PageParts/Header";
import NavBar from "./Components/PageParts/NavBar";
import AboutMe from "./Components/Pages/AboutMe";

function App() {
  const [isStartPage, setIsStartPage] = useState(true);

  useEffect(() => {
    const location = window.location.href;
    const isStart = location.endsWith("/");

    if (isStart) {
      localStorage.setItem("chosenNavElement", 1);
      localStorage.setItem("CurrentLanguage", "dk");
    } else {
      setIsStartPage(false);
    }

    setIsStartPage(isStart);
  }, []);
  return (
    <div className="App">
      <Header />
      <NavBar />
      {isStartPage && <AboutMe />}
      <Footer />
    </div>
  );
}

export default App;
