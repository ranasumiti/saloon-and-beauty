
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Updatecoure } from "../../services/AdminService";




export default function CourseDetails() {

  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchcourse();
  }, [id]);

  const fetchcourse = async() => {
    try {
      setLoading(true);
      setCourse(null);

      const res = await Updatecoure ({});

      console.log("Courses:", res.data);

      
    if (res.data.success) {
      setCourse(res.data.data);
    } else {
      setService(null);
    }

  } catch (error) {
    console.log("course Error:", error.message);
    setCourse(null);

  } finally {
    setLoading(false);
  }
};

  if (loading) {
  return (
    <div className="course-loader">
      <div className="course-spinner"></div>
      <p>Preparing Your Experience...</p>
    </div>
  );
}

if (!course) {
  return <h2>course Not Found</h2>;
}
       

 

  return (
    <div className="course-details">

      <div className="course-details-container">

        <div className="course-details-image">
          <img
            src={course.image}
            alt={course.courseName}
          />
        </div>

        <div className="course-details-content">

          <span className="course-details-label">
            BEAUTY & GLOW ACADEMY
          </span>

          <h1>{course.courseName}</h1>

          <p className="course-details-description">
            {course.description}
          </p>

          <div className="course-details-info">

            <div>
              <small>Course Duration</small>
              <h3>{course.duration}</h3>
            </div>

            <div>
              <small>Course Fee</small>
              <h3>₹{course.fee}</h3>
            </div>

            <div>
              <small>Certification</small>
              <h3>
                {course.certification ? "Available" : "Not Available"}
              </h3>
            </div>

          </div>

          <Link
  to={`/enrollstudent/${course._id}`}
  className="course-enroll-button"
>
  Enroll Now <span>→</span>
</Link>

          <Link to="/beauty" className="course-back-link">
            ← Back to All Courses
          </Link>

        </div>

      </div>

      <style>{`
        .course-details {
          --gold: #B89462;
          --brown: #574438;
          --muted: #817060;

          min-height: 80vh;
          padding: 70px 6%;
          background: linear-gradient(135deg, #F8F3EB, #F4E9D8);
          font-family: Arial, sans-serif;
          color: var(--brown);
        }

        .course-details-container {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
          background: #FFFAF3;
          padding: 25px;
          border: 1px solid white;
          border-radius: 20px;
          box-shadow: 0 10px 35px rgba(87,68,56,.08);
        }

        .course-details-image {
          height: 430px;
          overflow: hidden;
          border-radius: 15px;
        }

        .course-details-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .course-details-content {
          padding: 15px;
        }

        .course-details-label {
          color: #A17A48;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .course-details-content h1 {
          font-family: Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 500;
          margin: 18px 0;
          line-height: 1.2;
        }

        .course-details-description {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .course-details-info {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
          margin: 28px 0;
        }

        .course-details-info > div {
          padding: 16px;
          border: 1px solid #EADFD2;
          border-radius: 10px;
          background: #F8F3EB;
        }

        .course-details-info small {
          color: var(--muted);
          font-size: 12px;
        }

        .course-details-info h3 {
          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 500;
          margin: 9px 0 0;
        }

        .course-enroll-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          width: 100%;
          min-height: 50px;
          background: var(--gold);
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-size: 15px;
          font-weight: 600;
          transition: .3s;
        }

        .course-enroll-button:hover {
          background: #967348;
          color: white;
          transform: translateY(-2px);
        }

        .course-enroll-button span {
          font-size: 20px;
        }

        .course-back-link {
          display: inline-block;
          margin-top: 22px;
          color: var(--brown);
          text-decoration: none;
          font-size: 14px;
        }

        .course-back-link:hover {
          color: var(--gold);
        }

        .course-details-message {
          padding: 100px 20px;
          text-align: center;
          background: #F8F3EB;
          color: var(--brown);
        }

        @media(max-width: 800px) {
          .course-details-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .course-details-image {
            height: 300px;
          }
        }

        @media(max-width: 550px) {
          .course-details {
            padding: 40px 5%;
          }

          .course-details-image {
            height: 230px;
          }

          .course-details-container {
            padding: 15px;
          }
        }
      `}</style>

    </div>
  );
}
