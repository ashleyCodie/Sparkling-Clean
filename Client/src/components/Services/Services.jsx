import backyard from "../../assets/images/backyard.jpg"
import carpetcleaner from "../../assets/images/carpetcleaner.jpg"
import interiorcar from "../../assets/images/interiorcar.jpg"
import garage from "../../assets/images/garage.jpg"
import frontyard from "../../assets/images/frontyard.jpg"
import salesign from "../../assets/images/salesign.jpg"
import laundry from "../../assets/images/laundry.jpg"
import trash from "../../assets/images/trash.jpg"

const Services = () => {
    return (

       
        <div id="main">
             {/* <!-- Services --> */}
            <div className="w3-container" id="services" style={{ margintop: "75px" }}>
                <hr />
                <h1 className="w3-xxxlarge w2-margin-bottom"><b><i><i className="bi bi-stars"></i>Services<i className="bi bi-stars"></i></i></b></h1>

                <p className="w3-xlarge"><i><b>We are a Home Cleaning Service that focuses on what's best for your home cleaning needs!</b></i></p>
                <p className="w3-xlarge"><i><b>Sparkling Clean is dedicated to provided quality customer service. We offer a Basic home cleaning that includes you everyday cleaning services such as sweeping, mopping, dusting, vacuuming, etc. We also offer a Deep cleaning which is the same service as the basic cleaning but includes windows, blinds, doors, appliances, oven, etc. Please see our packages for a more detailed list of which services fits you best. 100% customer satisfaction guarenteed.
                    <br />
                    <br />

                </b></i></p>
            </div>

            {/* <!-- Additional Services --> */}
            <h1 className="w3-xxxlarge w2-margin-bottom"><b><i><i className="bi bi-stars"></i>Additional Services<i className="bi bi-stars"></i></i></b></h1>
            <p className="w3-xlarge"><i><b>We have extended our services to include garage clean outs, yard clean ups, car cleaning/detailing, carpet cleeaning, large event clean ups, Real Estate Move-Ins/Move-Outs, AirBNB properties, and laundry services. Please call or message us to request pricing on these services.</b></i></p>
            <div className="scroll-containerSvc">
                <div className="containerImg">
                    <img src={backyard} style={{ width: "90%", border: "5px solid deeppink" }} className="w3-circle w3-hide-small" alt="backyard image" />
                    <div className="centered w3-hide-small"><b><i>Yard Clean Up</i></b></div>
                </div>
                <div className="containerImg">
                    <img src={frontyard} style={{ width: "90%", border: "5px solid deeppink" }} className="w3-circle w3-hide-small" alt="frontyard image" />
                    <div className="centered w3-hide-small"><b><i>AirBNB Properties</i></b></div>
                </div>
                <div className="containerImg">
                    <img src={carpetcleaner} style={{ width: "90%", border: "5px solid deeppink" }} className="w3-circle w3-hide-small" alt="carpet image" />
                    <div className="centered w3-hide-small"><b><i>Carpet Cleaning</i></b></div>
                </div>
                <div className="containerImg">
                    <img src={interiorcar} style={{ width: "90%", border: "5px solid deeppink" }} className="w3-circle w3-hide-small" alt="car image" />
                    <div className="centered w3-hide-small"><b><i>Car Detailing/Cleaning</i></b></div>
                </div>
                <div className="containerImg">
                    <img src={garage} style={{ width: "90%", border: "5px solid deeppink" }} className="w3-circle w3-hide-small" alt="garage image" />
                    <div className="centered w3-hide-small"><b><i>Garage Clean Outs</i></b></div>
                </div>
                <div className="containerImg">
                    <img src={salesign} style={{ width: "90%", border: "5px solid deeppink" }} className="w3-circle w3-hide-small" alt="salesign image" />
                    <div className="centered w3-hide-small"><b><i>Real Estate Move-In/Out</i></b></div>
                </div>
                <div className="containerImg">
                    <img src={laundry} style={{ width: "90%", border: "5px solid deeppink" }} className="w3-circle w3-hide-small" alt="laundry image" />
                    <div className="centered w3-hide-small"><b><i>Laundry Services</i></b></div>
                </div>
                <div className="containerImg">
                    <img src={trash} style={{ width: "90%", border: "5px solid deeppink" }} className="w3-circle w3-hide-small" alt="trash image" />
                    <div className="centered w3-hide-small"><b><i>Trash Removal</i></b></div>
                </div>
            </div>
            <br />

            {/* <!-- Services Areas --> */}
            <div className="w3-container" id="serviceArea" style={{ margintop: "75px" }}>
                <h1 className="w3-xxxlarge w2-margin-bottom"><b><i><i className="bi bi-stars"></i>Service Areas<i className="bi bi-stars"></i></i></b></h1>
                <p className="w3-xlarge"><i><b> Apache Junction, Mesa, Gilbert, Queen Creek, San Tan Valley, Chandler, Scottsdale, Guadalupe, Ahwatukee, and SE Phoenix.</b></i></p>
                <br />

            </div>

        </div>
    )
}

export default Services