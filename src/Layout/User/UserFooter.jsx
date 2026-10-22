
import { Link } from "react-router-dom";

export default function UserFooter() {
  return (
    <>
      <style>{`
        .glow-footer {
          background: #49372e;
          color: #fbf8f1;
          padding: 65px 7% 20px;
          font-family: Arial, sans-serif;
        }

        .glow-footer-main {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 40px;
          padding-bottom: 45px;
        }

        .glow-footer-logo {
          display: inline-block;
          color: #fbf8f1;
          font-family: Georgia, serif;
          font-size: 28px;
          text-decoration: none;
        }

        .glow-footer-logo span {
          color: #dfc9a6;
          font-style: italic;
        }

        .glow-footer-tagline {
          margin-top: 8px;
          color: #dfc9a6;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .glow-footer-description {
          max-width: 300px;
          margin-top: 20px;
          color: #e5d9cb;
          font-size: 13px;
          line-height: 1.9;
        }

        .glow-footer-column h3 {
          margin: 0 0 22px;
          color: #dfc9a6;
          font-family: Georgia, serif;
          font-size: 20px;
          font-weight: normal;
        }

        .glow-footer-column a {
          display: block;
          width: fit-content;
          margin-bottom: 13px;
          color: #e5d9cb;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.3s;
        }

        .glow-footer-column a:hover {
          color: #dfc9a6;
        }

        .glow-footer-contact p {
          margin: 0 0 15px;
          color: #e5d9cb;
          font-size: 13px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .glow-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          padding-top: 22px;
          border-top: 1px solid #705c4e;
        }

        .glow-footer-bottom p {
          margin: 0;
          color: #dfc9a6;
          font-size: 12px;
          line-height: 1.8;
        }

        .glow-footer-socials {
          display: flex;
          gap: 18px;
        }

        .glow-footer-socials a {
          color: #fbf8f1;
          font-size: 13px;
          text-decoration: none;
        }

        .glow-footer-socials a:hover {
          color: #dfc9a6;
        }

        @media (max-width: 950px) {
          .glow-footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 550px) {
          .glow-footer {
            padding: 45px 6% 20px;
          }

          .glow-footer-main {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .glow-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

      <footer className="glow-footer">
        <div className="glow-footer-main">
          {/* Brand */}
          <div>
            <Link to="/" className="glow-footer-logo">
              Beauty <span>& Glow</span>
            </Link>

            <p className="glow-footer-tagline">
              BEAUTY SALON & ACADEMY
            </p>

            <p className="glow-footer-description">
              A welcoming destination for beauty, self-care,
              and professional beauty education. Discover
              your confidence and celebrate your natural glow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="glow-footer-column">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/beauty-academy">Beauty Academy</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          {/* Customer Links */}
          <div className="glow-footer-column">
            <h3>Explore</h3>
            <Link to="/login">Customer Login</Link>
            <Link to="/register">Create Account</Link>
            <Link to="/services">Book an Appointment</Link>
            <Link to="/beauty-academy">Explore Courses</Link>
            <Link to="/reviews">Customer Reviews</Link>
          </div>

          {/* Contact */}
          <div className="glow-footer-column glow-footer-contact">
            <h3>Get in Touch</h3>

            <p>
              <strong>Address</strong>
              <br />
              Add your salon address here
            </p>

            <p>
              <strong>Email</strong>
              <br />
              Add your business email here
            </p>

            <p>
              <strong>Phone</strong>
              <br />
              Add your contact number here
            </p>
          </div>
        </div>

        <div className="glow-footer-bottom">
          <p>
            © {new Date().getFullYear()} Beauty & Glow.
            All rights reserved.
          </p>

          <div className="glow-footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
