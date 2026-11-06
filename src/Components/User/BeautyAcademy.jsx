
import { useEffect, useState } from "react";
import { AllCourse } from "../../services/AdminService";
import { toast } from "react-toastify";

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

      <h1>Our Beauty Academy Courses</h1>

      {loading ? (
        <p>Loading courses...</p>
      ) : courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div className="academy-course-grid">

          {courses.map((course) => (
            <div className="academy-course-card" key={course._id}>

              <img
                src={course.image}
                alt={course.courseName}
              />

              <h3>{course.courseName}</h3>

              <p>{course.description}</p>

              <p>Duration: {course.duration}</p>

              <h4>₹{course.fee}</h4>

            </div>
          ))}

        </div>
      )}

      <style>{`
        .academy-courses {
          padding: 40px 6%;
          background: #f8f1e8;
          min-height: 400px;
          color: #543b2d;
        }

        .academy-courses h1 {
          text-align: center;
          font-family: Georgia, serif;
          margin-bottom: 30px;
        }

        .academy-course-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .academy-course-card {
          background: #fffdf9;
          border: 1px solid #eadfd2;
          border-radius: 12px;
          overflow: hidden;
          padding-bottom: 20px;
        }

        .academy-course-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .academy-course-card h3,
        .academy-course-card p,
        .academy-course-card h4 {
          margin: 12px 18px;
        }

        @media(max-width: 800px) {
          .academy-course-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width: 550px) {
          .academy-course-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </div>
  );
}
