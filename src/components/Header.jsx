import logo from "../images/airbnb1.png";

function Header() {
  return (
    <header className="hdr">
      <nav className="nav">
        <img src={logo} className="logo" />
      </nav>
    </header>
  );
}

export default Header;
