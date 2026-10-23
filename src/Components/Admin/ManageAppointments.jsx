
import { Link } from "react-router-dom";

export default function ManageAppointments() {
  return (
    <>
      <style>{`
        .appointments-page {
          min-height: 100vh;
          padding: 30px;
          background: #faf5ef;
          color: #4b2e1d;
          font-family: Arial, sans-serif;
        }

        .appointment-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-bottom: 28px;
        }

        .appointment-heading h1 {
          font-family: Georgia, serif;
          font-size: 34px;
          margin: 12px 0;
        }

        .appointment-heading p {
          color: #806752;
          margin: 0;
        }

        .add-appointment-btn {
          background: #b38b4e;
          color: white;
          padding: 14px 20px;
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
        }

        .appointment-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-bottom: 28px;
        }

        .appointment-stat {
          background: #fffdf9;
          padding: 22px;
          border-radius: 12px;
          border: 1px solid #f0e3d5;
          box-shadow: 0 3px 12px #5b3b2010;
        }

        .appointment-stat p {
          color: #806752;
          margin: 0 0 10px;
        }

        .appointment-stat h2 {
          font-family: Georgia, serif;
          font-size: 30px;
          margin: 0;
        }

        .appointment-panel {
          background: #fffdf9;
          padding: 22px;
          border: 1px solid #f0e3d5;
          border-radius: 12px;
        }

        .appointment-panel-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .appointment-panel-heading h2 {
          font-family: Georgia, serif;
          font-size: 27px;
          margin: 0 0 8px;
        }

        .appointment-panel-heading p {
          color: #806752;
          margin: 0;
        }

        .appointment-filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .appointment-filters input,
        .appointment-filters select {
          padding: 11px;
          border: 1px solid #e5d5c3;
          border-radius: 7px;
          background: #fffdf9;
          color: #4b2e1d;
        }

        .appointment-table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .appointment-table {
          width: 100%;
          min-width: 1200px;
          border-collapse: collapse;
        }

        .appointment-table th {
          padding: 14px 10px;
          text-align: left;
          background: #f3e6d8;
          border: 1px solid #e8d9c9;
          font-size: 13px;
        }

        .appointment-table td {
          padding: 12px 10px;
          border: 1px solid #eaded1;
          font-size: 13px;
          white-space: nowrap;
        }

        .appointment-status {
          display: inline-block;
          padding: 7px 10px;
          border-radius: 20px;
          font-size: 12px;
        }

        .status-pending {
          background: #fff0cc;
          color: #8a5700;
        }

        .status-confirmed {
          background: #e1efdf;
          color: #286337;
        }

        .status-completed {
          background: #deedff;
          color: #245387;
        }

        .status-cancelled,
        .status-rejected {
          background: #fde3dc;
          color: #a53d2b;
        }

        .appointment-action {
          padding: 8px 10px;
          margin: 2px;
          border-radius: 6px;
          cursor: pointer;
          background: transparent;
          font-size: 12px;
        }

        .confirm-btn {
          border: 1px solid #70a876;
          color: #286337;
          background: #f1faf0;
        }

        .reject-btn {
          border: 1px solid #e27a6d;
          color: #b33226;
          background: #fff4f1;
        }

        .view-btn {
          border: 1px solid #bba58e;
          color: #67462d;
        }

        .edit-btn {
          border: 1px solid #b38b4e;
          color: #80551e;
        }

        .appointment-action:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          background: #e8e2dc;
          border-color: #d5c9bd;
          color: #75695e;
        }

        .appointment-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 22px;
          color: #806752;
          font-size: 14px;
        }

        .appointment-pagination {
          display: flex;
          gap: 8px;
        }

        .appointment-pagination button {
          padding: 10px 14px;
          border: 1px solid #e5d5c3;
          background: #fffdf9;
          color: #4b2e1d;
          border-radius: 6px;
        }

        .appointment-pagination .current {
          background: #76563e;
          color: white;
        }

        @media (max-width: 1000px) {
          .appointment-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .appointments-page {
            padding: 15px;
          }

          .appointment-heading {
            flex-direction: column;
            align-items: flex-start;
          }

          .appointment-stats {
            grid-template-columns: 1fr;
          }

          .appointment-panel {
            padding: 14px;
          }

          .appointment-filters {
            width: 100%;
          }

          .appointment-filters input,
          .appointment-filters select {
            width: 100%;
            box-sizing: border-box;
          }
            
.appointments-page {
  width: 100%;
  min-width: 0;
  min-height: 100vh;
  padding: 25px;
  background: #faf5ef;
  color: #4b2e1d;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
}

.appointments-page * {
  box-sizing: border-box;
}

.appointment-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
}

.appointment-heading h1 {
  font-family: Georgia, serif;
  font-size: clamp(25px, 3vw, 34px);
  margin: 12px 0;
  overflow-wrap: anywhere;
}

.appointment-heading p {
  color: #806752;
  margin: 0;
  line-height: 1.6;
}

.add-appointment-btn {
  display: inline-block;
  flex-shrink: 0;
  background: #b38b4e;
  color: white;
  padding: 14px 20px;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  text-align: center;
}

.appointment-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 15px;
  margin-bottom: 28px;
}

.appointment-stat {
  min-width: 0;
  background: #fffdf9;
  padding: 22px;
  border-radius: 12px;
  border: 1px solid #f0e3d5;
  box-shadow: 0 3px 12px #5b3b2010;
}

.appointment-stat p {
  color: #806752;
  margin: 0 0 10px;
  overflow-wrap: anywhere;
}

.appointment-stat h2 {
  font-family: Georgia, serif;
  font-size: 30px;
  margin: 0;
}

.appointment-panel {
  width: 100%;
  min-width: 0;
  background: #fffdf9;
  padding: 22px;
  border: 1px solid #f0e3d5;
  border-radius: 12px;
}

.appointment-panel-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 22px;
}

.appointment-panel-heading h2 {
  font-family: Georgia, serif;
  font-size: 27px;
  margin: 0 0 8px;
}

.appointment-panel-heading p {
  color: #806752;
  margin: 0;
  line-height: 1.5;
}

.appointment-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  min-width: 0;
  max-width: 100%;
}

.appointment-filters input,
.appointment-filters select {
  min-width: 0;
  max-width: 100%;
  padding: 11px;
  border: 1px solid #e5d5c3;
  border-radius: 7px;
  background: #fffdf9;
  color: #4b2e1d;
  font-size: 14px;
}

.appointment-filters input[type="text"] {
  width: 190px;
}

.appointment-table-wrapper {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #e8d9c9;
  border-radius: 8px;
}

.appointment-table {
  width: 100%;
  min-width: 1200px;
  border-collapse: collapse;
  white-space: nowrap;
}

.appointment-table th {
  padding: 14px 10px;
  text-align: left;
  background: #f3e6d8;
  border: 1px solid #e8d9c9;
  font-size: 13px;
}

.appointment-table td {
  padding: 12px 10px;
  border: 1px solid #eaded1;
  font-size: 13px;
}

.appointment-status {
  display: inline-block;
  padding: 7px 10px;
  border-radius: 20px;
  font-size: 12px;
}

.status-pending {
  background: #fff0cc;
  color: #8a5700;
}

.status-confirmed {
  background: #e1efdf;
  color: #286337;
}

.status-completed {
  background: #deedff;
  color: #245387;
}

.status-cancelled,
.status-rejected {
  background: #fde3dc;
  color: #a53d2b;
}

.appointment-action {
  padding: 8px 10px;
  margin: 2px;
  border-radius: 6px;
  cursor: pointer;
  background: transparent;
  font-size: 12px;
}

.confirm-btn {
  border: 1px solid #70a876;
  color: #286337;
  background: #f1faf0;
}

.reject-btn {
  border: 1px solid #e27a6d;
  color: #b33226;
  background: #fff4f1;
}

.view-btn {
  border: 1px solid #bba58e;
  color: #67462d;
}

.edit-btn {
  border: 1px solid #b38b4e;
  color: #80551e;
}

.appointment-action:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: #e8e2dc;
  border-color: #d5c9bd;
  color: #75695e;
}

.appointment-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 22px;
  color: #806752;
  font-size: 14px;
}

.appointment-footer p {
  margin: 0;
}

.appointment-pagination {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.appointment-pagination button {
  padding: 10px 14px;
  border: 1px solid #e5d5c3;
  background: #fffdf9;
  color: #4b2e1d;
  border-radius: 6px;
  cursor: pointer;
}

.appointment-pagination .current {
  background: #76563e;
  color: white;
}

.add-appointment-btn:hover {
  background: #8f6938;
}

/* Laptop and smaller desktop screens */
@media (max-width: 1100px) {
  .appointments-page {
    padding: 20px;
  }

  .appointment-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .appointment-stat {
    padding: 18px;
  }

  .appointment-panel {
    padding: 18px;
  }

  .appointment-filters {
    width: 100%;
  }

  .appointment-filters input,
  .appointment-filters select {
    flex: 1 1 180px;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .appointments-page {
    padding: 15px;
  }

  .appointment-heading {
    align-items: flex-start;
  }

  .appointment-heading h1 {
    font-size: 27px;
  }

  .appointment-panel-heading {
    flex-direction: column;
  }

  .appointment-filters {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
  }

  .appointment-filters input,
  .appointment-filters select,
  .appointment-filters input[type="text"] {
    width: 100%;
    min-width: 0;
  }

  .appointment-footer {
    align-items: flex-start;
  }
}

/* Mobile phones */
@media (max-width: 520px) {
  .appointments-page {
    padding: 12px;
  }

  .appointment-heading {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
  }

  .appointment-heading h1 {
    font-size: 25px;
  }

  .add-appointment-btn {
    width: 100%;
    white-space: normal;
  }

  .appointment-stats {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
    margin-bottom: 20px;
  }

  .appointment-stat {
    padding: 16px;
  }

  .appointment-stat h2 {
    font-size: 26px;
  }

  .appointment-panel {
    padding: 12px;
  }

  .appointment-panel-heading h2 {
    font-size: 24px;
  }

  .appointment-filters {
    grid-template-columns: minmax(0, 1fr);
  }

  .appointment-filters input,
  .appointment-filters select,
  .appointment-filters input[type="text"] {
    width: 100%;
  }

  .appointment-footer {
    flex-direction: column;
    align-items: stretch;
  }

  .appointment-pagination {
    justify-content: center;
    gap: 5px;
  }

  .appointment-pagination button {
    padding: 9px 11px;
  }
}

        }
      `}</style>

      <div className="appointments-page">
        {/* Page Heading */}
        <div className="appointment-heading">
          <div>
            <p>Home / Appointments</p>
            <h1>Manage Appointments</h1>
            <p>View and manage all salon appointments.</p>
          </div>

          <Link
            to="/admin/add-appointment"
            className="add-appointment-btn"
          >
            + Add Appointment
          </Link>
        </div>

        {/* Statistics */}
        <div className="appointment-stats">
          <div className="appointment-stat">
            <p>Total Appointments</p>
            <h2>85</h2>
          </div>

          <div className="appointment-stat">
            <p>Today's Appointments</p>
            <h2>12</h2>
          </div>

          <div className="appointment-stat">
            <p>Confirmed</p>
            <h2>48</h2>
          </div>

          <div className="appointment-stat">
            <p>Pending</p>
            <h2>22</h2>
          </div>
        </div>

        {/* Appointment List */}
        <div className="appointment-panel">
          <div className="appointment-panel-heading">
            <div>
              <h2>Appointment List</h2>
              <p>Review and manage salon booking requests.</p>
            </div>

            <div className="appointment-filters">
              <input
                type="text"
                placeholder="Search appointments..."
              />

              <select defaultValue="all">
                <option value="all">All Services</option>
                <option>Facial Cleanup</option>
                <option>Hair Spa</option>
                <option>Bridal Makeup</option>
                <option>Manicure & Pedicure</option>
              </select>

              <select defaultValue="all">
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="rejected">Rejected</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>

              <input type="date" aria-label="Select appointment date" />
            </div>
          </div>

          <div className="appointment-table-wrapper">
            <table className="appointment-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>User Name</th>
                  <th>Service</th>
                  <th>Beautician</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {/* Pending: admin can confirm or reject */}
                <tr>
                  <td>01</td>
                  <td>Priya Sharma</td>
                  <td>Facial Cleanup</td>
                  <td>Neha</td>
                  <td>25 Oct 2026</td>
                  <td>10:00 AM</td>
                  <td>
                    <span className="appointment-status status-pending">
                      Pending
                    </span>
                  </td>
                  <td>
                    <button className="appointment-action confirm-btn">
                      ✓ Confirm
                    </button>
                    <button className="appointment-action reject-btn">
                      ✕ Reject
                    </button>
                    <button className="appointment-action view-btn">
                      View
                    </button>
                    <button className="appointment-action edit-btn">
                      Edit
                    </button>
                  </td>
                </tr>

                {/* Confirmed: no longer needs approval */}
                <tr>
                  <td>02</td>
                  <td>Neha Verma</td>
                  <td>Hair Spa</td>
                  <td>Simran</td>
                  <td>25 Oct 2026</td>
                  <td>12:00 PM</td>
                  <td>
                    <span className="appointment-status status-confirmed">
                      Confirmed
                    </span>
                  </td>
                  <td>
                    <button className="appointment-action confirm-btn" disabled>
                      ✓ Confirm
                    </button>
                    <button className="appointment-action reject-btn" disabled>
                      ✕ Reject
                    </button>
                    <button className="appointment-action view-btn">
                      View
                    </button>
                    <button className="appointment-action edit-btn">
                      Edit
                    </button>
                  </td>
                </tr>

                {/* Completed */}
                <tr>
                  <td>03</td>
                  <td>Anjali Gupta</td>
                  <td>Bridal Makeup</td>
                  <td>Riya</td>
                  <td>26 Oct 2026</td>
                  <td>11:00 AM</td>
                  <td>
                    <span className="appointment-status status-completed">
                      Completed
                    </span>
                  </td>
                  <td>
                    <button className="appointment-action confirm-btn" disabled>
                      ✓ Confirm
                    </button>
                    <button className="appointment-action reject-btn" disabled>
                      ✕ Reject
                    </button>
                    <button className="appointment-action view-btn">
                      View
                    </button>
                    <button className="appointment-action edit-btn">
                      Edit
                    </button>
                  </td>
                </tr>

                {/* Pending */}
                <tr>
                  <td>04</td>
                  <td>Ritika Sood</td>
                  <td>Manicure & Pedicure</td>
                  <td>Neha</td>
                  <td>26 Oct 2026</td>
                  <td>02:00 PM</td>
                  <td>
                    <span className="appointment-status status-pending">
                      Pending
                    </span>
                  </td>
                  <td>
                    <button className="appointment-action confirm-btn">
                      ✓ Confirm
                    </button>
                    <button className="appointment-action reject-btn">
                      ✕ Reject
                    </button>
                    <button className="appointment-action view-btn">
                      View
                    </button>
                    <button className="appointment-action edit-btn">
                      Edit
                    </button>
                  </td>
                </tr>

                {/* Cancelled */}
                <tr>
                  <td>05</td>
                  <td>Simran Kaur</td>
                  <td>Hair Cut</td>
                  <td>Pooja</td>
                  <td>27 Oct 2026</td>
                  <td>11:30 AM</td>
                  <td>
                    <span className="appointment-status status-cancelled">
                      Cancelled
                    </span>
                  </td>
                  <td>
                    <button className="appointment-action confirm-btn" disabled>
                      ✓ Confirm
                    </button>
                    <button className="appointment-action reject-btn" disabled>
                      ✕ Reject
                    </button>
                    <button className="appointment-action view-btn">
                      View
                    </button>
                    <button className="appointment-action edit-btn">
                      Edit
                    </button>
                  </td>
                </tr>

                {/* Pending */}
                <tr>
                  <td>06</td>
                  <td>Karan Mehta</td>
                  <td>Beard Styling</td>
                  <td>Aman</td>
                  <td>27 Oct 2026</td>
                  <td>01:00 PM</td>
                  <td>
                    <span className="appointment-status status-pending">
                      Pending
                    </span>
                  </td>
                  <td>
                    <button className="appointment-action confirm-btn">
                      ✓ Confirm
                    </button>
                    <button className="appointment-action reject-btn">
                      ✕ Reject
                    </button>
                    <button className="appointment-action view-btn">
                      View
                    </button>
                    <button className="appointment-action edit-btn">
                      Edit
                    </button>
                  </td>
                </tr>

                {/* Confirmed */}
                <tr>
                  <td>07</td>
                  <td>Neha Bansal</td>
                  <td>Skin Treatment</td>
                  <td>Simran</td>
                  <td>28 Oct 2026</td>
                  <td>03:00 PM</td>
                  <td>
                    <span className="appointment-status status-confirmed">
                      Confirmed
                    </span>
                  </td>
                  <td>
                    <button className="appointment-action confirm-btn" disabled>
                      ✓ Confirm
                    </button>
                    <button className="appointment-action reject-btn" disabled>
                      ✕ Reject
                    </button>
                    <button className="appointment-action view-btn">
                      View
                    </button>
                    <button className="appointment-action edit-btn">
                      Edit
                    </button>
                  </td>
                </tr>

                {/* Pending */}
                <tr>
                  <td>08</td>
                  <td>Megha Arora</td>
                  <td>Makeup Consultation</td>
                  <td>Riya</td>
                  <td>28 Oct 2026</td>
                  <td>04:30 PM</td>
                  <td>
                    <span className="appointment-status status-pending">
                      Pending
                    </span>
                  </td>
                  <td>
                    <button className="appointment-action confirm-btn">
                      ✓ Confirm
                    </button>
                    <button className="appointment-action reject-btn">
                      ✕ Reject
                    </button>
                    <button className="appointment-action view-btn">
                      View
                    </button>
                    <button className="appointment-action edit-btn">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="appointment-footer">
            <p>Showing 1 to 8 of 85 appointments</p>

            <div className="appointment-pagination">
              <button>‹</button>
              <button className="current">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>›</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

