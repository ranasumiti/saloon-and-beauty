import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("true");
  const [image, setImage] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const services = JSON.parse(
      localStorage.getItem("services") || "[]"
    );

    const service = services.find(
      (item) => String(item.id) === String(id)
    );

    if (service) {
      setName(service.name || "");
      setCategory(service.category || "");
      setPrice(service.price ?? "");
      setDuration(service.duration || "");
      setDescription(service.description || "");
      setStatus(service.status === true ? "true" : "false");
      setImage(service.image || "");
    } else {
      toast.error("Service not found!");
    }

    setLoading(false);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !category || price === "" || !duration.trim()) {
      toast.error("Please fill all required fields.");
      return;
    }

    const services = JSON.parse(
      localStorage.getItem("services") || "[]"
    );

    const serviceExists = services.some(
      (item) => String(item.id) === String(id)
    );

    if (!serviceExists) {
      toast.error("Service not found!");
      return;
    }

    const updatedServices = services.map((item) => {
      if (String(item.id) === String(id)) {
        return {
          ...item,
          name: name.trim(),
          category,
          price: Number(price),
          duration: duration.trim(),
          description: description.trim(),
          status: status === "true",
          image: newImage
            ? URL.createObjectURL(newImage)
            : image,
        };
      }

      return item;
    });

    localStorage.setItem(
      "services",
      JSON.stringify(updatedServices)
    );

    toast.success("Service updated successfully!");

    setTimeout(() => {
      navigate("/admin/services");
    }, 800);
  };

  if (loading) {
    return <p>Loading service...</p>;
  }

  return (
    <div className="edit-service-page">
      <style>{`
        .edit-service-page {
          padding: 30px;
          background: #faf7f2;
          min-height: 100vh;
          color: #49372e;
        }

        .edit-service-card {
          max-width: 850px;
          margin: 0 auto;
          background: #fff;
          padding: 30px;
          border-radius: 14px;
          box-shadow: 0 5px 20px rgba(70, 45, 30, 0.08);
        }

        .edit-service-card h2 {
          margin: 0 0 8px;
          color: #654735;
          font-family: Georgia, serif;
        }

        .edit-service-subtitle {
          margin-bottom: 25px;
          color: #88796e;
          font-size: 14px;
        }

        .edit-service-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .edit-service-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .edit-service-field.full-width {
          grid-column: 1 / -1;
        }

        .edit-service-field label {
          font-size: 14px;
          font-weight: 600;
        }

        .edit-service-field input,
        .edit-service-field select,
        .edit-service-field textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 12px;
          border: 1px solid #e3d8cb;
          border-radius: 7px;
          outline: none;
          background: #fff;
          color: #49372e;
          font: inherit;
        }

        .edit-service-field input:focus,
        .edit-service-field select:focus,
        .edit-service-field textarea:focus {
          border-color: #ad895d;
        }

        .edit-service-field textarea {
          resize: vertical;
          min-height: 100px;
        }

        .edit-service-image {
          width: 120px;
          height: 100px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid #e3d8cb;
          margin-bottom: 8px;
        }

        .edit-service-actions {
          display: flex;
          gap: 12px;
          margin-top: 25px;
        }

        .edit-service-save,
        .edit-service-cancel {
          border: none;
          padding: 12px 22px;
          border-radius: 7px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .edit-service-save {
          background: #76543e;
          color: white;
        }

        .edit-service-save:hover {
          background: #5d4030;
        }

        .edit-service-cancel {
          background: #eee6dc;
          color: #654735;
        }

        @media (max-width: 600px) {
          .edit-service-page {
            padding: 15px;
          }

          .edit-service-card {
            padding: 20px;
          }

          .edit-service-grid {
            grid-template-columns: 1fr;
          }

          .edit-service-field.full-width {
            grid-column: auto;
          }
        }
      `}</style>

      <div className="edit-service-card">
        <h2>Edit Service</h2>
        <p className="edit-service-subtitle">
          Update the service details below.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="edit-service-grid">
            <div className="edit-service-field">
              <label>Service Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter service name"
                required
              />
            </div>

            <div className="edit-service-field">
              <label>Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select category</option>
                <option value="Skin Care">Skin Care</option>
                <option value="Hair Care">Hair Care</option>
                <option value="Makeup">Makeup</option>
                <option value="Nail Care">Nail Care</option>
                <option value="Spa & Massage">Spa & Massage</option>
              </select>
            </div>

            <div className="edit-service-field">
              <label>Price (₹) *</label>
              <input
                type="number"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                required
              />
            </div>

            <div className="edit-service-field">
              <label>Duration *</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 45 minutes"
                required
              />
            </div>

            <div className="edit-service-field">
              <label>Status *</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>

            <div className="edit-service-field full-width">
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter service description"
              />
            </div>

            <div className="edit-service-field full-width">
              <label>Service Image</label>

              {newImage ? (
                <img
                  className="edit-service-image"
                  src={URL.createObjectURL(newImage)}
                  alt="New service preview"
                />
              ) : image ? (
                <img
                  className="edit-service-image"
                  src={image}
                  alt="Current service"
                />
              ) : (
                <p>No image selected</p>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setNewImage(e.target.files?.[0] || null)
                }
              />
            </div>
          </div>

          <div className="edit-service-actions">
            <button type="submit" className="edit-service-save">
              Save Changes
            </button>

            <button
              type="button"
              className="edit-service-cancel"
              onClick={() => navigate("/admin/services")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}