
import kitchen from "../../assets/images/kitchen.jpg"
import bathroom from "../../assets/images/bathroom.jpg"
import babiesroom from "../../assets/images/babiesroom.jpg"
import office from "../../assets/images/office2.jpg"
import diningroom from "../../assets/images/diningroom.jpg"
import gameroom from "../../assets/images/gameroom.jpg"

const Home = () => {
    return (
        <div id="main">
            <hr />

            <div className="scroll-container">
                <img src={kitchen} style={{ width: "20%", border: "5px solid deeppink" }} className="w3-circle" alt="Kitchen image" />
                <img src={babiesroom} style={{ width: "20%", border: "5px solid deeppink" }} alt="Babiesroom image" />
                <img src={bathroom} style={{ width: "20%", border: "5px solid deeppink" }} className="w3-circle" alt="Bathroom image" />
                <img src={gameroom} style={{ width: "20%", border: "5px solid deeppink" }} alt="Gameroom image" />
                <img src={diningroom} style={{ width: "20%", border: "5px solid deeppink" }} className="w3-circle" alt="Dining Room image" />
                <img src={office} style={{ width: "20%", border: "5px solid deeppink" }} alt="office image" />
            </div>
            <br />
            <br />
            <p className="w3-xlarge"><b><i>Sparkling clean was founded in 2016. We are family owned and operated. We are located in the East Valley. We are here for all of your cleaning needs. Please give us a call we would be glad to help out in any way we can. 100% satisfaction guaranteed. Quality customer service with top of the line cleaning specialists available.</i></b> </p>
            <ul>
                <li className="homeUl"><b><i>Same day or next day services</i></b></li>
                <li className="homeUl"><b><i>Competitive pricing</i></b></li>
                <li className="homeUl"><b><i>Monthly discounts and speacial offers</i></b></li>
                <li className="homeUl"><b><i>Excellent customer service</i></b></li>
                <li className="homeUl"><b><i>Clean up after a large event/parties</i></b></li>
                <li className="homeUl"><b><i>Weekly/monthly services</i></b></li>
                <li className="homeUl"><b><i>AirBNB clean ups</i></b></li>
                <li className="homeUl"><b><i>Real estate move-in/move-out</i></b></li>
                <li className="homeUl"><b><i>Construction clean ups</i></b></li>
                <li className="homeUl"><b><i>Yearly spring cleaning</i></b></li>
                <li className="homeUl"><b><i>Carpet cleaning</i></b></li>
                <li className="homeUl"><b><i>Garge cleaning</i></b></li>
                <li className="homeUl"><b><i>Car cleaning/detailing</i></b></li>
                <li className="homeUl"><b><i>Laundry services</i></b></li>
                <li className="homeUl"><b><i>Trash Removal</i></b></li>
            </ul>
        </div>
    )
}

export default Home