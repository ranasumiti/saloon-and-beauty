
import { useState } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "9876543210",
      joined: "2026-10-12",
      status: "Active",
    },
    {
      id: 2,
      name: "Simran Kaur",
      email: "simran@gmail.com",
      phone: "9876501234",
      joined: "2026-10-15",
      status: "Active",
    },
    {
      id: 3,
      name: "Neha Verma",
      email: "neha@gmail.com",
      phone: "9876512345",
      joined: "2026-10-18",
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.includes(search);

    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const toggleStatus = (id) => {
    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((previousUsers) =>
        previousUsers.filter((user) => user.id !== id)
      );
    }
  };

  return (
    <div className="manage-users-page">
      <style>{`
        .manage-users-page {
          padding: 28px;
          min-height: 100vh;
          background: #faf7f2;
          color: #49372e;
        }

        .users-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }

        .users-header h2 {
          margin: 0 0 8px;
          color: #654735;
          font-family: Georgia, serif;
        }

        .users-header p {
          margin: 0;
          color: #88796e;
          font-size: 14px;
        }

        .users-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 25px;
        }

        .users-stat-card {
          padding: 22px;
          background: white;
          border: 1px solid #eee5da;
          border-radius: 12px;
        }

        .users-stat-card p {
          margin: 0 0 12px;
          color: #88796e;
          font-size: 14px;
        }

        .users-stat-card h3 {
          margin: 0;
          color: #654735;
          font-size: 27px;
        }

        .users-list-card {
          padding: 22px;
          background: white;
          border: 1px solid #eee5da;
          border-radius: 12px;
        }

        .users-list-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 20px;
        }

        .users-list-top h3 {
          margin: 0;
          color: #654735;
        }

        .users-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .users-search,
        .users-filter {
          box-sizing: border-box;
          padding: 11px 12px;
          border: 1px solid #e3d8cb;
          border-radius: 7px;
          background: white;
          color: #49372e;
          font-size: 13px;
          outline: none;
        }

        .users-search {
          width: 250px;
          max-width: 100%;
        }

        .users-search:focus,
        .users-filter:focus {
          border-color: #ad895d;
        }

        .users-table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .users-table {
          width: 100%;
          min-width: 850px;
          border-collapse: collapse;
        }

        .users-table th,
        .users-table td {
          padding: 15px 12px;
          border-bottom: 1px solid #f0e9e1;
          text-align: left;
          font-size: 13px;
        }

        .users-table th {
          background: #fcfaf7;
          color: #88796e;
          font-weight: 600;
        }

        .user-avatar {
          display: inline-flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          margin-right: 9px;
          border-radius: 50%;
          background: #f3e7d8;
          color: #654735;
          font-weight: 600;
        }

        .user-status {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .user-status.active {
          background: #e8f5e9;
          color: #2e7d32;
        }

        .user-status.inactive {
          background: #fbe9e7;
          color: #c62828;
        }

        .user-actions {
          display: flex;
          gap: 7px;
          align-items: center;
        }

        .user-action-btn {
          padding: 8px 10px;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .user-view-btn {
          background: #f3e7d8;
          color: #654735;
        }

        .user-toggle-btn {
          background: #f7f0e7;
          color: #654735;
        }

        .user-delete-btn {
          background: #fbe9e7;
          color: #c62828;
        }

        .users-empty {
          padding: 35px !important;
          text-align: center !important;
          color: #88796e;
        }

        .user-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: #0007;
        }

        .user-modal {
          width: 100%;
          max-width: 420px;
          padding: 25px;
          border-radius: 12px;
          background: white;
          box-sizing: border-box;
        }

        .user-modal h3 {
          color: #654735;
          font-family: Georgia, serif;
        }

        .user-modal p {
          font-size: 14px;
          margin: 12px 0;
        }

        .user-modal-close {
          padding: 10px 16px;
          border: none;
          border-radius: 6px;
          background: #76543e;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 700px) {
          .manage-users-page {
            padding: 16px;
          }

          .users-stats {
            grid-template-columns: 1fr;
          }

          .users-list-card {
            padding: 15px;
          }

          .users-filters {
            width: 100%;
          }

          .users-search {
            width: 100%;
          }

          .users-filter {
            flex: 1;
          }
        }
      `}</style>

      <div className="users-header">
        <div>
          <h2>Manage Users</h2>
          <p>View and manage your salon customers.</p>
        </div>
      </div>

      <div className="users-stats">
        <div className="users-stat-card">
          <p>Total Users</p>
          <h3>{users.length}</h3>
        </div>

        <div className="users-stat-card">
          <p>Active Users</p>
          <h3>{users.filter((user) => user.status === "Active").length}</h3>
        </div>

        <div className="users-stat-card">
          <p>Inactive Users</p>
          <h3>{users.filter((user) => user.status === "Inactive").length}</h3>
        </div>
      </div>

      <div className="users-list-card">
        <div className="users-list-top">
          <h3>All Users</h3>

          <div className="users-filters">
            <input
              className="users-search"
              type="text"
              placeholder="Search name, email or phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="users-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="users-table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Joined Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>

                    <td>
                      <span className="user-avatar">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                      {user.name}
                    </td>

                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.joined}</td>

                    <td>
                      <span
                        className={`user-status ${
                          user.status === "Active" ? "active" : "inactive"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td>
                      <div className="user-actions">
                        <button
                          className="user-action-btn user-view-btn"
                          onClick={() => setSelectedUser(user)}
                        >
                          View
                        </button>

                        <button
                          className="user-action-btn user-toggle-btn"
                          onClick={() => toggleStatus(user.id)}
                        >
                          {user.status === "Active"
                            ? "Deactivate"
                            : "Activate"}
                        </button>

                        <button
                          className="user-action-btn user-delete-btn"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="users-empty">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUser && (
        <div
          className="user-modal-backdrop"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="user-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>User Details</h3>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Joined:</strong> {selectedUser.joined}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>

            <button
              className="user-modal-close"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
