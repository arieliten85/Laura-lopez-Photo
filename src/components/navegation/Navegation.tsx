import { useState } from "react";
import camera from "../../assets/icono-camera.png";
import { FaBars, FaAngleDown } from "react-icons/fa";
import "./navigation.css";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  // Check if the current path matches the given path
  const isActiveLink = (path: string) => location.pathname === path;

  // Function to close the menu and submenu
  const closeMenu = () => {
    setShowMenu(false);
    setShowServices(false); // Also close the submenu
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      setShowServices(false); // Close the submenu when the menu is closed
    }
  };

  // Function to toggle the submenu
  const toggleServices = () => setShowServices(!showServices);

  return (
    <div className="wrapper">
      <nav>
        <input
          type="checkbox"
          id="show-menu"
          checked={showMenu}
          onChange={toggleMenu} // Use toggleMenu to handle menu visibility
          style={{ display: "none" }}
        />

        <div className="nav-content">
          <div className="logo">
            <Link
              to="/"
              onClick={closeMenu} // Close menu on click
            >
              <img src={camera} alt="Logo" />
              <p> Laura Lopez</p>
            </Link>
          </div>

          <ul className="links">
            <li>
              <Link
                to="/"
                className={isActiveLink("/") ? "activeLink" : "link"}
                onClick={closeMenu} // Close menu on click
              >
                Inicio
              </Link>
            </li>
            <li>
              <a
                className={
                  location.pathname.includes("sesiones")
                    ? "activeLink desktop-link"
                    : "desktop-link"
                }
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  toggleServices(); // Toggle submenu on click
                  if (!showMenu) {
                    toggleMenu(); // Open the main menu if it is closed
                  }
                }}
              >
                Sesiones <FaAngleDown />
              </a>
              <input
                type="checkbox"
                id="show-services"
                checked={showServices}
                onChange={toggleServices} // Toggle submenu on change
                style={{ display: "none" }}
              />
              <label
                className={
                  location.pathname.includes("sesiones")
                    ? "activeLink linkLabel"
                    : "linkLabel"
                }
                htmlFor="show-services"
              >
                Sesiones <FaAngleDown />
              </label>

              {/* Submenu */}
              <ul className={showServices ? "show" : ""}>
                <li>
                  <Link
                    to="/sesiones/comunion/"
                    className={
                      isActiveLink("/sesiones/comunion/")
                        ? "activeLink"
                        : "link"
                    }
                    onClick={closeMenu} // Close menu on click
                  >
                    comunión
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sesiones/sesion-de-fotos-de-familia/"
                    className={
                      isActiveLink("/sesiones/sesion-de-fotos-de-familia/")
                        ? "activeLink"
                        : "link"
                    }
                    onClick={closeMenu} // Close menu on click
                  >
                    sesiones de fotos de familia
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sesiones/sesiones-de-smash-cake/"
                    className={
                      isActiveLink("/sesiones/sesiones-de-smash-cake/")
                        ? "activeLink"
                        : "link"
                    }
                    onClick={closeMenu} // Close menu on click
                  >
                    sesiones de smash cake
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sesiones/sesiones-de-bebe-de-6-meses/"
                    className={
                      isActiveLink("/sesiones/sesiones-de-bebe-de-6-meses/")
                        ? "activeLink"
                        : "link"
                    }
                    onClick={closeMenu} // Close menu on click
                  >
                    sesiones de bebe de 6 meses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sesiones/recien-nacido"
                    className={
                      isActiveLink("/sesiones/recien-nacido")
                        ? "activeLink"
                        : "link"
                    }
                    onClick={closeMenu} // Close menu on click
                  >
                    recién nacidos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sesiones/maternidad/"
                    className={
                      isActiveLink("/sesiones/maternidad/")
                        ? "activeLink"
                        : "link"
                    }
                    onClick={closeMenu} // Close menu on click
                  >
                    maternidad
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/bodas"
                className={isActiveLink("/bodas") ? "activeLink" : "link"}
                onClick={closeMenu} // Close menu on click
              >
                Bodas
              </Link>
            </li>
            <li>
              <Link
                to="/sobre-mi"
                className={isActiveLink("/sobre-mi") ? "activeLink" : "link"}
                onClick={closeMenu} // Close menu on click
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={isActiveLink("/contacto") ? "activeLink" : "link"}
                onClick={closeMenu} // Close menu on click
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <label htmlFor="show-menu" className="menu-icon">
          <FaBars />
        </label>
      </nav>
    </div>
  );
};
