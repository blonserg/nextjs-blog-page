import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <a className="logo" href="/"></a>
            <nav className="bg-dark">
              <ul>
                <li>
                  <Link href="/crew">
                    <a>Crew</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <span className="nav-toggle">Menu</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
