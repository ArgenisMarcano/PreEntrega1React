import React from "react";
import CartWidget from "./CartWidget/CartWidget";

export const NavBar = () => {
    return  (
        <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <h1>ZeroGlutBakery</h1>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link" href="">Inicio</a>
                  <a className="nav-link" href="">Productos</a>
                  <a className="nav-link" href="">Clientes</a>
                  <a className="nav-link" href="">Contacto</a>
                  <a className="nav-link" href="">Sugerencias</a>
                  <a className="nav-link" href=""><CartWidget/></a>
    
                </div>
              </div>
            </div>
          </nav>
        </header>
    );
}

export default NavBar ;