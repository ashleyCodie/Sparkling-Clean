import kitchen from "../../assets/images/kitchen.jpg"
import bedroom from "../../assets/images/bedroom.jpg"
import livingroom from "../../assets/images/livingroom.jpg"
import office from "../../assets/images/office2.jpg"
import diningroom from "../../assets/images/diningroom.jpg"
import childsroom from "../../assets/images/childsroom.jpg"
import gameroom from "../../assets/images/gameroom.jpg"
import bathroom from "../../assets/images/bathroom.jpg"
import babiesroom from "../../assets/images/babiesroom.jpg"
import bathroom2 from "../../assets/images/bathroom2.jpg"

const Photos = () => {
  return (
    <div id="main">
      <div>
        <div className="w3-container" style={{ margintop: "40px" }} id="showcase">
          <hr />
          <h1 className="w3-xxxlarge " id="showcase"><b><i><i className="bi bi-stars"></i>Photos<i className="bi bi-stars"></i></i></b></h1>

        </div>
      </div>
      <div className="w3-row-padding">
        <div className="w3-half">
          <img src={kitchen} style={{ width: "100%", border: "10px solid rgb(94, 2, 94)" }} alt="Kitchen image" />
          <img src={bathroom2} style={{ width: "100%", border: "10px solid rgb(94, 2, 94)" }} alt="Bathroom image" />
          <img src={livingroom} style={{ width: "100%", border: "10px solid rgb(94, 2, 94)" }} alt="Living room image" />
          <img src={bedroom} style={{ width: "100%", border: "10px solid rgb(94, 2, 94)" }} alt="Bedroom image" />
          <img src={gameroom} style={{ width: "100%", border: "10px solid rgb(94, 2, 94)" }} alt="Gameroom image" />

        </div>

        <div className="w3-half">
          <img src={office} style={{ width: "100%", border: "10px solid rgb(94, 2, 94)" }} alt="Office image" />
          <img src={childsroom} style={{ width: "100%", border: "10px solid rgb(94, 2, 94)" }} alt="Childsroom image" />
          <img src={diningroom} style={{ width: "100%", border: "10px solid rgb(94, 2, 94)" }} alt="Dining room image" />
          <img src={babiesroom} style={{ width: "100%", border: "10px solid rgb(94, 2, 94)" }} alt="Babiesroom image" />
          <img src={bathroom} style={{ width: "100%", border: "10px solid rgb(94, 2, 94)" }} alt="Bathroom image" />
        </div>
      </div>

      {/* <!-- Modal for full size images on click--> */}
      <div id="modal01" className="w3-modal w3-black" >
        <span className="w3-button w3-black w3-xxlarge w3-display-topright">x</span>
        <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
          <img id="img01" className="w3-image" />
          <p id="caption"></p>

        </div>
      </div>

    </div>
  )
}

export default Photos