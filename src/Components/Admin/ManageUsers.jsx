
export default function ManageUsers() {
  return (
    <>
      <div className="users-page">
        <div className="users-heading">
          <div>
            <p>Home / Users</p>
            <h1>Manage Users</h1>
            <span>View and manage registered customers.</span>
          </div>

          <button className="users-add-btn">+ Add User</button>
        </div>

        <div className="users-stats">
          <div className="users-stat">
            <p>Total Users</p>
            <h2>85</h2>
          </div>
          <div className="users-stat">
            <p>Active Users</p>
            <h2>72</h2>
          </div>
          <div className="users-stat">
            <p>New This Month</p>
            <h2>13</h2>
          </div>
          <div className="users-stat">
            <p>Inactive Users</p>
            <h2>13</h2>
          </div>
        </div>

        <div className="users-panel">
          <div className="users-panel-heading">
            <div>
              <h2>Registered Users</h2>
              <p>Manage your salon customers.</p>
            </div>

            <div className="users-filters">
              <input
                type="text"
                placeholder="Search users..."
              />

              <select defaultValue="all">
                <option value="all">All Statuses</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div className="users-table-wrapper">
            <table className="users-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Joined</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>01</td>
                  <td>Priya Sharma</td>
                  <td>priya@example.com</td>
                  <td>98765 43210</td>
                  <td>10 Oct 2026</td>
                  <td><span className="user-status user-active">Active</span></td>
                  <td><button className="user-view-btn">View</button></td>
                </tr>

                <tr>
                  <td>02</td>
                  <td>Neha Verma</td>
                  <td>neha@example.com</td>
                  <td>98765 12340</td>
                  <td>12 Oct 2026</td>
                  <td><span className="user-status user-active">Active</span></td>
                  <td><button className="user-view-btn">View</button></td>
                </tr>

                <tr>
                  <td>03</td>
                  <td>Anjali Gupta</td>
                  <td>anjali@example.com</td>
                  <td>98123 45670</td>
                  <td>15 Oct 2026</td>
                  <td><span className="user-status user-inactive">Inactive</span></td>
                  <td><button className="user-view-btn">View</button></td>
                </tr>

                <tr>
                  <td>04</td>
                  <td>Simran Kaur</td>
                  <td>simran@example.com</td>
                  <td>98987 65432</td>
                  <td>18 Oct 2026</td>
                  <td><span className="user-status user-active">Active</span></td>
                  <td><button className="user-view-btn">View</button></td>
                </tr>

                <tr>
                  <td>05</td>
                  <td>Megha Arora</td>
                  <td>megha@example.com</td>
                  <td>98760 12345</td>
                  <td>20 Oct 2026</td>
                  <td><span className="user-status user-inactive">Inactive</span></td>
                  <td><button className="user-view-btn">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="users-table-hint">
            Swipe horizontally to view all user details.
          </p>

          <div className="users-footer">
            Showing 5 sample users
          </div>
        </div>
      </div>

      <style>{`
        .users-page {
          width: 100%;
          min-width: 0;
          min-height: 100vh;
          padding: 25px;
          background: #F8F1E8;
          color: #493427;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .users-page * {
          box-sizing: border-box;
        }

        .users-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          margin-bottom: 25px;
        }

        .users-heading p {
          color: #8A7A6D;
          font-size: 13px;
        }

        .users-heading h1 {
          font-family: Georgia, serif;
          font-size: clamp(25px, 3vw, 32px);
          margin: 10px 0;
          overflow-wrap: anywhere;
        }

        .users-heading span {
          color: #8A7A6D;
          font-size: 14px;
        }

        .users-add-btn {
          flex-shrink: 0;
          padding: 13px 18px;
          border: none;
          border-radius: 8px;
          background: #B48A4B;
          color: white;
          cursor: pointer;
        }

        .users-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 25px;
        }

        .users-stat {
          min-width: 0;
          padding: 20px;
          background: #FFFCF8;
          border: 1px solid #E9DED1;
          border-radius: 12px;
          box-shadow: 0 4px 12px #49342708;
        }

        .users-stat p {
          margin: 0 0 12px;
          color: #806752;
          font-size: 13px;
          overflow-wrap: anywhere;
        }

        .users-stat h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 30px;
          color: #C69C55;
        }

        .users-panel {
          width: 100%;
          min-width: 0;
          padding: 22px;
          background: #FFFCF8;
          border: 1px solid #E9DED1;
          border-radius: 12px;
        }

        .users-panel-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 18px;
          margin-bottom: 22px;
        }

        .users-panel-heading h2 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: 25px;
        }

        .users-panel-heading p {
          margin: 0;
          color: #8A7A6D;
          font-size: 13px;
          line-height: 1.5;
        }

        .users-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          min-width: 0;
        }

        .users-filters input,
        .users-filters select {
          min-width: 0;
          max-width: 100%;
          padding: 12px;
          border: 1px solid #E9DED1;
          border-radius: 7px;
          background: #FFFCF8;
          color: #493427;
        }

        .users-filters input {
          width: 200px;
        }

        .users-filters select {
          width: 160px;
        }

        .users-table-wrapper {
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid #E9DED1;
          border-radius: 8px;
        }

        .users-table {
          width: 100%;
          min-width: 850px;
          border-collapse: collapse;
          white-space: nowrap;
        }

        .users-table th {
          padding: 15px 12px;
          text-align: left;
          background: #F2E5D5;
          color: #493427;
          font-size: 13px;
          border-bottom: 1px solid #E9DED1;
        }

        .users-table td {
          padding: 15px 12px;
          font-size: 13px;
          border-bottom: 1px solid #E9DED1;
        }

        .users-table tbody tr:last-child td {
          border-bottom: none;
        }

        .user-status {
          display: inline-block;
          padding: 7px 10px;
          border-radius: 20px;
          font-size: 12px;
        }

        .user-active {
          background: #E1EFDF;
          color: #286337;
        }

        .user-inactive {
          background: #FDE3DC;
          color: #A53D2B;
        }

        .user-view-btn {
          padding: 8px 13px;
          border: 1px solid #B38B4E;
          border-radius: 6px;
          background: #FFFCF8;
          color: #80551E;
          cursor: pointer;
        }

        .users-add-btn:hover {
          background: #8F6938;
        }

        .user-view-btn:hover {
          background: #F5EADC;
        }

        .users-table-hint {
          display: none;
          color: #8A7A6D;
          font-size: 12px;
        }

        .users-footer {
          margin-top: 18px;
          color: #8A7A6D;
          font-size: 13px;
        }

        @media (max-width: 1100px) {
          .users-page {
            padding: 20px;
          }

          .users-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .users-panel {
            padding: 18px;
          }
        }

        @media (max-width: 768px) {
          .users-page {
            padding: 15px;
          }

          .users-panel-heading {
            flex-direction: column;
          }

          .users-filters {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: 100%;
          }

          .users-filters input,
          .users-filters select {
            width: 100%;
          }

          .users-table-hint {
            display: block;
          }
        }

        @media (max-width: 520px) {
          .users-page {
            padding: 12px;
          }

          .users-heading {
            flex-direction: column;
            align-items: stretch;
          }

          .users-add-btn {
            width: 100%;
          }

          .users-stats {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }

          .users-stat {
            padding: 17px;
          }

          .users-panel {
            padding: 12px;
          }

          .users-panel-heading h2 {
            font-size: 23px;
          }

          .users-filters {
            grid-template-columns: minmax(0, 1fr);
          }

          .users-filters input,
          .users-filters select {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
