
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <>
      <style>{`
        .bg-about {
          background: #f8f3eb;
          color: #594538;
          display: grid;
          grid-template-columns: 1.1fr .9fr 1.3fr;
          gap: 30px;
          padding-left: 4%;
          font-family: Georgia, "Times New Roman", serif;
          overflow: hidden;
        }

        .bg-about * { box-sizing: border-box; }

        .bg-about-text { padding: 65px 0; }

        .bg-about-label {
          color: #b58a54;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .bg-about h2 {
          font-size: clamp(32px, 3vw, 46px);
          font-weight: 400;
          line-height: 1.15;
          margin: 20px 0;
        }

        .bg-about h2 em { color: #a9804c; }

        .bg-about p {
          color: #766558;
          font-size: 15px;
          line-height: 1.9;
        }

        .bg-about-btn {
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          padding: 14px 22px;
          background: #b58a54;
          color: white;
          text-decoration: none;
          margin-top: 12px;
          border-radius: 3px;
          transition: .3s;
        }

        .bg-about-btn:hover { background: #594538; }

        .bg-about-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 25px 0;
        }

        .bg-about-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 17px 0;
          border-bottom: 1px solid #e9ddcc;
        }

        .bg-about-item:last-child { border-bottom: 0; }

        .bg-about-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #f0e4d2;
          color: #936b39;
          font-size: 25px;
        }

        .bg-about-item h3 {
          margin: 0 0 6px;
          font-size: 17px;
          font-weight: 400;
        }

        .bg-about-item p {
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
        }

        .bg-about-photo {
        margin-top:40px;
          min-height: 470px;
          overflow: hidden;
          border-radius: 140px 0 0 140px;
        }

        .bg-about-photo img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 470px;
          object-fit: cover;
        }

        @media (max-width: 1050px) {
          .bg-about {
            grid-template-columns: 1fr 1fr;
            padding-left: 5%;
            gap: 25px;
          }

          .bg-about-text { padding: 45px 0; }
          .bg-about-list { padding-right: 5%; }

          .bg-about-photo {
            grid-column: 1 / -1;
            min-height: 350px;
            border-radius: 80px 0 0 0;
          }

          .bg-about-photo img { min-height: 350px; }
        }

        @media (max-width: 600px) {
          .bg-about {
            grid-template-columns: 1fr;
            padding: 0 22px;
            gap: 0;
          }

          .bg-about-text { padding: 45px 0 20px; }
          .bg-about h2 { font-size: 34px; }
          .bg-about p { font-size: 14px; }

          .bg-about-list { padding: 10px 0 25px; }

          .bg-about-photo {
            grid-column: auto;
            min-height: 300px;
            margin-right: -22px;
            border-radius: 70px 0 0 0;
          }

          .bg-about-photo img { min-height: 300px; }
        }
      `}</style>

      <section className="bg-about" id="about">
        <div className="bg-about-text">
          <span className="bg-about-label">About Us</span>

          <h2>
            More Than a Salon,
            <br />
            <em>A Place to Feel You</em>
          </h2>

          <p>
            At Beauty & Glow, we believe beauty is more than
            just a look — it is a feeling. Our salon and academy
            are built on a passion for self-care, confidence,
            and personal growth. We offer beauty services and
            courses designed to help you look and feel your best.
          </p>

          <Link to="/About" className="bg-about-btn">
            Our Story <span>→</span>
          </Link>
        </div>

        <div className="bg-about-list">
          <div className="bg-about-item">
            <div className="bg-about-icon">✿</div>
            <div>
              <h3>Our Mission</h3>
              <p>To make beauty and self-care accessible for everyone.</p>
            </div>
          </div>

          <div className="bg-about-item">
            <div className="bg-about-icon">♧</div>
            <div>
              <h3>Our Team</h3>
              <p>A passionate team dedicated to your beauty and confidence.</p>
            </div>
          </div>

          <div className="bg-about-item">
            <div className="bg-about-icon">◇</div>
            <div>
              <h3>Our Services</h3>
              <p>Salon treatments and beauty courses under one roof.</p>
            </div>
          </div>

          <div className="bg-about-item">
            <div className="bg-about-icon">♡</div>
            <div>
              <h3>Our Values</h3>
              <p>Quality, hygiene, and your happiness always come first.</p>
            </div>
          </div>
        </div>

        <div className="bg-about-photo">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
            alt="Beauty salon interior"
          />
        </div>
      </section>
    </>
  );
}
