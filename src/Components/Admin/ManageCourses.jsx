
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [editId, setEditId] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    category: "",
    duration: "",
    price: "",
    status: true,
  });

  useEffect(() => {
    const loadCourses = () => {
      const savedCourses = JSON.parse(
        localStorage.getItem("courses") || "[]"
      );
      setCourses(savedCourses);
    };

    loadCourses();

    window.addEventListener("focus", loadCourses);

    return () => {
      window.removeEventListener("focus", loadCourses);
    };
  }, []);

  const categories = [
    ...new Set(
      courses.map((course) => course.category).filter(Boolean)
    ),
  ];

  const filteredCourses = courses.filter((course) => {
    const name = course.name || course.title || "";

    const matchesSearch = name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  const activeCourses = courses.filter(
    (course) =>
      course.status === true ||
      course.status === "true" ||
      course.status === "Active"
  ).length;

  const enrolledStudents = courses.reduce(
    (total, course) =>
      total + Number(course.studentsEnrolled || 0),
    0
  );

  const handleEdit = (course) => {
    setEditId(course.id);

    setEditData({
      name: course.name || course.title || "",
      category: course.category || "",
      duration: course.duration || "",
      price: course.price ?? "",
      status:
        course.status === false ||
        course.status === "false" ||
        course.status === "Inactive"
          ? false
          : true,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      !editData.name.trim() ||
      !editData.category ||
      editData.price === "" ||
      !String(editData.duration).trim()
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    const updatedCourses = courses.map((course) => {
      if (String(course.id) === String(editId)) {
        return {
          ...course,
          name: editData.name.trim(),
          title: editData.name.trim(),
          category: editData.category,
          duration: editData.duration,
          price: Number(editData.price),
          status: editData.status,
        };
      }

      return course;
    });

    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    setCourses(updatedCourses);
    setEditId(null);

    toast.success("Course updated successfully!");
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) {
      return;
    }

    const updatedCourses = courses.filter(
      (course) => String(course.id) !== String(id)
    );

    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    setCourses(updatedCourses);

    if (String(editId) === String(id)) {
      setEditId(null);
    }

    toast.success("Course deleted successfully!");
  };

  return (
    <div className="courses-page">
      <style>{`
        .courses-page {
          box-sizing: border-box;
          min-height: 100vh;
          padding: 28px;
          background: #faf5ef;
          color: #4b2e1d;
          font-family: Arial, sans-serif;
        }

        .courses-page * {
          box-sizing: border-box;
        }

        .courses-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .courses-heading h1 {
          margin: 12px 0;
          font-family: Georgia, serif;
          font-size: 32px;
        }

        .courses-heading p {
          color: #806752;
          margin: 0;
        }

        .add-course {
          display: inline-block;
          padding: 13px 20px;
          background: #b38b4e;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
        }

        .add-course:hover {
          background: #8f6938;
        }

        .course-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 15px;
          margin-bottom: 25px;
        }

        .course-stat {
          min-width: 0;
          padding: 22px;
          background: #fffdf9;
          border: 1px solid #f0e3d5;
          border-radius: 12px;
        }

        .course-stat p {
          margin: 0 0 10px;
          color: #806752;
          font-size: 14px;
        }

        .course-stat h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 28px;
        }

        .course-table-panel {
          min-width: 0;
          padding: 24px;
          background: #fffdf9;
          border: 1px solid #f0e3d5;
          border-radius: 12px;
        }

        .course-table-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .course-table-heading h2 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: 25px;
        }

        .course-table-heading p {
          margin: 0;
          color: #806752;
        }

        .course-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .course-filters input,
        .course-filters select {
          min-width: 0;
          padding: 12px;
          border: 1px solid #e5d5c3;
          border-radius: 7px;
          background: white;
          color: #4b2e1d;
          font-size: 14px;
          outline: none;
        }

        .course-filters input {
          width: 220px;
        }

        .course-filters select {
          width: 190px;
        }

        .course-filters input:focus,
        .course-filters select:focus {
          border-color: #b38b4e;
        }

        .course-table-wrapper {
          width: 100%;
          overflow-x: auto;
          border: 1px solid #e8d9c9;
          border-radius: 8px;
        }

        .course-table {
          width: 100%;
          min-width: 750px;
          border-collapse: collapse;
        }

        .course-table th {
          padding: 15px 12px;
          background: #f3e6d8;
          color: #4b2e1d;
          text-align: left;
          border: 1px solid #e8d9c9;
        }

        .course-table td {
          padding: 14px 12px;
          border: 1px solid #eaded1;
          color: #44352b;
          font-size: 14px;
        }

        .status {
          display: inline-block;
          padding: 6px 11px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .status.active {
          background: #e1efdf;
          color: #286337;
        }

        .status.inactive {
          background: #fde3dc;
          color: #a53d2b;
        }

        .edit-btn,
        .delete-btn,
        .save-btn,
        .cancel-btn {
          padding: 8px 11px;
          margin: 2px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .edit-btn {
          background: #f5eadc;
          color: #80551e;
          border: 1px solid #b38b4e;
        }

        .delete-btn {
          background: #fff0ed;
          color: #b33b2b;
          border: 1px solid #d97765;
        }

        .save-btn {
          background: #76563e;
          color: white;
          border: 1px solid #76563e;
        }

        .cancel-btn {
          background: #eee5da;
          color: #4b2e1d;
          border: 1px solid #e0d0bd;
        }

        .course-edit-form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
          padding: 20px;
          margin-bottom: 22px;
          border: 1px solid #e8d9c9;
          border-radius: 8px;
          background: #faf5ef;
        }

        .course-edit-form h3 {
          grid-column: 1 / -1;
          margin: 0;
          font-family: Georgia, serif;
        }

        .course-edit-form label {
          display: flex;
          flex-direction: column;
          gap: 7px;
          font-size: 13px;
          font-weight: 600;
        }

        .course-edit-form input,
        .course-edit-form select {
          width: 100%;
          min-width: 0;
          padding: 11px;
          border: 1px solid #e5d5c3;
          border-radius: 6px;
          background: white;
          font-size: 14px;
        }

        .course-edit-actions {
          grid-column: 1 / -1;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .empty-courses {
          padding: 30px !important;
          text-align: center;
          color: #806752 !important;
        }

        .course-table-hint {
          color: #806752;
          font-size: 12px;
          margin-top: 12px;
        }

        @media (max-width: 1000px) {
          .course-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .courses-page {
            padding: 15px;
          }

          .courses-heading {
            align-items: stretch;
            flex-direction: column;
          }

          .add-course {
            text-align: center;
          }

          .course-stats {
            grid-template-columns: 1fr;
          }

          .course-table-panel {
            padding: 13px;
          }

          .course-filters {
            width: 100%;
            flex-direction: column;
          }

          .course-filters input,
          .course-filters select {
            width: 100%;
          }

          .course-edit-form {
            grid-template-columns: 1fr;
          }

          .course-edit-form h3,
          .course-edit-actions {
            grid-column: auto;
          }
        }
      `}</style>

      <div className="courses-heading">
        <div>
          <p>Home / Courses</p>
          <h1>Manage Courses</h1>
          <p>Add and manage your beauty courses.</p>
        </div>

        <Link to="/admin/addcourse" className="add-course">
          + Add Course
        </Link>
      </div>

      <div className="course-stats">
        <div className="course-stat">
          <p>Total Courses</p>
          <h2>{courses.length}</h2>
        </div>

        <div className="course-stat">
          <p>Categories</p>
          <h2>{categories.length}</h2>
        </div>

        <div className="course-stat">
          <p>Students Enrolled</p>
          <h2>{enrolledStudents}</h2>
        </div>

        <div className="course-stat">
          <p>Active Courses</p>
          <h2>{activeCourses}</h2>
        </div>
      </div>

      <div className="course-table-panel">
        <div className="course-table-heading">
          <div>
            <h2>Course List</h2>
            <p>View and manage all beauty courses.</p>
          </div>

          <div className="course-filters">
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {editId !== null && (
          <form className="course-edit-form" onSubmit={handleUpdate}>
            <h3>Edit Course</h3>

            <label>
              Course Name *
              <input
                type="text"
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
                required
              />
            </label>

            <label>
              Category *
              <select
                value={editData.category}
                onChange={(e) =>
                  setEditData({ ...editData, category: e.target.value })
                }
                required
              >
                <option value="">Select category</option>

                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Duration *
              <input
                type="text"
                value={editData.duration}
                onChange={(e) =>
                  setEditData({ ...editData, duration: e.target.value })
                }
                placeholder="e.g. 2 Months"
                required
              />
            </label>

            <label>
              Price (₹) *
              <input
                type="number"
                min="0"
                value={editData.price}
                onChange={(e) =>
                  setEditData({ ...editData, price: e.target.value })
                }
                required
              />
            </label>

            <label>
              Status
              <select
                value={String(editData.status)}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    status: e.target.value === "true",
                  })
                }
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </label>

            <div className="course-edit-actions">
              <button type="submit" className="save-btn">
                Save Changes
              </button>

              <button
                type="button"
                className="cancel-btn"
                onClick={() => setEditId(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="course-table-wrapper">
          <table className="course-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Course Name</th>
                <th>Category</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, index) => {
                  const courseName = course.name || course.title || "";
                  const isActive =
                    course.status === true ||
                    course.status === "true" ||
                    course.status === "Active";

                  return (
                    <tr key={course.id ?? `${courseName}-${index}`}>
                      <td>{index + 1}</td>
                      <td>{courseName}</td>
                      <td>{course.category || "-"}</td>
                      <td>{course.duration || "-"}</td>
                      <td>₹{course.price ?? 0}</td>
                      <td>
                        <span
                          className={`status ${
                            isActive ? "active" : "inactive"
                          }`}
                        >
                          {isActive ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="edit-btn"
                          onClick={() => handleEdit(course)}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() => handleDelete(course.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" className="empty-courses">
                    {courses.length === 0
                      ? "No courses added yet. Click Add Course to get started."
                      : "No courses match your search or category."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="course-table-hint">
          On mobile, swipe horizontally to see all columns.
        </p>
      </div>
    </div>
  );
}
