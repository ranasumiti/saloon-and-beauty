
export default function BeauticianHeader({ setSidebarOpen }) {
  const name = localStorage.getItem("name") || "Beautician";

  return (
    <>
      <header className="beautician-header">
        <div className="beautician-header-left">
          <button
            className="beautician-menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <div>
            <h3>Welcome Back!</h3>
            <p>Manage your appointments and daily work.</p>
          </div>
        </div>

        <div className="beautician-user">
          <div className="beautician-avatar">
            {name.charAt(0).toUpperCase()}
          </div>
          <span>{name}</span>
        </div>
      </header>

      <style>{`
        .beautician-header {
          min-height: 85px;
          background: white;
          border-bottom: 1px solid #eee3d7;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .beautician-header-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .beautician-header h3 {
          margin: 0 0 5px;
          color: #654735;
          font: 400 21px Georgia, serif;
        }

        .beautician-header p {
          margin: 0;
          color: #928276;
          font-size: 12px;
        }

        .beautician-user {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #654735;
        }

        .beautician-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #e8d8bc;
          color: #654735;
          font-weight: bold;
        }

        .beautician-menu-btn {
          display: none;
          border: 0;
          background: #f3e9df;
          color: #654735;
          border-radius: 7px;
          padding: 9px 12px;
          font-size: 20px;
          cursor: pointer;
        }

        @media(max-width: 700px) {
          .beautician-header {
            padding: 13px;
          }

          .beautician-menu-btn {
            display: block;
          }

          .beautician-header h3 {
            font-size: 17px;
          }

          .beautician-header p {
            font-size: 10px;
          }

          .beautician-user span {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
