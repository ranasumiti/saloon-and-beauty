
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const [status, setStatus] = useState("Active");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedStudents = JSON.parse(
      localStorage.getItem("beautyStudents") || "[]"
    );

    const student = savedStudents.find(
      (item) => String(item.id) === String(id)
    );

    if (student) {
      setName(student.name || "");
      setEmail(student.email || "");
      setPhone(student.phone || "");
      setCourse(student.course || "");
      setEnrollmentDate(student.enrollmentDate || "");
      setStatus(student.status || "Active");
    } else {
      setError("Student not found. Please add the student data first.");
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !phone.trim() || !course) {
      setError("Please fill all required fields.");
      return;
    }

    const savedStudents = JSON.parse(
      localStorage.getItem("beautyStudents") || "[]"
    );

    const studentExists = savedStudents.some(
      (item) => String(item.id) === String(id)
    );

    if (!studentExists) {
      setError(
        "Student not found in saved data. Connect the Manage Students page first."
      );
      return;
    }

    const updatedStudents = savedStudents.map((item) =>
      String(item.id) === String(id)
        ? {
            ...item,
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            course,
            enrollmentDate,
            status,
          }
        : item
    );

    localStorage.setItem(
      "beautyStudents",
      JSON.stringify(updatedStudents)
    );

    alert("Student updated successfully!");
    navigate("/admin/students");
  };

  return (
    <>
      <style>{`
        .edit-student-page {
          min-height: 100vh;
          padding: 25px;
          box-sizing: border-box;
          background: #faf7f2;
          font-family: Arial, sans-serif;
          color: #49372e;
        }

        .edit-student-container {
          max-width: 850px;
          margin: 0 auto;
        }

        .edit-student-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }

        .edit-student-header h2 {
          margin: 0 0 8px;
          font-size: 27px;
        }

        .edit-student-header p {
          margin: 0;
          color: #88766a;
          font-size: 14px;
        }

        .edit-student-back {
          padding: 11px 17px;
          background: #eee3d5;
          color: #654c36;
          border-radius: 7px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        .edit-student-card {
          padding: 28px;
          background: #fff;
          border: 1px solid #eee3d5;
          border-radius: 13px;
          box-shadow: 0 4px 15px rgba(73, 55, 46, 0.06);
        }

        .edit-student-card h3 {
          margin: 0 0 25px;
          font-size: 20px;
          color: #79552f;
        }

        .edit-student-form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .edit-student-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .edit-student-field label {
          color: #5a4232;
          font-size: 13px;
          font-weight: 600;
        }

        .edit-student-field input,
        .edit-student-field select {
          width: 100%;
          height: 45px;
          padding: 0 12px;
          box-sizing: border-box;
          border: 1px solid #e4d8ca;
          border-radius: 7px;
          outline: none;
          background: #fffdf9;
          color: #49372e;
          font-size: 14px;
        }

        .edit-student-field input:focus,
        .edit-student-field select:focus {
          border-color: #a77b45;
          box-shadow: 0 0 0 3px rgba(167, 123, 69, 0.12);
        }

        .edit-student-field input:disabled {
          background: #f3eee7;
          color: #88766a;
        }

        .edit-student-error {
          margin-bottom: 18px;
          padding: 12px;
          background: #f8e5e2;
          color: #a33d32;
          border-radius: 7px;
          font-size: 14px;
        }

        .edit-student-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 25px;
        }

        .edit-student-cancel,
        .edit-student-save {
          padding: 12px 20px;
          border: none;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }

        .edit-student-cancel {
          background: #eee3d5;
          color: #654c36;
        }

        .edit-student-save {
          background: #a77b45;
          color: #fff;
        }

        .edit-student-save:hover {
          background: #79552f;
        }

        @media (max-width: 600px) {
          .edit-student-page {
            padding: 15px;
          }

          .edit-student-header h2 {
            font-size: 23px;
          }

          .edit-student-card {
            padding: 18px;
          }

          .edit-student-form {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .edit-student-buttons {
            flex-direction: column-reverse;
          }

          .edit-student-cancel,
          .edit-student-save {
            text-align: center;
          }
        }
      `}</style>

      <div className="edit-student-page">
        <div className="edit-student-container">
          <div className="edit-student-header">
            <div>
              <h2>Edit Student</h2>
              <p>Update student information and enrollment details.</p>
            </div>

            <Link to="/admin/students" className="edit-student-back">
              Back to Students
            </Link>
          </div>

          <div className="edit-student-card">
            <h3>Student Information</h3>

            {error && (
              <div className="edit-student-error">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="edit-student-form">
                <div className="edit-student-field">
                  <label>Student Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter student name"
                    required
                  />
                </div>

                <div className="edit-student-field">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div className="edit-student-field">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div className="edit-student-field">
                  <label>Enrolled Course *</label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="Professional Makeup">
                      Professional Makeup
                    </option>
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Skin Care">Skin Care</option>
                  </select>
                </div>

                <div className="edit-student-field">
                  <label>Enrollment Date</label>
                  <input
                    type="date"
                    value={enrollmentDate}
                    onChange={(e) => setEnrollmentDate(e.target.value)}
                  />
                </div>

                <div className="edit-student-field">
                  <label>Student Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="edit-student-buttons">
                <Link
                  to="/admin/students"
                  className="edit-student-cancel"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="edit-student-save"
                >
                  Update Student
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
