import { Link } from "react-router-dom";

export default function UserHeader() {
  return (
    <>
      <header className="bg-header">
        <Link to="/" className="bg-logo">
          <span className="bg-logo-icon">❋</span>

          <span className="bg-logo-text">
            <strong>Beauty &amp; Glow</strong>
            <small>BEAUTY SALON &amp; ACADEMY</small>
          </span>
        </Link>

        <nav className="bg-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/beautyacademy">Courses</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="bg-header-actions">
          <Link to="/login" className="bg-login-btn">
            Login
          </Link>

          <Link to="/register" className="bg-register-btn">
            Register
          </Link>

         
        </div>
      </header>

      <style>{`
        .bg-header,
        .bg-header * {
          box-sizing: border-box;
        }

        .bg-header {
          width: 100%;
          min-height: 82px;
          padding: 12px 3.5%;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          column-gap: 28px;
          background: #fbf7ef;
          border-bottom: 1px solid #eee3d4;
          position: relative;
          z-index: 100;
        }

        /* LOGO */

        .bg-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #503b38;
          min-width: 0;
        }

        .bg-logo-icon {
          color: #b89563;
          font-size: 39px;
          line-height: 1;
          flex-shrink: 0;
        }

        .bg-logo-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .bg-logo-text strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
          font-weight: 500;
          font-style: italic;
          letter-spacing: -0.7px;
          line-height: 1.1;
          white-space: nowrap;
        }

        .bg-logo-text small {
          font-family: Arial, sans-serif;
          font-size: 8px;
          letter-spacing: 1.8px;
          color: #79675a;
          white-space: nowrap;
        }

        /* NAVIGATION */

        .bg-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 1.6vw, 24px);
          min-width: 0;
        }

        .bg-nav a {
          position: relative;
          padding: 8px 0;
          text-decoration: none;
          color: #493c35;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          transition: color 0.25s ease;
        }

        .bg-nav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 0;
          height: 1px;
          background: #b89563;
          transition: width 0.25s ease;
        }

        .bg-nav a:hover {
          color: #a6814c;
        }

        .bg-nav a:hover::after {
          width: 100%;
        }

        /* HEADER BUTTONS */

        .bg-header-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          white-space: nowrap;
        }

        .bg-login-btn,
        .bg-register-btn,
        .bg-appointment-btn {
          min-height: 40px;
          padding: 0 13px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 3px;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          transition: background 0.25s ease,
                      color 0.25s ease,
                      border-color 0.25s ease;
        }

        .bg-login-btn {
          color: #503b38;
          border: 1px solid #c9aa80;
          background: transparent;
        }

        .bg-login-btn:hover {
          background: #efe4d5;
        }

        .bg-register-btn {
          color: #503b38;
          border: 1px solid #e6d8c7;
          background: #fffdf9;
        }

        .bg-register-btn:hover {
          border-color: #c9aa80;
          background: #f4ebdf;
        }

        .bg-appointment-btn {
          min-height: 42px;
          padding: 0 16px;
          color: #fff;
          border: 1px solid #b89563;
          background: #b89563;
        }

        .bg-appointment-btn:hover {
          background: #503b38;
          border-color: #503b38;
        }

        .bg-appointment-btn span {
          font-size: 17px;
          transition: transform 0.25s ease;
        }

        .bg-appointment-btn:hover span {
          transform: translateX(3px);
        }

        /* TABLETS AND SMALL LAPTOPS */

        @media (max-width: 1150px) {
          .bg-header {
            grid-template-columns: 1fr auto;
            gap: 12px 20px;
            padding: 13px 3%;
          }

          .bg-nav {
            grid-column: 1 / -1;
            grid-row: 2;
            padding: 7px 0 2px;
            gap: 24px;
          }

          .bg-header-actions {
            grid-column: 2;
            grid-row: 1;
          }
        }

        /* MOBILE */

        @media (max-width: 650px) {
          .bg-header {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 15px;
            padding: 15px 14px;
          }

          .bg-logo {
            justify-self: center;
          }

          .bg-logo-icon {
            font-size: 36px;
          }

          .bg-logo-text strong {
            font-size: 25px;
          }

          .bg-nav {
            grid-column: 1;
            grid-row: auto;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            gap: 8px 19px;
            padding: 0;
          }

          .bg-nav a {
            font-size: 12px;
          }

          .bg-header-actions {
            grid-column: 1;
            grid-row: auto;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
          }

          .bg-login-btn,
          .bg-register-btn,
          .bg-appointment-btn {
            min-height: 39px;
            padding: 0 12px;
            font-size: 12px;
          }
        }

        @media (max-width: 360px) {
          .bg-logo-text strong {
            font-size: 23px;
          }

          .bg-logo-text small {
            font-size: 7px;
            letter-spacing: 1.3px;
          }

          .bg-nav {
            gap: 8px 14px;
          }

          .bg-header-actions {
            gap: 6px;
          }

          .bg-login-btn,
          .bg-register-btn {
            padding: 0 10px;
          }

          .bg-appointment-btn {
            padding: 0 11px;
          }
        }
      `}</style>
    </>
  );
}