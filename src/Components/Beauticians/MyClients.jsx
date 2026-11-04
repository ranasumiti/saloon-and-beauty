
export default function MyClients() {
  const clients = [
    { id: 1, name: "Priya Sharma", phone: "9876543210", service: "Facial" },
    { id: 2, name: "Simran Kaur", phone: "9876543211", service: "Hair Spa" },
    { id: 3, name: "Neha Verma", phone: "9876543212", service: "Makeup" }
  ];

  return (
    <>
      <h2 className="beautician-title">My Clients</h2>
      <p className="beautician-subtitle">
        View your customer details.
      </p>

      <div className="beautician-card">
        <div className="beautician-table-wrap">
          <table className="beautician-table">
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Phone</th>
                <th>Last Service</th>
              </tr>
            </thead>

            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.phone}</td>
                  <td>{client.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
