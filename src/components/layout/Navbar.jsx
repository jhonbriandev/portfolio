import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import "./Navbar.css";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-logo">
        Jhon.dev
      </a>
      <div className="navbar-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
          }
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
          aria-expanded={openMenu}
        >
          ☰
        </button>
      </div>
      {/*Si la condicion es verdadera usaremos navbar-links navbar-links-abierto sino solo usaremos
      navbar-links */}
      <ul className={`navbar-links ${openMenu ? "navbar-links--abierto" : ""}`}>
        <li>
          {/*Al hacer click sobre el vinculo, el setOpenMenu se cambia a false
          para oculatar el menu y no tapar la navegacion*/}
          <a href="#aboutme" onClick={() => setOpenMenu(false)}>
            Sobre mí
          </a>
        </li>
        <li>
          {/*El # le dice al navegador: "Busca un ID llamado..." */}
          <a href="#projects" onClick={() => setOpenMenu(false)}>
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpenMenu(false)}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
