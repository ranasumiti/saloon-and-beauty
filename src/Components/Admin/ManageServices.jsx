import { Link } from "react-router-dom";

export default function ManageServices() {
  return (
    <div className="services">
      <div className="heading">
        <div className="heading-info">
          <p>Home / Services</p>
          <h1>Manage Services</h1>
          <span>Manage your salon services here.</span>
        </div>
<Link to="/admin/add" className="add-btn">
  + Add Service
</Link>
      </div>

      <div className="stats">
        <div className="stat-card">
          <p>Total Services</p>
          <h2>5</h2>
        </div>

        <div className="stat-card">
          <p>Categories</p>
          <h2>5</h2>
        </div>

        <div className="stat-card">
          <p>Active Services</p>
          <h2>5</h2>
        </div>
      </div>

      <div className="service-panel">
        <h2>Service List</h2>
        <p>View your available salon services.</p>

        <div className="filters">
          <input type="text" placeholder="Search services..." />

          <select defaultValue="all">
            <option value="all">All Categories</option>
            <option>Skin Care</option>
            <option>Hair Care</option>
            <option>Makeup</option>
            <option>Nail Care</option>
            <option>Spa</option>
          </select>
        </div>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Service Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>01</td>
                <td>Facial Treatment</td>
                <td>Skin Care</td>
                <td>₹1,200</td>
                <td><span className="active">Active</span></td>
                <td><button className="edit-btn">Edit</button></td>
              </tr>

              <tr>
                <td>02</td>
                <td>Hair Styling</td>
                <td>Hair Care</td>
                <td>₹800</td>
                <td><span className="active">Active</span></td>
                <td><button className="edit-btn">Edit</button></td>
              </tr>

              <tr>
                <td>03</td>
                <td>Bridal Makeup</td>
                <td>Makeup</td>
                <td>₹5,000</td>
                <td><span className="active">Active</span></td>
                <td><button className="edit-btn">Edit</button></td>
              </tr>

              <tr>
                <td>04</td>
                <td>Manicure</td>
                <td>Nail Care</td>
                <td>₹600</td>
                <td><span className="active">Active</span></td>
                <td><button className="edit-btn">Edit</button></td>
              </tr>

              <tr>
                <td>05</td>
                <td>Spa Therapy</td>
                <td>Spa</td>
                <td>₹1,500</td>
                <td><span className="active">Active</span></td>
                <td><button className="edit-btn">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="table-hint">
          On smaller screens, swipe horizontally to view all columns.
        </p>
      </div>

      <style>{`
        .services {
          width: 100%;
          min-width: 0;
          min-height: 100vh;
          padding: 25px;
          background: #f8f1e8;
          color: #543b2d;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .services * {
          box-sizing: border-box;
        }

        .heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .heading-info {
          min-width: 0;
        }

        .heading p {
          color: #927f70;
          font-size: 13px;
          overflow-wrap: anywhere;
        }

        .heading h1 {
          font-family: Georgia, serif;
          font-size: clamp(24px, 3vw, 32px);
          margin: 10px 0;
          overflow-wrap: anywhere;
        }

        .heading span {
          color: #8b796b;
          font-size: 14px;
        }

        .add-btn {
          flex-shrink: 0;
          background: #b48a4b;
          color: white;
          border: none;
          padding: 13px 18px;
          border-radius: 8px;
          cursor: pointer;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 25px;
        }

        .stat-card,
        .service-panel {
          min-width: 0;
          background: #fffdf9;
          border: 1px solid #eadfd2;
          border-radius: 12px;
          padding: 22px;
        }

        .stat-card p,
        .service-panel > p {
          color: #8b796b;
          font-size: 13px;
        }

        .stat-card h2 {
          font-family: Georgia, serif;
          font-size: 30px;
          margin-bottom: 0;
        }

        .service-panel h2 {
          font-family: Georgia, serif;
          margin-top: 0;
          overflow-wrap: anywhere;
        }

        .filters {
          display: flex;
          gap: 12px;
          margin: 20px 0;
        }

        .filters input,
        .filters select {
          min-width: 0;
          padding: 12px;
          border: 1px solid #e3d3c1;
          border-radius: 7px;
          background: #fffdf9;
          color: #543b2d;
          font-size: 14px;
        }

        .filters input {
          flex: 1;
        }

        .filters select {
          width: 220px;
        }

        .table-box {
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid #eadfd2;
          border-radius: 8px;
        }

        .table-box table {
          width: 100%;
          min-width: 650px;
          border-collapse: collapse;
          text-align: left;
          white-space: nowrap;
        }

        .table-box th {
          background: #f2e5d5;
          padding: 15px;
          font-size: 13px;
        }

        .table-box td {
          padding: 16px 15px;
          border-bottom: 1px solid #eadfd2;
          font-size: 13px;
        }

        .table-box tbody tr:last-child td {
          border-bottom: none;
        }

        .active {
          display: inline-block;
          color: #287447;
          background: #e8f4e9;
          padding: 7px 10px;
          border-radius: 20px;
          font-size: 12px;
        }

        .edit-btn {
          padding: 8px 13px;
          border: 1px solid #d8b88a;
          background: #fffdf9;
          color: #936727;
          border-radius: 6px;
          cursor: pointer;
        }

        .add-btn:hover {
          background: #8f6938;
        }

        .edit-btn:hover {
          background: #f5eadc;
        }

        .table-hint {
          display: none;
          margin-bottom: 0;
          font-size: 12px;
        }

        @media (max-width: 1024px) {
          .services {
            padding: 20px;
          }

          .stats {
            gap: 12px;
          }

          .stat-card {
            padding: 18px;
          }
        }

        @media (max-width: 768px) {
          .services {
            padding: 15px;
          }

          .heading {
            align-items: flex-start;
          }

          .heading h1 {
            font-size: 27px;
          }

          .stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .stat-card:last-child {
            grid-column: 1 / -1;
          }

          .service-panel {
            padding: 16px;
          }

          .table-hint {
            display: block;
          }
        }

        @media (max-width: 520px) {
          .services {
            padding: 12px;
          }

          .heading {
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
          }

          .heading h1 {
            font-size: 25px;
          }

          .add-btn {
            width: 100%;
          }

          .stats {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }

          .stat-card:last-child {
            grid-column: auto;
          }

          .stat-card {
            padding: 16px;
          }

          .stat-card h2 {
            font-size: 26px;
          }

          .service-panel {
            padding: 12px;
          }

          .filters {
            flex-direction: column;
            gap: 10px;
          }

          .filters input,
          .filters select {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
