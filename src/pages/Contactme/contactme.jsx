import "./contact.css";
// import facebook from "../../assets/images/facebook.png";
// import Insta from "../../assets/images/insta.jpeg";
// import whatsapp from "../../assets/images/whatsapp.jpeg";
// import youtube from "../../assets/images/youtube.jpeg";
// import github from "../../assets/images/github.png";
// import linkedin from "../../assets/images/linkedin.png";
// import twitter from "../../assets/images/twitter.jpeg";

// import fiverr from "../../assets/images/fiverr.png";
// import upwork from "../../assets/images/upwork.png";

import whatsapp from "../../assets/images/whatsapp.jpeg";
import gmail from "../../assets/images/gmail.png";

function Contact() {
  return (
    <div className="contactWrapper">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h1> Contact Me </h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <img className="img-fluid" src={whatsapp} alt="" />{" "}
          <b> +923003672915</b>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <img className="img-fluid" src={gmail} alt="" />{" "}
          mushtaque008@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Contact;
