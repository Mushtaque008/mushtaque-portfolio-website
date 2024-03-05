import "./Home.css";
function Body() {
  return (
    <div className="aboutWrapper">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="image">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/mushii1.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img
                    src="/mushii2.jpg"
                    className="img-fluid"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/mushii3.jpg"
                    className="img-fluid"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/mushii4.jpg"
                    className="img-fluid"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/mushii5.jpg"
                    className="img-fluid"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/mern1.png"
                    className="img-fluid"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="/mern2.png"
                    className="img-fluid"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="content">
            <h4> Hi, I am </h4>
            <h1> Mushtaque Ahmed </h1>
            <h3> MERN Stack Developer </h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            maxime iusto sequi, sint autem quisquam atque excepturi. Amet nobis
            eos repudiandae in aliquid! Consectetur odit incidunt, non nobis
            dolorum animi? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Sequi, quia aut. Eveniet vitae debitis at, dignissimos ipsa
            aut, cupiditate provident nobis fugit et magnam soluta minima
            corrupti est sit voluptate! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quis quia consequatur eaque nulla accusantium
            officia minima magnam esse beatae nam cum, nobis recusandae
            perferendis molestias iure possimus sunt repudiandae optio? Nisi
            velit nulla, eos neque consequuntur, culpa obcaecati ab porro
            deserunt numquam architecto corrupti optio assumenda officiis
            laudantium vel nesciunt provident natus? Impedit fugit inventore
            architecto maxime culpa. Ullam, ducimus? Libero sequi laboriosam
            dignissimos non, voluptate vel voluptatibus reiciendis provident
            aspernatur amet saepe reprehenderit veritatis ipsam enim,
            repellendus laborum sapiente nobis, neque qui dolore nemo corporis
            optio dolorum! Dolor, provident!{" "}
            <a href="#">
              <button type="button" class="btn btn-outline-danger">
                Details
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Body;
