import CartWidget from "./CartWidget.jsx";
import logo from "../assets/logo-checkmate.jpg";

function NavBar() {
  return (
    <header className="nav">
      <div className="nav__brand">
        <img src={logo} alt="logo Checkmate" />
        <span className="brand-name">Checkmate</span>
      </div>

      <nav className="nav__links">
        <a href="#">Inicio</a>
        <a href="#">Perfumes</a>
        <a href="#">Maquillaje</a>
        <a href="#">Indumentaria</a>
        <a href="#">Contacto</a>
      </nav>

      <CartWidget />
    </header>
  );
}

export default NavBar;
