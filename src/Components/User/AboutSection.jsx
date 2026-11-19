
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <>
      <style>{`

        .elora-about,
        .elora-about * {
          box-sizing: border-box;
        }

        .elora-about {
          width: 100%;
          overflow: hidden;
          background: #fbf7f0;
          color: #594538;
          font-family: Georgia, "Times New Roman", serif;
        }

        /* HERO SECTION */

        .about-hero {
          min-height: 480px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 45px;
          padding: 65px 7%;
        }

        .about-hero-content {
          max-width: 570px;
        }

        .about-label {
          color: #b58a54;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .about-hero h1 {
          font-size: clamp(38px, 4.5vw, 62px);
          font-weight: 400;
          line-height: 1.15;
          margin: 20px 0;
          color: #493529;
        }

        .about-hero h1 em {
          color: #b58a54;
        }

        .about-hero p {
          color: #766558;
          font-size: 16px;
          line-height: 1.9;
          max-width: 500px;
        }

        .about-main-btn {
          display: inline-flex;
          align-items: center;
          gap: 25px;
          padding: 15px 25px;
          margin-top: 18px;
          background: #58371f;
          color: white;
          text-decoration: none;
          border-radius: 3px;
          transition: .3s;
        }

        .about-main-btn:hover {
          background: #b58a54;
        }

        .about-hero-image {
          height: 390px;
          overflow: hidden;
          border-radius: 180px 180px 5px 5px;
        }

        .about-hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* STORY SECTION */

        .about-story {
          background: #f1e7d9;
          padding: 75px 8%;
          text-align: center;
        }

        .about-story h2 {
          font-size: clamp(30px, 3.5vw, 43px);
          font-weight: 400;
          margin: 17px 0;
          color: #493529;
        }

        .about-story h2 em {
          color: #a9804c;
        }

        .about-story p {
          max-width: 850px;
          margin: auto;
          color: #766558;
          font-size: 15px;
          line-height: 2;
        }

        /* VIDEO SECTION */

        .about-learning {
          padding: 85px 7%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
        }

        .about-video {
          position: relative;
          min-height: 350px;
          overflow: hidden;
          border-radius: 5px 100px 5px 5px;
          background: #e9ddcc;
          box-shadow: 0 15px 35px rgba(74,48,30,.13);
        }

        .about-video video {
          width: 100%;
          height: 100%;
          min-height: 350px;
          object-fit: cover;
          display: block;
        }

        .about-learning-content h2 {
          font-size: clamp(30px, 3.5vw, 44px);
          line-height: 1.2;
          font-weight: 400;
          margin: 18px 0;
        }

        .about-learning-content h2 em {
          color: #a9804c;
        }

        .about-learning-content p {
          font-size: 15px;
          line-height: 1.9;
          color: #766558;
        }

        .learning-points {
          margin-top: 22px;
          display: grid;
          gap: 15px;
        }

        .learning-point {
          display: flex;
          align-items: center;
          gap: 13px;
          color: #594538;
          font-size: 15px;
        }

        .learning-point span {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #ead8bd;
          color: #936b39;
        }

        /* COURSES / LEARNING */

        .about-courses {
          padding: 75px 7%;
          background: #fffaf3;
          text-align: center;
        }

        .about-courses h2 {
          font-size: clamp(30px, 3.5vw, 43px);
          font-weight: 400;
          margin: 15px 0;
        }

        .about-courses h2 em {
          color: #a9804c;
        }

        .about-subtitle {
          max-width: 650px;
          margin: 0 auto 40px;
          color: #766558;
          line-height: 1.8;
          font-size: 15px;
        }

        .about-course-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .about-course-card {
          background: #f8f1e7;
          text-align: left;
          overflow: hidden;
          border-radius: 5px;
          transition: .3s;
        }

        .about-course-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 12px 25px rgba(74,48,30,.12);
        }

        .about-course-card img {
          width: 100%;
          height: 210px;
          display: block;
          object-fit: cover;
        }

        .about-course-card div {
          padding: 20px;
        }

        .about-course-card h3 {
          font-size: 19px;
          font-weight: 400;
          margin: 0 0 10px;
          color: #493529;
        }

        .about-course-card p {
          color: #766558;
          font-size: 13px;
          line-height: 1.8;
          margin: 0;
        }

        /* WHY CHOOSE US */

        .about-why {
          padding: 80px 7%;
          background: #f1e7d9;
          text-align: center;
        }

        .about-why h2 {
          font-size: clamp(30px, 3.5vw, 43px);
          font-weight: 400;
          margin: 15px 0 40px;
        }

        .about-why h2 em {
          color: #a9804c;
        }

        .about-why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .about-why-card {
          padding: 28px 20px;
          background: #fbf7f0;
          border: 1px solid #e9ddcc;
          border-radius: 5px;
        }

        .about-why-icon {
          width: 55px;
          height: 55px;
          display: grid;
          place-items: center;
          margin: 0 auto 18px;
          border-radius: 50%;
          background: #ead8bd;
          color: #936b39;
          font-size: 25px;
        }

        .about-why-card h3 {
          font-size: 18px;
          font-weight: 400;
          margin: 0 0 10px;
        }

        .about-why-card p {
          font-size: 13px;
          line-height: 1.8;
          color: #766558;
          margin: 0;
        }

        /* GALLERY */

        .about-gallery {
          padding: 80px 7%;
          text-align: center;
          background: #fbf7f0;
        }

        .about-gallery h2 {
          font-size: clamp(30px, 3.5vw, 43px);
          font-weight: 400;
          margin: 15px 0 35px;
        }

        .about-gallery h2 em {
          color: #a9804c;
        }

        .about-gallery-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          grid-template-rows: 220px 220px;
          gap: 15px;
        }

        .about-gallery-grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
          display: block;
        }

        .about-gallery-grid img:first-child {
          grid-row: span 2;
        }

        /* CTA */

        .about-cta {
          padding: 75px 20px;
          text-align: center;
          background: #58371f;
          color: #fffaf3;
        }

        .about-cta h2 {
          font-size: clamp(30px, 3.5vw, 43px);
          font-weight: 400;
          margin: 15px 0;
        }

        .about-cta p {
          color: #ead8bd;
          font-size: 15px;
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto 25px;
        }

        .about-cta a {
          display: inline-block;
          padding: 14px 28px;
          color: #493529;
          background: #ead2a6;
          text-decoration: none;
          border-radius: 3px;
          transition: .3s;
        }

        .about-cta a:hover {
          background: white;
        }

        /* TABLET */

        @media (max-width: 1024px) {

          .about-hero {
            padding: 55px 5%;
            gap: 25px;
          }

          .about-hero-image {
            height: 340px;
          }

          .about-learning {
            padding: 65px 5%;
            gap: 30px;
          }

          .about-course-grid,
          .about-why-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-gallery-grid {
            grid-template-rows: 190px 190px;
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {

          .about-hero {
            grid-template-columns: 1fr;
            padding: 45px 6%;
            gap: 30px;
          }

          .about-hero-content {
            max-width: 100%;
          }

          .about-hero-image {
            height: 330px;
            border-radius: 100px 100px 5px 5px;
          }

          .about-story {
            padding: 55px 7%;
          }

          .about-learning {
            grid-template-columns: 1fr;
            padding: 60px 6%;
            gap: 30px;
          }

          .about-video,
          .about-video video {
            min-height: 280px;
          }

          .about-courses,
          .about-why,
          .about-gallery {
            padding: 60px 6%;
          }

          .about-gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 230px 170px;
          }

          .about-gallery-grid img:first-child {
            grid-row: auto;
            grid-column: 1 / -1;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 480px) {

          .about-hero {
            padding: 38px 20px;
          }

          .about-hero h1 {
            font-size: 36px;
          }

          .about-hero p,
          .about-story p,
          .about-learning-content p {
            font-size: 14px;
          }

          .about-hero-image {
            height: 270px;
          }

          .about-story {
            padding: 45px 22px;
          }

          .about-learning {
            padding: 50px 20px;
          }

          .about-video,
          .about-video video {
            min-height: 230px;
          }

          .about-course-grid,
          .about-why-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .about-course-card img {
            height: 220px;
          }

          .about-courses,
          .about-why,
          .about-gallery {
            padding: 50px 20px;
          }

          .about-gallery-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 220px);
          }

          .about-gallery-grid img:first-child {
            grid-column: auto;
          }

          .about-cta {
            padding: 55px 22px;
          }
        }

        /* EXTRA SMALL MOBILE */

        @media (max-width: 360px) {

          .about-hero h1 {
            font-size: 31px;
          }

          .about-hero-image {
            height: 230px;
          }

          .about-video,
          .about-video video {
            min-height: 200px;
          }

          .about-label {
            font-size: 10px;
            letter-spacing: 3px;
          }

          .about-main-btn {
            padding: 13px 18px;
          }
        }

      `}</style>

      <main className="elora-about">

        {/* HERO */}
        <section className="about-hero">

          <div className="about-hero-content">
            <span className="about-label">Welcome to Elora Beauty Academy</span>

            <h1>
              Beauty Begins With
              <br />
              <em>Knowledge & Confidence</em>
            </h1>

            <p>
              At Elora Beauty Academy, we believe beauty is an art
              that grows with knowledge, creativity and practice.
              We bring professional beauty services and practical
              beauty education together in one inspiring space.
            </p>

            <Link to="/beauty" className="about-main-btn">
              Explore Our Courses <span>→</span>
            </Link>
          </div>

          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1100&q=85"
              alt="Elegant beauty salon"
            />
          </div>

        </section>

        {/* OUR STORY */}
        <section className="about-story">

          <span className="about-label">Our Story</span>

          <h2>
            A Place Where Beauty Meets
            <br />
            <em>Learning & Creativity</em>
          </h2>

          <p>
            Elora Beauty Academy is designed for people who love
            beauty, creativity and self-growth. Our vision is to
            create a welcoming space where students can learn
            beauty techniques, develop practical skills and build
            confidence through guided learning. Along with our
            academy, we also focus on professional salon services
            and a comfortable beauty experience.
          </p>

        </section>

        {/* TEACHER AND STUDENT VIDEO */}
        <section className="about-learning">

          <div className="about-video">
            <video
              controls
              muted
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85"
            >
              <source
                src="/videos/beauty-training.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="about-learning-content">

            <span className="about-label">Learn With Confidence</span>

            <h2>
              Learn Today,
              <br />
              <em>Create Beauty Tomorrow</em>
            </h2>

            <p>
              Learning beauty is not just about watching.
              It is about understanding techniques, practising
              with guidance and developing your own creativity.
              Our learning approach focuses on practical
              demonstrations and individual skill development.
            </p>

            <div className="learning-points">

              <div className="learning-point">
                <span>✓</span>
                Instructor-guided learning
              </div>

              <div className="learning-point">
                <span>✓</span>
                Practical beauty demonstrations
              </div>

              <div className="learning-point">
                <span>✓</span>
                Hands-on skill development
              </div>

              <div className="learning-point">
                <span>✓</span>
                Confidence and creativity
              </div>

            </div>

            <Link to="/beauty" className="about-main-btn">
              Discover Courses <span>→</span>
            </Link>

          </div>

        </section>

        {/* WHAT STUDENTS LEARN */}
        <section className="about-courses">

          <span className="about-label">Explore Your Passion</span>

          <h2>
            What You Can <em>Learn</em>
          </h2>

          <p className="about-subtitle">
            Explore different areas of beauty education and
            develop skills through learning and practice.
          </p>

          <div className="about-course-grid">

            <div className="about-course-card">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=85"
                alt="Makeup artistry"
              />
              <div>
                <h3>Makeup Artistry</h3>
                <p>
                  Explore makeup techniques, colour combinations
                  and creative looks.
                </p>
              </div>
            </div>

            <div className="about-course-card">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=85"
                alt="Skincare treatment"
              />
              <div>
                <h3>Skin Care</h3>
                <p>
                  Understand skincare routines, facial treatments
                  and skin care techniques.
                </p>
              </div>
            </div>

            <div className="about-course-card">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=700&q=85"
                alt="Hair styling"
              />
              <div>
                <h3>Hair Styling</h3>
                <p>
                  Learn hairstyling basics, styling methods
                  and creative hair looks.
                </p>
              </div>
            </div>

            <div className="about-course-card">
              <img
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=700&q=85"
                alt="Beauty products and tools"
              />
              <div>
                <h3>Beauty Essentials</h3>
                <p>
                  Learn about beauty tools, products,
                  hygiene and professional care.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* WHY CHOOSE ELORA */}
        <section className="about-why">

          <span className="about-label">The Elora Experience</span>

          <h2>
            Why Learn With <em>Us?</em>
          </h2>

          <div className="about-why-grid">

            <div className="about-why-card">
              <div className="about-why-icon">✿</div>
              <h3>Practical Learning</h3>
              <p>
                Learn techniques through demonstrations
                and practical activities.
              </p>
            </div>

            <div className="about-why-card">
              <div className="about-why-icon">♧</div>
              <h3>Expert Guidance</h3>
              <p>
                Learn step by step with guidance
                and support from instructors.
              </p>
            </div>

            <div className="about-why-card">
              <div className="about-why-icon">◇</div>
              <h3>Creative Skills</h3>
              <p>
                Discover your creativity and develop
                your personal beauty skills.
              </p>
            </div>

            <div className="about-why-card">
              <div className="about-why-icon">♡</div>
              <h3>Hygiene & Care</h3>
              <p>
                Understand cleanliness, product care
                and professional practices.
              </p>
            </div>

          </div>

        </section>

        {/* GALLERY */}
        <section className="about-gallery">

          <span className="about-label">Inside Elora</span>

          <h2>
            Beauty, Learning & <em>Inspiration</em>
          </h2>

          <div className="about-gallery-grid">

            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85"
              alt="Beauty makeup session"
            />

            <img
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=85"
              alt="Beauty products"
            />

            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=700&q=85"
              alt="Beauty salon environment"
            />

          </div>

        </section>

        {/* CTA */}
        <section className="about-cta">

          <span className="about-label">Your Journey Starts Here</span>

          <h2>Ready to Discover Your Beauty Skills?</h2>

          <p>
            Take the next step towards learning, creativity
            and confidence. Explore our beauty courses
            and find the right learning journey for you.
          </p>

          <Link to="/beauty">
            Explore Our Courses →
          </Link>

        </section>

      </main>
    </>
  );
}
