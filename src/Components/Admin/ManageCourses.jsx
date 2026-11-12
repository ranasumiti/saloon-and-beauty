
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AllCourse } from "../../services/AdminService";
import { toast } from "react-toastify";

export default function ManageCourses() {

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  
  const fetchCourses = async () => {
    try {
      setLoading(true);

      const res = await AllCourse({});

      if (res.data.success) {
        setCourses(res.data.data || []);
      } else {
        toast.error(res.data.message || "Unable to fetch courses");
      }

    } catch (error) {
      console.log(error);
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Get categories
  const categories = [
    ...new Set(courses.map((item) => item.category).filter(Boolean))
  ];

  // Search and filter
  const filteredCourses = courses.filter((item) => {

    const matchesSearch =
      (item.title || "").toLowerCase().includes(search.toLowerCase()) ||
      (item.category || "").toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Status check
  const isActive = (status) => {
    return status === true || status === "true" || status === "Active";
  };
const deletecourse = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) {
        return;
    }

    try {
        const res = await SoftDeletecourse({ _id: id });

        if (res.data.success) {
            toast.success("Course deleted successfully!");
            fetchCourses();
        } else {
            toast.error(res.data.message || "Unable to delete course");
        }

    } catch (error) {
        console.log("Delete Error:", error);
        toast.error(error.response?.data?.message || "Delete failed");
    }
};
 
  return (
    <>
      <style>{`
        .manage-courses {
          width: 100%;
          min-height: 100vh;
          padding: 25px;
          box-sizing: border-box;
          background: #faf7f2;
          color: #49372e;
          font-family: Arial, sans-serif;
        }

        .course-page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }

        .course-page-header h2 {
          margin: 0 0 8px;
          font-size: 27px;
          color: #49372e;
        }

        .course-page-header p {
          margin: 0;
          color: #88766a;
          font-size: 14px;
        }

        .course-add-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 20px;
          background: #a77b45;
          color: white;
          text-decoration: none;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 600;
          transition: 0.3s;
        }

        .course-add-btn:hover {
          background: #79552f;
          color: white;
        }

        .course-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .course-stat-card {
          padding: 22px;
          background: white;
          border: 1px solid #eee3d5;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(73, 55, 46, 0.05);
        }

        .course-stat-card h3 {
          margin: 0 0 8px;
          color: #a77b45;
          font-size: 29px;
        }

        .course-stat-card p {
          margin: 0;
          color: #88766a;
          font-size: 14px;
        }

        .course-filter-bar {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .course-filter-bar input,
        .course-filter-bar select {
          height: 45px;
          padding: 0 14px;
          background: white;
          border: 1px solid #e4d8ca;
          border-radius: 7px;
          outline: none;
          color: #49372e;
          font-size: 14px;
          box-sizing: border-box;
        }

        .course-filter-bar input {
          flex: 1;
          min-width: 0;
        }

        .course-filter-bar select {
          width: 210px;
          cursor: pointer;
        }

        .course-filter-bar input:focus,
        .course-filter-bar select:focus {
          border-color: #a77b45;
          box-shadow: 0 0 0 3px rgba(167, 123, 69, 0.12);
        }

        .course-table-wrapper {
          width: 100%;
          overflow-x: auto;
          background: white;
          border: 1px solid #eee3d5;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(73, 55, 46, 0.05);
        }

        .course-table {
          width: 100%;
          min-width: 850px;
          border-collapse: collapse;
          text-align: left;
        }

        .course-table thead {
          background: #eee3d5;
        }

        .course-table th {
          padding: 16px 15px;
          color: #5a4232;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
        }

        .course-table td {
          padding: 16px 15px;
          border-bottom: 1px solid #f0e8df;
          color: #625247;
          font-size: 13px;
          vertical-align: middle;
        }

        .course-table tbody tr:last-child td {
          border-bottom: none;
        }

        .course-table tbody tr:hover {
          background: #fdfaf6;
        }

        .course-status {
          display: inline-block;
          padding: 6px 11px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .course-status.active {
          background: #e8f4e9;
          color: #347343;
        }

        .course-status.inactive {
          background: #f5e8e4;
          color: #a34d3f;
        }

        .course-actions {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-wrap: wrap;
        }

        .course-action-btn {
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
        }

        .course-edit-btn {
          background: #f4e8d7;
          color: #78552e;
        }

        .course-no-data {
          text-align: center !important;
          padding: 35px !important;
          color: #88766a !important;
        }

        @media (max-width: 768px) {
          .manage-courses {
            padding: 18px;
          }

          .course-page-header h2 {
            font-size: 23px;
          }

          .course-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .course-stat-card {
            padding: 17px;
          }

          .course-filter-bar {
            flex-direction: column;
          }

          .course-filter-bar select {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .manage-courses {
            padding: 12px;
          }

          .course-page-header h2 {
            font-size: 21px;
          }

          .course-add-btn {
            padding: 10px 13px;
            font-size: 12px;
          }

          .course-stats {
            grid-template-columns: 1fr;
          }

          .course-stat-card h3 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="manage-courses">

        <div className="course-page-header">
          <div>
            <h2>Manage Courses</h2>
            <p>Manage your beauty academy courses here.</p>
          </div>

          <Link to="/admin/addcourse" className="course-add-btn">
            + Add Course
          </Link>
        </div>

        {/* Course Statistics */}
        <div className="course-stats">

          <div className="course-stat-card">
            <h3>{courses.length}</h3>
            <p>Total Courses</p>
          </div>

          <div className="course-stat-card">
            <h3>
              {courses.filter((item) => isActive(item.status)).length}
            </h3>
            <p>Active Courses</p>
          </div>

          <div className="course-stat-card">
            <h3>
              {courses.filter((item) => !isActive(item.status)).length}
            </h3>
            <p>Inactive Courses</p>
          </div>

        </div>

        {/* Search and Category Filter */}
        <div className="course-filter-bar">

          <input
            type="text"
            placeholder="Search course or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}

          </select>

        </div>

        {/* Courses Table */}
        <div className="course-table-wrapper">

          <table className="course-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Course Name</th>
                <th>Category</th>
                <th>Duration</th>
                <th>Price (₹)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {loading ? (
                <tr>
                  <td colSpan="7" className="course-no-data">
                    Loading courses...
                  </td>
                </tr>
              ) : filteredCourses.length > 0 ? (

                filteredCourses.map((course, index) => (

                  <tr key={course._id}>
                    <td>{index + 1}</td>
                    <td>{course.title}</td>
                    <td>{course.category}</td>
                    <td>{course.duration}</td>

                    <td>
                      ₹{Number(course.price || 0).toLocaleString("en-IN")}
                    </td>

                    <td>
                      <span className={
                        isActive(course.status)
                          ? "course-status active"
                          : "course-status inactive"
                      }>
                        {isActive(course.status) ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td>
                      <div className="course-actions">

                        <Link
                          to={`/admin/editcourse/${course._id}`}
                          className="course-action-btn course-edit-btn"
                        >
                          Edit
                        </Link>

                         <button
            className="course-action-btn"
            style={{
                background: course.status ? "#fff0dc" : "#e8f4e9",
                color: course.status ? "#a66b20" : "#347343"
            }}
            onClick={() => toggleCourseStatus(course)}
        >
            {course.status ? "Deactivate" : "Activate"}
        </button>

        
<button
            className="course-action-btn"
            style={{
                background: "#f5e8e4",
                color: "#a34d3f"
            }}
            onClick={() => deletecourse(course._id)}
        >
            Delete
        </button>


                      </div>
                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td colSpan="7" className="course-no-data">
                    No courses found.
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}
