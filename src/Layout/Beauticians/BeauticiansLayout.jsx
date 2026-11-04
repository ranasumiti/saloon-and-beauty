
import { useState } from "react";
import { Outlet } from "react-router-dom";
import BeauticianHeader from "./BeauticianHeader";
import BeauticianSidebar from "./BeauticianSidebar";
import BeauticianFooter from "./BeauticianFooter";

export default function BeauticianLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="beautician-layout">
        <BeauticianSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {sidebarOpen && (
          <div
            className="beautician-overlay"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <div className="beautician-main">
          <BeauticianHeader
            setSidebarOpen={setSidebarOpen}
          />

          <main className="beautician-content">
            <Outlet />
          </main>

          <BeauticianFooter />
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .beautician-layout {
          min-height: 100vh;
          display: flex;
          background: #f7f3ed;
          font-family: Arial, sans-serif;
        }

        .beautician-main {
          flex: 1;
          min-width: 0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .beautician-content {
          flex: 1;
          padding: 30px;
          min-width: 0;
        }

        .beautician-overlay {
          display: none;
        }

        .beautician-title {
          font: 400 30px Georgia, serif;
          color: #654735;
          margin: 0 0 8px;
        }

        .beautician-subtitle {
          color: #8b7b6e;
          font-size: 14px;
          margin: 0 0 25px;
        }

        .beautician-card {
          background: #fff;
          border: 1px solid #eee3d7;
          border-radius: 13px;
          padding: 22px;
          box-shadow: 0 5px 20px #6547350a;
        }

        .beautician-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 25px;
        }

        .beautician-card h3 {
          color: #8b7b6e;
          font-size: 14px;
          font-weight: 500;
        }

        .beautician-card h2 {
          color: #654735;
          font: 400 29px Georgia, serif;
          margin: 12px 0 5px;
        }

        .beautician-table-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .beautician-table {
          width: 100%;
          min-width: 600px;
          border-collapse: collapse;
          margin-top: 15px;
        }

        .beautician-table th,
        .beautician-table td {
          padding: 14px 12px;
          text-align: left;
          border-bottom: 1px solid #eee6dd;
          font-size: 13px;
        }

        .beautician-table th {
          color: #76543e;
          background: #faf6f0;
        }

        .beautician-btn {
          background: #76543e;
          color: white;
          border: none;
          padding: 9px 15px;
          border-radius: 6px;
          cursor: pointer;
        }

        @media(max-width: 1100px) {
          .beautician-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media(max-width: 700px) {
          .beautician-content {
            padding: 20px 14px;
          }

          .beautician-title {
            font-size: 25px;
          }

          .beautician-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .beautician-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: #0007;
            z-index: 90;
          }
        }
      `}</style>
    </>
  );
}
