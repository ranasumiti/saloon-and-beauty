
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function BeauticianSidebar({
  sidebarOpen,
  setSidebarOpen
}) {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("userType");

    window.dispatchEvent(new Event("authChanged"));
    toast.success("Logout successful");
    nav("/login");
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <aside className={`beautician-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="beautician-logo">
          <h2>Beauty <span>&</span> Glow</h2>
          <p>BEAUTICIAN PANEL</p>
        </div>

        <nav className="beautician-nav">
          <NavLink to="/beautician" onClick={closeSidebar}>
            <span>▦</span> Dashboard
          </NavLink>

          <NavLink to="/beautician/appointments" onClick={closeSidebar}>
            <span>▣</span> My Appointments
          </NavLink>

          <NavLink to="/beautician/schedule" onClick={closeSidebar}>
            <span>◷</span> My Schedule
          </NavLink>

          <NavLink to="/beautician/clients" onClick={closeSidebar}>
            <span>♙</span> My Clients
          </NavLink>

          <NavLink to="/beautician/earnings" onClick={closeSidebar}>
            <span>₹</span> My Earnings
          </NavLink>

          <NavLink to="/beautician/profile" onClick={closeSidebar}>
            <span>◎</span> My Profile
          </NavLink>
        </nav>

        <button className="beautician-logout" onClick={logout}>
          ↪ Logout
        </button>
      </aside>

      <style>{`
        .beautician-sidebar {
          width: 250px;
          min-height: 100vh;
          background: #654735;
          color: #fffaf4;
          padding: 25px 15px;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          z-index: 100;
          transition: transform .3s ease;
        }

        .beautician-logo {
          text-align: center;
          padding: 10px 0 30px;
          border-bottom: 1px solid #ffffff30;
        }

        .beautician-logo h2 {
          font: 400 25px Georgia, serif;
          margin: 0;
        }

        .beautician-logo h2 span {
          color: #e5c795;
        }

        .beautician-logo p {
          font-size: 9px;
          letter-spacing: 2px;
          color: #e5c795;
        }

        .beautician-nav {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-top: 30px;
        }

        .beautician-nav a {
          text-decoration: none;
          color: #f6e9dc;
          padding: 13px;
          border-radius: 7px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: .2s;
        }

        .beautician-nav a span {
          width: 20px;
          text-align: center;
          color: #e5c795;
          font-size: 17px;
        }

        .beautician-nav a.active,
        .beautician-nav a:hover {
          background: #e5c795;
          color: #49382c;
        }

        .beautician-nav a.active span,
        .beautician-nav a:hover span {
          color: #49382c;
        }

        .beautician-logout {
          margin-top: auto;
          padding: 12px;
          background: transparent;
          border: 1px solid #e5c795;
          border-radius: 7px;
          color: white;
          cursor: pointer;
        }

        .beautician-logout:hover {
          background: #e5c795;
          color: #49382c;
        }

        @media(max-width: 700px) {
          .beautician-sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 260px;
            height: 100vh;
            min-height: 100vh;
            transform: translateX(-100%);
            overflow-y: auto;
          }

          .beautician-sidebar.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
