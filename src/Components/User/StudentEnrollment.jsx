
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AllCourse } from "../../services/AdminService";

export default function StudentEnrollment() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    address: "",
    batch: ""
  });

  useEffect(() => {
    fetchcourse();
  }, [id]);

  const fetchcourse = async () => {
    try {
      setLoading(true);

      const res = await AllCourse({});

      console.log("API Response:", res.data);
      console.log("Selected Course ID:", id);

      if (res.data.success === true) {
        const selectedCourse = res.data.data.find(
          (item) => item._id === id
        );

        console.log("Selected Course:", selectedCourse);

        setCourse(selectedCourse || null);
      } else {
        setCourse(null);
      }

    } catch (error) {
      console.log("Course Error:", error);
      toast.error("Unable to load course");
      setCourse(null);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enrollment Details:", {
      ...formData,
      courseName: course?.courseName,
      courseId: course?._id
    });

    toast.success("Enrollment submitted successfully!");

    setFormData({
      studentName: "",
      email: "",
      phone: "",
      age: "",
      education: "",
      address: "",
      batch: ""
    });
  };

  if (loading) {
    return (
      <div className="enrollment-message">
        <h2>Loading course details...</h2>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="enrollment-message">
        <h2>Course information not found</h2>
        <Link to="/beauty">Back to Academy</Link>
      </div>
    );
  }

  return (
    <div className="student-enrollment">

      <div className="enrollment-heading">
        <span>BEAUTY & GLOW ACADEMY</span>
        <h1>Student <i>Enrollment</i></h1>
        <p>Take the first step towards your beauty career.</p>
      </div>

      <div className="enrollment-container">

        <div className="enrollment-course">

          <img
            src={course.image}
            alt={course.courseName}
          />

          <div className="enrollment-course-content">
            <span>YOUR SELECTED COURSE</span>

            <h2>{course.courseName}</h2>

            <p>{course.description}</p>

            <div className="enrollment-course-info">

              <div>
                <small>Course Fee</small>
                <h3>₹{course.fee}</h3>
              </div>

              <div>
                <small>Duration</small>
                <h3>{course.duration}</h3>
              </div>

            </div>
          </div>

        </div>

        <form
          className="enrollment-form"
          onSubmit={handleSubmit}
        >

          <h2>Personal Information</h2>
          <p>Please fill in your details below.</p>

          <div className="enrollment-input-grid">

            <div className="enrollment-field">
              <label>Student Name *</label>
              <input
                type="text"
                name="studentName"
                placeholder="Enter your full name"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="enrollment-field">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="enrollment-field">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
            </div>

            <div className="enrollment-field">
              <label>Age *</label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                min="16"
                max="100"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="enrollment-field">
              <label>Education</label>
              <input
                type="text"
                name="education"
                placeholder="Your qualification"
                value={formData.education}
                onChange={handleChange}
              />
            </div>

            <div className="enrollment-field">
              <label>Preferred Batch *</label>
              <select
                name="batch"
                value={formData.batch}
                onChange={handleChange}
                required
              >
                <option value="">Select Batch</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>

            <div className="enrollment-field full-width">
              <label>Address *</label>
              <textarea
                name="address"
                placeholder="Enter your full address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <button type="submit" className="enrollment-submit">
            Submit Enrollment <span>→</span>
          </button>

          <Link to="/beauty" className="enrollment-back">
            ← Back to Courses
          </Link>

        </form>

      </div>

      <style>{`
        .student-enrollment {
          --gold: #B89462;
          --brown: #574438;
          --muted: #817060;

          padding: 65px 5%;
          background: linear-gradient(135deg, #F8F3EB, #F4E9D8);
          color: var(--brown);
          font-family: Arial, sans-serif;
        }

        .enrollment-heading {
          text-align: center;
          margin-bottom: 38px;
        }

        .enrollment-heading > span {
          color: #A17A48;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .enrollment-heading h1 {
          font-family: Georgia, serif;
          font-size: clamp(38px, 5vw, 58px);
          font-weight: 500;
          margin: 12px 0;
        }

        .enrollment-heading h1 i {
          color: var(--gold);
        }

        .enrollment-heading p {
          color: var(--muted);
          line-height: 1.8;
        }

        .enrollment-container {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: .85fr 1.5fr;
          gap: 25px;
          align-items: start;
        }

        .enrollment-course,
        .enrollment-form {
          background: #FFFAF3;
          border: 1px solid white;
          border-radius: 16px;
          padding: 18px;
          box-shadow: 0 8px 26px rgba(87,68,56,.07);
        }

        .enrollment-course img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 11px;
        }

        .enrollment-course-content {
          padding: 12px 5px;
        }

        .enrollment-course-content > span {
          color: var(--gold);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
        }

        .enrollment-course-content h2 {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 500;
          margin: 14px 0;
        }

        .enrollment-course-content p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .enrollment-course-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 22px;
        }

        .enrollment-course-info > div {
          padding: 14px;
          background: #F4E9D8;
          border-radius: 9px;
        }

        .enrollment-course-info small {
          color: var(--muted);
        }

        .enrollment-course-info h3 {
          font-family: Georgia, serif;
          font-size: 21px;
          margin: 8px 0 0;
        }

        .enrollment-form {
          padding: 28px;
        }

        .enrollment-form h2 {
          font-family: Georgia, serif;
          font-size: 27px;
          font-weight: 500;
          margin: 0 0 8px;
        }

        .enrollment-form > p {
          color: var(--muted);
          font-size: 14px;
          margin-bottom: 25px;
        }

        .enrollment-input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .enrollment-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
          min-width: 0;
        }

        .enrollment-field label {
          font-size: 13px;
          font-weight: 600;
        }

        .enrollment-field input,
        .enrollment-field select,
        .enrollment-field textarea {
          width: 100%;
          padding: 13px;
          border: 1px solid #E5D8C7;
          border-radius: 6px;
          background: #FFFCF8;
          color: var(--brown);
          font-family: Arial, sans-serif;
          font-size: 13px;
          outline: none;
          box-sizing: border-box;
        }

        .enrollment-field input:focus,
        .enrollment-field select:focus,
        .enrollment-field textarea:focus {
          border-color: var(--gold);
        }

        .enrollment-field textarea {
          resize: vertical;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .enrollment-submit {
          width: 100%;
          min-height: 48px;
          margin-top: 25px;
          border: none;
          border-radius: 5px;
          background: var(--gold);
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: .3s;
        }

        .enrollment-submit:hover {
          background: #967348;
        }

        .enrollment-submit span {
          margin-left: 10px;
          font-size: 19px;
        }

        .enrollment-back {
          display: inline-block;
          margin-top: 20px;
          color: var(--brown);
          font-size: 13px;
          text-decoration: none;
        }

        .enrollment-message {
          padding: 100px 20px;
          text-align: center;
          background: #F8F3EB;
          color: #574438;
        }

        @media(max-width: 800px) {
          .enrollment-container {
            grid-template-columns: 1fr;
            max-width: 600px;
          }
        }

        @media(max-width: 550px) {
          .student-enrollment {
            padding: 45px 5%;
          }

          .enrollment-form {
            padding: 20px 15px;
          }

          .enrollment-input-grid {
            grid-template-columns: 1fr;
          }

          .full-width {
            grid-column: auto;
          }
        }
      `}</style>

    </div>
  );
}
