import "./Services.css";
function Contactme() {
  return (
    <div className="servicesWrapper">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h1>
            {" "}
            <u>Services</u>
          </h1>
          <h4> WE OFFER THE FOLLOWING SERVICES </h4>
          <div className="listOfServices">
            <h5>
              {" "}
              <ul>
                <li> WEB development</li>
                <li> MERN development </li>
                <li> MEAN development</li>
                <li> Data science </li>
                <li> Web services </li>
              </ul>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
