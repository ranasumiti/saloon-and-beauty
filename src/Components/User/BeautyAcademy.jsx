
import { Link } from "react-router-dom";

export default function BeautyAcademy() {
  return (
    <>
      <section className="bg-courses" id="courses">
        <div className="bg-courses-heading">
          <div className="bg-courses-eyebrow">
            <span></span>
            OUR COURSES
            <span></span>
          </div>

          <h1>Professional Beauty Courses</h1>

          <p>
            Learn from industry experts and turn your passion for beauty
            into a successful career. Get hands-on training, certification,
            and professional skills.
          </p>
        </div>

        <div className="bg-course-grid">
          {/* Course 1 */}
          <article className="bg-course-card">
            <div className="bg-course-image">
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=700&q=85"
                alt="Makeup artistry and beauty"
                loading="lazy"
              />
            </div>

            <div className="bg-course-icon">
              <span>✧</span>
            </div>

            <div className="bg-course-content">
              <h2>Bridal Makeup Course</h2>

              <p>
                Learn bridal makeup, flawless base techniques,
                party looks, and professional makeup application.
              </p>

              <div className="bg-course-divider"></div>

              <div className="bg-course-details">
                <span><b>◷</b> 2 Months</span>
                <span><b>♧</b> Certification</span>
              </div>

              <Link to="/enroll-course/4" className="bg-course-button">
                Know More <span>→</span>
              </Link>
            </div>
          </article>

          {/* Course 2 */}
          <article className="bg-course-card">
            <div className="bg-course-image">
              <img
                src="https://images.pexels.com/photos/6135681/pexels-photo-6135681.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Professional manicure and nail care"
                loading="lazy"
              />
            </div>

            <div className="bg-course-icon">
              <span>✿</span>
            </div>

            <div className="bg-course-content">
              <h2>Nail Art Course</h2>

              <p>
                Explore manicure, pedicure, nail art designs,
                nail extensions, and professional nail care.
              </p>

              <div className="bg-course-divider"></div>

              <div className="bg-course-details">
                <span><b>◷</b> 1 Month</span>
                <span><b>♧</b> Certification</span>
              </div>

              <Link to="/enroll-course/3" className="bg-course-button">
                Know More <span>→</span>
              </Link>
            </div>
          </article>

          {/* Course 3 */}
          <article className="bg-course-card">
            <div className="bg-course-image">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=85"
                alt="Professional facial skincare treatment"
                loading="lazy"
              />
            </div>

            <div className="bg-course-icon">
              <span>❀</span>
            </div>

            <div className="bg-course-content">
              <h2>Advanced Facial Course</h2>

              <p>
                Learn skin analysis, cleansing, facial techniques,
                and professional skincare treatments.
              </p>

              <div className="bg-course-divider"></div>

              <div className="bg-course-details">
                <span><b>◷</b> 1 Month</span>
                <span><b>♧</b> Certification</span>
              </div>

              <Link to="/enroll-course/1" className="bg-course-button">
                Know More <span>→</span>
              </Link>
            </div>
          </article>

          {/* Course 4 */}
          <article className="bg-course-card">
            <div className="bg-course-image">
              <img
                src="https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Professional hair styling"
                loading="lazy"
              />
            </div>

            <div className="bg-course-icon">
              <span>✂</span>
            </div>

            <div className="bg-course-content">
              <h2>Hair Styling Course</h2>

              <p>
                Practice hair styling, curls, braids, hair spa,
                and professional salon styling techniques.
              </p>

              <div className="bg-course-divider"></div>

              <div className="bg-course-details">
                <span><b>◷</b> 2 Months</span>
                <span><b>♧</b> Certification</span>
              </div>

              <Link to="/enroll-course/2" className="bg-course-button">
                Know More <span>→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <style>{`
        .bg-courses {
          --course-cream: #fffaf5;
          --course-card: #fffaf2;
          --course-gold: #b89563;
          --course-gold-hover: #a78352;
          --course-brown: #503b38;
          --course-muted: #806b66;

          padding: 65px 4% 75px;
          background:
            radial-gradient(
              ellipse at 0% 35%,
              #f2e3dc 0%,
              transparent 30%
            ),
            radial-gradient(
              ellipse at 100% 70%,
              #f3e6dc 0%,
              transparent 30%
            ),
            linear-gradient(135deg, #fffaf5, #f7eee7);
          color: var(--course-brown);
          font-family: Arial, sans-serif;
          overflow: hidden;
        }

        .bg-courses-heading {
          max-width: 780px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .bg-courses-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin-bottom: 16px;
          color: var(--course-gold);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 4px;
        }

        .bg-courses-eyebrow span {
          width: 48px;
          height: 1px;
          background: var(--course-gold);
        }

        .bg-courses-heading h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(35px, 4vw, 54px);
          font-weight: 400;
          letter-spacing: -0.7px;
          line-height: 1.2;
          margin: 0 0 18px;
          color: var(--course-brown);
        }

        .bg-courses-heading > p {
          max-width: 680px;
          margin: auto;
          color: var(--course-muted);
          font-family: Arial, sans-serif;
          font-size: 15px;
          line-height: 1.9;
        }

        .bg-course-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          max-width: 1450px;
          margin: auto;
          align-items: stretch;
        }

        .bg-course-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 10px 10px 22px;
          background: linear-gradient(145deg, #fffaf3, #f9f0e7);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(80, 59, 56, 0.07);
          text-align: center;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .bg-course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(80, 59, 56, 0.13);
        }

        .bg-course-image {
          width: 100%;
          height: 230px;
          overflow: hidden;
          border-radius: 7px;
          background: #f0e2d9;
        }

        .bg-course-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.45s ease;
        }

        .bg-course-card:hover .bg-course-image img {
          transform: scale(1.04);
        }

        .bg-course-icon {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          margin: -32px auto 8px;
          border: 4px solid #fffaf2;
          border-radius: 50%;
          background: #f5e9df;
          color: var(--course-gold);
        }

        .bg-course-icon span {
          font-size: 29px;
          line-height: 1;
        }

        .bg-course-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 0 9px;
        }

        .bg-course-content h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(18px, 1.45vw, 22px);
          font-weight: 400;
          line-height: 1.4;
          margin: 5px 0 12px;
          color: var(--course-brown);
        }

        .bg-course-content > p {
          min-height: 78px;
          margin: 0;
          color: var(--course-muted);
          font-family: Arial, sans-serif;
          font-size: 13px;
          line-height: 1.8;
        }

        .bg-course-divider {
          width: 45px;
          height: 1px;
          flex-shrink: 0;
          margin: 17px auto;
          background: #c9a77e;
        }

        .bg-course-details {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
          color: var(--course-brown);
          font-family: Arial, sans-serif;
          font-size: 12px;
        }

        .bg-course-details span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .bg-course-details span + span {
          padding-left: 10px;
          border-left: 1px solid #e6d4c5;
        }

        .bg-course-details b {
          color: var(--course-gold);
          font-size: 18px;
          font-weight: 400;
        }

        /* Champagne-gold Know More button */
        .bg-course-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          width: 100%;
          min-height: 46px;
          margin-top: auto;
          padding: 10px 12px;
          border: 1px solid var(--course-gold);
          border-radius: 4px;
          background: var(--course-gold);
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          box-sizing: border-box;
          transition: all 0.3s ease;
        }

        .bg-course-button:hover {
          background: var(--course-gold-hover);
          border-color: var(--course-gold-hover);
          color: #ffffff;
        }

        .bg-course-button span {
          font-size: 20px;
          transition: transform 0.2s ease;
        }

        .bg-course-button:hover span {
          transform: translateX(4px);
        }

        @media (max-width: 1100px) {
          .bg-course-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 780px;
            gap: 22px;
          }

          .bg-course-image {
            height: 250px;
          }

          .bg-course-content h2 {
            font-size: 22px;
          }

          .bg-course-content > p {
            min-height: 60px;
            font-size: 14px;
          }

          .bg-course-details {
            font-size: 13px;
          }
        }

        @media (max-width: 560px) {
          .bg-courses {
            padding: 42px 5% 50px;
          }

          .bg-courses-heading {
            margin-bottom: 28px;
          }

          .bg-courses-eyebrow {
            gap: 10px;
            font-size: 10px;
            letter-spacing: 3px;
          }

          .bg-courses-eyebrow span {
            width: 30px;
          }

          .bg-courses-heading h1 {
            font-size: 34px;
          }

          .bg-courses-heading > p {
            font-size: 14px;
          }

          .bg-course-grid {
            grid-template-columns: 1fr;
            max-width: 380px;
            gap: 22px;
          }

          .bg-course-card {
            padding: 10px 10px 20px;
          }

          .bg-course-image {
            height: 245px;
          }

          .bg-course-content h2 {
            font-size: 23px;
          }

          .bg-course-content > p {
            min-height: auto;
            margin-bottom: 5px;
            font-size: 14px;
          }

          .bg-course-divider {
            margin: 16px auto;
          }

          .bg-course-details {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
}
