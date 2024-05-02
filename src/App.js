import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCupHotFill } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import Franchise from './pages/Franchise';
// import { MdEmail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "./utils//ajithsir/Frame 152.png";
// import { BiSolidContact } from "react-icons/bi";

function App() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e6ce2fe1-c5d3-44ba-845a-c227d2d2932c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="App">
      <Navbar
        expand="lg"
        className="fixed-top bg-black text-white  shadow"
        id="navbar"
      >
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className=" d-flex align-items-center navbar-brand fs-4 fw-bold "
            >
              <img
                src={logo}
                alt=""
                width="70px"
                height="70px"
                className="me-2 logo"
              />
              <h2 className="text-white fw-bold me-2">Chai</h2>
              <h2 className="fw-bold" id="FontYellow">
                Max
              </h2>
              {/* <BsCupHotFill className=" me-2 fs-2" /> Chai Max */}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="BgYellow" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  justify-content-end w-100 fw-bold">
              <Nav.Link
                href="/"
                className=" active  fs-5  mt-md-2 mt-0"
                id="navHover"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/franchise"
                className="ms-0 ms-md-4 fs-5  mt-md-2 mt-0"
                id="navHover"
              >
                Franchise
              </Nav.Link>
              <Nav.Link
                href="/about"
                className="ms-0 ms-md-4 fs-5  mt-md-2 mt-0"
                id="navHover"
              >
                About
              </Nav.Link>
              <Nav.Link
                href="/menu"
                className=" fs-5 ms-0 ms-md-4 mt-md-2 mt-0"
                id="navHover"
              >
                Menu
              </Nav.Link>
              <Nav.Link
                href="/terms"
                className=" fs-5 ms-0 ms-md-4 mt-md-2 mt-0"
                id="navHover"
              >
                Terms
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="ms-0 ms-md-4 fs-5 rounded d-flex align-items-center justify-content-center"
              >
                <button class="btngooey">
                  <span class="btn-txt">Contact</span>
                  <span class="btn-goo-box"></span>
                  <span class="btn-goo-box"></span>
                  <span class="btn-goo-box"></span>
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="filter-svg"
                >
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        stdDeviation="10"
                        result="blur"
                      />
                      <feColorMatrix
                        in="blur"
                        type="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                        result="goo"
                      />
                      <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                  </defs>
                </svg>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <div className="dropsTop">
        <div class="drops">
          <div class="drop1"></div>
          <div class="drop2"></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="liquid">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="liquid"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="dropsTop2">
        <div class="drops2">
          <div class="drop12"></div>
          <div class="drop22"></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="liquid">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="liquid"
              />
            </filter>
          </defs>
        </svg>
      </div>  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <footer className="bg-black text-light pt-5 shadow">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-sm-6 col-md-3  mt-4 mt-md-0 mt-sm-0 ">
              <h1
                className=" d-flex align-items-center fs-4 fw-bold"
                id="FontYellow"
              >
                <BsCupHotFill className="me-2" />
                Chai Max
              </h1>
              <p className=" text-start">
                Experience the magic of Chai Max – where tea lovers unite and
                memories are made.
              </p>
              <div className="text-start">
                <SocialIcon
                  url="https://whatsapp.com"
                  className="me-2 social"
                />
                <SocialIcon
                  url="https://www.instagram.com/chaimax_official/
                  "
                  className="me-2 social"
                />
                <SocialIcon
                  url="https://www.facebook.com/people/Chaimax/61559092442130/"
                  className="me-2 social"
                />
                <SocialIcon
                  url="https://www.youtube.com/channel/UCCL31z0J_xs25epUAXlY2-g"
                  className="me-2 social"
                />
              </div>
            </div>
            <div className="col-12 col-sm-6   col-md-3  mt-4 mt-md-0 mt-sm-0 ">
              <h1
                className="fs-4 fw-bold d-flex align-items-start justify-content-start mb-3"
                id="FontYellow"
              >
                Quick Links
              </h1>
              <Link to="/about" className="text-decoration-none text-light ">
                <h6 className="d-flex align-items-start justify-content-start mb-3">
                  About
                </h6>
              </Link>
              <Link to="/franchise" className="text-decoration-none text-light">
                <h6 className="d-flex align-items-start justify-content-start mb-3">
                  Franchise
                </h6>
              </Link>
              <Link to="/menu" className="text-decoration-none text-light">
                <h6 className="d-flex align-items-start justify-content-start mb-3">
                  Menu
                </h6>
              </Link>
              <Link to="/contact" className=" text-decoration-none text-light">
                <h6 className="d-flex align-items-start justify-content-start ">
                  Contact
                </h6>
              </Link>
            </div>
            <div className="col-12 col-sm-6   col-md-3  mt-4 mt-md-0 mt-sm-0 mt-sm-4">
              <Link to="/terms" className="text-decoration-none ">
                <h1
                  className="fs-4 fw-bold d-flex align-items-start justify-content-start mb-3"
                  id="FontYellow"
                >
                  Terms & Conditions
                </h1>
              </Link>
              <Link to="/terms" className="text-decoration-none text-light ">
                <h6 className="d-flex align-items-start justify-content-start mb-3">
                  Return & Refund Policy
                </h6>
              </Link>

              <Link to="/terms" className=" text-decoration-none text-light">
                <h6 className="d-flex align-items-start justify-content-start ">
                  Cancellation
                </h6>
              </Link>

              <Link to="/terms" className=" text-decoration-none text-light">
                <h6 className="d-flex align-items-start justify-content-start ">
                  Payment Policy
                </h6>
              </Link>
              <Link to="/terms" className=" text-decoration-none text-light">
                <h6 className="d-flex align-items-start justify-content-start ">
                  Privacy Policy
                </h6>
              </Link>
              <Link to="/terms" className=" text-decoration-none text-light">
                <h6 className="d-flex align-items-start justify-content-start ">
                  Disclaimer
                </h6>
              </Link>
            </div>
            {/* <div className="col-12 col-sm-6  col-md-3 mt-4 mt-md-0 mt-sm-4">
              <h1
                className="fs-4 fw-bold d-flex align-items-start justify-content-start"
                id="FontYellow"
              >
                Reach Us
              </h1>
              <Link
                to="mailto:chaimaxteam@gmail.com"
                className="text-decoration-none mb-2 text-light d-flex align-items-start justify-content-start"
              >
                <MdEmail className="me-2 fs-5 fs-md-2" />
                <h6>Email: chaimaxteam@gmail.com</h6>
              </Link>
              <Link
                to="https://www.google.com/maps/search/?api=1&query=2/3+Uchaparambumedu+Rd,+Iyer+Bungalow,+Madurai,+Tamil+Nadu+625017"
                className="text-decoration-none text-light mb-2 d-flex align-items-start justify-content-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLocationDot className="fs-5 fs-md-2" />
                <h6>
                  2/3 Uchaparambumedu Rd, Iyer Bungalow, Madurai,
                  <br /> Tamil Nadu 625017
                </h6>
              </Link>
              <Link
                to="tel:+918675651401"
                className="text-decoration-none mb-2 text-light d-flex align-items-start justify-content-start"
              >
                <FaPhoneAlt className="me-2 fs-5 fs-md-2" />
                <h6>Phone: +91 8675651401</h6>
              </Link>
              <Link
                to="tel:+917806936906"
                className="text-decoration-none mb-2 text-light d-flex align-items-start justify-content-start"
              >
                <FaPhoneAlt className="me-2 fs-5 fs-md-2" />
                <h6>Phone: +91 7806936906</h6>
              </Link>
            </div> */}
            <div className="col-12 col-sm-6  col-md-3 mt-4 mt-md-0 mt-sm-0">
              <h1
                className="fs-4 fw-bold  d-flex align-items-center justify-content-center"
                id="FontYellow"
              >
                Get In Touch
              </h1>
              <Form onSubmit={onSubmit} className="m-3 m-sm-0">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Control as="textarea" placeholder="Enter message" />
                </Form.Group>
                <Button
                  type="submit"
                  className="fw-bold"
                  id="BgYellow"
                  style={{ border: "none" }}
                >
                  Submit
                </Button>
              </Form>
              <span className="pt-3">{result}</span>
            </div>
          </div>
        </div>
        <section>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </section>
      </footer>
    </div>
  );
}

export default App;
