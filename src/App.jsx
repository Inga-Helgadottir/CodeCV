import "./Styles/App.css";
import "./Styles/TextStyles.css";
import "./Styles/ColorVariables.css";
import Footer from "./Components/PageParts/Footer";
import Header from "./Components/PageParts/Header";
import NavBar from "./Components/PageParts/NavBar";
import { useEffect } from "react";

localStorage.setItem("chosenNavElement", 1);

function App() {
  useEffect(() => {
    let currenLocation = window.location.href;
    let isStartPage = currenLocation[currenLocation.length - 1] === "/";

    if (isStartPage) {
      localStorage.setItem("chosenNavElement", 1);
      localStorage.setItem("CurrentLanguage", "dk");
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
