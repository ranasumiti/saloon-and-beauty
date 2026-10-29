
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !phone.trim() ||
        !course || !enrollmentDate) {
      setError("Please fill all required fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    const existingStudents = JSON.parse(
      localStorage.getItem("beautyStudents") || "[]"
    );

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone,
      course,
      enrollmentDate,
      status,
      image
    };

    localStorage.setItem(
      "beautyStudents",
      JSON.stringify([...existingStudents, newStudent])
    );

    alert("Student added successfully!");
    navigate("/admin/students");
  };

  return (
    <>
      <style>{`
        .student-add-page {
          padding: 28px;
          background: #faf7f2;
          min-height: 100vh;
          color: #49352b;
          font-family: Arial, sans-serif;
        }

        .student-add-heading {
          margin-bottom: 24px;
        }

        .student-add-heading h2 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: 29px;
          color: #49352b;
        }

        .student-add-heading p {
          margin: 0;
          color: #8b786b;
          font-size: 14px;
        }

        .student-add-card {
          max-width: 900px;
          background: #fff;
          padding: 28px;
          border: 1px solid #eee2d5;
          border-radius: 14px;
          box-shadow: 0 5px 22px #4b30200a;
        }

        .student-add-form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .student-add-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .student-add-field label {
          font-size: 13px;
          font-weight: 600;
          color: #5d4638;
        }

        .student-add-field input,
        .student-add-field select {
          width: 100%;
          box-sizing: border-box;
          padding: 12px;
          border: 1px solid #e5d8ca;
          border-radius: 8px;
          outline: none;
          background: #fffdfa;
          color: #49352b;
          font-size: 14px;
        }

        .student-add-field input:focus,
        .student-add-field select:focus {
          border-color: #b18a58;
          box-shadow: 0 0 0 3px #b18a581c;
        }

        .student-add-full {
          grid-column: 1 / -1;
        }

        .student-add-upload {
          border: 1px dashed #c9ad8b;
          padding: 20px;
          border-radius: 10px;
          background: #fdfaf5;
        }

        .student-add-upload input {
          background: transparent;
          border: none;
          padding: 8px 0 0;
        }

        .student-add-preview {
          width: 85px;
          height: 85px;
          object-fit: cover;
          border-radius: 10px;
          margin-top: 12px;
          border: 1px solid #e5d8ca;
        }

        .student-add-error {
          grid-column: 1 / -1;
          color: #b42318;
          background: #fff0ee;
          padding: 11px;
          border-radius: 8px;
          font-size: 13px;
        }

        .student-add-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 25px;
          flex-wrap: wrap;
        }

        .student-add-btn {
          padding: 12px 22px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
        }

        .student-add-cancel {
          background: #fff;
          color: #674d3c;
          border: 1px solid #dfd0c0;
        }

        .student-add-save {
          background: #76513b;
          color: white;
          border: 1px solid #76513b;
        }

        .student-add-save:hover {
          background: #5e3e2c;
        }

        @media (max-width: 650px) {
          .student-add-page {
            padding: 16px;
          }

          .student-add-card {
            padding: 18px;
          }

          .student-add-form {
            grid-template-columns: 1fr;
          }

          .student-add-full,
          .student-add-error {
            grid-column: auto;
          }

          .student-add-heading h2 {
            font-size: 24px;
          }

          .student-add-actions button {
            flex: 1;
          }
        }
      `}</style>

      <div className="student-add-page">
        <div className="student-add-heading">
          <h2>Add Student</h2>
          <p>Add a new student to Beauty & Glow Academy.</p>
        </div>

        <div className="student-add-card">
          <form onSubmit={handleSubmit}>
            <div className="student-add-form">
              <div className="student-add-field">
                <label>Student Name *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter student name"
                />
              </div>

              <div className="student-add-field">
                <label>Email Address *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                />
              </div>

              <div className="student-add-field">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  placeholder="10-digit phone number"
                  maxLength={10}
                />
              </div>

              <div className="student-add-field">
                <label>Enrolled Course *</label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option value="">Select course</option>
                  <option value="Professional Makeup">Professional Makeup</option>
                  <option value="Hair Styling">Hair Styling</option>
                  <option value="Skin Care">Skin Care</option>
                  <option value="Nail Art">Nail Art</option>
                  <option value="Mehndi">Mehndi</option>
                </select>
              </div>

              <div className="student-add-field">
                <label>Enrollment Date *</label>
                <input
                  type="date"
                  value={enrollmentDate}
                  onChange={(e) => setEnrollmentDate(e.target.value)}
                />
              </div>

              <div className="student-add-field">
                <label>Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="student-add-field student-add-full">
                <label>Student Photo (Optional)</label>
                <div className="student-add-upload">
                  <span>Choose a student image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                  />

                  {image && (
                    <img
                      src={image}
                      alt="Student preview"
                      className="student-add-preview"
                    />
                  )}
                </div>
              </div>

              {error && (
                <div className="student-add-error">{error}</div>
              )}
            </div>

            <div className="student-add-actions">
              <button
                type="button"
                className="student-add-btn student-add-cancel"
                onClick={() => navigate("/admin/students")}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="student-add-btn student-add-save"
              >
                Save Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
