import "../../Styles/Nav.css";
import { useEffect, useState } from "react";
import { getText } from "../GetCurrentLanguage";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  const [NavBarOptions, setNavBarOptions] = useState([{}]);
  const [chosenOption, setChosenOption] = useState();

  useEffect(() => {
    setNavBarOptions(getText("NavBarOptions"));
    let currentChosenNavBarOption = localStorage.getItem("chosenNavElement");
    console.log(currentChosenNavBarOption);
    if (currentChosenNavBarOption === "") {
      localStorage.setItem("chosenNavElement", 1);
    } else {
      setChosenOption(currentChosenNavBarOption);
    }
  }, []);

  function giveOrTakeChosenId(e, id) {
    let currentElementId = e.id;
    if (currentElementId === "") {
      setChosenOption(id);
      localStorage.setItem("chosenNavElement", id);
    }
  }

  return (
    <div>
      <nav>
        <ul>
          {NavBarOptions?.map((option, key) => (
            <Link
              id={Number(chosenOption) === option.id ? "chosen" : ""}
              className="li"
              key={key}
              to={option.optionDestination}
              onClick={(e) => giveOrTakeChosenId(e.target, option.id)}
            >
              {option.optionName}
            </Link>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
