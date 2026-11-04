
import { useState } from "react";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([
    { id: 1, client: "Priya", service: "Facial", date: "04 Nov 2026", time: "10:00 AM", status: "Pending" },
    { id: 2, client: "Simran", service: "Hair Spa", date: "04 Nov 2026", time: "12:00 PM", status: "Confirmed" },
    { id: 3, client: "Neha", service: "Makeup", date: "05 Nov 2026", time: "02:00 PM", status: "Pending" }
  ]);

  const updateStatus = (id, status) => {
    setAppointments(
      appointments.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  return (
    <>
      <h2 className="beautician-title">My Appointments</h2>
      <p className="beautician-subtitle">
        View and manage your assigned appointments.
      </p>

      <div className="beautician-card">
        <div className="beautician-table-wrap">
          <table className="beautician-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((item) => (
                <tr key={item.id}>
                  <td>{item.client}</td>
                  <td>{item.service}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.status}</td>
                  <td>
                    {item.status === "Pending" ? (
                      <>
                        <button
                          className="appointment-action accept"
                          onClick={() => updateStatus(item.id, "Confirmed")}
                        >
                          Accept
                        </button>
                        <button
                          className="appointment-action reject"
                          onClick={() => updateStatus(item.id, "Rejected")}
                        >
                          Reject
                        </button>
                      </>
                    ) : item.status === "Confirmed" ? (
                      <button
                        className="appointment-action accept"
                        onClick={() => updateStatus(item.id, "Completed")}
                      >
                        Complete
                      </button>
                    ) : (
                      item.status
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .appointment-action {
          padding: 7px 10px;
          border: 0;
          border-radius: 5px;
          cursor: pointer;
          margin: 2px;
          font-size: 12px;
        }

        .appointment-action.accept {
          background: #76543e;
          color: white;
        }

        .appointment-action.reject {
          background: #f5e6df;
          color: #9b493b;
        }
      `}</style>
    </>
  );
}
