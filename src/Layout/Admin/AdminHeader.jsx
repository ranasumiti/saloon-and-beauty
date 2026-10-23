
import { useState } from "react";

export default function AdminHeader({ onMenuClick }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <header className="admin-header">
        <button
          className="admin-toggle"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
          type="button"
        >
          ☰
        </button>

        <div className="admin-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search services, users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          className="admin-notification"
          onClick={() => alert("No new notifications")}
          type="button"
          aria-label="Notifications"
        >
          ♧
        </button>

        <div className="admin-profile">
          <div className="admin-avatar">A</div>
          <div className="admin-profile-info">
            <h4>Admin</h4>
            <p>Salon Administrator</p>
          </div>
        </div>
      </header>

      <style>{`
        .admin-header {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 15px 25px;
          background: #FFFCF8;
          border-bottom: 1px solid #E9DED1;
          box-sizing: border-box;
          min-width: 0;
        }

        .admin-toggle {
          display: block;
          flex-shrink: 0;
          font-size: 25px;
          color: #6B4F3A;
          background: none;
          border: none;
          cursor: pointer;
        }

        .admin-search {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          min-width: 0;
          max-width: 500px;
          padding: 12px;
          border: 1px solid #E9DED1;
          border-radius: 8px;
          background: #F8F1E8;
          box-sizing: border-box;
        }

        .admin-search span {
          color: #6B4F3A;
          font-size: 20px;
        }

        .admin-search input {
          width: 100%;
          min-width: 0;
          border: none;
          outline: none;
          background: transparent;
          color: #493427;
        }

        .admin-notification {
          flex-shrink: 0;
          padding: 10px;
          border: none;
          border-radius: 50%;
          background: #F8F1E8;
          color: #C69C55;
          cursor: pointer;
          font-size: 20px;
        }

        .admin-profile {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .admin-avatar {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #E8D2A9;
          color: #493427;
          font-size: 20px;
        }

        .admin-profile-info h4 {
          margin: 0;
          color: #493427;
        }

        .admin-profile-info p {
          margin: 5px 0 0;
          font-size: 11px;
          color: #8A7A6D;
        }

        @media (max-width: 600px) {
          .admin-header {
            padding: 12px;
            gap: 10px;
          }

          .admin-profile-info {
            display: none;
          }

          .admin-notification {
            display: none;
          }
        }

        @media (max-width: 380px) {
          .admin-header {
            gap: 6px;
          }

          .admin-search {
            padding: 9px 6px;
          }

          .admin-search input {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}
