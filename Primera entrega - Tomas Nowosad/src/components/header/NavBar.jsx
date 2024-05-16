import React from "react";

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li>
          <a className="nav-link" href="#">
            Inicio
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Camperas
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Pantalones
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Camisetas
          </a>
        </li>
      </ul>
    </nav>
  );
};
