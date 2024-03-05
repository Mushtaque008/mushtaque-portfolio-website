import fiverrlogo from "../../assets/images/fiverr.png";
import upworklogo from "../../assets/images/upwork.png";
import nexusberrylogo from "../../assets/images/nexuslogo.jpeg";
import tenpearlslogo from "../../assets/images/tenpearls.png";
import "./experience.css";
import { Link } from "react-router-dom";
function Experience() {
  return (
    <div className="experienceWrapper">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h1>
            {" "}
            <u> My Expereince </u>{" "}
          </h1>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="logoWrapper">
            <Link
              to="https://www.fiverr.com/mushii_ahmed?up_rollout=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fiverrlogo} />
            </Link>
            {/* <img src={fiverrlogo} alt="" />  */}
            FIVERR
            <h3> FRONT-END DEVELOPER </h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            cumque accusamus repudiandae quis facilis ducimus quia ipsam ullam
            dolore deleniti dicta eligendi ut, ex alias expedita labore beatae
            sequi voluptate?
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="logoWrapper">
            <Link
              to="https://www.upwork.com/freelancers/~017e9b29bd49c1e215"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={upworklogo} />
            </Link>
            UPWORK
            <h3> FRONT-END DEVELOPER </h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            cumque accusamus repudiandae quis facilis ducimus quia ipsam ullam
            dolore deleniti dicta eligendi ut, ex alias expedita labore beatae
            sequi voluptate?
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="logoWrapper">
              <Link
                to="https://www.nexusberry.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nexusberrylogo} />
              </Link>
              NEXUSBERRY
              <h3> FRONT-END DEVELOPER </h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              cumque accusamus repudiandae quis facilis ducimus quia ipsam ullam
              dolore deleniti dicta eligendi ut, ex alias expedita labore beatae
              sequi voluptate?
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="logoWrapper">
              <Link
                to="https://10pearls.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tenpearlslogo} />
              </Link>
              10 Pearls
              <h3> FRONT-END DEVELOPER </h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              cumque accusamus repudiandae quis facilis ducimus quia ipsam ullam
              dolore deleniti dicta eligendi ut, ex alias expedita labore beatae
              sequi voluptate?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
