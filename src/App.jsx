import "./Styles/App.css";
import "./Styles/TextStyles.css";
import "./Styles/ColorVariables.css";
import Footer from "./Components/PageParts/Footer";
import Header from "./Components/PageParts/Header";
import NavBar from "./Components/PageParts/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
