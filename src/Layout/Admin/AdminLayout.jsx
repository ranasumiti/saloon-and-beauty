
import { useState } from "react";
import { Outlet } from "react-router-dom";

import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function closeSidebar() {
    setSidebarOpen(false);
  }

  function toggleSidebar() {
    setSidebarOpen((prev) => !prev);
  }

  return (
    <>
      <div className="admin-layout">
        {/* Mobile overlay */}
        <div
          className={`sidebar-overlay ${
            sidebarOpen ? "show" : ""
          }`}
          onClick={closeSidebar}
        />

        {/* Sidebar */}
        <aside
          className={`admin-sidebar-wrapper ${
            sidebarOpen ? "open" : ""
          }`}
        >
          <AdminSidebar closeSidebar={closeSidebar} />
        </aside>

        {/* Main content */}
        <div className="admin-main">
          <AdminHeader onMenuClick={toggleSidebar} />

          <main className="admin-content">
            <Outlet />
          </main>

          <AdminFooter />
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .admin-layout {
          display: flex;
          width: 100%;
          min-height: 100vh;
          background: #F8F1E8;
        }

        .admin-sidebar-wrapper {
          width: 240px;
          flex-shrink: 0;
          min-height: 100vh;
        }

        .admin-main {
          flex: 1;
          min-width: 0;
          width: calc(100% - 240px);
        }

        .admin-content {
          width: 100%;
          min-width: 0;
          padding: 20px;
        }

        .sidebar-overlay {
          display: none;
        }

        @media (max-width: 768px) {
          .admin-sidebar-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: 240px;
            height: 100dvh;
            min-height: 0;
            overflow-y: auto;
            z-index: 1001;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }

          .admin-sidebar-wrapper.open {
            transform: translateX(0);
          }

          .sidebar-overlay.show {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.4);
            z-index: 1000;
          }

          .admin-main {
            width: 100%;
          }

          .admin-content {
            padding: 12px;
          }
        }

        @media (max-width: 480px) {
          .admin-content {
            padding: 10px;
          }
        }
      `}</style>
    </>
  );
}
