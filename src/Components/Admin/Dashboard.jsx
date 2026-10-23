
import { useState } from "react";

export default function Dashboard() {
  const [appointments, setAppointments] = useState(48);
  const [services, setServices] = useState(12);
  const [courses, setCourses] = useState(6);
  const [users, setUsers] = useState(85);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-heading">
          <h1>Welcome Back, Admin ✨</h1>
          <p>Here's what's happening at Beauty & Glow today.</p>
        </div>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Total Appointments</h3>
            <h2>{appointments}</h2>
            <button onClick={() => setAppointments(appointments + 1)}>
              + Add
            </button>
          </div>

          <div className="dashboard-card">
            <h3>Total Services</h3>
            <h2>{services}</h2>
            <button onClick={() => setServices(services + 1)}>
              + Add
            </button>
          </div>

          <div className="dashboard-card">
            <h3>Total Courses</h3>
            <h2>{courses}</h2>
            <button onClick={() => setCourses(courses + 1)}>
              + Add
            </button>
          </div>

          <div className="dashboard-card">
            <h3>Total Users</h3>
            <h2>{users}</h2>
            <button onClick={() => setUsers(users + 1)}>
              + Add
            </button>
          </div>
        </div>

        <div className="dashboard-bottom">
          <h2>Quick Overview</h2>
          <p>Manage your salon activities from one place.</p>

          <div className="dashboard-links">
            <div>✨ Manage Services</div>
            <div>🎓 Manage Courses</div>
            <div>📅 Manage Appointments</div>
            <div>👥 Manage Users</div>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard {
          width: 100%;
          min-width: 0;
          color: #493427;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .dashboard * {
          box-sizing: border-box;
        }

        .dashboard-heading {
          margin-bottom: 25px;
        }

        .dashboard-heading h1 {
          font-family: Georgia, serif;
          font-size: clamp(24px, 3vw, 32px);
          line-height: 1.3;
          overflow-wrap: anywhere;
          margin: 0 0 10px;
        }

        .dashboard-heading p {
          color: #8A7A6D;
          line-height: 1.6;
          margin: 0;
        }

        .dashboard-cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .dashboard-card {
          min-width: 0;
          padding: 22px;
          background: #FFFCF8;
          border: 1px solid #E9DED1;
          border-radius: 12px;
          box-shadow: 0 4px 12px #49342708;
        }

        .dashboard-card h3 {
          font-size: 14px;
          font-weight: 500;
          line-height: 1.5;
          color: #6B4F3A;
          overflow-wrap: anywhere;
        }

        .dashboard-card h2 {
          font-family: Georgia, serif;
          font-size: clamp(27px, 3vw, 34px);
          color: #C69C55;
          margin: 16px 0;
        }

        .dashboard-card button {
          padding: 9px 15px;
          border: none;
          border-radius: 6px;
          background: #6B4F3A;
          color: white;
          cursor: pointer;
        }

        .dashboard-card button:hover {
          background: #493427;
        }

        .dashboard-bottom {
          margin-top: 25px;
          padding: 24px;
          border-radius: 12px;
          background: #FFFCF8;
          border: 1px solid #E9DED1;
        }

        .dashboard-bottom h2 {
          font-family: Georgia, serif;
          font-weight: normal;
          margin-top: 0;
        }

        .dashboard-bottom > p {
          color: #8A7A6D;
          font-size: 14px;
          line-height: 1.6;
        }

        .dashboard-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .dashboard-links div {
          min-width: 0;
          padding: 18px;
          border-radius: 8px;
          background: #F8F1E8;
          border-left: 4px solid #C69C55;
          color: #6B4F3A;
          overflow-wrap: anywhere;
        }

        /* Smaller laptops and tablets */
        @media (max-width: 1100px) {
          .dashboard-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .dashboard-card {
            padding: 18px;
          }
        }

        /* Mobile phones */
        @media (max-width: 600px) {
          .dashboard-heading {
            margin-bottom: 20px;
          }

          .dashboard-cards {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }

          .dashboard-card {
            padding: 18px;
          }

          .dashboard-card h2 {
            margin: 12px 0;
          }

          .dashboard-bottom {
            margin-top: 18px;
            padding: 16px;
          }

          .dashboard-links {
            grid-template-columns: minmax(0, 1fr);
            gap: 10px;
          }

          .dashboard-links div {
            padding: 15px;
          }
        }
      `}</style>
    </>
  );
}
