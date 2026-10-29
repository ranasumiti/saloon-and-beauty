
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("true");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCourses = JSON.parse(
      localStorage.getItem("courses") || "[]"
    );

    const course = savedCourses.find(
      (item) => String(item.id) === String(id)
    );

    if (course) {
      setName(course.name || course.title || "");
      setCategory(course.category || "");
      setDuration(course.duration || "");
      setPrice(course.price ?? "");
      setDescription(course.description || "");

      setStatus(
        course.status === false ||
        course.status === "false" ||
        course.status === "Inactive"
          ? "false"
          : "true"
      );
    } else {
      toast.error("Course not found!");
    }

    setLoading(false);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !category ||
      price === "" ||
      !duration.trim()
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    const savedCourses = JSON.parse(
      localStorage.getItem("courses") || "[]"
    );

    const courseExists = savedCourses.some(
      (item) => String(item.id) === String(id)
    );

    if (!courseExists) {
      toast.error("Course not found!");
      return;
    }

    const updatedCourses = savedCourses.map((course) => {
      if (String(course.id) === String(id)) {
        return {
          ...course,
          name: name.trim(),
          title: name.trim(),
          category,
          duration: duration.trim(),
          price: Number(price),
          description: description.trim(),
          status: status === "true",
        };
      }

      return course;
    });

    localStorage.setItem(
      "courses",
      JSON.stringify(updatedCourses)
    );

    toast.success("Course updated successfully!");

    setTimeout(() => {
      navigate("/admin/courses");
    }, 700);
  };

  if (loading) {
    return <p>Loading course...</p>;
  }

  return (
    <div className="edit-course-page">
      <style>{`
        .edit-course-page {
          min-height: 100vh;
          padding: 30px;
          background: #faf5ef;
          color: #4b2e1d;
          box-sizing: border-box;
        }

        .edit-course-card {
          max-width: 850px;
          margin: auto;
          padding: 30px;
          background: #fffdf9;
          border: 1px solid #f0e3d5;
          border-radius: 12px;
          box-shadow: 0 4px 15px #5b3b2010;
        }

        .edit-course-card h2 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          color: #654735;
        }

        .edit-course-subtitle {
          margin-bottom: 25px;
          color: #806752;
          font-size: 14px;
        }

        .edit-course-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .edit-course-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .edit-course-field.full-width {
          grid-column: 1 / -1;
        }

        .edit-course-field label {
          font-size: 14px;
          font-weight: 600;
        }

        .edit-course-field input,
        .edit-course-field select,
        .edit-course-field textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 12px;
          border: 1px solid #e5d5c3;
          border-radius: 7px;
          outline: none;
          background: white;
          color: #4b2e1d;
          font: inherit;
        }

        .edit-course-field input:focus,
        .edit-course-field select:focus,
        .edit-course-field textarea:focus {
          border-color: #b38b4e;
        }

        .edit-course-field textarea {
          min-height: 110px;
          resize: vertical;
        }

        .edit-course-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 25px;
        }

        .edit-course-save,
        .edit-course-cancel {
          padding: 12px 22px;
          border: none;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .edit-course-save {
          background: #76563e;
          color: white;
        }

        .edit-course-save:hover {
          background: #5b3e2c;
        }

        .edit-course-cancel {
          background: #eee5da;
          color: #4b2e1d;
        }

        @media (max-width: 600px) {
          .edit-course-page {
            padding: 15px;
          }

          .edit-course-card {
            padding: 20px;
          }

          .edit-course-grid {
            grid-template-columns: 1fr;
          }

          .edit-course-field.full-width {
            grid-column: auto;
          }
        }
      `}</style>

      <div className="edit-course-card">
        <h2>Edit Course</h2>
        <p className="edit-course-subtitle">
          Update your beauty course details.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="edit-course-grid">
            <div className="edit-course-field">
              <label>Course Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter course name"
                required
              />
            </div>

            <div className="edit-course-field">
              <label>Category *</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter course category"
                required
              />
            </div>

            <div className="edit-course-field">
              <label>Duration *</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 2 Months"
                required
              />
            </div>

            <div className="edit-course-field">
              <label>Price (₹) *</label>
              <input
                type="number"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter course price"
                required
              />
            </div>

            <div className="edit-course-field">
              <label>Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>

            <div className="edit-course-field full-width">
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter course description"
              />
            </div>
          </div>

          <div className="edit-course-actions">
            <button
              type="submit"
              className="edit-course-save"
            >
              Save Changes
            </button>

            <button
              type="button"
              className="edit-course-cancel"
              onClick={() => navigate("/admin/courses")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
