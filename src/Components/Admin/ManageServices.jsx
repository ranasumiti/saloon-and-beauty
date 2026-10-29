
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ManageServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Hair Styling",
      category: "Hair",
      price: 1500,
      status: true,
    },
    {
      id: 2,
      name: "Facial Treatment",
      category: "Skin",
      price: 2000,
      status: true,
    },
    {
      id: 3,
      name: "Bridal Makeup",
      category: "Makeup",
      price: 5000,
      status: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    ...new Set(services.map((service) => service.category).filter(Boolean)),
  ];

  const activeServices = services.filter(
    (service) => service.status === true
  ).length;

  const filteredServices = services.filter((service) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      service.name.toLowerCase().includes(searchText) ||
      service.category.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || service.category === category;

    return matchesSearch && matchesCategory;
  });

  const toggleStatus = (id) => {
    setServices((previous) =>
      previous.map((service) =>
        service.id === id
          ? { ...service, status: !service.status }
          : service
      )
    );
  };

  const deleteService = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices((previous) =>
        previous.filter((service) => service.id !== id)
      );
    }
  };

  return (
    <div className="manage-services-page">
      <style>{`
        .manage-services-page {
          padding: 28px;
          min-height: 100vh;
          background: #faf7f2;
          color: #49372e;
        }

        .manage-services-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .manage-services-header h2 {
          margin: 0 0 8px;
          color: #654735;
          font-family: Georgia, serif;
        }

        .manage-services-header p {
          margin: 0;
          color: #88796e;
          font-size: 14px;
        }

        .add-btn {
          display: inline-block;
          padding: 12px 18px;
          background: #76543e;
          color: white;
          text-decoration: none;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 600;
        }

        .add-btn:hover {
          background: #5d4030;
        }

        .service-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 25px;
        }

        .service-stat-card {
          padding: 22px;
          background: white;
          border: 1px solid #eee5da;
          border-radius: 12px;
        }

        .service-stat-card p {
          margin: 0 0 12px;
          color: #88796e;
          font-size: 14px;
        }

        .service-stat-card h3 {
          margin: 0;
          color: #654735;
          font-size: 27px;
        }

        .service-list-card {
          padding: 22px;
          background: white;
          border: 1px solid #eee5da;
          border-radius: 12px;
        }

        .service-list-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .service-list-top h3 {
          margin: 0;
          color: #654735;
        }

        .service-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .service-search,
        .service-category-filter {
          box-sizing: border-box;
          padding: 11px 12px;
          border: 1px solid #e3d8cb;
          border-radius: 7px;
          background: white;
          color: #49372e;
          font-size: 14px;
          outline: none;
        }

        .service-search {
          width: 220px;
          max-width: 100%;
        }

        .service-search:focus,
        .service-category-filter:focus {
          border-color: #ad895d;
        }

        .service-table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .service-table {
          width: 100%;
          min-width: 850px;
          border-collapse: collapse;
        }

        .service-table th,
        .service-table td {
          padding: 15px 12px;
          border-bottom: 1px solid #f0e9e1;
          text-align: left;
          font-size: 13px;
        }

        .service-table th {
          background: #fcfaf7;
          color: #88796e;
          font-weight: 600;
        }

        .service-status {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .service-status.active {
          background: #e8f5e9;
          color: #2e7d32;
        }

        .service-status.inactive {
          background: #fbe9e7;
          color: #c62828;
        }

        .service-actions {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .edit-btn,
        .delete-btn,
        .toggle-btn {
          padding: 8px 10px;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
        }

        .edit-btn {
          background: #f3e7d8;
          color: #654735;
        }

        .toggle-btn {
          background: #f7f0e7;
          color: #654735;
        }

        .delete-btn {
          background: #fbe9e7;
          color: #c62828;
        }

        .empty-services {
          padding: 35px !important;
          color: #88796e;
          text-align: center !important;
        }

        @media (max-width: 700px) {
          .manage-services-page {
            padding: 16px;
          }

          .service-stats {
            grid-template-columns: 1fr;
          }

          .service-list-card {
            padding: 15px;
          }

          .service-filters {
            width: 100%;
          }

          .service-search {
            width: 100%;
          }

          .service-category-filter {
            flex: 1;
            min-width: 0;
          }
        }
      `}</style>

      <div className="manage-services-header">
        <div>
          <h2>Manage Services</h2>
          <p>Add, search and manage your salon services.</p>
        </div>

        <Link to="/admin/add" className="add-btn">
          + Add Service
        </Link>
      </div>

      <div className="service-stats">
        <div className="service-stat-card">
          <p>Total Services</p>
          <h3>{services.length}</h3>
        </div>

        <div className="service-stat-card">
          <p>Categories</p>
          <h3>{categories.length}</h3>
        </div>

        <div className="service-stat-card">
          <p>Active Services</p>
          <h3>{activeServices}</h3>
        </div>
      </div>

      <div className="service-list-card">
        <div className="service-list-top">
          <h3>All Services</h3>

          <div className="service-filters">
            <input
              className="service-search"
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="service-category-filter"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="service-table-wrapper">
          <table className="service-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Service Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredServices.length > 0 ? (
                filteredServices.map((service, index) => (
                  <tr key={service.id}>
                    <td>{index + 1}</td>
                    <td>{service.name}</td>
                    <td>{service.category}</td>
                    <td>₹{service.price.toLocaleString("en-IN")}</td>

                    <td>
                      <span
                        className={`service-status ${
                          service.status ? "active" : "inactive"
                        }`}
                      >
                        {service.status ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td>
                      <div className="service-actions">
                        <Link
                          to={`/admin/editservice/${service.id}`}
                          className="edit-btn"
                        >
                          Edit
                        </Link>

                        <button
                          type="button"
                          className="toggle-btn"
                          onClick={() => toggleStatus(service.id)}
                        >
                          {service.status ? "Deactivate" : "Activate"}
                        </button>

                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() => deleteService(service.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="empty-services">
                    {services.length === 0
                      ? "No services added yet."
                      : "No services match your search or category."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
