import { useState } from "react";

export default function ManageBeauticians() {
  const [view, setView] = useState("grid");

  return (
    <div className="beautician-page">
      <div className="beautician-heading">
        <div>
          <p>Home / Beauticians</p>
          <h1>Manage Beauticians</h1>
          <span>Manage your salon's talented team.</span>
        </div>

        <button className="add-btn">+ Add Beautician</button>
      </div>

      <div className="beautician-stats">
        <div className="stat">
          <span>♙</span>
          <div>
            <p>Total Beauticians</p>
            <h2>8</h2>
          </div>
        </div>

        <div className="stat">
          <span className="green">✓</span>
          <div>
            <p>Active</p>
            <h2>6</h2>
          </div>
        </div>

        <div className="stat">
          <span className="yellow">◷</span>
          <div>
            <p>On Leave</p>
            <h2>1</h2>
          </div>
        </div>

        <div className="stat">
          <span className="red">⊘</span>
          <div>
            <p>Inactive</p>
            <h2>1</h2>
          </div>
        </div>
      </div>

      <div className="beautician-directory">
        <div className="beautician-toolbar">
          <input
            type="text"
            placeholder="Search beauticians..."
          />

          <select>
            <option>All Specialties</option>
            <option>Skin Care</option>
            <option>Makeup</option>
            <option>Hair Care</option>
            <option>Nail Art</option>
            <option>Spa</option>
          </select>

          <select>
            <option>All Statuses</option>
            <option>Active</option>
            <option>On Leave</option>
            <option>Inactive</option>
          </select>

          <div className="view-buttons">
            <button
              className={view === "grid" ? "selected" : ""}
              onClick={() => setView("grid")}
              type="button"
            >
              ▦
            </button>

            <button
              className={view === "list" ? "selected" : ""}
              onClick={() => setView("list")}
              type="button"
            >
              ☷
            </button>
          </div>
        </div>

        <div className={`beautician-cards ${view === "list" ? "list-view" : ""}`}>
          <div className="beautician-card">
            <div className="beautician-image">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500"
                alt="Priya Sharma"
              />
              <span className="status active">Active</span>
            </div>

            <div className="beautician-info">
              <h3>Priya Sharma</h3>
              <p className="role">Senior Beautician</p>
              <p>◷ &nbsp; 3+ Years Experience</p>
              <p>☎ &nbsp; 98760 12345</p>

              <div className="specialties">
                <span>Skin Care</span>
                <span>Facial</span>
              </div>

              <div className="card-actions">
                <button>View</button>
                <button>Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          </div>

          <div className="beautician-card">
            <div className="beautician-image">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
                alt="Neha Verma"
              />
              <span className="status active">Active</span>
            </div>

            <div className="beautician-info">
              <h3>Neha Verma</h3>
              <p className="role">Makeup Artist</p>
              <p>◷ &nbsp; 4+ Years Experience</p>
              <p>☎ &nbsp; 98761 23456</p>

              <div className="specialties">
                <span>Makeup</span>
                <span>Bridal</span>
              </div>

              <div className="card-actions">
                <button>View</button>
                <button>Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          </div>

          <div className="beautician-card">
            <div className="beautician-image">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
                alt="Anjali Gupta"
              />
              <span className="status leave">On Leave</span>
            </div>

            <div className="beautician-info">
              <h3>Anjali Gupta</h3>
              <p className="role">Hair Specialist</p>
              <p>◷ &nbsp; 2+ Years Experience</p>
              <p>☎ &nbsp; 98123 45670</p>

              <div className="specialties">
                <span>Hair Care</span>
                <span>Hair Styling</span>
              </div>

              <div className="card-actions">
                <button>View</button>
                <button>Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          </div>

          <div className="beautician-card">
            <div className="beautician-image">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500"
                alt="Simran Kaur"
              />
              <span className="status active">Active</span>
            </div>

            <div className="beautician-info">
              <h3>Simran Kaur</h3>
              <p className="role">Nail Artist</p>
              <p>◷ &nbsp; 3+ Years Experience</p>
              <p>☎ &nbsp; 98987 65432</p>

              <div className="specialties">
                <span>Nail Care</span>
                <span>Nail Art</span>
              </div>

              <div className="card-actions">
                <button>View</button>
                <button>Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          </div>

          <div className="beautician-card">
            <div className="beautician-image">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500"
                alt="Megha Arora"
              />
              <span className="status active">Active</span>
            </div>

            <div className="beautician-info">
              <h3>Megha Arora</h3>
              <p className="role">Spa Specialist</p>
              <p>◷ &nbsp; 5+ Years Experience</p>
              <p>☎ &nbsp; 98760 12345</p>

              <div className="specialties">
                <span>Spa</span>
                <span>Body Treatment</span>
              </div>

              <div className="card-actions">
                <button>View</button>
                <button>Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          </div>

          <div className="beautician-card">
            <div className="beautician-image">
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500"
                alt="Ritika Singh"
              />
              <span className="status active">Active</span>
            </div>

            <div className="beautician-info">
              <h3>Ritika Singh</h3>
              <p className="role">Bridal Expert</p>
              <p>◷ &nbsp; 4+ Years Experience</p>
              <p>☎ &nbsp; 98111 22334</p>

              <div className="specialties">
                <span>Bridal Makeup</span>
                <span>Skin Care</span>
              </div>

              <div className="card-actions">
                <button>View</button>
                <button>Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          </div>

          <button className="add-beautician-card" type="button">
            <span className="plus">＋</span>
            <h3>Add New Beautician</h3>
            <p>Expand your team with talented professionals.</p>
            <b>+ Add Beautician</b>
          </button>
        </div>
      </div>

      <style>{`
        .beautician-page {
          padding: 25px;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          background: #fbf5ed;
          color: #382116;
          font-family: Arial, sans-serif;
        }

        .beautician-page * {
          box-sizing: border-box;
        }

        .beautician-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .beautician-heading p {
          margin: 0 0 8px;
          color: #8b5738;
          font-size: 13px;
        }

        .beautician-heading h1 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: clamp(27px, 3vw, 36px);
        }

        .beautician-heading span {
          color: #78675c;
          font-size: 14px;
        }

        .add-btn {
          padding: 13px 18px;
          background: #8b5738;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          white-space: nowrap;
        }

        .beautician-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 15px;
          margin-bottom: 22px;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px;
          background: #fffaf5;
          border: 1px solid #ecdfd2;
          border-radius: 12px;
          box-shadow: 0 4px 12px #50301b08;
        }

        .stat > span {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #f3e0d2;
          color: #8b5738;
          font-size: 23px;
        }

        .stat .green {
          background: #e5f0df;
          color: #54834b;
        }

        .stat .yellow {
          background: #fff0d1;
          color: #a47719;
        }

        .stat .red {
          background: #fde4df;
          color: #b64d3d;
        }

        .stat p {
          margin: 0 0 7px;
          color: #78675c;
          font-size: 13px;
        }

        .stat h2 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 29px;
        }

        .beautician-directory {
          padding: 18px;
          background: #fffaf6;
          border: 1px solid #ecdfd2;
          border-radius: 12px;
        }

        .beautician-toolbar {
          display: grid;
          grid-template-columns: minmax(180px, 1fr) 190px 160px auto;
          gap: 12px;
          margin-bottom: 20px;
        }

        .beautician-toolbar input,
        .beautician-toolbar select {
          width: 100%;
          min-width: 0;
          padding: 12px;
          border: 1px solid #e4d7cb;
          border-radius: 8px;
          background: white;
          color: #382116;
          outline-color: #8b5738;
        }

        .view-buttons {
          display: flex;
          gap: 4px;
          padding: 3px;
          border: 1px solid #e4d7cb;
          border-radius: 8px;
        }

        .view-buttons button {
          min-width: 35px;
          border: none;
          border-radius: 6px;
          background: transparent;
          color: #795b47;
          font-size: 20px;
          cursor: pointer;
        }

        .view-buttons .selected {
          background: #8b5738;
          color: white;
        }

        .beautician-cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .beautician-card {
          min-width: 0;
          overflow: hidden;
          background: #fffdf9;
          border: 1px solid #ecdfd2;
          border-radius: 10px;
          box-shadow: 0 4px 12px #50301b0d;
        }

        .beautician-image {
          position: relative;
          height: 155px;
          background: #ead8c8;
        }

        .beautician-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 35%;
        }

        .status {
          position: absolute;
          bottom: 9px;
          left: 10px;
          padding: 5px 10px;
          border-radius: 20px;
          background: #dff2df;
          color: #176b2b;
          font-size: 11px;
        }

        .status.leave {
          background: #fff0cf;
          color: #8a5708;
        }

        .beautician-info {
          padding: 14px;
        }

        .beautician-info h3 {
          margin: 0 0 5px;
          font-family: Georgia, serif;
          font-size: 18px;
          overflow-wrap: anywhere;
        }

        .beautician-info p {
          margin: 9px 0;
          color: #78675c;
          font-size: 12px;
          overflow-wrap: anywhere;
        }

        .beautician-info .role {
          color: #8b5738;
          font-size: 13px;
        }

        .specialties {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 12px 0;
        }

        .specialties span {
          padding: 5px 8px;
          border: 1px solid #ead4c3;
          border-radius: 20px;
          background: #fbf1e8;
          color: #70462e;
          font-size: 11px;
        }

        .card-actions {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 6px;
          margin-top: 15px;
        }

        .card-actions button {
          padding: 9px 3px;
          border: 1px solid #eee1d5;
          border-radius: 6px;
          background: #fffaf5;
          color: #76533d;
          font-size: 12px;
          cursor: pointer;
        }

        .card-actions .delete {
          color: #b8322a;
          background: #fff5f2;
        }

        .add-beautician-card {
          display: flex;
          min-height: 300px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px;
          border: 1px dashed #d8c4b2;
          border-radius: 10px;
          background: #fffcf8;
          color: #4c3020;
          text-align: center;
          cursor: pointer;
        }

        .add-beautician-card .plus {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #f3e0d2;
          color: #8b5738;
          font-size: 30px;
        }

        .add-beautician-card h3 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 17px;
        }

        .add-beautician-card p {
          margin: 0;
          color: #78675c;
          font-size: 12px;
          line-height: 1.5;
        }

        .add-beautician-card b {
          padding: 11px 15px;
          border-radius: 7px;
          background: #8b5738;
          color: white;
          font-size: 12px;
          font-weight: 500;
        }

        .list-view {
          grid-template-columns: 1fr;
        }

        .list-view .beautician-card {
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr);
        }

        .list-view .beautician-image {
          height: 100%;
          min-height: 210px;
        }

        .list-view .beautician-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .list-view .add-beautician-card {
          min-height: 170px;
        }

        @media (max-width: 1200px) {
          .beautician-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .beautician-cards {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .beautician-toolbar {
            grid-template-columns: minmax(150px, 1fr) 1fr 1fr auto;
          }
        }

        @media (max-width: 850px) {
          .beautician-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .beautician-toolbar {
            grid-template-columns: 1fr 1fr;
          }

          .beautician-toolbar input {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 560px) {
          .beautician-page {
            padding: 14px;
          }

          .beautician-heading {
            align-items: stretch;
            flex-direction: column;
          }

          .add-btn {
            width: 100%;
          }

          .beautician-stats {
            gap: 9px;
          }

          .stat {
            gap: 9px;
            padding: 12px 9px;
          }

          .stat > span {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }

          .stat p {
            font-size: 11px;
          }

          .stat h2 {
            font-size: 23px;
          }

          .beautician-directory {
            padding: 10px;
          }

          .beautician-toolbar {
            grid-template-columns: 1fr;
          }

          .beautician-toolbar input {
            grid-column: auto;
          }

          .beautician-cards {
            grid-template-columns: 1fr;
          }

          .beautician-image {
            height: 200px;
          }

          .list-view .beautician-card {
            grid-template-columns: 110px minmax(0, 1fr);
          }

          .list-view .beautician-info {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
}