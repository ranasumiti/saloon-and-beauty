import { NavLink } from "react-router-dom";

function AdminSidebar({ closeSidebar }) {
  return (
    <div className="admin-sidebar">
      <h2>Beauty & Glow</h2>
      <p>ADMIN PANEL</p>

      <hr />

      <NavLink to="/admin" end onClick={closeSidebar}>
        🏠 Dashboard
      </NavLink>

      <NavLink to="/admin/services" onClick={closeSidebar}>
        ✨ Services
      </NavLink>

      <NavLink to="/admin/courses" onClick={closeSidebar}>
        🎓 Courses
      </NavLink>

      <NavLink to="/admin/appointments" onClick={closeSidebar}>
        📅 Appointments
      </NavLink>

      <NavLink to="/admin/users" onClick={closeSidebar}>
        👥 Users
      </NavLink>

      <NavLink to="/admin/beauticians" onClick={closeSidebar}>
        💄 Beauticians
      </NavLink>

      <NavLink to="/admin/students" onClick={closeSidebar}>
        🎓 Students
      </NavLink>


<NavLink to="/admin/payments" onClick={closeSidebar}>
  💳 Payments
</NavLink>


      <NavLink to="/admin/enquiries" onClick={closeSidebar}>
        ✉️ Enquiries
      </NavLink>

      <NavLink to="/admin/reviews" onClick={closeSidebar}>
        ⭐ Reviews
      </NavLink>

      <button onClick={function () {
        window.location.href = "/login";
      }}>
        Logout
      </button>

      <style>{`
        .admin-sidebar {
          width: 240px;
          min-height: 100vh;
          padding: 25px 15px;
          background: #6B4F3A;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-sizing: border-box;
        }

        .admin-sidebar h2 {
          color: #FFFCF8;
          text-align: center;
          font-family: Georgia, serif;
          font-weight: normal;
        }

        .admin-sidebar p {
          color: #E8D2A9;
          text-align: center;
          font-size: 11px;
          letter-spacing: 3px;
        }

        .admin-sidebar hr {
          width: 100%;
          border: 0;
          border-top: 1px solid #ffffff40;
          margin-bottom: 12px;
        }

        .admin-sidebar a {
          padding: 13px 10px;
          border-radius: 8px;
          text-decoration: none;
          color: #FFFCF8;
          font-size: 14px;
        }

        .admin-sidebar a:hover,
        .admin-sidebar a.active {
          background: #F8F1E8;
          color: #493427;
        }

        .admin-sidebar button {
          margin-top: auto;
          padding: 13px;
          background: #C69C55;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default AdminSidebar;