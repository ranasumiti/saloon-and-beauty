
import { useEffect, useState } from "react";
import { AllCourse } from "../../services/AdminService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function BeautyAcademy() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchcourse();
  }, []);

  const fetchcourse = async () => {
    try {
      setLoading(true);

      const res = await AllCourse({});

      console.log("All Courses:", res.data);

      if (res.data.status === true || res.data.success === true) {
        setCourses(res.data.data || []);
      } else {
        setCourses([]);
        toast.error(res.data.message || "Unable to load courses");
      }

    } catch (error) {
      console.log("Course Error:", error.response?.data || error);
      toast.error("Unable to load courses");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="academy-courses">

      <div className="academy-heading">

        <div className="academy-eyebrow">
          <span></span>
          BEAUTY & GLOW ACADEMY
          <span></span>
        </div>

        <h1>
          Discover Our
          <span> Beauty Courses</span>
        </h1>

        <p>
          Learn professional beauty techniques, enhance your skills
          and build your career with our expert-designed courses.
        </p>

      </div>

      {loading ? (
        <p className="academy-message">Loading courses...</p>
      ) : courses.length === 0 ? (
        <p className="academy-message">No courses available.</p>
      ) : (
        <div className="academy-course-grid">

          {courses.map((course) => (
            <div className="academy-course-card" key={course._id}>

              <div className="academy-course-image">
                <img
                  src={course.image}
                  alt={course.courseName}
                />
              </div>

              <div className="academy-course-icon">
                ✧
              </div>

              <div className="academy-course-content">

                <h2>{course.courseName}</h2>

                <p>{course.description}</p>

                <span className="academy-gold-line"></span>

                <strong className="academy-course-price">
                  ₹{course.fee}
                </strong>

                <small>
                  Duration: {course.duration}
                </small>

                <Link to={`/coursedetails/${course._id}`}
                   className="academy-course-button">
                  Explore Course <span>→</span>
                </Link>

              </div>

            </div>
          ))}

        </div>
      )}

      <div className="academy-decoration">
        <span></span>
        ✧
        <span></span>
      </div>

      <style>{`
        .academy-courses {
          --cream: #F8F3EB;
          --gold: #B89462;
          --brown: #574438;
          --muted: #817060;

          padding: 75px 5% 55px;
          background: linear-gradient(135deg, #F8F3EB, #F4E9D8);
          min-height: 400px;
          color: var(--brown);
          font-family: Arial, sans-serif;
        }

        .academy-courses *,
        .academy-courses *::before,
        .academy-courses *::after {
          box-sizing: border-box;
        }

        .academy-heading {
          max-width: 720px;
          margin: 0 auto 38px;
          text-align: center;
        }

        .academy-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          color: #A17A48;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
          margin-bottom: 12px;
        }

        .academy-eyebrow span {
          width: 48px;
          height: 1px;
          background: var(--gold);
        }

        .academy-heading h1 {
          font-family: Georgia, serif;
          font-size: clamp(42px, 5vw, 66px);
          font-weight: 500;
          line-height: 1.12;
          margin: 0;
        }

        .academy-heading h1 span {
          display: block;
          margin-top: 5px;
          color: var(--gold);
          font-size: clamp(34px, 4vw, 52px);
          font-style: italic;
          font-weight: 400;
        }

        .academy-heading p {
          max-width: 610px;
          margin: 22px auto 0;
          color: #6D5B49;
          font-size: 16px;
          line-height: 1.9;
        }

        .academy-course-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: auto;
        }

        .academy-course-card {
          min-width: 0;
          padding: 13px 13px 24px;
          text-align: center;
          border: 1px solid white;
          border-radius: 18px;
          background: linear-gradient(150deg, #FFFAF3, #F7EDDF);
          box-shadow: 0 8px 26px rgba(87,68,56,.07);
          transition: .3s;
          overflow: hidden;
        }

        .academy-course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 32px rgba(87,68,56,.12);
        }

        .academy-course-image {
          height: 220px;
          overflow: hidden;
          border-radius: 12px;
        }

        .academy-course-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: .5s;
        }

        .academy-course-card:hover img {
          transform: scale(1.05);
        }

        .academy-course-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          margin: -29px auto 8px;
          position: relative;
          border: 4px solid #FFFAF3;
          border-radius: 50%;
          background: #EDE1D0;
          color: var(--gold);
          font-size: 25px;
        }

        .academy-course-content h2 {
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 500;
          line-height: 1.4;
          margin: 9px 0 12px;
        }

        .academy-course-content > p {
          min-height: 74px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .academy-gold-line {
          display: block;
          width: 45px;
          height: 1px;
          margin: 14px auto;
          background: var(--gold);
        }

        .academy-course-price {
          display: block;
          font-family: Georgia, serif;
          font-size: 29px;
          font-weight: 500;
          color: var(--brown);
        }

        .academy-course-content small {
          display: block;
          margin-top: 5px;
          color: #887967;
          font-size: 12px;
        }

        .academy-course-button {
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
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: .25s;
        }

        .academy-course-button:hover {
          background: #967348;
          color: white;
          transform: translateY(-2px);
        }

        .academy-course-button span {
          font-size: 19px;
        }

        .academy-message {
          text-align: center;
          padding: 35px;
          color: var(--muted);
        }

        .academy-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin: 38px auto 0;
          color: var(--gold);
          font-size: 23px;
        }

        .academy-decoration span {
          width: 80px;
          height: 1px;
          background: var(--gold);
        }

        @media(max-width: 1100px) {
          .academy-course-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 760px;
          }

          .academy-course-image {
            height: 250px;
          }
        }

        @media(max-width: 550px) {
          .academy-courses {
            padding: 48px 5% 38px;
          }

          .academy-course-grid {
            grid-template-columns: 1fr;
            max-width: 380px;
            gap: 22px;
          }

          .academy-course-image {
            height: 235px;
          }

          .academy-course-content > p {
            min-height: auto;
          }

          .academy-course-button {
            max-width: 260px;
          }
        }
      `}</style>

    </div>
  );
}
