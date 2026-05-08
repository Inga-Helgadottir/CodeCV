import "./Styles/App.css";
import "./Styles/TextStyles.css";
import "./Styles/ColorVariables.css";
import Footer from "./Components/PageParts/Footer";
import Header from "./Components/PageParts/Header";
import NavBar from "./Components/PageParts/NavBar";
import { useState } from "react";
import BackToTheTopComponent from "./Components/PageParts/BackToTheTopComponent";
import { getCurrentLanguage } from "./Components/GetCurrentLanguage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/Pages/AboutMe";
import MyCourses from "./Components/Pages/MyCourses";
import MyEducation from "./Components/Pages/MyEducation";
import MyExperience from "./Components/Pages/MyExperience";
import NoPage from "./Components/Pages/NoPage";

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState(getCurrentLanguage());
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("chosenNavElement") || 1,
  );

  return (
    <BrowserRouter>
      <div className="App" id="top">
        <Header
          currentLanguage={currentLanguage}
          setCurrentLanguage={setCurrentLanguage}
        />
        <NavBar currentLanguage={currentLanguage} currentPage={currentPage} />

        <Routes>
          <Route
            index
            element={
              <AboutMe
                currentLanguage={currentLanguage}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route
            path="AboutMe"
            element={
              <AboutMe
                currentLanguage={currentLanguage}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route
            path="Courses"
            element={
              <MyCourses
                currentLanguage={currentLanguage}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route
            path="Education"
            element={
              <MyEducation
                currentLanguage={currentLanguage}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route
            path="Experience"
            element={
              <MyExperience
                currentLanguage={currentLanguage}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route
            path="*"
            element={<NoPage currentLanguage={currentLanguage} />}
          />
        </Routes>

        <BackToTheTopComponent currentLanguage={currentLanguage} />
        <Footer currentLanguage={currentLanguage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
