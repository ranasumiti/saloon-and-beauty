
export default function MyEarnings() {
  return (
    <>
      <h2 className="beautician-title">My Earnings</h2>
      <p className="beautician-subtitle">
        Check your earnings and completed services.
      </p>

      <div className="beautician-grid">
        <div className="beautician-card">
          <h3>Today's Earnings</h3>
          <h2>₹1,500</h2>
          <p>Today's total</p>
        </div>

        <div className="beautician-card">
          <h3>Weekly Earnings</h3>
          <h2>₹5,500</h2>
          <p>This week</p>
        </div>

        <div className="beautician-card">
          <h3>Monthly Earnings</h3>
          <h2>₹12,500</h2>
          <p>This month</p>
        </div>

        <div className="beautician-card">
          <h3>Completed Services</h3>
          <h2>25</h2>
          <p>This month</p>
        </div>
      </div>

      <div className="beautician-card">
        <h3>Payment History</h3>

        <div className="beautician-table-wrap">
          <table className="beautician-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Service</th>
                <th>Amount</th>
                <th>Payment</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>02 Nov 2026</td>
                <td>Facial</td>
                <td>₹1,000</td>
                <td>Paid</td>
              </tr>
              <tr>
                <td>03 Nov 2026</td>
                <td>Hair Spa</td>
                <td>₹1,500</td>
                <td>Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
