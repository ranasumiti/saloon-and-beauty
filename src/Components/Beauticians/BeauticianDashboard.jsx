
export default function BeauticianDashboard() {
  return (
    <>
      <h2 className="beautician-title">Dashboard</h2>
      <p className="beautician-subtitle">
        Here is your daily work overview.
      </p>

      <div className="beautician-grid">
        <div className="beautician-card">
          <h3>Today's Appointments</h3>
          <h2>08</h2>
          <p>Appointments scheduled</p>
        </div>

        <div className="beautician-card">
          <h3>Completed Services</h3>
          <h2>05</h2>
          <p>Successfully completed</p>
        </div>

        <div className="beautician-card">
          <h3>Upcoming Appointments</h3>
          <h2>03</h2>
          <p>Waiting for your service</p>
        </div>

        <div className="beautician-card">
          <h3>Monthly Earnings</h3>
          <h2>₹12,500</h2>
          <p>This month</p>
        </div>
      </div>

      <div className="beautician-card">
        <h3>Today's Appointments</h3>

        <div className="beautician-table-wrap">
          <table className="beautician-table">
            <thead>
              <tr>
                <th>Client</th>
                <th>Service</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Priya</td>
                <td>Facial</td>
                <td>10:00 AM</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>Simran</td>
                <td>Hair Spa</td>
                <td>12:00 PM</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>Neha</td>
                <td>Makeup</td>
                <td>02:00 PM</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
