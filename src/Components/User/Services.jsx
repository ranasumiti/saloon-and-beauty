import { AllServices } from "../../services/AdminService";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Services() {
  const [services, setServices] = useState([]);

const fetchServices = async () => {
  try {
    const res = await AllServices();

    console.log("All Services:", res.data);

    if (res.data.success) {
      setServices(res.data.data);
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchServices();
}, []);
  return (
    <>
      <section className="glow-services" id="services">

        <div className="glow-services-heading">
          <p className="glow-eyebrow">
            <span></span> OUR SERVICES <span></span>
          </p>

          <h1>
            Beauty Services
            <span>For Your Glow</span>
          </h1>

          <p className="glow-intro">
            We offer a wide range of professional beauty services
            designed to enhance your natural beauty and give you
            a relaxing, rejuvenating experience.
          </p>
        </div>

<div className="glow-services-grid">

  {services.filter(item => item.status && !item.isDelete).map((item) => (

    <article className="glow-service-card" key={item._id}>

      <div className="glow-service-image">
        <img
          src={item.image}
          alt={item.serviceName}
          loading="lazy"
        />
      </div>

      <div className="glow-service-icon">
        ✨
      </div>

      <div className="glow-service-content">

        <h2>{item.serviceName}</h2>

        <p>{item.description}</p>

        <span className="glow-gold-line"></span>

        <strong className="glow-price">
          ₹{Number(item.price).toLocaleString("en-IN")}
        </strong>

        <small>Starting From</small>

        <Link
          to={`/servicedetail/${item._id}`}
          className="glow-book-button"
        >
          Explore Service <span>→</span>
        </Link>

      </div>

    </article>

  ))}

</div>
       

        <div className="glow-services-decoration">
          <span></span> ✧ <span></span>
        </div>

      </section>

      <style>{`
        .glow-services {
          --cream: #F8F3EB;
          --gold: #B89462;
          --brown: #574438;
          --muted: #817060;

          padding: 75px 5% 55px;
          background: linear-gradient(135deg, #F8F3EB, #F4E9D8);
          color: var(--brown);
          font-family: Arial, sans-serif;
        }

        .glow-services *,
        .glow-services *::before,
        .glow-services *::after {
          box-sizing: border-box;
        }

        .glow-services-heading {
          max-width: 720px;
          margin: 0 auto 38px;
          text-align: center;
        }

        .glow-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          color: #A17A48;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 3px;
        }

        .glow-eyebrow span {
          width: 48px;
          height: 1px;
          background: var(--gold);
        }

        .glow-services-heading h1 {
          font-family: Georgia, serif;
          font-size: clamp(42px, 5vw, 66px);
          font-weight: 500;
          line-height: 1.12;
          margin: 0;
        }

        .glow-services-heading h1 span {
          display: block;
          margin-top: 5px;
          color: var(--gold);
          font-size: clamp(34px, 4vw, 52px);
          font-style: italic;
          font-weight: 400;
        }

        .glow-intro {
          max-width: 610px;
          margin: 22px auto 0;
          color: #6D5B49;
          font-size: 16px;
          line-height: 1.9;
        }

        .glow-services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          max-width: 1400px;
          margin: auto;
        }

        .glow-service-card {
          min-width: 0;
          padding: 13px 13px 24px;
          text-align: center;
          border: 1px solid white;
          border-radius: 18px;
          background: linear-gradient(150deg, #FFFAF3, #F7EDDF);
          box-shadow: 0 8px 26px rgba(87,68,56,.07);
          transition: .3s;
        }

        .glow-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 32px rgba(87,68,56,.12);
        }

        .glow-service-image {
          height: 220px;
          overflow: hidden;
          border-radius: 12px;
        }

        .glow-service-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: .5s;
        }

        .glow-service-card:hover img {
          transform: scale(1.05);
        }

        .glow-service-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          margin: -29px auto 8px;
          position: relative;
          border: 4px solid #FFFAF3;
          border-radius: 50%;
          background: #EDE1D0;
          color: var(--gold);
          font-size: 25px;
        }

        .glow-service-content h2 {
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 500;
          line-height: 1.4;
          margin: 9px 0 12px;
        }

        .glow-service-content > p {
          min-height: 74px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .glow-gold-line {
          display: block;
          width: 45px;
          height: 1px;
          margin: 14px auto;
          background: var(--gold);
        }

        .glow-price {
          display: block;
          font-family: Georgia, serif;
          font-size: 29px;
          font-weight: 500;
        }

        .glow-service-content small {
          display: block;
          margin-top: 5px;
          color: #887967;
          font-size: 12px;
        }

        .glow-book-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          width: 85%;
          min-height: 46px;
          margin: 20px auto 0;
          padding: 0 12px;
          border-radius: 5px;
          background: var(--gold);
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: .25s;
        }

        .glow-book-button:hover {
          background: #967348;
          color: white;
          transform: translateY(-2px);
        }

        .glow-book-button span {
          font-size: 19px;
        }

        .glow-services-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          margin: 38px auto 0;
          color: var(--gold);
          font-size: 23px;
        }

        .glow-services-decoration span {
          width: 80px;
          height: 1px;
          background: var(--gold);
        }

        @media (max-width: 1100px) {
          .glow-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: 760px;
            gap: 24px;
          }

          .glow-service-image {
            height: 250px;
          }
        }

        @media (max-width: 550px) {
          .glow-services {
            padding: 48px 5% 38px;
          }

          .glow-services-grid {
            grid-template-columns: 1fr;
            max-width: 380px;
            gap: 22px;
          }

          .glow-service-image {
            height: 235px;
          }

          .glow-service-content > p {
            min-height: auto;
          }

          .glow-book-button {
            max-width: 260px;
          }
        }
      `}</style>
    </>
  );
}
