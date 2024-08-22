import { Link } from "react-router-dom";

interface SubMenuProps {
  items: { name: string; path: string }[];
}

export const SubMenu = ({ items }: SubMenuProps) => (
  <div className="subMenu open">
    {items.map((item, index) => (
      <Link to={item.path} key={index}>
        <p className="subMenu-item">{item.name}</p>
      </Link>
    ))}
  </div>
);
