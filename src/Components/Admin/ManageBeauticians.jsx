
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetAllUsers } from "../../services/AdminService";

export default function ManageBeauticians() {
  const [beauticians, setBeauticians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] =useState("All");
  const [selectedBeautician, setSelectedBeautician] = useState(null);

  // GET ALL BEAUTICIANS FROM BACKEND
  const getBeauticians = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await GetAllUsers();

      if (response.data.success) {
        const beauticianData = response.data.data
          .filter((item) => Number(item.userType) === 4)
          .map((item) => ({
            ...item,
            status: item.status === true ? "Accepted" : "Rejected",
            specialization: item.specialization || "N/A",
            experience: item.experience || "N/A",
          }));

        setBeauticians(beauticianData);
      } else {
        setError(response.data.message || "Unable to load beauticians");
      }
    } catch (err) {
      console.error("Beautician Error:", err);
      setError(
        err.response?.data?.message ||
          "Something went wrong while loading beauticians."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBeauticians();
  }, []);

  // SPECIALIZATION FILTER OPTIONS
  const specializations = [
    ...new Set(
      beauticians
        .map((item) => item.specialization)
        .filter((item) => item && item !== "N/A")
    ),
  ];

  // SEARCH AND FILTER
  const filteredBeauticians = beauticians.filter((item) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      (item.name || "").toLowerCase().includes(searchText) ||
      (item.email || "").toLowerCase().includes(searchText) ||
      String(item.phone || "").includes(search) ||
      (item.specialization || "").toLowerCase().includes(searchText);

    const matchesSpecialization =
      selectedSpecialization === "All" ||
      item.specialization === selectedSpecialization;

    return matchesSearch && matchesSpecialization;
  });

  // LOCAL ACCEPT / REJECT
  const toggleStatus = (id) => {
    setBeauticians((previous) =>
      previous.map((item) =>
        item._id === id
          ? {
              ...item,
              status:
                item.status === "Accepted" ? "Rejected" : "Accepted",
            }
          : item
      )
    );

    if (selectedBeautician?._id === id) {
      setSelectedBeautician((previous) => ({
        ...previous,
        status:
          previous.status === "Accepted" ? "Rejected" : "Accepted",
      }));
    }
  };

  // LOCAL DELETE
  const deleteBeautician = (id) => {
    if (window.confirm("Are you sure you want to delete this beautician?")) {
      setBeauticians((previous) =>
        previous.filter((item) => item._id !== id)
      );

      if (selectedBeautician?._id === id) {
        setSelectedBeautician(null);
      }
    }
  };

  // DATE FORMAT
  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <>
      <style>{`
        .manage-beauticians {
          min-height: 100vh;
          width: 100%;
          padding: 25px;
          box-sizing: border-box;
          background: #faf7f2;
          color: #49372e;
          font-family: Arial, sans-serif;
        }

        .beautician-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }

        .beautician-header h2 {
          margin: 0 0 8px;
          font-size: 27px;
          color: #49372e;
        }

        .beautician-header p {
          margin: 0;
          color: #88766a;
          font-size: 14px;
        }

        .beautician-add-btn {
          display: inline-block;
          padding: 12px 20px;
          background: #a77b45;
          color: white;
          text-decoration: none;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 600;
          transition: 0.3s;
        }

        .beautician-add-btn:hover {
          background: #79552f;
          color: white;
        }

        .beautician-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .beautician-stat-card {
          background: white;
          border: 1px solid #eee3d5;
          border-radius: 12px;
          padding: 22px;
          box-shadow: 0 3px 12px rgba(73, 55, 46, 0.05);
        }

        .beautician-stat-card h3 {
          margin: 0 0 8px;
          font-size: 29px;
          color: #a77b45;
        }

        .beautician-stat-card p {
          margin: 0;
          font-size: 14px;
          color: #88766a;
        }

        .beautician-filters {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .beautician-filters input,
        .beautician-filters select {
          height: 45px;
          padding: 0 14px;
          border: 1px solid #e4d8ca;
          border-radius: 7px;
          outline: none;
          background: white;
          color: #49372e;
          font-size: 14px;
          box-sizing: border-box;
        }

        .beautician-filters input {
          flex: 1;
          min-width: 0;
        }

        .beautician-filters select {
          width: 220px;
          cursor: pointer;
        }

        .beautician-filters input:focus,
        .beautician-filters select:focus {
          border-color: #a77b45;
          box-shadow: 0 0 0 3px rgba(167, 123, 69, 0.12);
        }

        .beautician-table-wrapper {
          width: 100%;
          overflow-x: auto;
          background: white;
          border: 1px solid #eee3d5;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(73, 55, 46, 0.05);
        }

        .beautician-table {
          width: 100%;
          min-width: 950px;
          border-collapse: collapse;
          text-align: left;
        }

        .beautician-table thead {
          background: #eee3d5;
        }

        .beautician-table th {
          padding: 16px 14px;
          color: #5a4232;
          font-size: 13px;
          white-space: nowrap;
        }

        .beautician-table td {
          padding: 15px 14px;
          border-bottom: 1px solid #f0e8df;
          font-size: 13px;
          color: #625247;
          vertical-align: middle;
        }

        .beautician-table tbody tr:last-child td {
          border-bottom: none;
        }

        .beautician-table tbody tr:hover {
          background: #fdfaf6;
        }

        .beautician-name {
          font-weight: 600;
          color: #49372e;
        }

        .beautician-status {
          display: inline-block;
          padding: 6px 11px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .beautician-status.accepted {
          background: #e8f4e9;
          color: #347343;
        }

        .beautician-status.rejected {
          background: #f5e8e4;
          color: #a34d3f;
        }

        .beautician-actions {
          display: flex;
          gap: 7px;
          align-items: center;
          flex-wrap: wrap;
        }

        .beautician-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 10px;
          border: none;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: 0.2s;
        }

        .beautician-view-btn {
          background: #eee3d5;
          color: #654c36;
        }

        .beautician-view-btn:hover {
          background: #dfd0bb;
        }

        .beautician-toggle-btn {
          background: #eee7dc;
          color: #654c36;
        }

        .beautician-toggle-btn:hover {
          background: #dfd0bb;
        }

        .beautician-delete-btn {
          background: #f8e5e2;
          color: #b13d32;
        }

        .beautician-delete-btn:hover {
          background: #f0ceca;
        }

        .beautician-empty {
          text-align: center !important;
          padding: 35px !important;
          color: #88766a !important;
        }

        .beautician-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(40, 29, 22, 0.55);
        }

        .beautician-modal {
          width: 100%;
          max-width: 450px;
          padding: 25px;
          box-sizing: border-box;
          background: #fffdf9;
          border: 1px solid #eee3d5;
          border-radius: 14px;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.15);
        }

        .beautician-modal h3 {
          margin: 0 0 20px;
          font-size: 22px;
          color: #49372e;
        }

        .beautician-detail {
          margin: 12px 0;
          font-size: 14px;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .beautician-detail strong {
          color: #79552f;
        }

        .beautician-modal-close {
          width: 100%;
          margin-top: 15px;
          padding: 11px;
          border: none;
          border-radius: 7px;
          background: #a77b45;
          color: white;
          cursor: pointer;
          font-weight: 600;
        }

        .beautician-modal-close:hover {
          background: #79552f;
        }

        @media (max-width: 768px) {
          .manage-beauticians {
            padding: 18px;
          }

          .beautician-header h2 {
            font-size: 23px;
          }

          .beautician-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .beautician-stat-card {
            padding: 17px;
          }

          .beautician-filters {
            flex-direction: column;
          }

          .beautician-filters select {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .manage-beauticians {
            padding: 12px;
          }

          .beautician-header h2 {
            font-size: 21px;
          }

          .beautician-add-btn {
            padding: 10px 13px;
            font-size: 12px;
          }

          .beautician-stats {
            grid-template-columns: 1fr;
          }

          .beautician-stat-card h3 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="manage-beauticians">

        <div className="beautician-header">
          <div>
            <h2>Manage Beauticians</h2>
            <p>Manage your salon beauticians and their details.</p>
          </div>

          <Link
            to="/admin/addbeautician"
            className="beautician-add-btn"
          >
            + Add Beautician
          </Link>
        </div>

        {/* STATISTICS */}
        <div className="beautician-stats">

          <div className="beautician-stat-card">
            <h3>{beauticians.length}</h3>
            <p>Total Beauticians</p>
          </div>

          <div className="beautician-stat-card">
            <h3>
              {beauticians.filter(
                (item) => item.status === "Accepted"
              ).length}
            </h3>
            <p>Accepted Beauticians</p>
          </div>

          <div className="beautician-stat-card">
            <h3>
              {beauticians.filter(
                (item) => item.status === "Rejected"
              ).length}
            </h3>
            <p>Rejected Beauticians</p>
          </div>

        </div>

        {/* SEARCH AND FILTER */}
        <div className="beautician-filters">

          <input
            type="text"
            placeholder="Search name, email, phone or specialization..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
          >
            <option value="All">All Specializations</option>

            {specializations.map((specialization) => (
              <option key={specialization} value={specialization}>
                {specialization}
              </option>
            ))}
          </select>

        </div>

        {/* BEAUTICIAN TABLE */}
        <div className="beautician-table-wrapper">

          <table className="beautician-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Beautician Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Specialization</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {loading ? (
                <tr>
                  <td colSpan="7" className="beautician-empty">
                    Loading beauticians...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="7" className="beautician-empty">
                    {error}
                  </td>
                </tr>
              ) : filteredBeauticians.length > 0 ? (

                filteredBeauticians.map((beautician, index) => (
                  <tr key={beautician._id}>

                    <td>{index + 1}</td>

                    <td className="beautician-name">
                      {beautician.name || "N/A"}
                    </td>

                    <td>{beautician.email || "N/A"}</td>

                    <td>{beautician.phone || "N/A"}</td>

                    <td>{beautician.specialization}</td>

                    <td>
                      <span
                        className={
                          beautician.status === "Accepted"
                            ? "beautician-status accepted"
                            : "beautician-status rejected"
                        }
                      >
                        {beautician.status}
                      </span>
                    </td>

                    <td>
                      <div className="beautician-actions">

                        <button
                          type="button"
                          className="beautician-action-btn beautician-view-btn"
                          onClick={() => setSelectedBeautician(beautician)}
                        >
                          View
                        </button>

                        <button
                          type="button"
                          className="beautician-action-btn beautician-toggle-btn"
                          onClick={() => toggleStatus(beautician._id)}
                        >
                          {beautician.status === "Accepted"
                            ? "Rejected"
                            : "Accepted"}
                        </button>

                        <button
                          type="button"
                          className="beautician-action-btn beautician-delete-btn"
                          onClick={() => deleteBeautician(beautician._id)}
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))

              ) : (
                <tr>
                  <td colSpan="7" className="beautician-empty">
                    No beauticians found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

        {/* BEAUTICIAN DETAILS MODAL */}
        {selectedBeautician && (
          <div
            className="beautician-modal-overlay"
            onClick={() => setSelectedBeautician(null)}
          >
            <div
              className="beautician-modal"
              onClick={(e) => e.stopPropagation()}
            >

              <h3>Beautician Details</h3>

              <p className="beautician-detail">
                <strong>Name:</strong> {selectedBeautician.name || "N/A"}
              </p>

              <p className="beautician-detail">
                <strong>Email:</strong> {selectedBeautician.email || "N/A"}
              </p>

              <p className="beautician-detail">
                <strong>Phone:</strong> {selectedBeautician.phone || "N/A"}
              </p>

              <p className="beautician-detail">
                <strong>Specialization:</strong>{" "}
                {selectedBeautician.specialization}
              </p>

              <p className="beautician-detail">
                <strong>Experience:</strong> {selectedBeautician.experience}
              </p>

              <p className="beautician-detail">
                <strong>Joined:</strong>{" "}
                {formatDate(selectedBeautician.createdAt)}
              </p>

              <p className="beautician-detail">
                <strong>Status:</strong> {selectedBeautician.status}
              </p>

              <button
                type="button"
                className="beautician-modal-close"
                onClick={() => setSelectedBeautician(null)}
              >
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </>
  );
}
