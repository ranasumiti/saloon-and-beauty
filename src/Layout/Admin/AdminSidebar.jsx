
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  GraduationCap,
  CalendarDays,
  Users,
  UserRound,
  CreditCard,
  MessageSquare,
  Star,
  LogOut
} from "lucide-react";

function AdminSidebar({ closeSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userType");
    localStorage.removeItem("name");

    window.dispatchEvent(new Event("authChanged"));

    if (closeSidebar) {
      closeSidebar();
    }

    navigate("/login");
  };

  return (
    <>
      <div className="admin-sidebar">

        <div className="sidebar-brand">
          <h2>Beauty & Glow</h2>
          <p>ADMIN PANEL</p>
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-menu">

          <NavLink to="/admin" end onClick={closeSidebar}>
            <LayoutDashboard />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/admin/services" onClick={closeSidebar}>
            <BriefcaseBusiness />
            <span>Services</span>
          </NavLink>

          <NavLink to="/admin/courses" onClick={closeSidebar}>
            <GraduationCap />
            <span>Courses</span>
          </NavLink>

          <NavLink to="/admin/appointments" onClick={closeSidebar}>
            <CalendarDays />
            <span>Appointments</span>
          </NavLink>

          <NavLink to="/admin/users" onClick={closeSidebar}>
            <Users />
            <span>Users</span>
          </NavLink>

          <NavLink to="/admin/beauticians" onClick={closeSidebar}>
            <UserRound />
            <span>Beauticians</span>
          </NavLink>

          <NavLink to="/admin/students" onClick={closeSidebar}>
            <GraduationCap />
            <span>Students</span>
          </NavLink>

          <NavLink to="/admin/payments" onClick={closeSidebar}>
            <CreditCard />
            <span>Payments</span>
          </NavLink>

          <NavLink to="/admin/enquiries" onClick={closeSidebar}>
            <MessageSquare />
            <span>Enquiries</span>
          </NavLink>

          <NavLink to="/admin/reviews" onClick={closeSidebar}>
            <Star />
            <span>Reviews</span>
          </NavLink>

        </div>

        <button className="sidebar-logout" onClick={handleLogout}>
          <LogOut />
          <span>Logout</span>
        </button>

      </div>

      <style>{`
        .admin-sidebar {
          width: 250px;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          padding: 25px 16px;
          background: #6B4F3A;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          z-index: 1000;
          overflow-y: auto;
        }

        .sidebar-brand {
          text-align: center;
          padding: 5px 0 15px;
        }

        .sidebar-brand h2 {
          color: #FFFCF8;
          font-family: Georgia, serif;
          font-size: 23px;
          font-weight: normal;
          margin: 0;
        }

        .sidebar-brand p {
          color: #E8D2A9;
          font-size: 10px;
          letter-spacing: 3px;
          margin-top: 9px;
        }

        .sidebar-divider {
          border-top: 1px solid #ffffff35;
          margin: 10px 0 20px;
        }

        .sidebar-menu {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .sidebar-menu a {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 12px 14px;
          border-radius: 8px;
          text-decoration: none;
          color: #F8F1E8;
          font-size: 14px;
          transition: 0.25s ease;
        }

        .sidebar-menu a svg {
          width: 19px;
          height: 19px;
          stroke-width: 1.8;
          flex-shrink: 0;
        }

        .sidebar-menu a:hover {
          background: #ffffff18;
          color: #E8D2A9;
        }

        .sidebar-menu a.active {
          background: #F8F1E8;
          color: #493427;
          font-weight: 600;
          box-shadow: 0 3px 10px #00000015;
        }

        .sidebar-logout {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px;
          background: #C69C55;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          transition: 0.3s;
        }

        .sidebar-logout:hover {
          background: #B38743;
        }

        .sidebar-logout svg {
          width: 18px;
          height: 18px;
        }
      `}</style>
    </>
  );
}

export default AdminSidebar;
