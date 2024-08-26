import { useState } from "react";
import "../navbar/navbar.css"; // Corregido el nombre del archivo CSS
import { Link } from "react-router-dom";
import { navigationLinks } from "./apiLinks/api";
import { IoIosArrowDown } from "react-icons/io";
import { Logo } from "./Logo";
import { ToggleButton } from "./ToggleButton";
import { Overlay } from "./Overlay";

export const NavBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [focused, setFocused] = useState<number | null>(null);

  const toggleNav = () => setIsNavActive(!isNavActive);

  const handleSubMenuToggle = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const handleSubMenuItemClick = (index: number) => {
    setFocused(index);
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
                focused={focused}
                handleSubMenuToggle={handleSubMenuToggle}
                subMenuOpen={subMenuOpen}
                handleSubMenuItemClick={handleSubMenuItemClick}
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
  focused: number | null;
  handleSubMenuToggle: () => void;
  subMenuOpen: boolean;
  handleSubMenuItemClick: (index: number) => void;
}

const MapNavigationLinks = ({
  focused,
  handleSubMenuToggle,
  subMenuOpen,
  handleSubMenuItemClick,
}: MapNavigationLinksProps) => {
  return navigationLinks.map(({ name, path, subMenu }, index) => {
    const isFocused = focused === index;
    const style = isFocused ? "focused" : "";

    return (
      <li key={index} className={style}>
        {name !== "Sesiones" ? (
          <Link to={`${path}`} onClick={() => handleSubMenuItemClick(index)}>
            <a className="navLink">{name}</a>
          </Link>
        ) : (
          <div className="submenu-container">
            <a className="navLink" onClick={handleSubMenuToggle}>
              {name}
              <IoIosArrowDown className="arrow" />
            </a>

            {subMenuOpen && (
              <div className="subMenu">
                {subMenu?.map((item, itemIndex) => (
                  <Link
                    key={item.path}
                    to={`${item.path}`}
                    onClick={() => handleSubMenuItemClick(itemIndex)}
                  >
                    <p
                      className={`subMenu-item ${
                        focused === itemIndex ? "active" : ""
                      }`}
                    >
                      {item.name}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </li>
    );
  });
};
