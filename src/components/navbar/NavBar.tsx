import { useState } from "react";
import "../navbar/navbar..css";
import { Link } from "react-router-dom";
import { navigationLinks } from "./apiLinks/api";

import { IoIosArrowDown } from "react-icons/io";
import { Logo } from "./Logo";
import { ToggleButton } from "./ToggleButton";
import { Overlay } from "./Overlay";

export const NavBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const [focused, setFocused] = useState(0);

  const toggleNav = () => setIsNavActive(!isNavActive);

  const clicked = (index: number) => {
    setFocused(index);
  };
  const handleSubMenuToggle = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  return (
    <>
      <header className="header" data-test="header">
        <div className="navContainer">
          <Logo />

          <nav>
            <ul
              className="linksContainer"
              style={isNavActive ? { transform: "translateX(0)" } : undefined}
            >
              <MapNavigationLinks
                clicked={clicked}
                focused={focused}
                handleSubMenuToggle={handleSubMenuToggle}
                subMenuOpen={subMenuOpen}
              />
            </ul>
          </nav>
          <ToggleButton isNavActive={isNavActive} toggleNav={toggleNav} />
          <Overlay isNavActive={isNavActive} toggleNav={toggleNav} />
        </div>
      </header>
    </>
  );
};

interface MapNavigationLinksProps {
  focused: number;
  clicked: (index: number) => void;
  handleSubMenuToggle: () => void;
  subMenuOpen: boolean;
}
const MapNavigationLinks = ({
  focused,
  clicked,
  handleSubMenuToggle,
  subMenuOpen,
}: MapNavigationLinksProps) => {
  return navigationLinks.map(({ name, path, subMenu }, index) => {
    const style = focused === index ? "focused" : "";
    return (
      <>
        <li key={index} className={style} onClick={() => clicked(index)}>
          {name !== "Sesiones" ? (
            <Link to={`${path}`}>
              <a className="navLink">{name}</a>
            </Link>
          ) : (
            <div className="submenu-container">
              <a className="navLink" onClick={handleSubMenuToggle}>
                {name}
                <IoIosArrowDown className="arrow" />
              </a>

              {name == "Sesiones" && (
                <div className={subMenuOpen ? "subMenu open" : "subMenu"}>
                  {subMenu?.map((item) => {
                    return (
                      <Link to={`${item.path}`}>
                        <p className="subMenu-item">{item.name} </p>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </li>
      </>
    );
  });
};
