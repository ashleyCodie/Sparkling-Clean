import React from "react"
import cleaning from "../../assets/images/CLEANING.png"
import cleaning2 from "../../assets/images/cleaning2.jpg"
import cleaning3 from "../../assets/images/cleaning3.jpg"

const Team = () => {
  return (
    <div id="main">
      <div className="w3-container" id="designers" style={{ margintop: "75px" }}>
        <hr />
        <h1 className="w3-xxxlarge "><b><i><i className="bi bi-stars"></i>The Team<i className="bi bi-stars"></i></i></b></h1>

        <p className="w3-xlarge "><b><i>Our cleaners are thoughtfully chosen</i></b>:</p>
      </div>


      {/* <!-- The Team --> */}
      <div className="w3-row-padding">
        <div className="w3-col m4 w3-margin-bottom">
          <div className="w3-white">
            <img src={cleaning} alt="ashley" style={{ width: "100%", border: "10px solid deeppink" }} />
            <div className="w3-container team">
              <h3 className="w3-text-white"><i>Ashley Brooks</i></h3>
              <p className="w3-opacity w3-text-white"><i>CEO/Founder and Cleaner</i></p>
              <p className="w3-text-white"><i>10+ years in the cleaning business, fingerprint clearance card, dedicated to her company's work and clients.</i></p>
            </div>
          </div>
        </div>

        <div className="w3-col m4 w3-margin-bottom ">
          <div className="w3-white">
            <img src={cleaning3} alt="liliana" style={{ width: "100%", border: "10px solid deeppink" }} />
            <div className="w3-container team">
              <h3 className="w3-text-white"><i>Liliana Cargill</i></h3>
              <p className="w3-opacity w3-text-white"><i>Cleaner</i></p>
              <p className="w3-text-white"><i>Part time college student with 3+ years experience, fingerprint clearance card, clean background check, dedicateded to quality customer experience.</i></p>
            </div>
          </div>
        </div>

        <div className="w3-col m4 w3-margin-bottom">
          <div className="w3-white">
            <img src={cleaning2} alt="maddisan" style={{ width: "100%", border: "10px solid deeppink" }} />
            <div className="w3-container team">
              <h3 className="w3-text-white"><i>Maddisan Powell</i></h3>
              <p className="w3-opacity w3-text-white"><i>Cleaner</i></p>
              <p className="w3-text-white"><i>Part time college student with 5+ years experience, fingerprint clearance card, clean background check, dedicateded to quality customer experience.</i></p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="w3-xxlarge"><i><b><i className="bi bi-stars"></i>The best team in the world.<i className="bi bi-stars"></i></b></i></h1>
      <p className="w3-xlarge"><i><b>We are a family ran business committed to building a perfessional relationship with our customers. We have been in the business for over 10 years. We are involved in our community and enjoy knowing our neighbors. Our team in thuroughly trained and know their responsibilities while on the job. We are comminted to quality customer service and want our customers to be satisfied with our hard work.
      </b></i></p>
    </div>




  )
}

export default Team