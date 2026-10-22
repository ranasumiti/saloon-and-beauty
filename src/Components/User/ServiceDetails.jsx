import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
export default function ServiceDetails(){

  const {id}=useParams();
  return(
    <>
{id==="1"&&(
   <div className="glow-services-grid">

          {/* Facial Treatments */}
          <article className="glow-service-card">
            <div className="glow-service-image">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=85"
                alt="Professional facial treatment"
                loading="lazy"
              />
            </div>

            <div className="glow-service-icon">✧</div>

            <div className="glow-service-content">
              <h2>Facial Treatments</h2>
              <p>
                Deep cleansing, hydration and rejuvenation
                for radiant skin.
              </p>

              <span className="glow-gold-line"></span>

              <strong className="glow-price">₹1,200</strong>
              <small>Starting From</small>

              <Link
                to="/bokappointment"
               className="glow-book-button"
>
               
               
               
              </Link>
            </div>
          </article>

          

        </div>
)}
{id==="2"&&(
  <article className="glow-service-card">
   <div className="glow-service-image">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=700&q=85"
                alt="Professional hair styling"
                loading="lazy"
              />
            </div>

            <div className="glow-service-icon">✧</div>

            <div className="glow-service-content">
              <h2>Hair Services</h2>
              <p>
                Trendy cuts, coloring and professional
                hair care.
              </p>

              <span className="glow-gold-line"></span>

              <strong className="glow-price">₹800</strong>
              <small>Starting From</small>

              <Link
                 to={`/bookappointment/${id}`}
                className="glow-book-button"
                
              >
             
              </Link>
            </div>
            </article>
)}

 
    </>
  )
}