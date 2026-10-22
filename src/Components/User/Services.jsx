
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <section className="glow-services" id="services">
        <div className="glow-services-heading">
          <p className="glow-eyebrow">
            <span></span> OUR SERVICES <span></span>
          </p>

          <h1>
            Beauty Services
            <span>For Your Glow</span>
          </h1>

          <p className="glow-intro">
            We offer a wide range of professional beauty services
            designed to enhance your natural beauty and give you
            a relaxing, rejuvenating experience.
          </p>
        </div>

        <div className="glow-services-grid">

          {/* Facial Treatments */}
          <article className="glow-service-card">
            <div className="glow-service-image">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=85"
                alt="Professional facial treatment"
                loading="lazy"
              />
            </div>

            <div className="glow-service-icon">✧</div>

            <div className="glow-service-content">
              <h2>Facial Treatments</h2>
              <p>
                Deep cleansing, hydration and rejuvenation
                for radiant skin.
              </p>

              <span className="glow-gold-line"></span>

              <strong className="glow-price">₹1,200</strong>
              <small>Starting From</small>

              <Link
                to="/servicedetail/1" 
                className="glow-book-button"
                state={{ service: "Facial Treatments" }}
              >
                Book Now <span>→</span>
              </Link>
            </div>
          </article>

          {/* Hair Services */}
          <article className="glow-service-card">
            <div className="glow-service-image">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=700&q=85"
                alt="Professional hair styling"
                loading="lazy"
              />
            </div>

            <div className="glow-service-icon">✧</div>

            <div className="glow-service-content">
              <h2>Hair Services</h2>
              <p>
                Trendy cuts, coloring and professional
                hair care.
              </p>

              <span className="glow-gold-line"></span>

              <strong className="glow-price">₹800</strong>
              <small>Starting From</small>

              <Link
                to="/servicedetail/2"
                className="glow-book-button"
                state={{ service: "Hair Services" }}
              >
                Book Now <span>→</span>
              </Link>
            </div>
          </article>

          {/* Nail Care */}
          <article className="glow-service-card">
            <div className="glow-service-image">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=85"
                alt="Elegant manicure and nail care"
                loading="lazy"
              />
            </div>

            <div className="glow-service-icon">✧</div>

            <div className="glow-service-content">
              <h2>Nail Care</h2>
              <p>
                Manicure, pedicure and nail art for
                beautiful hands and feet.
              </p>

              <span className="glow-gold-line"></span>

              <strong className="glow-price">₹600</strong>
              <small>Starting From</small>

              <Link
                to="/bokappointment"
                className="glow-book-button"
                state={{ service: "Nail Care" }}
              >
                Book Now <span>→</span>
              </Link>
            </div>
          </article>

          {/* Bridal and Party Makeup */}
          <article className="glow-service-card">
            <div className="glow-service-image">
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=85"
                alt="Professional makeup look"
                loading="lazy"
              />
            </div>

            <div className="glow-service-icon">✧</div>

            <div className="glow-service-content">
              <h2>Bridal & Party Makeup</h2>
              <p>
                Flawless makeup for your special
                moments and celebrations.
              </p>

              <span className="glow-gold-line"></span>

              <strong className="glow-price">₹3,500</strong>
              <small>Starting From</small>

              <Link
                to="/bokappointment"
                className="glow-book-button"
                state={{ service: "Bridal & Party Makeup" }}
              >
                Book Now <span>→</span>
              </Link>
            </div>
          </article>

        </div>

        <div className="glow-services-decoration">
          <span></span> ✧ <span></span>
        </div>
      </section>

      <style>{`
        .glow-services {
          --cream: #F8F3EB;
          --card: #FFFAF3;
          --gold: #B89462;
          --brown: #574438;
          --muted: #817060;

          position: relative;
          padding: 75px 5% 55px;
          overflow: hidden;

          background:
            radial-gradient(
              ellipse at 5% 10%,
              #E8D9C5 0%,
              transparent 25%
            ),
            radial-gradient(
              ellipse at 100% 90%,
              #EDE1D0 0%,
              transparent 25%
            ),
            linear-gradient(
              135deg,
              #F8F3EB,
              #F4E9D8
            );

          color: var(--brown);
          font-family: Arial, sans-serif;
        }

        .glow-services *,
        .glow-services *::before,
        .glow-services *::after {
          box-sizing: border-box;
        }

        /* Section heading */
        .glow-services-heading {
          max-width: 720px;
          margin: 0 auto 38px;
          text-align: center;
        }

        .glow-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          color: #A17A48;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
          margin: 0 0 16px;
        }

        .glow-eyebrow span {
          width: 48px;
          height: 1px;
          background: var(--gold);
        }

        /* Same Georgia font as About Us */
        .glow-services-heading h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 5vw, 66px);
          font-weight: 500;
          line-height: 1.12;
          margin: 0;
          letter-spacing: -1px;
          color: var(--brown);
        }

        .glow-services-heading h1 span {
          display: block;
          margin-top: 5px;
          color: var(--gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 400;
          font-style: italic;
          letter-spacing: 0;
        }

        /* Readable introduction */
        .glow-intro {
          max-width: 610px;
          margin: 22px auto 0;
          color: #6D5B49;
          font-family: Arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.9;
        }

        /* Service cards */
        .glow-services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .glow-service-card {
          position: relative;
          min-width: 0;
          padding: 13px 13px 24px;
          text-align: center;
          border: 1px solid #FFFFFF;
          border-radius: 18px;
          background: linear-gradient(
            150deg,
            #FFFAF3,
            #F7EDDF
          );
          box-shadow: 0 8px 26px rgba(87, 68, 56, 0.07);
          transition: transform .3s, box-shadow .3s;
        }

        .glow-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 32px rgba(87, 68, 56, 0.12);
        }

        .glow-service-image {
          height: 220px;
          overflow: hidden;
          border-radius: 12px;
          background: #E8D9C5;
        }

        .glow-service-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s;
        }

        .glow-service-card:hover .glow-service-image img {
          transform: scale(1.05);
        }

        /* Champagne icon circle */
        .glow-service-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          margin: -29px auto 8px;
          z-index: 1;
          border: 4px solid #FFFAF3;
          border-radius: 50%;
          background: #EDE1D0;
          color: var(--gold);
          font-size: 25px;
        }

        /* Same Georgia font as About Us benefit headings */
        .glow-service-content h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(19px, 1.55vw, 23px);
          font-weight: 500;
          line-height: 1.4;
          margin: 9px 0 12px;
          color: var(--brown);
        }

        .glow-service-content > p {
          min-height: 74px;
          margin: 0 auto 12px;
          max-width: 270px;
          color: var(--muted);
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.9;
        }

        .glow-gold-line {
          display: block;
          width: 45px;
          height: 1px;
          margin: 14px auto;
          background: var(--gold);
        }

        /* Prices use the same serif font */
        .glow-price {
          display: block;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 29px;
          font-weight: 500;
          color: var(--brown);
        }

        .glow-service-content small {
          display: block;
          margin-top: 5px;
          color: #887967;
          font-family: Arial, sans-serif;
          font-size: 12px;
        }

        /* Champagne-gold button */
        .glow-book-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          width: 85%;
          min-height: 46px;
          margin: 20px auto 0;
          padding: 0 12px;
          border-radius: 5px;
          background: var(--gold);
          color: #FFFFFF;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          transition: background .25s, transform .25s;
        }

        .glow-book-button:hover {
          background: #967348;
          color: #FFFFFF;
          transform: translateY(-2px);
        }

        .glow-book-button span {
          font-size: 19px;
        }

        .glow-services-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin: 38px auto 0;
          color: var(--gold);
          font-size: 23px;
        }

        .glow-services-decoration span {
          width: 80px;
          height: 1px;
          background: var(--gold);
        }

        /* Tablet */
        @media (max-width: 1100px) {
          .glow-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 760px;
            gap: 24px;
          }

          .glow-service-image {
            height: 250px;
          }

          .glow-service-content h2 {
            font-size: 23px;
          }

          .glow-service-content > p {
            min-height: 54px;
            font-size: 15px;
          }
        }

        /* Mobile */
        @media (max-width: 550px) {
          .glow-services {
            padding: 48px 5% 38px;
          }

          .glow-services-heading {
            margin-bottom: 28px;
          }

          .glow-eyebrow {
            font-size: 10px;
            letter-spacing: 2px;
            gap: 10px;
          }

          .glow-eyebrow span {
            width: 28px;
          }

          .glow-services-heading h1 {
            font-size: 39px;
          }

          .glow-services-heading h1 span {
            font-size: 33px;
          }

          .glow-intro {
            font-size: 15px;
            line-height: 1.85;
          }

          .glow-services-grid {
            grid-template-columns: 1fr;
            max-width: 380px;
            gap: 22px;
          }

          .glow-service-card {
            padding: 12px 12px 22px;
          }

          .glow-service-image {
            height: 235px;
          }

          .glow-service-content h2 {
            font-size: 23px;
          }

          .glow-service-content > p {
            min-height: auto;
            font-size: 15px;
            line-height: 1.85;
          }

          .glow-book-button {
            max-width: 260px;
          }
        }
      `}</style>
    </>
  );
}
