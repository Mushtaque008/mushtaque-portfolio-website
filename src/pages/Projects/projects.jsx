import "./projects.css";
import { Link } from "react-router-dom";
function Project() {
  return (
    <div className="projectWrapper">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h1> I have done the following projects </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <Link
            to="https://mushtaque-ahmed-kfc-clone-app.vercel.app/"
            target="_blank"
          >
            https://mushtaque-ahmed-kfc-clone-app.vercel.app
          </Link>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <Link
            to="https://github.com/Mushtaque008/Mushtaque-Ahmed-kfcClone-app/"
            target="_blank"
          >
            https://github.com/Mushtaque008/Mushtaque-Ahmed-kfcClone-app
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          necessitatibus quaerat odit consequuntur nemo dolorem, fugiat a illum
          maxime excepturi asperiores illo, nulla vero corporis itaque.
          Voluptate esse voluptatum dolorum! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Sit, facilis! Sunt, quo! Quas sunt
          delectus accusantium ullam, ut facilis sed iure earum neque, sapiente
          tempora quae libero saepe sit suscipit? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Nam, voluptatum! Magnam, iusto eveniet
          alias at sit numquam accusamus cumque odio voluptates amet cupiditate,
          quidem qui voluptate nihil ea dolorem incidunt. Est vitae quam eius
          blanditiis architecto distinctio, aspernatur, explicabo, facere itaque
          deleniti placeat deserunt. Itaque, eius at! Eligendi placeat culpa
          itaque impedit modi maxime beatae eaque ipsam explicabo porro.
          Assumenda. Nisi suscipit quo provident totam aliquam quas,
          necessitatibus dolorem harum repellendus eius consequatur voluptatibus
          commodi, consectetur perferendis amet iste corrupti earum sequi
          laborum unde at exercitationem expedita? Laudantium, ipsa totam.
          Adipisci ab non officiis nostrum tempore facere sed. Vero, quos vel
          quis quidem labore provident ea, dignissimos libero quibusdam est
          aliquid totam! Quae, officiis voluptatum. Quae voluptatem obcaecati
          architecto laboriosam. Sint quas quia dolorem ipsum harum, alias
          itaque dicta numquam repellat eveniet reiciendis unde, reprehenderit
          eaque, cumque ex saepe quod eos. Illum exercitationem expedita minima,
          placeat excepturi dolores facere mollitia?
        </div>
      </div>
    </div>
  );
}

export default Project;
