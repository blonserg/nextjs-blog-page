import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <a className="logo smooth-leave" href="https://codegra.in/"></a>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer className="mar-top-lg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-12">
              <a className="logo smooth-leave" href="./index.html"></a>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="footer-contacts">
                <div className="wrap">
                  <div className="address">
                    <p>
                      Pune
                      <br />
                      Maharashtra, IN
                    </p>
                  </div>
                  <a className="email" href="mailto:codegrain@gmail.com">
                    codegrain@gmail.com
                  </a>
                  <br />
                  <a className="phone" href="tel:+919022332201">
                    +91 902-233-2202
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
              <div className="social-links">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://instagram.com/codegra.in"
                    >
                      ig
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/codegrain"
                    >
                      tw
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.behance.net/CodeGrain"
                    >
                      Bē
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.youtube.com/channel/UCPKsb4U7x_4Ws-RsKQThVAA/featured"
                    >
                      yt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
