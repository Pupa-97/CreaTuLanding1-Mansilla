import CartWidget from "./CartWidget.jsx";

function NavBar() {
  return (
    <header className="nav">
      <div className="nav__brand">
        {/* Reemplazá por tu logo si querés */}
        <img src="https://i.ibb.co/Vq1CwzZ/checkmate-logo.png" alt="logo" />
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