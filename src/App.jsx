import Header from "./components/Header/header";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/aboutme";
import Contact from "./pages/Contactme/contactme";
import Experience from "./pages/Experience/experience";
import Services from "./pages/Services/Services";
import Footer from "./components/Footer/footer";
import Projects from "./pages/Projects/projects";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/AboutMe" element={<AboutMe />}>
            {" "}
          </Route>
          <Route path="/Contactme" element={<Contact />}>
            {" "}
          </Route>
          <Route path="Experience/" element={<Experience />}>
            {" "}
          </Route>
          <Route path="/Services" element={<Services />}>
            {" "}
          </Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
