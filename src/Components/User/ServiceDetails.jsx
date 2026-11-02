
import { useParams, Link } from "react-router-dom";
import services from "./ServiceData";

export default function ServiceDetails() {
  const { id } = useParams();

  const service = services.find(
    (item) => item.id === Number(id)
  );

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  return (
    <>
      <style>{`
        .detail-page {
          background: #faf6ef;
          min-height: 100vh;
          padding: 65px 7%;
          color: #382b20;
        }

        .detail-container {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 55px;
          align-items: center;
          background: #fffdf9;
          padding: 25px;
          border-radius: 18px;
          box-shadow: 0 10px 35px #49332212;
        }

        .detail-image {
          width: 100%;
          height: 470px;
          overflow: hidden;
          border-radius: 14px;
        }

        .detail-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .detail-content {
          padding: 25px;
        }

        .detail-label {
          color: #a77943;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .detail-content h1 {
          font-family: Georgia, serif;
          font-size: 39px;
          font-weight: 500;
          line-height: 1.3;
          margin: 18px 0;
          color: #382b20;
        }

        .detail-description {
          color: #81766c;
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 25px;
        }

        .detail-line {
          width: 65px;
          height: 2px;
          background: #b78143;
          margin: 25px 0;
        }

        .detail-price-label {
          display: block;
          color: #81766c;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .detail-price {
          color: #87531f;
          font-family: Georgia, serif;
          font-size: 30px;
          font-weight: 600;
        }

        .detail-book-btn {
          display: inline-block;
          margin-top: 30px;
          padding: 14px 32px;
          background: #b78143;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: .3s;
        }

        .detail-book-btn:hover {
          background: #382b20;
          transform: translateY(-2px);
        }

        .detail-back {
          display: inline-block;
          margin-top: 22px;
          color: #87531f;
          text-decoration: none;
          font-size: 13px;
        }

        @media(max-width: 800px) {
          .detail-page {
            padding: 35px 15px;
          }

          .detail-container {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 15px;
          }

          .detail-image {
            height: 330px;
          }

          .detail-content {
            padding: 15px;
          }

          .detail-content h1 {
            font-size: 31px;
          }
        }
          /* Smooth image animation */
.detail-image {
  overflow: hidden;
}

.detail-image img {
  transition: transform 0.6s ease;
}

.detail-image:hover img {
  transform: scale(1.06);
}

/* Premium Book Now button */
.detail-book-btn {
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(135, 91, 50, 0.12);
}

.detail-book-btn:hover {
  background: #382b20;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(135, 91, 50, 0.22);
}

        @media(max-width: 450px) {
          .detail-image {
            height: 250px;
          }
        }
      `}</style>

      <main className="detail-page">
        <div className="detail-container">

          <div className="detail-image">
            <img src={service.image} alt={service.name} />
          </div>

          <div className="detail-content">

            <span className="detail-label">
              Beauty & Glow Salon
            </span>

            <h1>{service.name}</h1>

            <p className="detail-description">
              {service.description}
            </p>

            {/* <div className="detail-line"></div> */}

            <span className="detail-price-label">
              Starting From
            </span>

            <div className="detail-price">
              ₹{service.price.toLocaleString("en-IN")}
            </div>

            <Link
              to="/book-appointment"
              state={{ service: service.name }}
              className="detail-book-btn"
            >
              Book Now →
            </Link>

            <br />

            <Link to="/services" className="detail-back">
              ← Back to Services
            </Link>

          </div>
        </div>
      </main>
    </>
  );
}
