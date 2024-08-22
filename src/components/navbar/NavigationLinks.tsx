import SubMenu, { NavigationLink } from "./NavBar";

interface MapNavigationLinksProps {
  focused: number;
  clicked: (index: number) => void;
  handleSubMenuToggle: () => void;
  subMenuOpen: boolean;
  navigationLinks: {
    name: string;
    path: string;
    subMenu?: { name: string; path: string }[];
  }[];
}

export const MapNavigationLinks = ({
  focused,
  clicked,
  handleSubMenuToggle,
  subMenuOpen,
  navigationLinks,
}: MapNavigationLinksProps) => {
  return (
    <ul>
      {navigationLinks.map(({ name, path, subMenu }, index) =>
        name !== "Sesiones" ? (
          <NavigationLink
            key={index}
            name={name}
            path={path}
            focused={focused === index}
            onClick={() => clicked(index)}
          />
        ) : (
          <SubMenu
            key={index}
            subMenuOpen={subMenuOpen}
            subMenuItems={subMenu}
            handleSubMenuToggle={handleSubMenuToggle}
          />
        )
      )}
    </ul>
  );
};
