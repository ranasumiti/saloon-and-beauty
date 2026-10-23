
import { useState } from "react";

export default function AddCourse() {
  const [imagePreview, setImagePreview] = useState("");

  return (
    <div className="add-course-page">
      <div className="course-heading">
        <div>
          <p>Home / Courses / Add Course</p>
          <h1>Add New Course</h1>
          <span>Create and manage your beauty academy courses.</span>
        </div>

        <button
          type="button"
          className="course-back"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
      </div>

      <form className="course-form">
        <div className="course-layout">
          <div className="course-main">
            <section className="course-card">
              <h2>Course Information</h2>
              <p className="course-subtitle">
                Enter the basic details of your course.
              </p>

              <div className="course-fields">
                <div className="course-field">
                  <label>Course Name *</label>
                  <input type="text" placeholder="e.g. Professional Makeup" />
                </div>

                <div className="course-field">
                  <label>Course Category *</label>
                  <select defaultValue="">
                    <option value="" disabled>Select category</option>
                    <option>Makeup</option>
                    <option>Hair Styling</option>
                    <option>Skin Care</option>
                    <option>Nail Art</option>
                    <option>Beautician</option>
                  </select>
                </div>

                <div className="course-field full-width">
                  <label>Course Description *</label>
                  <textarea
                    rows="4"
                    placeholder="Describe what students will learn..."
                  />
                </div>

                <div className="course-field">
                  <label>Course Fee (₹) *</label>
                  <input type="number" min="0" placeholder="Enter course fee" />
                </div>

                <div className="course-field">
                  <label>Duration *</label>
                  <input type="text" placeholder="e.g. 3 months" />
                </div>

                <div className="course-field">
                  <label>Instructor Name *</label>
                  <input type="text" placeholder="Enter instructor name" />
                </div>

                <div className="course-field">
                  <label>Course Status</label>
                  <select defaultValue="Active">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>

                <div className="course-field full-width">
                  <label>What Students Will Learn</label>
                  <textarea
                    rows="3"
                    placeholder="Enter course topics and skills..."
                  />
                </div>
              </div>
            </section>

            <section className="course-card">
              <h2>Course Image</h2>
              <p className="course-subtitle">
                Upload an attractive image for your course.
              </p>

              <label className="course-upload">
                {imagePreview ? (
                  <img src={imagePreview} alt="Course preview" />
                ) : (
                  <>
                    <span className="upload-icon">↑</span>
                    <strong>Upload course image</strong>
                    <span>PNG, JPG or WEBP</span>
                    <span className="browse-btn">Browse Image</span>
                  </>
                )}

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={(event) => {
                    if (event.target.files?.[0]) {
                      setImagePreview(
                        URL.createObjectURL(event.target.files[0])
                      );
                    }
                  }}
                />
              </label>
            </section>
          </div>

          <aside className="course-side">
            <section className="course-card">
              <h2>Quick Tips</h2>
              <p>✦ Use a clear course title.</p>
              <p>₹ Set the correct course fee.</p>
              <p>◷ Mention the complete duration.</p>
              <p>✓ Add useful learning outcomes.</p>
            </section>

            <section className="course-card">
              <h2>Before Publishing</h2>
              <p>✓ Course details are correct</p>
              <p>✓ Fee and duration are added</p>
              <p>✓ Instructor details are included</p>
              <p>✓ Course image is clear</p>
            </section>
          </aside>
        </div>

        <div className="course-actions">
          <button type="reset" className="course-reset">
            Reset Form
          </button>
          <button type="button" className="course-save">
            Save Course
          </button>
        </div>
      </form>

      <style>{`
        .add-course-page {
          min-height: 100vh;
          padding: 25px;
          background: #f8f1e8;
          color: #543b2d;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .add-course-page * {
          box-sizing: border-box;
        }

        .course-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .course-heading p {
          color: #927f70;
          font-size: 13px;
        }

        .course-heading h1 {
          margin: 10px 0;
          font-family: Georgia, serif;
          font-size: clamp(25px, 3vw, 32px);
        }

        .course-heading span,
        .course-subtitle {
          color: #8b796b;
          font-size: 14px;
        }

        .course-back,
        .course-save,
        .course-reset,
        .browse-btn {
          padding: 12px 17px;
          border-radius: 7px;
          cursor: pointer;
          font-size: 14px;
        }

        .course-back,
        .course-reset {
          border: 1px solid #d8c5b1;
          background: #fffdf9;
          color: #543b2d;
        }

        .course-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 280px;
          gap: 20px;
          align-items: start;
        }

        .course-main,
        .course-side {
          display: grid;
          gap: 20px;
          min-width: 0;
        }

        .course-card {
          min-width: 0;
          padding: 22px;
          background: #fffdf9;
          border: 1px solid #eadfd2;
          border-radius: 12px;
        }

        .course-card h2 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: 20px;
        }

        .course-subtitle {
          margin: 0 0 22px;
          line-height: 1.5;
        }

        .course-fields {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .course-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .course-field label {
          font-size: 13px;
          font-weight: 600;
        }

        .course-field input,
        .course-field select,
        .course-field textarea {
          width: 100%;
          min-width: 0;
          padding: 12px;
          border: 1px solid #e3d3c1;
          border-radius: 7px;
          outline-color: #b48a4b;
          background: #fffdf9;
          color: #543b2d;
          font: inherit;
          font-size: 14px;
        }

        .course-field textarea {
          resize: vertical;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .course-upload {
          min-height: 190px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border: 1px dashed #cdb49a;
          border-radius: 9px;
          background: #fcf7f0;
          text-align: center;
          cursor: pointer;
          overflow: hidden;
        }

        .course-upload input {
          display: none;
        }

        .course-upload img {
          width: 100%;
          max-height: 260px;
          object-fit: contain;
        }

        .course-upload > span:not(.browse-btn) {
          color: #927f70;
          font-size: 13px;
        }

        .upload-icon {
          font-size: 30px;
          color: #8b5738;
        }

        .browse-btn {
          display: inline-block;
          margin-top: 4px;
          background: #eee0d0;
          color: #65442e;
        }

        .course-side .course-card p {
          color: #796655;
          font-size: 13px;
          line-height: 1.7;
        }

        .course-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 22px;
        }

        .course-save {
          border: none;
          background: #8b5738;
          color: white;
        }

        .course-save:hover {
          background: #704329;
        }

        @media (max-width: 1000px) {
          .course-layout {
            grid-template-columns: minmax(0, 1fr);
          }

          .course-side {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .add-course-page {
            padding: 14px;
          }

          .course-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .course-back {
            width: 100%;
          }

          .course-fields,
          .course-side {
            grid-template-columns: minmax(0, 1fr);
          }

          .course-card {
            padding: 16px;
          }

          .course-actions {
            flex-direction: column-reverse;
          }

          .course-actions button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
