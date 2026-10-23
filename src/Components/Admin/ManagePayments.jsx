
export default function ManagePayments() {
  return (
    <>
      <div className="payments-page">
        <div className="payments-heading">
          <div>
            <p>Home / Payments</p>
            <h1>Manage Payments</h1>
            <span>Track salon bookings and course payments.</span>
          </div>

          <button className="payment-export">
            ↓ Export Report
          </button>
        </div>

        <div className="payment-stats">
          <div className="payment-stat">
            <p>Total Revenue</p>
            <h2>₹85,500</h2>
            <span>All recorded payments</span>
          </div>

          <div className="payment-stat">
            <p>Completed Payments</p>
            <h2>₹62,000</h2>
            <span className="payment-green">Successful</span>
          </div>

          <div className="payment-stat">
            <p>Pending Payments</p>
            <h2>₹15,500</h2>
            <span className="payment-orange">Awaiting payment</span>
          </div>

          <div className="payment-stat">
            <p>Refunded</p>
            <h2>₹8,000</h2>
            <span>Refund transactions</span>
          </div>
        </div>

        <div className="payment-panel">
          <div className="payment-panel-heading">
            <div>
              <h2>Payment Transactions</h2>
              <p>View and manage customer payments.</p>
            </div>

            <div className="payment-filters">
              <input
                type="text"
                placeholder="Search payments..."
              />

              <select defaultValue="all">
                <option value="all">All Statuses</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
                <option>Refunded</option>
              </select>
            </div>
          </div>

          <div className="payment-table-wrapper">
            <table className="payment-table">
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Customer</th>
                  <th>For</th>
                  <th>Date</th>
                  <th>Method</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#PAY001</td>
                  <td>Priya Sharma</td>
                  <td>Facial Treatment</td>
                  <td>22 Oct 2026</td>
                  <td>UPI</td>
                  <td>₹1,200</td>
                  <td>
                    <span className="payment-badge completed">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>#PAY002</td>
                  <td>Neha Verma</td>
                  <td>Beauty Course</td>
                  <td>22 Oct 2026</td>
                  <td>Card</td>
                  <td>₹5,000</td>
                  <td>
                    <span className="payment-badge pending">
                      Pending
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>#PAY003</td>
                  <td>Anjali Gupta</td>
                  <td>Bridal Makeup</td>
                  <td>21 Oct 2026</td>
                  <td>UPI</td>
                  <td>₹5,000</td>
                  <td>
                    <span className="payment-badge completed">
                      Completed
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>#PAY004</td>
                  <td>Simran Kaur</td>
                  <td>Hair Spa</td>
                  <td>20 Oct 2026</td>
                  <td>Cash</td>
                  <td>₹1,500</td>
                  <td>
                    <span className="payment-badge refunded">
                      Refunded
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>#PAY005</td>
                  <td>Megha Arora</td>
                  <td>Makeup Course</td>
                  <td>20 Oct 2026</td>
                  <td>Card</td>
                  <td>₹8,000</td>
                  <td>
                    <span className="payment-badge failed">
                      Failed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="payment-table-hint">
            Swipe horizontally to view all payment details.
          </p>

          <div className="payment-footer">
            Showing 5 sample transactions
          </div>
        </div>
      </div>

      <style>{`
        .payments-page {
          width: 100%;
          min-width: 0;
          min-height: 100vh;
          padding: 25px;
          background: #F8F1E8;
          color: #493427;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .payments-page * {
          box-sizing: border-box;
        }

        .payments-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          margin-bottom: 25px;
        }

        .payments-heading p {
          color: #8A7A6D;
          font-size: 13px;
        }

        .payments-heading h1 {
          font-family: Georgia, serif;
          font-size: clamp(25px, 3vw, 32px);
          margin: 10px 0;
          overflow-wrap: anywhere;
        }

        .payments-heading span {
          color: #8A7A6D;
          font-size: 14px;
        }

        .payment-export {
          flex-shrink: 0;
          padding: 13px 18px;
          border: none;
          border-radius: 8px;
          background: #6B4F3A;
          color: white;
          cursor: pointer;
        }

        .payment-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 25px;
        }

        .payment-stat {
          min-width: 0;
          padding: 20px;
          background: #FFFCF8;
          border: 1px solid #E9DED1;
          border-radius: 12px;
          box-shadow: 0 4px 12px #49342708;
        }

        .payment-stat p {
          margin: 0 0 12px;
          color: #806752;
          font-size: 13px;
        }

        .payment-stat h2 {
          margin: 0 0 12px;
          font-family: Georgia, serif;
          font-size: clamp(22px, 2.2vw, 29px);
          overflow-wrap: anywhere;
        }

        .payment-stat > span {
          color: #8A7A6D;
          font-size: 12px;
        }

        .payment-stat .payment-green {
          color: #287447;
        }

        .payment-stat .payment-orange {
          color: #9B681D;
        }

        .payment-panel {
          width: 100%;
          min-width: 0;
          padding: 22px;
          background: #FFFCF8;
          border: 1px solid #E9DED1;
          border-radius: 12px;
        }

        .payment-panel-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .payment-panel-heading h2 {
          margin: 0 0 8px;
          font-family: Georgia, serif;
          font-size: 25px;
        }

        .payment-panel-heading p {
          margin: 0;
          color: #8A7A6D;
          font-size: 13px;
          line-height: 1.5;
        }

        .payment-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          min-width: 0;
        }

        .payment-filters input,
        .payment-filters select {
          width: 190px;
          max-width: 100%;
          min-width: 0;
          padding: 12px;
          border: 1px solid #E9DED1;
          border-radius: 7px;
          background: #FFFCF8;
          color: #493427;
        }

        .payment-table-wrapper {
          width: 100%;
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border: 1px solid #E9DED1;
          border-radius: 8px;
        }

        .payment-table {
          width: 100%;
          min-width: 850px;
          border-collapse: collapse;
          white-space: nowrap;
        }

        .payment-table th {
          padding: 15px 12px;
          text-align: left;
          background: #F2E5D5;
          color: #493427;
          font-size: 13px;
          border-bottom: 1px solid #E9DED1;
        }

        .payment-table td {
          padding: 15px 12px;
          font-size: 13px;
          border-bottom: 1px solid #E9DED1;
        }

        .payment-table tbody tr:last-child td {
          border-bottom: none;
        }

        .payment-badge {
          display: inline-block;
          padding: 7px 10px;
          border-radius: 20px;
          font-size: 12px;
        }

        .payment-badge.completed {
          background: #E1EFDF;
          color: #286337;
        }

        .payment-badge.pending {
          background: #FFF0CC;
          color: #8A5700;
        }

        .payment-badge.refunded {
          background: #E8DFF4;
          color: #65448B;
        }

        .payment-badge.failed {
          background: #FDE3DC;
          color: #A53D2B;
        }

        .payment-table-hint {
          display: none;
          color: #8A7A6D;
          font-size: 12px;
        }

        .payment-footer {
          margin-top: 18px;
          color: #8A7A6D;
          font-size: 13px;
        }

        @media (max-width: 1100px) {
          .payments-page {
            padding: 20px;
          }

          .payment-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .payment-panel {
            padding: 18px;
          }
        }

        @media (max-width: 768px) {
          .payments-page {
            padding: 15px;
          }

          .payments-heading {
            align-items: flex-start;
          }

          .payment-panel-heading {
            flex-direction: column;
          }

          .payment-filters {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: 100%;
          }

          .payment-filters input,
          .payment-filters select {
            width: 100%;
          }

          .payment-table-hint {
            display: block;
          }
        }

        @media (max-width: 520px) {
          .payments-page {
            padding: 12px;
          }

          .payments-heading {
            flex-direction: column;
            align-items: stretch;
          }

          .payment-export {
            width: 100%;
          }

          .payment-stats {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }

          .payment-stat {
            padding: 17px;
          }

          .payment-panel {
            padding: 12px;
          }

          .payment-panel-heading h2 {
            font-size: 23px;
          }

          .payment-filters {
            grid-template-columns: minmax(0, 1fr);
          }

          .payment-filters input,
          .payment-filters select {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
