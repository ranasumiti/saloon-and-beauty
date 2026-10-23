
import { Link } from "react-router-dom";

export default function ManageCourses() {
  return (
    <>
      <style>{`
        .courses-page {
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          background: #faf5ef;
          min-height: 100vh;
          padding: 30px;
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
          margin-bottom: 28px;
          gap: 15px;
        }

        .courses-heading h1 {
          font-family: Georgia, serif;
          font-size: clamp(25px, 3vw, 34px);
          margin: 12px 0;
          overflow-wrap: anywhere;
        }

        .courses-heading p {
          color: #806752;
          margin: 0;
        }

        .add-course {
          display: inline-block;
          flex-shrink: 0;
          background: #b38b4e;
          color: white;
          padding: 14px 22px;
          border-radius: 8px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          font-size: 15px;
          text-align: center;
        }

        .course-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 15px;
          margin-bottom: 30px;
        }

        .course-stat {
          min-width: 0;
          background: #fffdf9;
          padding: 22px;
          border-radius: 12px;
          box-shadow: 0 3px 12px #5b3b2010;
          border: 1px solid #f0e3d5;
        }

        .course-stat p {
          color: #806752;
          margin: 0 0 10px;
          overflow-wrap: anywhere;
        }

        .course-stat h2 {
          font-size: 30px;
          margin: 0;
          font-family: Georgia, serif;
        }

        .course-table-panel {
          width: 100%;
          min-width: 0;
          background: #fffdf9;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #f0e3d5;
        }

        .course-table-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .course-table-heading h2 {
          font-family: Georgia, serif;
          font-size: 28px;
          margin: 0 0 8px;
        }

        .course-table-heading p {
          margin: 0;
          color: #806752;
        }

        .course-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          min-width: 0;
        }

        .course-filters input,
        .course-filters select {
          min-width: 0;
          max-width: 100%;
          padding: 12px;
          border: 1px solid #e5d5c3;
          border-radius: 7px;
          background: #fffdf9;
          color: #4b2e1d;
          font-size: 14px;
        }

        .course-filters input {
          flex: 1;
          width: 180px;
        }

        .course-filters select {
          width: 190px;
        }

        .course-table-wrapper {
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid #e8d9c9;
          border-radius: 8px;
        }

        .course-table {
          width: 100%;
          min-width: 850px;
          border-collapse: collapse;
          white-space: nowrap;
        }

        .course-table th {
          background: #f3e6d8;
          color: #4b2e1d;
          text-align: left;
          padding: 16px 12px;
          border: 1px solid #e8d9c9;
        }

        .course-table td {
          padding: 15px 12px;
          border: 1px solid #eaded1;
          color: #44352b;
          font-size: 14px;
        }

        .status {
          display: inline-block;
          padding: 7px 12px;
          border-radius: 20px;
          font-size: 13px;
        }

        .active {
          background: #e1efdf;
          color: #286337;
        }

        .inactive {
          background: #fde3dc;
          color: #a53d2b;
        }

        .edit-btn,
        .delete-btn {
          padding: 9px 12px;
          border-radius: 7px;
          margin: 3px;
          cursor: pointer;
          background: transparent;
        }

        .edit-btn {
          border: 1px solid #b38b4e;
          color: #80551e;
        }

        .delete-btn {
          border: 1px solid #d97765;
          color: #b33b2b;
        }

        .course-pagination {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 22px;
          flex-wrap: wrap;
        }

        .course-pagination button {
          background: #fffdf9;
          border: 1px solid #e5d5c3;
          padding: 10px 15px;
          border-radius: 6px;
          color: #4b2e1d;
          cursor: pointer;
        }

        .course-pagination .current-page {
          background: #76563e;
          color: white;
        }

        .course-table-hint {
          display: none;
          color: #806752;
          font-size: 12px;
          margin: 12px 0 0;
        }

        .add-course:hover {
          background: #8f6938;
        }

        .edit-btn:hover {
          background: #f5eadc;
        }

        .delete-btn:hover {
          background: #fde3dc;
        }

        @media (max-width: 1024px) {
          .courses-page {
            padding: 22px;
          }

          .course-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .course-stat {
            padding: 18px;
          }

          .course-table-panel {
            padding: 20px;
          }
        }

        @media (max-width: 768px) {
          .courses-page {
            padding: 15px;
          }

          .courses-heading {
            align-items: flex-start;
          }

          .course-table-heading {
            align-items: stretch;
          }

          .course-table-heading h2 {
            font-size: 25px;
          }

          .course-filters {
            width: 100%;
          }

          .course-filters input,
          .course-filters select {
            flex: 1;
            width: 100%;
          }

          .course-table-hint {
            display: block;
          }
        }

        @media (max-width: 520px) {
          .courses-page {
            padding: 12px;
          }

          .courses-heading {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }

          .add-course {
            width: 100%;
          }

          .course-stats {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
            margin-bottom: 20px;
          }

          .course-stat {
            padding: 16px;
          }

          .course-stat h2 {
            font-size: 26px;
          }

          .course-table-panel {
            padding: 12px;
          }

          .course-table-heading {
            gap: 16px;
          }

          .course-filters {
            flex-direction: column;
          }

          .course-filters input,
          .course-filters select {
            width: 100%;
          }

          .course-pagination {
            justify-content: center;
            gap: 5px;
          }

          .course-pagination button {
            padding: 9px 12px;
          }
        }
      `}</style>

      <div className="courses-page">
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
            <h2>5</h2>
          </div>
          <div className="course-stat">
            <p>Categories</p>
            <h2>4</h2>
          </div>
          <div className="course-stat">
            <p>Students Enrolled</p>
            <h2>48</h2>
          </div>
          <div className="course-stat">
            <p>Active Courses</p>
            <h2>3</h2>
          </div>
        </div>

        <div className="course-table-panel">
          <div className="course-table-heading">
            <div>
              <h2>Course List</h2>
              <p>View and manage all beauty courses.</p>
            </div>

            <div className="course-filters">
              <input type="text" placeholder="Search courses..." />

              <select defaultValue="all">
                <option value="all">All Categories</option>
                <option value="skin">Skin Care</option>
                <option value="makeup">Makeup</option>
                <option value="hair">Hair Care</option>
                <option value="nail">Nail Care</option>
              </select>
            </div>
          </div>

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
                <tr>
                  <td>01</td>
                  <td>Basic Beauty Course</td>
                  <td>Skin Care</td>
                  <td>1 Month</td>
                  <td>₹5,000</td>
                  <td><span className="status active">Active</span></td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>02</td>
                  <td>Advanced Makeup Course</td>
                  <td>Makeup</td>
                  <td>2 Months</td>
                  <td>₹15,000</td>
                  <td><span className="status active">Active</span></td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>03</td>
                  <td>Hair Styling Course</td>
                  <td>Hair Care</td>
                  <td>1 Month</td>
                  <td>₹8,000</td>
                  <td><span className="status inactive">Inactive</span></td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>04</td>
                  <td>Nail Art Course</td>
                  <td>Nail Care</td>
                  <td>3 Weeks</td>
                  <td>₹7,000</td>
                  <td><span className="status active">Active</span></td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>05</td>
                  <td>Bridal Makeup Course</td>
                  <td>Makeup</td>
                  <td>2 Months</td>
                  <td>₹18,000</td>
                  <td><span className="status inactive">Inactive</span></td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="course-table-hint">
            Swipe horizontally to view all course columns on mobile.
          </p>

          <div className="course-pagination">
            <button>‹</button>
            <button className="current-page">1</button>
            <button>2</button>
            <button>3</button>
            <button>›</button>
          </div>
        </div>
      </div>
    </>
  );
}
