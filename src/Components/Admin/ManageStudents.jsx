import { useState } from "react";

export default function ManageStudents() {
  const [view, setView] = useState("grid");

  return (
    <div className="students-page">
      {/* Page Heading */}
      <div className="students-heading">
        <div>
          <p className="students-breadcrumb">Home / Students</p>
          <h1>Manage Students</h1>
          <span>Manage your beauty academy students.</span>
        </div>

        <button className="students-add-btn" type="button">
          + Add Student
        </button>
      </div>

      {/* Statistics */}
      <div className="students-stats">
        <div className="student-stat">
          <span>♙</span>
          <div>
            <p>Total Students</p>
            <h2>124</h2>
          </div>
        </div>

        <div className="student-stat">
          <span className="student-green">✓</span>
          <div>
            <p>Active Students</p>
            <h2>98</h2>
          </div>
        </div>

        <div className="student-stat">
          <span className="student-yellow">▤</span>
          <div>
            <p>Enrolled Courses</p>
            <h2>156</h2>
          </div>
        </div>

        <div className="student-stat">
          <span className="student-red">★</span>
          <div>
            <p>Completed</p>
            <h2>26</h2>
          </div>
        </div>
      </div>

      {/* Students Directory */}
      <section className="students-directory">
        <div className="students-toolbar">
          <input
            type="text"
            placeholder="Search students..."
          />

          <select>
            <option>All Courses</option>
            <option>Professional Makeup</option>
            <option>Beauty Therapy</option>
            <option>Hair Styling</option>
            <option>Nail Art</option>
          </select>

          <select>
            <option>All Statuses</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

          <div className="students-view-toggle">
            <button
              type="button"
              className={view === "grid" ? "selected" : ""}
              onClick={() => setView("grid")}
            >
              ▦
            </button>

            <button
              type="button"
              className={view === "list" ? "selected" : ""}
              onClick={() => setView("list")}
            >
              ☷
            </button>
          </div>
        </div>

        <div
          className={`students-cards ${
            view === "list" ? "students-list-view" : ""
          }`}
        >
          {/* Student 1 */}
          <div className="student-card">
            <div className="student-image">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
                alt="Aanya Sharma"
              />
              <span className="student-status student-active">
                Active
              </span>
            </div>

            <div className="student-info">
              <h3>Aanya Sharma</h3>
              <p className="student-course">Professional Makeup</p>
              <p>✉ aanya@example.com</p>
              <p>☎ 98760 12345</p>
              <p>📅 Joined: 12 Aug 2026</p>

              <div className="student-progress">
                <div>
                  <span>Course Progress</span>
                  <b>75%</b>
                </div>
                <div className="progress-track">
                  <span style={{ width: "75%" }}></span>
                </div>
              </div>

              <div className="student-actions">
                <button type="button">View</button>
                <button type="button">Edit</button>
                <button type="button" className="student-delete">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Student 2 */}
          <div className="student-card">
            <div className="student-image">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
                alt="Mehak Kaur"
              />
              <span className="student-status student-active">
                Active
              </span>
            </div>

            <div className="student-info">
              <h3>Mehak Kaur</h3>
              <p className="student-course">Beauty Therapy</p>
              <p>✉ mehak@example.com</p>
              <p>☎ 98761 23456</p>
              <p>📅 Joined: 05 Sep 2026</p>

              <div className="student-progress">
                <div>
                  <span>Course Progress</span>
                  <b>45%</b>
                </div>
                <div className="progress-track">
                  <span style={{ width: "45%" }}></span>
                </div>
              </div>

              <div className="student-actions">
                <button type="button">View</button>
                <button type="button">Edit</button>
                <button type="button" className="student-delete">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Student 3 */}
          <div className="student-card">
            <div className="student-image">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500"
                alt="Simran Gill"
              />
              <span className="student-status student-pending">
                Pending
              </span>
            </div>

            <div className="student-info">
              <h3>Simran Gill</h3>
              <p className="student-course">Hair Styling</p>
              <p>✉ simran@example.com</p>
              <p>☎ 98123 45670</p>
              <p>📅 Joined: 18 Sep 2026</p>

              <div className="student-progress">
                <div>
                  <span>Course Progress</span>
                  <b>20%</b>
                </div>
                <div className="progress-track">
                  <span style={{ width: "20%" }}></span>
                </div>
              </div>

              <div className="student-actions">
                <button type="button">View</button>
                <button type="button">Edit</button>
                <button type="button" className="student-delete">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Student 4 */}
          <div className="student-card">
            <div className="student-image">
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500"
                alt="Riya Verma"
              />
              <span className="student-status student-completed">
                Completed
              </span>
            </div>

            <div className="student-info">
              <h3>Riya Verma</h3>
              <p className="student-course">Nail Art</p>
              <p>✉ riya@example.com</p>
              <p>☎ 98987 65432</p>
              <p>📅 Joined: 20 Jun 2026</p>

              <div className="student-progress">
                <div>
                  <span>Course Progress</span>
                  <b>100%</b>
                </div>
                <div className="progress-track">
                  <span style={{ width: "100%" }}></span>
                </div>
              </div>

              <div className="student-actions">
                <button type="button">View</button>
                <button type="button">Edit</button>
                <button type="button" className="student-delete">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Student 5 */}
          <div className="student-card">
            <div className="student-image">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500"
                alt="Isha Arora"
              />
              <span className="student-status student-active">
                Active
              </span>
            </div>

            <div className="student-info">
              <h3>Isha Arora</h3>
              <p className="student-course">Professional Makeup</p>
              <p>✉ isha@example.com</p>
              <p>☎ 98712 78901</p>
              <p>📅 Joined: 01 Oct 2026</p>

              <div className="student-progress">
                <div>
                  <span>Course Progress</span>
                  <b>60%</b>
                </div>
                <div className="progress-track">
                  <span style={{ width: "60%" }}></span>
                </div>
              </div>

              <div className="student-actions">
                <button type="button">View</button>
                <button type="button">Edit</button>
                <button type="button" className="student-delete">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Student 6 */}
          <div className="student-card">
            <div className="student-image">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500"
                alt="Navneet Kaur"
              />
              <span className="student-status student-active">
                Active
              </span>
            </div>

            <div className="student-info">
              <h3>Navneet Kaur</h3>
              <p className="student-course">Beauty Therapy</p>
              <p>✉ navneet@example.com</p>
              <p>☎ 98111 22334</p>
              <p>📅 Joined: 10 Oct 2026</p>

              <div className="student-progress">
                <div>
                  <span>Course Progress</span>
                  <b>35%</b>
                </div>
                <div className="progress-track">
                  <span style={{ width: "35%" }}></span>
                </div>
              </div>

              <div className="student-actions">
                <button type="button">View</button>
                <button type="button">Edit</button>
                <button type="button" className="student-delete">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Add Student Card */}
          <button className="add-student-card" type="button">
            <span className="student-plus">＋</span>
            <h3>Add New Student</h3>
            <p>Welcome new learners to your beauty academy.</p>
            <b>+ Add Student</b>
          </button>
        </div>
      </section>

      <style>{`
        .students-page {
          width: 100%;
          min-width: 0;
          padding: 25px;
          box-sizing: border-box;
          background: #fbf5ed;
          color: #382116;
          font-family: Arial, sans-serif;
        }

        .students-page * {
          box-sizing: border-box;
        }

        .students-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 25px;
        }

        .students-breadcrumb {
          margin: 0 0 8px;
          color: #8b5738;
          font-size: 13px;
        }

        .students-heading h1 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: clamp(27px, 3vw, 36px);
        }

        .students-heading span {
          color: #78675c;
          font-size: 14px;
        }

        .students-add-btn {
          padding: 13px 18px;
          border: none;
          border-radius: 8px;
          background: #8b5738;
          color: white;
          cursor: pointer;
          white-space: nowrap;
        }

        .students-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 15px;
          margin-bottom: 22px;
        }

        .student-stat {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
          padding: 18px;
          border: 1px solid #ecdfd2;
          border-radius: 12px;
          background: #fffaf5;
          box-shadow: 0 4px 12px #50301b08;
        }

        .student-stat > span {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #f3e0d2;
          color: #8b5738;
          font-size: 23px;
        }

        .student-stat .student-green {
          background: #e5f0df;
          color: #54834b;
        }

        .student-stat .student-yellow {
          background: #fff0d1;
          color: #a47719;
        }

        .student-stat .student-red {
          background: #fde4df;
          color: #b64d3d;
        }

        .student-stat p {
          margin: 0 0 7px;
          color: #78675c;
          font-size: 13px;
        }

        .student-stat h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 29px;
        }

        .students-directory {
          padding: 18px;
          border: 1px solid #ecdfd2;
          border-radius: 12px;
          background: #fffaf6;
        }

        .students-toolbar {
          display: grid;
          grid-template-columns: minmax(180px, 1fr) 190px 160px auto;
          gap: 12px;
          margin-bottom: 20px;
        }

        .students-toolbar input,
        .students-toolbar select {
          width: 100%;
          min-width: 0;
          padding: 12px;
          border: 1px solid #e4d7cb;
          border-radius: 8px;
          background: white;
          color: #382116;
          outline-color: #8b5738;
        }

        .students-view-toggle {
          display: flex;
          gap: 4px;
          padding: 3px;
          border: 1px solid #e4d7cb;
          border-radius: 8px;
        }

        .students-view-toggle button {
          min-width: 35px;
          border: none;
          border-radius: 6px;
          background: transparent;
          color: #795b47;
          font-size: 20px;
          cursor: pointer;
        }

        .students-view-toggle button.selected {
          background: #8b5738;
          color: white;
        }

        .students-cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .student-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid #ecdfd2;
          border-radius: 10px;
          background: #fffdf9;
          box-shadow: 0 4px 12px #50301b0d;
        }

        .student-image {
          position: relative;
          height: 155px;
          background: #ead8c8;
        }

        .student-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
        }

        .student-status {
          position: absolute;
          bottom: 9px;
          left: 10px;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 11px;
        }

        .student-active {
          background: #dff2df;
          color: #176b2b;
        }

        .student-pending {
          background: #fff0cf;
          color: #8a5708;
        }

        .student-completed {
          background: #e7e1f8;
          color: #60439a;
        }

        .student-info {
          padding: 14px;
        }

        .student-info h3 {
          margin: 0 0 5px;
          font-family: Georgia, serif;
          font-size: 18px;
          overflow-wrap: anywhere;
        }

        .student-info p {
          margin: 9px 0;
          color: #78675c;
          font-size: 12px;
          overflow-wrap: anywhere;
        }

        .student-info .student-course {
          color: #8b5738;
          font-size: 13px;
        }

        .student-progress {
          margin: 14px 0;
        }

        .student-progress > div:first-child {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 7px;
          color: #78675c;
          font-size: 11px;
        }

        .student-progress b {
          color: #8b5738;
        }

        .progress-track {
          height: 6px;
          overflow: hidden;
          border-radius: 10px;
          background: #eee2d7;
        }

        .progress-track span {
          display: block;
          height: 100%;
          border-radius: 10px;
          background: #a87855;
        }

        .student-actions {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 6px;
          margin-top: 15px;
        }

        .student-actions button {
          padding: 9px 3px;
          border: 1px solid #eee1d5;
          border-radius: 6px;
          background: #fffaf5;
          color: #76533d;
          font-size: 12px;
          cursor: pointer;
        }

        .student-actions .student-delete {
          color: #b8322a;
          background: #fff5f2;
        }

        .add-student-card {
          display: flex;
          min-height: 300px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px;
          border: 1px dashed #d8c4b2;
          border-radius: 10px;
          background: #fffcf8;
          color: #4c3020;
          text-align: center;
          cursor: pointer;
        }

        .student-plus {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #f3e0d2;
          color: #8b5738;
          font-size: 30px;
        }

        .add-student-card h3 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 17px;
        }

        .add-student-card p {
          margin: 0;
          color: #78675c;
          font-size: 12px;
          line-height: 1.5;
        }

        .add-student-card b {
          padding: 11px 15px;
          border-radius: 7px;
          background: #8b5738;
          color: white;
          font-size: 12px;
          font-weight: 500;
        }

        .students-list-view {
          grid-template-columns: 1fr;
        }

        .students-list-view .student-card {
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr);
        }

        .students-list-view .student-image {
          height: 100%;
          min-height: 230px;
        }

        .students-list-view .student-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .students-list-view .add-student-card {
          min-height: 170px;
        }

        @media (max-width: 1200px) {
          .students-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .students-cards {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .students-toolbar {
            grid-template-columns: minmax(150px, 1fr) 1fr 1fr auto;
          }
        }

        @media (max-width: 850px) {
          .students-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .students-toolbar {
            grid-template-columns: 1fr 1fr;
          }

          .students-toolbar input {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 560px) {
          .students-page {
            padding: 14px;
          }

          .students-heading {
            align-items: stretch;
            flex-direction: column;
          }

          .students-add-btn {
            width: 100%;
          }

          .student-stat {
            gap: 9px;
            padding: 12px 9px;
          }

          .student-stat > span {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }

          .student-stat p {
            font-size: 11px;
          }

          .student-stat h2 {
            font-size: 23px;
          }

          .students-directory {
            padding: 10px;
          }

          .students-toolbar {
            grid-template-columns: 1fr;
          }

          .students-toolbar input {
            grid-column: auto;
          }

          .students-cards {
            grid-template-columns: 1fr;
          }

          .student-image {
            height: 200px;
          }

          .students-list-view .student-card {
            grid-template-columns: 110px minmax(0, 1fr);
          }

          .students-list-view .student-info {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}