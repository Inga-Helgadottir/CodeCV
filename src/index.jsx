import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/Pages/AboutMe";
import MyCourses from "./Components/Pages/MyCourses";
import MyEducation from "./Components/Pages/MyEducation";
import MyExperience from "./Components/Pages/MyExperience";
import NoPage from "./Components/Pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<AboutMe />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="Courses" element={<MyCourses />} />
        <Route path="Education" element={<MyEducation />} />
        <Route path="Experience" element={<MyExperience />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
