import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-between">
            <Link className="logo" href="/"></Link>
            <nav className="bg-dark">
              <ul>
                <li>
                  <Link href="/crew">
                    Crew
                  </Link>
                </li>
                <li>
                  <Link href="/give">
                    Give
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="w-24"></div>
            <span className="nav-toggle">Menu</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
