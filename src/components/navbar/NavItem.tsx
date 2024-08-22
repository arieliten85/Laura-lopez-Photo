import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { SubMenu } from "./SubMenu";

interface NavItemProps {
  name: string;
  path: string;
  subMenu?: { name: string; path: string }[];
  isFocused: boolean;
  handleFocus: () => void;
  isSubMenuOpen: boolean;
  toggleSubMenu: () => void;
}

export const NavItem = ({
  name,
  path,
  subMenu,
  isFocused,
  handleFocus,
  isSubMenuOpen,
  toggleSubMenu,
}: NavItemProps) => (
  <li className={isFocused ? "focused" : ""} onClick={handleFocus}>
    {name !== "Sesiones" ? (
      <Link to={path} className="navLink">
        {name}
      </Link>
    ) : (
      <div className="submenu-container">
        <button className="navLink" onClick={toggleSubMenu}>
          {name} <IoIosArrowDown className="arrow" />
        </button>
        {isSubMenuOpen && subMenu && <SubMenu items={subMenu} />}
      </div>
    )}
  </li>
);
