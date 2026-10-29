
import { useState } from "react";

export default function ManagePayments() {
  const [payments, setPayments] = useState([
    {
      id: "PAY-1001",
      student: "Amandeep Kaur",
      email: "aman@gmail.com",
      item: "Professional Makeup",
      amount: 15000,
      method: "UPI",
      date: "2026-10-10",
      status: "Paid",
    },
    {
      id: "PAY-1002",
      student: "Simran Sharma",
      email: "simran@gmail.com",
      item: "Hair Styling",
      amount: 8000,
      method: "Card",
      date: "2026-10-12",
      status: "Pending",
    },
    {
      id: "PAY-1003",
      student: "Manpreet Kaur",
      email: "manpreet@gmail.com",
      item: "Skin Care",
      amount: 6000,
      method: "Cash",
      date: "2026-10-15",
      status: "Paid",
    },
    {
      id: "PAY-1004",
      student: "Jasleen Kaur",
      email: "jasleen@gmail.com",
      item: "Nail Art",
      amount: 4000,
      method: "UPI",
      date: "2026-10-18",
      status: "Failed",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [methodFilter, setMethodFilter] = useState("All");
  const [selectedPayment, setSelectedPayment] = useState(null);

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(search.toLowerCase()) ||
      payment.student.toLowerCase().includes(search.toLowerCase()) ||
      payment.email.toLowerCase().includes(search.toLowerCase()) ||
      payment.item.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || payment.status === statusFilter;

    const matchesMethod =
      methodFilter === "All" || payment.method === methodFilter;

    return matchesSearch && matchesStatus && matchesMethod;
  });

  const totalPaid = payments
    .filter((p) => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingAmount = payments
    .filter((p) => p.status === "Pending")
    .reduce((sum, p) => sum + p.amount, 0);

  const updateStatus = (id, newStatus) => {
    setPayments((previous) =>
      previous.map((payment) =>
        payment.id === id
          ? { ...payment, status: newStatus }
          : payment
      )
    );

    if (selectedPayment?.id === id) {
      setSelectedPayment((previous) => ({
        ...previous,
        status: newStatus,
      }));
    }
  };

  const deletePayment = (id) => {
    if (window.confirm("Are you sure you want to delete this payment?")) {
      setPayments((previous) =>
        previous.filter((payment) => payment.id !== id)
      );

      if (selectedPayment?.id === id) {
        setSelectedPayment(null);
      }
    }
  };

  const formatAmount = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <>
      <style>{`
        .payment-page {
          padding: 28px;
          min-height: 100vh;
          background: #faf7f2;
          color: #49352b;
          font-family: Arial, sans-serif;
        }

        .payment-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .payment-heading h2 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: 29px;
          color: #49352b;
        }

        .payment-heading p {
          margin: 0;
          color: #8b786b;
          font-size: 14px;
        }

        .payment-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 24px;
        }

        .payment-stat {
          padding: 22px;
          background: #fff;
          border: 1px solid #eee2d5;
          border-radius: 13px;
        }

        .payment-stat span {
          display: block;
          font-size: 13px;
          color: #8b786b;
          margin-bottom: 12px;
        }

        .payment-stat h3 {
          margin: 0;
          font-size: 25px;
          color: #76513b;
        }

        .payment-panel {
          background: white;
          border: 1px solid #eee2d5;
          border-radius: 13px;
          overflow: hidden;
        }

        .payment-toolbar {
          padding: 20px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          border-bottom: 1px solid #f0e7dd;
        }

        .payment-toolbar input,
        .payment-toolbar select {
          padding: 11px 13px;
          border: 1px solid #e5d8ca;
          border-radius: 8px;
          outline: none;
          background: #fffdfa;
          color: #49352b;
          font-size: 13px;
        }

        .payment-search {
          flex: 1;
          min-width: 200px;
        }

        .payment-toolbar input:focus,
        .payment-toolbar select:focus {
          border-color: #b18a58;
        }

        .payment-table-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .payment-table {
          width: 100%;
          min-width: 950px;
          border-collapse: collapse;
          text-align: left;
        }

        .payment-table th {
          padding: 15px;
          background: #fdfaf5;
          color: #8b786b;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .4px;
          white-space: nowrap;
        }

        .payment-table td {
          padding: 16px 15px;
          border-top: 1px solid #f2ebe4;
          font-size: 13px;
          vertical-align: middle;
        }

        .payment-table tbody tr:hover {
          background: #fffdfa;
        }

        .payment-id {
          color: #76513b;
          font-weight: 700;
        }

        .payment-person {
          font-weight: 600;
          color: #49352b;
        }

        .payment-email {
          display: block;
          color: #9b897d;
          font-size: 12px;
          margin-top: 5px;
        }

        .payment-status {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
        }

        .payment-paid {
          color: #24734c;
          background: #e8f6ed;
        }

        .payment-pending {
          color: #946200;
          background: #fff4d5;
        }

        .payment-failed {
          color: #b42318;
          background: #ffebe8;
        }

        .payment-actions {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .payment-action {
          padding: 7px 9px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          background: white;
        }

        .payment-view {
          border: 1px solid #d9c4ab;
          color: #76513b;
        }

        .payment-delete {
          border: 1px solid #f0c6c2;
          color: #b42318;
        }

        .payment-status-select {
          padding: 6px;
          max-width: 105px;
          border: 1px solid #e5d8ca;
          border-radius: 6px;
          color: #49352b;
          background: white;
          font-size: 11px;
        }

        .payment-empty {
          text-align: center;
          padding: 40px 20px;
          color: #8b786b;
        }

        .payment-footer {
          padding: 16px 20px;
          color: #8b786b;
          font-size: 13px;
          border-top: 1px solid #f0e7dd;
        }

        .payment-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: #21170f80;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 18px;
        }

        .payment-modal {
          width: 100%;
          max-width: 470px;
          padding: 25px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 15px 50px #0002;
        }

        .payment-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .payment-modal-header h3 {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 23px;
        }

        .payment-modal-close {
          border: none;
          background: #f7f0e8;
          color: #49352b;
          border-radius: 7px;
          width: 34px;
          height: 34px;
          cursor: pointer;
          font-size: 20px;
        }

        .payment-detail-row {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 13px 0;
          border-bottom: 1px solid #f0e7dd;
          font-size: 13px;
        }

        .payment-detail-row span:first-child {
          color: #8b786b;
        }

        .payment-detail-row strong {
          text-align: right;
          overflow-wrap: anywhere;
        }

        .payment-modal-done {
          width: 100%;
          margin-top: 20px;
          padding: 12px;
          background: #76513b;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        @media (max-width: 800px) {
          .payment-page {
            padding: 17px;
          }

          .payment-stats {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .payment-stat {
            padding: 17px;
          }

          .payment-stat h3 {
            font-size: 22px;
          }
        }

        @media (max-width: 480px) {
          .payment-heading h2 {
            font-size: 25px;
          }

          .payment-toolbar {
            padding: 14px;
          }

          .payment-search {
            min-width: 100%;
          }

          .payment-toolbar select {
            flex: 1;
            min-width: 120px;
          }
        }
      `}</style>

      <div className="payment-page">
        <div className="payment-heading">
          <div>
            <h2>Manage Payments</h2>
            <p>Track student course payments and payment status.</p>
          </div>
        </div>

        <div className="payment-stats">
          <div className="payment-stat">
            <span>Total Payments</span>
            <h3>{payments.length}</h3>
          </div>

          <div className="payment-stat">
            <span>Total Amount Received</span>
            <h3>{formatAmount(totalPaid)}</h3>
          </div>

          <div className="payment-stat">
            <span>Pending Amount</span>
            <h3>{formatAmount(pendingAmount)}</h3>
          </div>
        </div>

        <div className="payment-panel">
          <div className="payment-toolbar">
            <input
              className="payment-search"
              type="text"
              placeholder="Search ID, student or course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>

            <select
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value)}
            >
              <option value="All">All Methods</option>
              <option value="UPI">UPI</option>
              <option value="Card">Card</option>
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <div className="payment-table-wrap">
            <table className="payment-table">
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Student</th>
                  <th>Course / Service</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredPayments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="payment-id">{payment.id}</td>

                    <td>
                      <span className="payment-person">
                        {payment.student}
                      </span>
                      <span className="payment-email">
                        {payment.email}
                      </span>
                    </td>

                    <td>{payment.item}</td>
                    <td><strong>{formatAmount(payment.amount)}</strong></td>
                    <td>{payment.method}</td>
                    <td>{payment.date}</td>

                    <td>
                      <select
                        className="payment-status-select"
                        value={payment.status}
                        aria-label={`Status for ${payment.id}`}
                        onChange={(e) =>
                          updateStatus(payment.id, e.target.value)
                        }
                      >
                        <option value="Paid">Paid</option>
                        <option value="Pending">Pending</option>
                        <option value="Failed">Failed</option>
                      </select>
                      <div style={{ marginTop: 6 }}>
                        <span
                          className={`payment-status ${
                            payment.status === "Paid"
                              ? "payment-paid"
                              : payment.status === "Pending"
                              ? "payment-pending"
                              : "payment-failed"
                          }`}
                        >
                          {payment.status}
                        </span>
                      </div>
                    </td>

                    <td>
                      <div className="payment-actions">
                        <button
                          className="payment-action payment-view"
                          type="button"
                          onClick={() => setSelectedPayment(payment)}
                        >
                          View
                        </button>

                        <button
                          className="payment-action payment-delete"
                          type="button"
                          onClick={() => deletePayment(payment.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredPayments.length === 0 && (
              <div className="payment-empty">
                No payments found. Try another search or filter.
              </div>
            )}
          </div>

          <div className="payment-footer">
            Showing {filteredPayments.length} of {payments.length} payments
          </div>
        </div>

        {selectedPayment && (
          <div
            className="payment-modal-backdrop"
            onClick={() => setSelectedPayment(null)}
          >
            <div
              className="payment-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="payment-modal-header">
                <h3>Payment Details</h3>
                <button
                  className="payment-modal-close"
                  type="button"
                  onClick={() => setSelectedPayment(null)}
                >
                  ×
                </button>
              </div>

              <div className="payment-detail-row">
                <span>Payment ID</span>
                <strong>{selectedPayment.id}</strong>
              </div>

              <div className="payment-detail-row">
                <span>Student</span>
                <strong>{selectedPayment.student}</strong>
              </div>

              <div className="payment-detail-row">
                <span>Email</span>
                <strong>{selectedPayment.email}</strong>
              </div>

              <div className="payment-detail-row">
                <span>Course / Service</span>
                <strong>{selectedPayment.item}</strong>
              </div>

              <div className="payment-detail-row">
                <span>Amount</span>
                <strong>{formatAmount(selectedPayment.amount)}</strong>
              </div>

              <div className="payment-detail-row">
                <span>Payment Method</span>
                <strong>{selectedPayment.method}</strong>
              </div>

              <div className="payment-detail-row">
                <span>Payment Date</span>
                <strong>{selectedPayment.date}</strong>
              </div>

              <div className="payment-detail-row">
                <span>Status</span>
                <strong>{selectedPayment.status}</strong>
              </div>

              <button
                className="payment-modal-done"
                type="button"
                onClick={() => setSelectedPayment(null)}
              >
                Close Details
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
