
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ManageStudents() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Amandeep Kaur",
      email: "aman@gmail.com",
      phone: "9876543210",
      course: "Professional Makeup",
      enrollmentDate: "2026-08-10",
      status: "Active",
    },
    {
      id: 2,
      name: "Simran Sharma",
      email: "simran@gmail.com",
      phone: "9876543211",
      course: "Hair Styling",
      enrollmentDate: "2026-09-05",
      status: "Active",
    },
    {
      id: 3,
      name: "Manpreet Kaur",
      email: "manpreet@gmail.com",
      phone: "9876543212",
      course: "Skin Care",
      enrollmentDate: "2026-09-15",
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const courses = [
    ...new Set(students.map((student) => student.course)),
  ];

  const filteredStudents = students.filter((student) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      student.name.toLowerCase().includes(searchText) ||
      student.email.toLowerCase().includes(searchText) ||
      student.phone.includes(search) ||
      student.course.toLowerCase().includes(searchText);

    const matchesCourse =
      selectedCourse === "All" || student.course === selectedCourse;

    return matchesSearch && matchesCourse;
  });

  const toggleStatus = (id) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Active" ? "Inactive" : "Active",
            }
          : student
      )
    );

    setSelectedStudent((previous) =>
      previous?.id === id
        ? {
            ...previous,
            status: previous.status === "Active" ? "Inactive" : "Active",
          }
        : previous
    );
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents((previousStudents) =>
        previousStudents.filter((student) => student.id !== id)
      );

      if (selectedStudent?.id === id) {
        setSelectedStudent(null);
      }
    }
  };

  return (
    <>
      <style>{`
        .manage-students {
          width: 100%;
          min-height: 100vh;
          padding: 25px;
          box-sizing: border-box;
          background: #faf7f2;
          color: #49372e;
          font-family: Arial, sans-serif;
        }

        .student-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }

        .student-header h2 {
          margin: 0 0 8px;
          font-size: 27px;
          color: #49372e;
        }

        .student-header p {
          margin: 0;
          color: #88766a;
          font-size: 14px;
        }

        .student-add-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 20px;
          border-radius: 7px;
          background: #a77b45;
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: 0.3s;
        }

        .student-add-btn:hover {
          background: #79552f;
          color: white;
        }

        .student-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .student-stat-card {
          padding: 22px;
          background: white;
          border: 1px solid #eee3d5;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(73, 55, 46, 0.05);
        }

        .student-stat-card h3 {
          margin: 0 0 8px;
          color: #a77b45;
          font-size: 29px;
        }

        .student-stat-card p {
          margin: 0;
          color: #88766a;
          font-size: 14px;
        }

        .student-filters {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .student-filters input,
        .student-filters select {
          height: 45px;
          padding: 0 14px;
          border: 1px solid #e4d8ca;
          border-radius: 7px;
          outline: none;
          background: white;
          color: #49372e;
          font-size: 14px;
          box-sizing: border-box;
        }

        .student-filters input {
          flex: 1;
          min-width: 0;
        }

        .student-filters select {
          width: 230px;
          cursor: pointer;
        }

        .student-filters input:focus,
        .student-filters select:focus {
          border-color: #a77b45;
          box-shadow: 0 0 0 3px rgba(167, 123, 69, 0.12);
        }

        .student-table-wrapper {
          width: 100%;
          overflow-x: auto;
          background: white;
          border: 1px solid #eee3d5;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(73, 55, 46, 0.05);
        }

        .student-table {
          width: 100%;
          min-width: 1000px;
          border-collapse: collapse;
          text-align: left;
        }

        .student-table thead {
          background: #eee3d5;
        }

        .student-table th {
          padding: 16px 14px;
          color: #5a4232;
          font-size: 13px;
          white-space: nowrap;
        }

        .student-table td {
          padding: 15px 14px;
          border-bottom: 1px solid #f0e8df;
          color: #625247;
          font-size: 13px;
          vertical-align: middle;
        }

        .student-table tbody tr:last-child td {
          border-bottom: none;
        }

        .student-table tbody tr:hover {
          background: #fdfaf6;
        }

        .student-name {
          color: #49372e;
          font-weight: 600;
        }

        .student-status {
          display: inline-block;
          padding: 6px 11px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .student-status.active {
          background: #e8f4e9;
          color: #347343;
        }

        .student-status.inactive {
          background: #f5e8e4;
          color: #a34d3f;
        }

        .student-actions {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-wrap: wrap;
        }

        .student-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 10px;
          border: none;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: 0.2s;
        }

        .student-view-btn {
          background: #eee3d5;
          color: #654c36;
        }

        .student-view-btn:hover {
          background: #dfd0bb;
        }

        .student-edit-btn {
          background: #f4e8d7;
          color: #78552e;
        }

        .student-edit-btn:hover {
          background: #e8d3b8;
        }

        .student-toggle-btn {
          background: #eee7dc;
          color: #654c36;
        }

        .student-toggle-btn:hover {
          background: #dfd0bb;
        }

        .student-delete-btn {
          background: #f8e5e2;
          color: #b13d32;
        }

        .student-delete-btn:hover {
          background: #f0ceca;
        }

        .student-empty {
          text-align: center !important;
          padding: 35px !important;
          color: #88766a !important;
        }

        .student-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(40, 29, 22, 0.55);
        }

        .student-modal {
          width: 100%;
          max-width: 450px;
          padding: 25px;
          box-sizing: border-box;
          background: #fffdf9;
          border: 1px solid #eee3d5;
          border-radius: 14px;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.15);
        }

        .student-modal h3 {
          margin: 0 0 20px;
          font-size: 22px;
          color: #49372e;
        }

        .student-detail {
          margin: 12px 0;
          font-size: 14px;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .student-detail strong {
          color: #79552f;
        }

        .student-modal-close {
          width: 100%;
          margin-top: 15px;
          padding: 11px;
          border: none;
          border-radius: 7px;
          background: #a77b45;
          color: white;
          cursor: pointer;
          font-weight: 600;
        }

        .student-modal-close:hover {
          background: #79552f;
        }

        @media (max-width: 768px) {
          .manage-students {
            padding: 18px;
          }

          .student-header h2 {
            font-size: 23px;
          }

          .student-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .student-stat-card {
            padding: 17px;
          }

          .student-filters {
            flex-direction: column;
          }

          .student-filters select {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .manage-students {
            padding: 12px;
          }

          .student-header h2 {
            font-size: 21px;
          }

          .student-add-btn {
            padding: 10px 13px;
            font-size: 12px;
          }

          .student-stats {
            grid-template-columns: 1fr;
          }

          .student-stat-card h3 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="manage-students">
        <div className="student-header">
          <div>
            <h2>Manage Students</h2>
            <p>Manage your beauty academy students and enrollments.</p>
          </div>

          <Link to="/admin/addstudent" className="student-add-btn">
            + Add Student
          </Link>
        </div>

        <div className="student-stats">
          <div className="student-stat-card">
            <h3>{students.length}</h3>
            <p>Total Students</p>
          </div>

          <div className="student-stat-card">
            <h3>
              {students.filter((item) => item.status === "Active").length}
            </h3>
            <p>Active Students</p>
          </div>

          <div className="student-stat-card">
            <h3>
              {students.filter((item) => item.status === "Inactive").length}
            </h3>
            <p>Inactive Students</p>
          </div>
        </div>

        <div className="student-filters">
          <input
            type="text"
            placeholder="Search name, email, phone or course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="All">All Courses</option>

            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="student-table-wrapper">
          <table className="student-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Course</th>
                <th>Enrollment Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td className="student-name">{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.course}</td>
                    <td>{student.enrollmentDate}</td>

                    <td>
                      <span
                        className={
                          student.status === "Active"
                            ? "student-status active"
                            : "student-status inactive"
                        }
                      >
                        {student.status}
                      </span>
                    </td>

                    <td>
                      <div className="student-actions">
                        <button
                          type="button"
                          className="student-action-btn student-view-btn"
                          onClick={() => setSelectedStudent(student)}
                        >
                          View
                        </button>

                        <Link
                          to={`/admin/editstudent/${student.id}`}
                          className="student-action-btn student-edit-btn"
                        >
                          Edit
                        </Link>

                        <button
                          type="button"
                          className="student-action-btn student-toggle-btn"
                          onClick={() => toggleStatus(student.id)}
                        >
                          {student.status === "Active"
                            ? "Deactivate"
                            : "Activate"}
                        </button>

                        <button
                          type="button"
                          className="student-action-btn student-delete-btn"
                          onClick={() => deleteStudent(student.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="student-empty">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {selectedStudent && (
          <div
            className="student-modal-overlay"
            onClick={() => setSelectedStudent(null)}
          >
            <div
              className="student-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Student Details</h3>

              <p className="student-detail">
                <strong>Name:</strong> {selectedStudent.name}
              </p>

              <p className="student-detail">
                <strong>Email:</strong> {selectedStudent.email}
              </p>

              <p className="student-detail">
                <strong>Phone:</strong> {selectedStudent.phone}
              </p>

              <p className="student-detail">
                <strong>Course:</strong> {selectedStudent.course}
              </p>

              <p className="student-detail">
                <strong>Enrollment Date:</strong>{" "}
                {selectedStudent.enrollmentDate}
              </p>

              <p className="student-detail">
                <strong>Status:</strong> {selectedStudent.status}
              </p>

              <button
                type="button"
                className="student-modal-close"
                onClick={() => setSelectedStudent(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
