
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function UserHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  );

  useEffect(() => {
    const updateLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    updateLoginStatus();

    window.addEventListener("authChanged", updateLoginStatus);
    window.addEventListener("storage", updateLoginStatus);

    return () => {
      window.removeEventListener("authChanged", updateLoginStatus);
      window.removeEventListener("storage", updateLoginStatus);
    };
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userType");
    localStorage.removeItem("name");

    setIsLoggedIn(false);
    window.dispatchEvent(new Event("authChanged"));

    navigate("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="elora-header">

        {/* LOGO */}
        <Link to="/" className="elora-logo" onClick={closeMenu}>
          <img src="/images/Logo.png" alt="Elora Beauty Academy" />
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="elora-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* NAVIGATION */}
        <nav className={`elora-nav ${menuOpen ? "show-menu" : ""}`}>

          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Courses", path: "/beauty" },
            { name: "Contact", path: "/contact" }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}

          {/* MOBILE ACTIONS */}
          <div className="elora-mobile-actions">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="elora-book-btn">
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="elora-login"
                  onClick={closeMenu}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="elora-book-btn"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="elora-actions">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="elora-book-btn">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="elora-login">
                Login
              </Link>

              <Link to="/register" className="elora-book-btn">
                Register
              </Link>
            </>
          )}
        </div>
      </header>

      <style>{`

        /* =========================
           GLOBAL HEADER
        ========================= */

        .elora-header,
        .elora-header * {
          box-sizing: border-box;
    
        }

              body {
  padding-top: 80px;
}
        

.elora-header {
  width: 100%;
  min-height: 80px;
  padding: 8px 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  background: #fbf5ec;
  border-bottom: 1px solid #e8d9c6;
  box-shadow: 0 7px 20px rgba(74,48,30,0.10);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

        /* =========================
           LOGO
        ========================= */

        .elora-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          text-decoration: none;
        }

        .elora-logo img {
          width: 220px;
          height: 65px;
          object-fit: contain;
          display: block;
        }

        /* =========================
           NAVIGATION
        ========================= */

        .elora-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex: 1;
        }

        .elora-nav a {
          text-decoration: none;
          color: #493529;
          font-family: Georgia, serif;
          font-size: 16px;
          font-weight: 500;
          padding: 11px 14px;
          border-radius: 30px;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .elora-nav a:hover,
        .elora-nav a.active {
          background: #ead2a6;
          color: #3e291c;
        }

        /* =========================
           LOGIN / REGISTER BUTTONS
        ========================= */

        .elora-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .elora-book-btn,
        .elora-login {
          min-height: 42px;
          padding: 0 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          color: #58371f;
          background: transparent;
          border: 1px solid #b89462;
          border-radius: 30px;

          font-family: Georgia, serif;
          font-size: 15px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .elora-book-btn {
          background: #58371f;
          color: #fffaf3;
        }

        .elora-book-btn:hover {
          background: #b89462;
          border-color: #b89462;
          color: white;
        }

        .elora-login:hover {
          background: #ead2a6;
          color: #3e291c;
        }

        /* =========================
           MOBILE TOGGLE
        ========================= */

        .elora-toggle {
          display: none;
          background: #58371f;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 7px 12px;
          font-size: 23px;
          cursor: pointer;
          line-height: 1.2;
        }

        .elora-mobile-actions {
          display: none;
        }

        /* =========================
           LAPTOP
           1200px - 1440px+
        ========================= */

        @media (min-width: 1200px) {

          .elora-header {
            min-height: 85px;
            padding: 8px 5%;
          }

          .elora-logo img {
            width: 240px;
            height: 68px;
          }

          .elora-nav {
            gap: 12px;
          }

          .elora-nav a {
            font-size: 16px;
            padding: 12px 15px;
          }
        }

        /* =========================
           SMALL LAPTOP
           1025px - 1199px
        ========================= */

        @media (min-width: 1025px) and (max-width: 1199px) {

          .elora-header {
            padding: 8px 2%;
            gap: 10px;
          }

          .elora-logo img {
            width: 185px;
            height: 60px;
          }

          .elora-nav {
            gap: 2px;
          }

          .elora-nav a {
            font-size: 14px;
            padding: 10px 9px;
          }

          .elora-book-btn,
          .elora-login {
            padding: 0 14px;
            font-size: 14px;
          }
        }

        /* =========================
           TABLET
           769px - 1024px
        ========================= */

        @media (min-width: 769px) and (max-width: 1024px) {

          .elora-header {
            min-height: 75px;
            padding: 8px 3%;
            gap: 10px;
          }

          .elora-logo img {
            width: 160px;
            height: 55px;
          }

          .elora-nav {
            gap: 0;
          }

          .elora-nav a {
            font-size: 13px;
            padding: 9px 7px;
          }

          .elora-book-btn,
          .elora-login {
            min-height: 38px;
            padding: 0 11px;
            font-size: 13px;
          }
        }

        /* =========================
           MOBILE
           481px - 768px
        ========================= */

        @media (max-width: 768px) {

          .elora-header {
            min-height: 72px;
            padding: 7px 20px;
            justify-content: space-between;
            gap: 10px;
          }

          .elora-logo img {
            width: 175px;
            height: 58px;
          }

          .elora-toggle {
            display: block;
            flex-shrink: 0;
          }

          .elora-actions {
            display: none;
          }

          .elora-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 3px;

            padding: 15px 20px 20px;
            background: #fbf5ec;
            border-top: 1px solid #e8d9c6;
            box-shadow: 0 10px 18px rgba(74,48,30,0.12);
          }

          .elora-nav.show-menu {
            display: flex;
          }

          .elora-nav > a {
            width: 100%;
            text-align: center;
            padding: 12px;
            font-size: 16px;
          }

          .elora-mobile-actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            width: 100%;
            padding-top: 12px;
            border-top: 1px solid #e8d9c6;
            margin-top: 8px;
          }

          .elora-mobile-actions a,
          .elora-mobile-actions button {
            width: 85%;
            max-width: 250px;
            min-height: 42px;
          }
        }

        /* =========================
           SMALL MOBILE
           361px - 480px
        ========================= */

        @media (max-width: 480px) {

          .elora-header {
            min-height: 65px;
            padding: 6px 14px;
          }

          .elora-logo img {
            width: 145px;
            height: 50px;
          }

          .elora-toggle {
            font-size: 21px;
            padding: 7px 10px;
          }

          .elora-nav {
            padding: 12px 15px 18px;
          }

          .elora-nav > a {
            font-size: 15px;
            padding: 11px;
          }

          .elora-mobile-actions a,
          .elora-mobile-actions button {
            font-size: 14px;
          }
        }

        /* =========================
           EXTRA SMALL MOBILE
           320px - 360px
        ========================= */

        @media (max-width: 360px) {

          .elora-header {
            min-height: 60px;
            padding: 5px 10px;
            gap: 5px;
          }

          .elora-logo img {
            width: 125px;
            height: 45px;
          }

          .elora-toggle {
            font-size: 19px;
            padding: 6px 9px;
          }

          .elora-nav {
            padding: 10px 12px 15px;
          }

          .elora-nav > a {
            font-size: 14px;
            padding: 10px;
          }
        }

      `}</style>
    </>
  );
}
