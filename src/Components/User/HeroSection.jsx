
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <section className="glow-hero">
        <div className="glow-hero-background"></div>
        <div className="glow-hero-overlay"></div>

        <div className="glow-hero-content">
          <p className="glow-hero-eyebrow">
            BEAUTY SALON & ACADEMY
            <span></span>
          </p>

          <h1>
            Enhance Your
            <span>Natural Beauty</span>
          </h1>

          <p className="glow-hero-description">
            Experience professional beauty services and expert
            training at Beauty & Glow. Your beauty, our passion.
          </p>

          <div className="glow-hero-actions">
            <Link to="/bookappointment" className="glow-hero-primary">
              Book Appointment <span>→</span>
            </Link>

            <Link to="/services" className="glow-hero-secondary">
              <span className="glow-play">▶</span>
              Explore Services
            </Link>
          </div>

          <div className="glow-hero-features">
            <div className="glow-hero-feature">
              <span className="glow-feature-icon">❋</span>
              <p>Professional<br />Services</p>
            </div>

            <div className="glow-hero-feature">
              <span className="glow-feature-icon">♧</span>
              <p>Beauty<br />Courses</p>
            </div>

            <div className="glow-hero-feature">
              <span className="glow-feature-icon">♙</span>
              <p>Expert<br />Trainers</p>
            </div>

            <div className="glow-hero-feature">
              <span className="glow-feature-icon">✧</span>
              <p>Premium<br />Experience</p>
            </div>
          </div>

          <a href="#services" className="glow-scroll">
            <span className="glow-scroll-mouse">↓</span>
            SCROLL TO EXPLORE
          </a>
        </div>
        <br/>
      </section>

      <style>{`
        .glow-hero {
          position: relative;
          min-height: calc(100vh - 102px);
          display: flex;
          align-items: center;
          padding: 55px 8%;
          margin: 0;
          overflow: hidden;
          background: #fffaf5;
          isolation: isolate;
          box-sizing: border-box;
        }

        .glow-hero *,
        .glow-hero *::before,
        .glow-hero *::after {
          box-sizing: border-box;
        }

        .glow-hero-background {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image: url("public/images/Luxurious Sunlit Beauty Salon.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .glow-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            90deg,
            rgba(255, 250, 245, 0.98) 0%,
            rgba(255, 250, 245, 0.94) 30%,
            rgba(255, 250, 245, 0.78) 46%,
            rgba(255, 250, 245, 0.22) 72%,
            rgba(255, 250, 245, 0.06) 100%
          );
          pointer-events: none;
        }

        .glow-hero-content {
          width: 58%;
          max-width: 740px;
          position: relative;
          z-index: 1;
        }

        .glow-hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #b89563;
          font-family: Arial, sans-serif;
          font-size: 13px;
          letter-spacing: 4px;
          margin: 0 0 24px;
        }

        .glow-hero-eyebrow span {
          width: 65px;
          height: 1px;
          background: #b89563;
        }

        .glow-hero-content h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 5.5vw, 78px);
          line-height: 1.05;
          font-weight: 400;
          letter-spacing: -2px;
          color: #503b38;
          margin: 0 0 22px;
        }

        .glow-hero-content h1 span {
          display: block;
          margin-top: 8px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(43px, 5.2vw, 74px);
          line-height: 1.15;
          font-weight: 400;
          font-style: italic;
          letter-spacing: -1px;
          color: #b89563;
        }

        .glow-hero-description {
          max-width: 550px;
          color: #6d5750;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 0 28px;
        }

        .glow-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 22px;
          margin-bottom: 38px;
        }

        .glow-hero-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          min-height: 55px;
          padding: 0 25px;
          background: #b89563;
          color: #ffffff;
          border: 1px solid #b89563;
          border-radius: 4px;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          transition: background 0.25s, transform 0.25s;
        }

        .glow-hero-primary:hover {
          background: #503b38;
          border-color: #503b38;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .glow-hero-primary span {
          font-size: 21px;
        }

        .glow-hero-secondary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #503b38;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: 14px;
          transition: color 0.25s;
        }

        .glow-hero-secondary:hover {
          color: #b89563;
        }

        .glow-play {
          width: 47px;
          height: 47px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #b89563;
          border-radius: 50%;
          color: #b89563;
          background: rgba(255, 250, 245, 0.8);
          font-size: 12px;
          transition: background 0.25s;
        }

        .glow-hero-secondary:hover .glow-play {
          background: #f0e4d5;
        }

        .glow-hero-features {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          max-width: 600px;
        }

        .glow-hero-feature {
          text-align: center;
          padding: 0 10px;
          border-right: 1px solid #dfcdb9;
        }

        .glow-hero-feature:first-child {
          padding-left: 0;
        }

        .glow-hero-feature:last-child {
          border-right: none;
        }

        .glow-feature-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          margin: auto;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          background: rgba(243, 231, 218, 0.95);
          color: #b89563;
          font-size: 27px;
        }

        .glow-hero-feature p {
          margin: 10px 0 0;
          color: #503b38;
          font-family: Arial, sans-serif;
          font-size: 12px;
          line-height: 1.5;
        }

        .glow-scroll {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
          color: #806b66;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .glow-scroll-mouse {
          width: 30px;
          height: 30px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #b89563;
          border-radius: 50%;
          font-size: 17px;
        }

        @media (max-width: 900px) {
          .glow-hero {
            min-height: calc(100vh - 102px);
            padding: 55px 6%;
          }

          .glow-hero-content {
            width: 70%;
          }

          .glow-hero-background {
            background-position: 60% center;
          }

          .glow-hero-content h1 {
            font-size: 56px;
          }

          .glow-hero-content h1 span {
            font-size: 48px;
          }
        }

        @media (max-width: 600px) {
          .glow-hero {
            min-height: 750px;
            align-items: flex-start;
            padding: 55px 6% 35px;
          }

          .glow-hero-background {
            background-position: 62% center;
          }

          .glow-hero-overlay {
            background: linear-gradient(
              180deg,
              rgba(255, 250, 245, 0.98) 0%,
              rgba(255, 250, 245, 0.93) 48%,
              rgba(255, 250, 245, 0.65) 100%
            );
          }

          .glow-hero-content {
            width: 100%;
          }

          .glow-hero-eyebrow {
            font-size: 10px;
            letter-spacing: 2px;
            gap: 10px;
          }

          .glow-hero-eyebrow span {
            width: 35px;
          }

          .glow-hero-content h1 {
            font-size: 43px;
            letter-spacing: -1px;
          }

          .glow-hero-content h1 span {
            font-size: 39px;
            letter-spacing: 0;
          }

          .glow-hero-description {
            font-size: 14px;
          }

          .glow-hero-actions {
            gap: 14px;
            margin-bottom: 30px;
          }

          .glow-hero-primary {
            min-height: 48px;
            padding: 0 15px;
            font-size: 12px;
          }

          .glow-hero-secondary {
            gap: 7px;
            font-size: 12px;
          }

          .glow-play {
            width: 38px;
            height: 38px;
          }

          .glow-hero-features {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 3px;
          }

          .glow-hero-feature {
            padding: 0 3px;
          }

          .glow-feature-icon {
            width: 42px;
            height: 42px;
            font-size: 20px;
          }

          .glow-hero-feature p {
            font-size: 9px;
          }

          .glow-scroll {
            margin-top: 28px;
          }
        }
      `}</style>
    </>
  );
}
