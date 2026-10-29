
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditBeautician() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [status, setStatus] = useState("Active");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedBeauticians = JSON.parse(
      localStorage.getItem("beautyBeauticians") || "[]"
    );

    const beautician = savedBeauticians.find(
      (item) => String(item.id) === String(id)
    );

    if (beautician) {
      setName(beautician.name || "");
      setEmail(beautician.email || "");
      setPhone(beautician.phone || "");
      setSpecialization(beautician.specialization || "");
      setExperience(beautician.experience || "");
      setStatus(beautician.status || "Active");
    } else {
      setError("Beautician not found. Please check the saved data.");
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !specialization ||
      !experience.trim()
    ) {
      setError("Please fill all required fields.");
      return;
    }

    const savedBeauticians = JSON.parse(
      localStorage.getItem("beautyBeauticians") || "[]"
    );

    const exists = savedBeauticians.some(
      (item) => String(item.id) === String(id)
    );

    if (!exists) {
      setError(
        "Beautician data not found. Please connect the Manage Beauticians page first."
      );
      return;
    }

    const updatedBeauticians = savedBeauticians.map((item) =>
      String(item.id) === String(id)
        ? {
            ...item,
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            specialization,
            experience: experience.trim(),
            status,
          }
        : item
    );

    localStorage.setItem(
      "beautyBeauticians",
      JSON.stringify(updatedBeauticians)
    );

    alert("Beautician updated successfully!");
    navigate("/admin/beauticians");
  };

  return (
    <>
      <style>{`
        .edit-beautician-page {
          min-height: 100vh;
          padding: 25px;
          box-sizing: border-box;
          background: #faf7f2;
          color: #49372e;
          font-family: Arial, sans-serif;
        }

        .edit-beautician-container {
          max-width: 850px;
          margin: 0 auto;
        }

        .edit-beautician-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 25px;
        }

        .edit-beautician-header h2 {
          margin: 0 0 8px;
          font-size: 27px;
        }

        .edit-beautician-header p {
          margin: 0;
          color: #88766a;
          font-size: 14px;
        }

        .edit-beautician-back {
          padding: 11px 17px;
          background: #eee3d5;
          color: #654c36;
          border-radius: 7px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        .edit-beautician-card {
          padding: 28px;
          background: white;
          border: 1px solid #eee3d5;
          border-radius: 13px;
          box-shadow: 0 4px 15px rgba(73, 55, 46, 0.06);
        }

        .edit-beautician-card h3 {
          margin: 0 0 25px;
          font-size: 20px;
          color: #79552f;
        }

        .edit-beautician-form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .edit-beautician-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .edit-beautician-field label {
          color: #5a4232;
          font-size: 13px;
          font-weight: 600;
        }

        .edit-beautician-field input,
        .edit-beautician-field select {
          width: 100%;
          height: 45px;
          padding: 0 12px;
          box-sizing: border-box;
          border: 1px solid #e4d8ca;
          border-radius: 7px;
          outline: none;
          background: #fffdf9;
          color: #49372e;
          font-size: 14px;
        }

        .edit-beautician-field input:focus,
        .edit-beautician-field select:focus {
          border-color: #a77b45;
          box-shadow: 0 0 0 3px rgba(167, 123, 69, 0.12);
        }

        .edit-beautician-error {
          margin-bottom: 18px;
          padding: 12px;
          background: #f8e5e2;
          color: #a33d32;
          border-radius: 7px;
          font-size: 14px;
        }

        .edit-beautician-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 25px;
        }

        .edit-beautician-cancel,
        .edit-beautician-save {
          padding: 12px 20px;
          border: none;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }

        .edit-beautician-cancel {
          background: #eee3d5;
          color: #654c36;
        }

        .edit-beautician-save {
          background: #a77b45;
          color: white;
        }

        .edit-beautician-save:hover {
          background: #79552f;
        }

        @media (max-width: 600px) {
          .edit-beautician-page {
            padding: 15px;
          }

          .edit-beautician-header h2 {
            font-size: 23px;
          }

          .edit-beautician-card {
            padding: 18px;
          }

          .edit-beautician-form {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .edit-beautician-buttons {
            flex-direction: column-reverse;
          }

          .edit-beautician-cancel,
          .edit-beautician-save {
            text-align: center;
          }
        }
      `}</style>

      <div className="edit-beautician-page">
        <div className="edit-beautician-container">
          <div className="edit-beautician-header">
            <div>
              <h2>Edit Beautician</h2>
              <p>Update beautician profile and professional details.</p>
            </div>

            <Link
              to="/admin/beauticians"
              className="edit-beautician-back"
            >
              Back to Beauticians
            </Link>
          </div>

          <div className="edit-beautician-card">
            <h3>Beautician Information</h3>

            {error && (
              <div className="edit-beautician-error">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="edit-beautician-form">
                <div className="edit-beautician-field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div className="edit-beautician-field">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="edit-beautician-field">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div className="edit-beautician-field">
                  <label>Specialization *</label>
                  <select
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    required
                  >
                    <option value="">Select Specialization</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Skin Care">Skin Care</option>
                    <option value="Nail Art">Nail Art</option>
                    <option value="Mehndi">Mehndi</option>
                  </select>
                </div>

                <div className="edit-beautician-field">
                  <label>Experience *</label>
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="Example: 3 Years"
                    required
                  />
                </div>

                <div className="edit-beautician-field">
                  <label>Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="edit-beautician-buttons">
                <Link
                  to="/admin/beauticians"
                  className="edit-beautician-cancel"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="edit-beautician-save"
                >
                  Update Beautician
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
