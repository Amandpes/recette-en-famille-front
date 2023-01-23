import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 col-xxl-12 ">
          <ul className="nav justify-content-center mt-5 custom-bg-vert">
            <li className="nav-item">
              <NavLink className="nav-link disabled text-light">
                site créé par Christine Dos Santos, Amandine Pesquet et Kelly
                Ribeiro.
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
