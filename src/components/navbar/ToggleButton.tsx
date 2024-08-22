interface ToggleButtonProps {
  isNavActive: boolean;
  toggleNav: () => void;
}

export const ToggleButton = ({ isNavActive, toggleNav }: ToggleButtonProps) => (
  <button
    onClick={toggleNav}
    data-test="button-toggle"
    className={`navToggle ${isNavActive ? "active" : ""}`}
  >
    <span />
    <span />
    <span />
  </button>
);
