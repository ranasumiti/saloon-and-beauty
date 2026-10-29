
import { useState } from "react";

export default function ManageEnquiries() {
  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      name: "Simran Kaur",
      email: "simran@gmail.com",
      phone: "9876543210",
      subject: "Course Enquiry",
      message: "I want to know about the Professional Makeup course fees and duration.",
      date: "2026-10-20",
      status: "New",
      reply: "",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "9876543211",
      subject: "Service Enquiry",
      message: "Please share details about bridal makeup packages.",
      date: "2026-10-21",
      status: "In Progress",
      reply: "",
    },
    {
      id: 3,
      name: "Amandeep Kaur",
      email: "aman@gmail.com",
      phone: "9876543212",
      subject: "Appointment Enquiry",
      message: "I would like to book a facial appointment. Please let me know the available timings.",
      date: "2026-10-22",
      status: "Resolved",
      reply: "Please contact our reception to confirm your preferred time.",
    },
    {
      id: 4,
      name: "Neha Verma",
      email: "neha@gmail.com",
      phone: "9876543213",
      subject: "General Enquiry",
      message: "Please share your salon opening hours.",
      date: "2026-10-23",
      status: "New",
      reply: "",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [replyText, setReplyText] = useState("");

  const filteredEnquiries = enquiries.filter((item) => {
    const term = search.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(term) ||
      item.email.toLowerCase().includes(term) ||
      item.subject.toLowerCase().includes(term) ||
      item.message.toLowerCase().includes(term);

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    const matchesSubject =
      subjectFilter === "All" || item.subject === subjectFilter;

    return matchesSearch && matchesStatus && matchesSubject;
  });

  const updateStatus = (id, status) => {
    setEnquiries((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );

    if (selectedEnquiry?.id === id) {
      setSelectedEnquiry((previous) => ({ ...previous, status }));
    }
  };

  const deleteEnquiry = (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      setEnquiries((previous) =>
        previous.filter((item) => item.id !== id)
      );

      if (selectedEnquiry?.id === id) {
        setSelectedEnquiry(null);
      }
    }
  };

  const saveReply = () => {
    if (!replyText.trim()) {
      alert("Please enter a reply first.");
      return;
    }

    const updatedEnquiry = {
      ...selectedEnquiry,
      reply: replyText.trim(),
      status: "Resolved",
    };

    setEnquiries((previous) =>
      previous.map((item) =>
        item.id === selectedEnquiry.id ? updatedEnquiry : item
      )
    );

    setSelectedEnquiry(updatedEnquiry);
    setReplyText("");
    alert("Reply saved successfully!");
  };

  const newCount = enquiries.filter((e) => e.status === "New").length;
  const progressCount = enquiries.filter(
    (e) => e.status === "In Progress"
  ).length;
  const resolvedCount = enquiries.filter(
    (e) => e.status === "Resolved"
  ).length;

  return (
    <>
      <style>{`
        .enquiry-page {
          padding: 28px;
          min-height: 100vh;
          background: #faf7f2;
          color: #49352b;
          font-family: Arial, sans-serif;
        }

        .enquiry-heading {
          margin-bottom: 24px;
        }

        .enquiry-heading h2 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: 29px;
          color: #49352b;
        }

        .enquiry-heading p {
          margin: 0;
          font-size: 14px;
          color: #8b786b;
        }

        .enquiry-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .enquiry-stat {
          padding: 21px;
          background: #fff;
          border: 1px solid #eee2d5;
          border-radius: 12px;
        }

        .enquiry-stat span {
          display: block;
          font-size: 13px;
          color: #8b786b;
          margin-bottom: 12px;
        }

        .enquiry-stat h3 {
          margin: 0;
          font-size: 27px;
          color: #76513b;
        }

        .enquiry-panel {
          background: white;
          border: 1px solid #eee2d5;
          border-radius: 13px;
          overflow: hidden;
        }

        .enquiry-toolbar {
          display: flex;
          gap: 12px;
          padding: 19px;
          flex-wrap: wrap;
          border-bottom: 1px solid #f0e7dd;
        }

        .enquiry-toolbar input,
        .enquiry-toolbar select {
          padding: 11px 13px;
          border: 1px solid #e5d8ca;
          border-radius: 8px;
          background: #fffdfa;
          color: #49352b;
          font-size: 13px;
          outline: none;
        }

        .enquiry-toolbar input {
          flex: 1;
          min-width: 190px;
        }

        .enquiry-toolbar input:focus,
        .enquiry-toolbar select:focus,
        .enquiry-reply-box:focus {
          border-color: #b18a58;
        }

        .enquiry-table-wrap {
          overflow-x: auto;
          width: 100%;
        }

        .enquiry-table {
          width: 100%;
          min-width: 950px;
          border-collapse: collapse;
          text-align: left;
        }

        .enquiry-table th {
          padding: 15px;
          background: #fdfaf5;
          color: #8b786b;
          font-size: 12px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .enquiry-table td {
          padding: 15px;
          border-top: 1px solid #f2ebe4;
          font-size: 13px;
          vertical-align: middle;
        }

        .enquiry-table tbody tr:hover {
          background: #fffdfa;
        }

        .enquiry-person {
          font-weight: 600;
          color: #49352b;
        }

        .enquiry-email {
          display: block;
          margin-top: 5px;
          color: #9b897d;
          font-size: 12px;
        }

        .enquiry-subject {
          display: inline-block;
          padding: 6px 9px;
          border-radius: 6px;
          background: #f7f0e8;
          color: #76513b;
          font-size: 11px;
          font-weight: 600;
        }

        .enquiry-status {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .enquiry-new {
          color: #946200;
          background: #fff4d5;
        }

        .enquiry-progress {
          color: #285ea8;
          background: #eaf2ff;
        }

        .enquiry-resolved {
          color: #24734c;
          background: #e8f6ed;
        }

        .enquiry-actions {
          display: flex;
          gap: 7px;
          align-items: center;
        }

        .enquiry-btn {
          padding: 8px 10px;
          border-radius: 6px;
          background: white;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .enquiry-view {
          color: #76513b;
          border: 1px solid #d9c4ab;
        }

        .enquiry-delete {
          color: #b42318;
          border: 1px solid #f0c6c2;
        }

        .enquiry-status-select {
          max-width: 125px;
          padding: 7px;
          border: 1px solid #e5d8ca;
          border-radius: 6px;
          background: white;
          color: #49352b;
          font-size: 11px;
        }

        .enquiry-empty {
          text-align: center;
          padding: 40px 20px;
          color: #8b786b;
        }

        .enquiry-footer {
          padding: 16px 20px;
          border-top: 1px solid #f0e7dd;
          color: #8b786b;
          font-size: 13px;
        }

        .enquiry-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: #21170f80;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 18px;
        }

        .enquiry-modal {
          width: 100%;
          max-width: 550px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 25px;
          border-radius: 14px;
          background: white;
          box-shadow: 0 15px 50px #0002;
        }

        .enquiry-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .enquiry-modal-header h3 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 23px;
        }

        .enquiry-close {
          width: 34px;
          height: 34px;
          border: none;
          border-radius: 7px;
          background: #f7f0e8;
          color: #49352b;
          font-size: 20px;
          cursor: pointer;
        }

        .enquiry-detail {
          padding: 12px 0;
          border-bottom: 1px solid #f0e7dd;
          font-size: 13px;
        }

        .enquiry-detail-label {
          display: block;
          margin-bottom: 6px;
          color: #8b786b;
        }

        .enquiry-message {
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .enquiry-reply-section {
          margin-top: 20px;
        }

        .enquiry-reply-section label {
          display: block;
          margin-bottom: 9px;
          font-size: 13px;
          font-weight: 600;
        }

        .enquiry-reply-box {
          box-sizing: border-box;
          width: 100%;
          min-height: 100px;
          padding: 12px;
          border: 1px solid #e5d8ca;
          border-radius: 8px;
          outline: none;
          resize: vertical;
          font: inherit;
          font-size: 13px;
        }

        .enquiry-modal-actions {
          display: flex;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 17px;
        }

        .enquiry-save-reply {
          padding: 11px 17px;
          border: none;
          border-radius: 8px;
          background: #76513b;
          color: white;
          cursor: pointer;
          font-weight: 600;
        }

        .enquiry-close-modal {
          padding: 11px 17px;
          border: 1px solid #dfd0c0;
          border-radius: 8px;
          background: white;
          color: #674d3c;
          cursor: pointer;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .enquiry-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .enquiry-page {
            padding: 16px;
          }

          .enquiry-heading h2 {
            font-size: 25px;
          }

          .enquiry-stats {
            gap: 10px;
          }

          .enquiry-stat {
            padding: 15px;
          }

          .enquiry-stat h3 {
            font-size: 23px;
          }

          .enquiry-toolbar input {
            min-width: 100%;
          }

          .enquiry-toolbar select {
            flex: 1;
            min-width: 125px;
          }

          .enquiry-modal {
            padding: 18px;
          }
        }
      `}</style>

      <div className="enquiry-page">
        <div className="enquiry-heading">
          <h2>Manage Enquiries</h2>
          <p>View and manage customer questions and requests.</p>
        </div>

        <div className="enquiry-stats">
          <div className="enquiry-stat">
            <span>Total Enquiries</span>
            <h3>{enquiries.length}</h3>
          </div>

          <div className="enquiry-stat">
            <span>New Enquiries</span>
            <h3>{newCount}</h3>
          </div>

          <div className="enquiry-stat">
            <span>In Progress</span>
            <h3>{progressCount}</h3>
          </div>

          <div className="enquiry-stat">
            <span>Resolved</span>
            <h3>{resolvedCount}</h3>
          </div>
        </div>

        <div className="enquiry-panel">
          <div className="enquiry-toolbar">
            <input
              type="text"
              placeholder="Search name, email or enquiry..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>

            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
            >
              <option value="All">All Subjects</option>
              <option value="Course Enquiry">Course Enquiry</option>
              <option value="Service Enquiry">Service Enquiry</option>
              <option value="Appointment Enquiry">Appointment Enquiry</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>

          <div className="enquiry-table-wrap">
            <table className="enquiry-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredEnquiries.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className="enquiry-person">{item.name}</span>
                      <span className="enquiry-email">{item.email}</span>
                    </td>

                    <td>
                      <span className="enquiry-subject">{item.subject}</span>
                    </td>

                    <td>
                      {item.message.length > 45
                        ? item.message.slice(0, 45) + "..."
                        : item.message}
                    </td>

                    <td>{item.date}</td>

                    <td>
                      <select
                        className="enquiry-status-select"
                        value={item.status}
                        aria-label={`Status for ${item.name}`}
                        onChange={(e) => updateStatus(item.id, e.target.value)}
                      >
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                      </select>

                      <div style={{ marginTop: 6 }}>
                        <span
                          className={`enquiry-status ${
                            item.status === "New"
                              ? "enquiry-new"
                              : item.status === "In Progress"
                              ? "enquiry-progress"
                              : "enquiry-resolved"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </td>

                    <td>
                      <div className="enquiry-actions">
                        <button
                          className="enquiry-btn enquiry-view"
                          type="button"
                          onClick={() => {
                            setSelectedEnquiry(item);
                            setReplyText(item.reply || "");
                          }}
                        >
                          View
                        </button>

                        <button
                          className="enquiry-btn enquiry-delete"
                          type="button"
                          onClick={() => deleteEnquiry(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredEnquiries.length === 0 && (
              <div className="enquiry-empty">
                No enquiries found. Try changing your search or filters.
              </div>
            )}
          </div>

          <div className="enquiry-footer">
            Showing {filteredEnquiries.length} of {enquiries.length} enquiries
          </div>
        </div>

        {selectedEnquiry && (
          <div
            className="enquiry-modal-backdrop"
            onClick={() => setSelectedEnquiry(null)}
          >
            <div
              className="enquiry-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="enquiry-modal-header">
                <h3>Enquiry Details</h3>
                <button
                  type="button"
                  className="enquiry-close"
                  onClick={() => setSelectedEnquiry(null)}
                >
                  ×
                </button>
              </div>

              <div className="enquiry-detail">
                <span className="enquiry-detail-label">Customer Name</span>
                <strong>{selectedEnquiry.name}</strong>
              </div>

              <div className="enquiry-detail">
                <span className="enquiry-detail-label">Email</span>
                <strong>{selectedEnquiry.email}</strong>
              </div>

              <div className="enquiry-detail">
                <span className="enquiry-detail-label">Phone</span>
                <strong>{selectedEnquiry.phone}</strong>
              </div>

              <div className="enquiry-detail">
                <span className="enquiry-detail-label">Subject</span>
                <strong>{selectedEnquiry.subject}</strong>
              </div>

              <div className="enquiry-detail">
                <span className="enquiry-detail-label">Message</span>
                <div className="enquiry-message">
                  {selectedEnquiry.message}
                </div>
              </div>

              <div className="enquiry-detail">
                <span className="enquiry-detail-label">Received On</span>
                <strong>{selectedEnquiry.date}</strong>
              </div>

              {selectedEnquiry.reply && (
                <div className="enquiry-detail">
                  <span className="enquiry-detail-label">Saved Reply</span>
                  <div className="enquiry-message">
                    {selectedEnquiry.reply}
                  </div>
                </div>
              )}

              <div className="enquiry-reply-section">
                <label>Reply / Admin Notes</label>
                <textarea
                  className="enquiry-reply-box"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write a reply or add admin notes..."
                />
              </div>

              <div className="enquiry-modal-actions">
                <button
                  type="button"
                  className="enquiry-close-modal"
                  onClick={() => setSelectedEnquiry(null)}
                >
                  Close
                </button>

                <button
                  type="button"
                  className="enquiry-save-reply"
                  onClick={saveReply}
                >
                  Save Reply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
