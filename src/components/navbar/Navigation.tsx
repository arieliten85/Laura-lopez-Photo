import { navigationLinks } from "./apiLinks/api";
import { NavItem } from "./NavItem";

interface NavigationProps {
  isNavActive: boolean;
  focusedIndex: number;
  handleFocus: (index: number) => void;
  isSubMenuOpen: boolean;
  toggleSubMenu: () => void;
}

export const Navigation = ({
  isNavActive,
  focusedIndex,
  handleFocus,
  isSubMenuOpen,
  toggleSubMenu,
}: NavigationProps) => (
  <nav>
    <ul
      className="linksContainer"
      style={isNavActive ? { transform: "translateX(0)" } : undefined}
    >
      {navigationLinks.map(({ name, path, subMenu }, index) => (
        <NavItem
          key={index}
          name={name}
          path={path!}
          subMenu={subMenu}
          isFocused={focusedIndex === index}
          handleFocus={() => handleFocus(index)}
          isSubMenuOpen={isSubMenuOpen}
          toggleSubMenu={toggleSubMenu}
        />
      ))}
    </ul>
  </nav>
);
