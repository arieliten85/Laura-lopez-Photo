interface OverlayProps {
  isNavActive: boolean;
  toggleNav: () => void;
}

export const Overlay = ({ isNavActive, toggleNav }: OverlayProps) => (
  <div
    onClick={toggleNav}
    className={`overlay ${isNavActive ? "active" : ""}`}
  />
);
