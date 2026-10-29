
import { useState } from "react";

export default function ManageAppointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      phone: "9876543210",
      service: "Hair Styling",
      date: "2026-10-30",
      time: "11:00",
      status: "Pending",
    },
    {
      id: 2,
      name: "Simran Kaur",
      phone: "9876501234",
      service: "Facial",
      date: "2026-10-31",
      time: "14:00",
      status: "Confirmed",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const filteredAppointments = appointments.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.service.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search);

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const updateStatus = (id, status) => {
    setAppointments((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  const deleteAppointment = (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      setAppointments((previous) =>
        previous.filter((item) => item.id !== id)
      );
    }
  };

  return (
    <div className="manage-appointments">
      <style>{`
        .manage-appointments {
          padding: 28px;
          min-height: 100vh;
          background: #faf7f2;
          color: #49372e;
        }

        .appointment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }

        .appointment-header h2 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          color: #654735;
        }

        .appointment-header p {
          margin: 0;
          color: #88796e;
          font-size: 14px;
        }

        .appointment-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 25px;
        }

        .appointment-stat {
          padding: 22px;
          background: white;
          border: 1px solid #eee5da;
          border-radius: 12px;
        }

        .appointment-stat p {
          margin: 0 0 12px;
          color: #88796e;
          font-size: 14px;
        }

        .appointment-stat h3 {
          margin: 0;
          font-size: 27px;
          color: #654735;
        }

        .appointment-card {
          padding: 22px;
          background: white;
          border: 1px solid #eee5da;
          border-radius: 12px;
        }

        .appointment-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }

        .appointment-toolbar h3 {
          margin: 0;
          color: #654735;
        }

        .appointment-search,
        .appointment-filter,
        .appointment-status-select {
          padding: 10px 12px;
          border: 1px solid #e3d8cb;
          border-radius: 7px;
          background: white;
          color: #49372e;
          font-size: 13px;
          outline: none;
        }

        .appointment-search {
          width: 240px;
          max-width: 100%;
        }

        .appointment-table-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .appointment-table {
          width: 100%;
          min-width: 950px;
          border-collapse: collapse;
        }

        .appointment-table th,
        .appointment-table td {
          padding: 14px 12px;
          text-align: left;
          border-bottom: 1px solid #f0e9e1;
          font-size: 13px;
        }

        .appointment-table th {
          background: #fcfaf7;
          color: #88796e;
        }

        .appointment-status {
          display: inline-block;
          padding: 6px 9px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .appointment-status.pending {
          background: #fff3d9;
          color: #936316;
        }

        .appointment-status.confirmed {
          background: #e8f5e9;
          color: #2e7d32;
        }

        .appointment-status.completed {
          background: #e3f2fd;
          color: #1565c0;
        }

        .appointment-status.cancelled {
          background: #fbe9e7;
          color: #c62828;
        }

        .appointment-actions {
          display: flex;
          gap: 7px;
          align-items: center;
        }

        .appointment-action-btn {
          padding: 7px 10px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
        }

        .appointment-view {
          background: #f3e7d8;
          color: #654735;
        }

        .appointment-delete {
          background: #fbe9e7;
          color: #c62828;
        }

        .appointment-empty {
          padding: 35px !important;
          text-align: center !important;
          color: #88796e;
        }

        .appointment-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: #0007;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .appointment-modal {
          width: 100%;
          max-width: 420px;
          padding: 25px;
          border-radius: 12px;
          background: white;
          box-sizing: border-box;
        }

        .appointment-modal h3 {
          color: #654735;
          font-family: Georgia, serif;
        }

        .appointment-modal p {
          margin: 12px 0;
          font-size: 14px;
        }

        .appointment-close {
          margin-top: 12px;
          padding: 10px 16px;
          background: #76543e;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        @media (max-width: 700px) {
          .manage-appointments {
            padding: 16px;
          }

          .appointment-stats {
            grid-template-columns: 1fr;
          }

          .appointment-card {
            padding: 15px;
          }

          .appointment-search {
            width: 100%;
          }
        }
      `}</style>

      <div className="appointment-header">
        <div>
          <h2>Manage Appointments</h2>
          <p>View and manage your salon bookings.</p>
        </div>
      </div>

      <div className="appointment-stats">
        <div className="appointment-stat">
          <p>Total Appointments</p>
          <h3>{appointments.length}</h3>
        </div>

        <div className="appointment-stat">
          <p>Pending</p>
          <h3>
            {appointments.filter((a) => a.status === "Pending").length}
          </h3>
        </div>

        <div className="appointment-stat">
          <p>Confirmed</p>
          <h3>
            {appointments.filter((a) => a.status === "Confirmed").length}
          </h3>
        </div>
      </div>

      <div className="appointment-card">
        <div className="appointment-toolbar">
          <h3>All Appointments</h3>

          <input
            className="appointment-search"
            type="text"
            placeholder="Search customer, phone, service..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="appointment-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div className="appointment-table-wrap">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.service}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>
                      <select
                        className="appointment-status-select"
                        value={item.status}
                        onChange={(e) =>
                          updateStatus(item.id, e.target.value)
                        }
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td>
                      <div className="appointment-actions">
                        <button
                          className="appointment-action-btn appointment-view"
                          onClick={() => setSelectedAppointment(item)}
                        >
                          View
                        </button>

                        <button
                          className="appointment-action-btn appointment-delete"
                          onClick={() => deleteAppointment(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="appointment-empty">
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedAppointment && (
        <div
          className="appointment-modal-backdrop"
          onClick={() => setSelectedAppointment(null)}
        >
          <div
            className="appointment-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Appointment Details</h3>
            <p><strong>Customer:</strong> {selectedAppointment.name}</p>
            <p><strong>Phone:</strong> {selectedAppointment.phone}</p>
            <p><strong>Service:</strong> {selectedAppointment.service}</p>
            <p><strong>Date:</strong> {selectedAppointment.date}</p>
            <p><strong>Time:</strong> {selectedAppointment.time}</p>
            <p><strong>Status:</strong> {selectedAppointment.status}</p>

            <button
              className="appointment-close"
              onClick={() => setSelectedAppointment(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
