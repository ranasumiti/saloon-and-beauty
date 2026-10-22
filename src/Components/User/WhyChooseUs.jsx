
export default function WhyChooseUs() {
  return (
    <>
      <style>{`
        .bg-why {
          display: grid;
          grid-template-columns: .85fr 1.45fr;
          align-items: center;
          gap: 45px;
          padding: 65px 4%;
          background: #fdfaf5;
          color: #594538;
          font-family: Georgia, "Times New Roman", serif;
        }

        .bg-why * { box-sizing: border-box; }

        .bg-why-photo {
          height: 440px;
          overflow: hidden;
          border-radius: 8px 150px 8px 150px;
          background: #e9ddcc;
        }

        .bg-why-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s ease;
        }

        .bg-why-photo:hover img { transform: scale(1.04); }

        .bg-why-label {
          color: #b58a54;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .bg-why-content h2 {
          font-size: clamp(30px, 3vw, 43px);
          line-height: 1.2;
          font-weight: 400;
          margin: 18px 0 12px;
        }

        .bg-why-intro {
          color: #766558;
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 26px;
        }

        .bg-why-cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .bg-why-card {
          text-align: center;
          padding: 20px 12px;
          border: 1px solid #e9ddcc;
          border-radius: 12px;
          background: #fffdf9;
          transition: transform .3s, box-shadow .3s;
        }

        .bg-why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(89, 69, 56, .08);
        }

        .bg-why-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 14px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #f0e4d2;
          color: #936b39;
          font-size: 26px;
        }

        .bg-why-card h3 {
          font-size: 15px;
          line-height: 1.4;
          font-weight: 400;
          margin: 0 0 10px;
        }

        .bg-why-card p {
          color: #766558;
          font-size: 12px;
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 1050px) {
          .bg-why {
            grid-template-columns: .8fr 1.2fr;
            gap: 25px;
          }

          .bg-why-photo {
            height: 380px;
            border-radius: 8px 90px 8px 90px;
          }

          .bg-why-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .bg-why {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 45px 22px;
          }

          .bg-why-photo {
            height: 310px;
            border-radius: 8px 90px 8px 90px;
          }

          .bg-why-content h2 { font-size: 32px; }
          .bg-why-intro { font-size: 14px; }

          .bg-why-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .bg-why-card { padding: 18px 10px; }
          .bg-why-icon { width: 48px; height: 48px; }
        }
      `}</style>

      <section className="bg-why" id="why-choose-us">
        <div className="bg-why-photo">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85"
            alt="Facial treatment at a beauty salon"
          />
        </div>

        <div className="bg-why-content">
          <span className="bg-why-label">Why Choose Us</span>

          <h2>Why You'll Love Beauty & Glow</h2>

          <p className="bg-why-intro">
            We are committed to providing a welcoming,
            relaxing, and personalised beauty experience
            with professional care and attention to detail.
          </p>

          <div className="bg-why-cards">
            <article className="bg-why-card">
              <div className="bg-why-icon">✧</div>
              <h3>Expert Professionals</h3>
              <p>Skilled beauty professionals focused on quality and care.</p>
            </article>

            <article className="bg-why-card">
              <div className="bg-why-icon">❋</div>
              <h3>Personalised Care</h3>
              <p>Treatments tailored to your individual beauty needs.</p>
            </article>

            <article className="bg-why-card">
              <div className="bg-why-icon">✓</div>
              <h3>Clean & Safe</h3>
              <p>A clean, comfortable environment for every visit.</p>
            </article>

            <article className="bg-why-card">
              <div className="bg-why-icon">▦</div>
              <h3>Easy Booking</h3>
              <p>Book your preferred service at a convenient time.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
