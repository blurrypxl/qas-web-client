import Logo from "./logo";
import Menu from "./menu";
import SubNavbar from "./subNavbar";
// import LineDecoration from "./lineDecoration";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm rounded">
      <SubNavbar />

      <nav className="navbar navbar-expand-sm nav-shadow">
        <div className="container-fluid">
          <Logo />

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <Logo />
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body d-flex flex-column">
              <ul className="navbar-nav justify-content-end pe-lg-4">
                <li className="nav-item d-flex justify-content-center"></li>
              </ul>

              <Menu />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
