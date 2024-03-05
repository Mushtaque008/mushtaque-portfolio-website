import "./footer.css";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/facebook.png";
import Insta from "../../assets/images/insta.jpeg";
import whatsapp from "../../assets/images/whatsapp.jpeg";
import youtube from "../../assets/images/youtube.jpeg";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.jpeg";

import fiverr from "../../assets/images/fiverr.png";
import upwork from "../../assets/images/upwork.png";
import { useState } from "react";

function Footer() {
  let [likeCounter, setLikeCounter] = useState(0);
  let [dislikeCounter, setdislikeCounter] = useState(0);
  let [heartCounter, setHeartCounter] = useState(0);
  function likeCount() {
    setLikeCounter(likeCounter + 1);
  }

  function dislikeCount() {
    setdislikeCounter(dislikeCounter + 1);
  }

  function heartCount() {
    setHeartCounter(heartCounter + 1);
  }

  return (
    <div className="footerWrapper" align="center">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <hr />
          <div className="heading1">
            <h4> For further details, visit my social media accounts </h4>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="socialMediaLogoWrapper">
            <img className="img-fluid" src={facebook} alt="" />
            <img className="img-fluid" src={Insta} alt="" />

            <img className="img-fluid" src={twitter} alt="" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="heading1">
            <h4> You can visit my YOUTUBE CHANNEL </h4>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="socialMediaLogoWrapper">
            <img className="img-fluid" src={youtube} alt="" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h4 className="heading1">
            {" "}
            Links to my LINKED IN and GITHUB accounts{" "}
          </h4>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="socialMediaLogoWrapper" align="center">
            <Link
              to="https://github.com/settings/profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-fluid" src={github} />
            </Link>

            <Link
              to="https://www.linkedin.com/in/mushtaque-ahmed-97243193/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-fluid" src={linkedin} />
            </Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h4 className="heading1"> Visit my Fiverr and Upwork accounts </h4>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="socialMediaLogoWrapper">
            <Link
              to="https://www.fiverr.com/mushii_ahmed?up_rollout=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-fluid" src={fiverr} />
            </Link>

            <Link
              to="https://www.upwork.com/freelancers/~017e9b29bd49c1e215"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-fluid" src={upwork} />
            </Link>
          </div>
        </div>
      </div>
      <div className="feedback">
        <div className="row">
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <button onClick={likeCount}>
              <img src="/likeicon.png" alt="" />
            </button>{" "}
            {likeCounter}{" "}
            <button onClick={dislikeCount}>
              <img src="/dislikeicon.png" alt="" />
            </button>{" "}
            {dislikeCounter}{" "}
            <button onClick={heartCount}>
              <img src="/hearticon.png" alt="" />
            </button>{" "}
            {heartCounter}
          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <h4> GIVE YOUR FEEDBACK </h4>
          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div className="form-floating">
              <textarea
                rows="4"
                cols="50"
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
            </div>
          </div>
          <div className="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
            <button type="button" class="btn btn-info">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
