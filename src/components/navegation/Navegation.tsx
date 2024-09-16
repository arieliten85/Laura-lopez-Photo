import React, { useState } from "react";
import camera from "../../assets/icono-camera.png";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import "./navigation.css";
import { Link, useLocation } from "react-router-dom";

export const Navigation: React.FC = () => {
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
      setShowServices(false);
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
          onChange={toggleMenu}
          style={{ display: "none" }}
        />

        <div className="nav-content">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src={camera} alt="Logo" />
              <p> Laura Lopez</p>
            </Link>
          </div>

          <ul className="links">
            <li>
              <Link
                data-test="nav-link-home"
                to="/"
                className={isActiveLink("/") ? "activeLink" : "link"}
                onClick={closeMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <a
                data-test="nav-link-sessions-pc"
                className={
                  location.pathname.includes("sesiones")
                    ? "activeLink desktop-link"
                    : "desktop-link"
                }
              >
                Sesiones <FaAngleDown />
              </a>
              <input
                type="checkbox"
                id="show-services"
                checked={showServices}
                onChange={toggleServices}
                style={{ display: "none" }}
              />
              <label
                data-test="nav-link-sessions-mobile"
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
                    data-test="submenu-link-comunion"
                    to="/sesiones/comunion/"
                    className={
                      isActiveLink("/sesiones/comunion/")
                        ? "activeLink"
                        : "link"
                    }
                    onClick={closeMenu}
                  >
                    comunión
                  </Link>
                </li>
                <li>
                  <Link
                    data-test="submenu-link-familia"
                    to="sesiones/familia/"
                    className={
                      isActiveLink("/sesiones/familia/") ? "activeLink" : "link"
                    }
                    onClick={closeMenu}
                  >
                    sesiones de fotos de familia
                  </Link>
                </li>
                <li>
                  <Link
                    data-test="submenu-link-smashcake"
                    to="/sesiones/smashcake/"
                    className={
                      isActiveLink("/sesiones/smashcake/")
                        ? "activeLink"
                        : "link"
                    }
                    onClick={closeMenu}
                  >
                    sesiones de smash cake
                  </Link>
                </li>
                <li>
                  <Link
                    data-test="submenu-link-bebe"
                    to="/sesiones/bebe-de-6-meses/"
                    className={
                      isActiveLink("/sesiones/bebe-de-6-meses/")
                        ? "activeLink"
                        : "link"
                    }
                    onClick={closeMenu}
                  >
                    sesiones de bebe de 6 meses
                  </Link>
                </li>
                <li>
                  <Link
                    data-test="submenu-link-recien-nacido"
                    to="/sesiones/recien-nacido"
                    className={
                      isActiveLink("/sesiones/recien-nacido/")
                        ? "activeLink"
                        : "link"
                    }
                    onClick={closeMenu}
                  >
                    recién nacidos
                  </Link>
                </li>
                <li>
                  <Link
                    data-test="submenu-link-maternidad"
                    to="/sesiones/maternidad/"
                    className={
                      isActiveLink("/sesiones/maternidad/")
                        ? "activeLink"
                        : "link"
                    }
                    onClick={closeMenu}
                  >
                    maternidad
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                data-test="nav-link-bodas"
                to="/bodas"
                className={isActiveLink("/bodas") ? "activeLink" : "link"}
                onClick={closeMenu}
              >
                Bodas
              </Link>
            </li>
            <li>
              <Link
                data-test="nav-link-contacto"
                to="/contacto"
                className={isActiveLink("/contacto") ? "activeLink" : "link"}
                onClick={closeMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <label
          htmlFor="show-menu"
          className="menu-icon"
          data-test="toggel-menu"
        >
          {!showMenu ? <FaBars /> : <IoCloseSharp />}
        </label>

        <div
          onClick={closeMenu}
          data-test="close-menu"
          className={`overlay ${showMenu ? "active" : ""}`}
        />
      </nav>
    </div>
  );
};
