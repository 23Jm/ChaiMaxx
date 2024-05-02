import React from "react";
import "./Contact.css";
import { Form } from "react-bootstrap";
// import ContactInfo from "../Components/ContactInfo";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { BsDoorOpenFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdLocationSearching } from "react-icons/md";
import { motion } from "framer-motion";
function Contact() {
  
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d8282182-bb44-4d42-9ecb-0f47f76382c3");

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
    <div className="contact-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-start">
          <motion.div
            initial={{ opacity: 0, x: "150px" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-light ms-5 fs-1 mt-5">Contact</h1>
          </motion.div>
        </div>
      </header>
      <div class="cont">
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <div class="drip"></div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="container-fluid pt-3  pb-5">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <h2 className="fs-1 mb-3  d-flex align-items-center justify-content-center">
                  Where To Find Us <MdLocationSearching className="ms-2" />
                </h2>
              </motion.div>
              <p className="mb-5 d-flex align-items-center justify-content-center flex-column">
                <Link
                  to="/"
                  className="mb-2 text-decoration-none text-black d-flex align-items-center justify-content-start"
                >
                  <MdEmail className="me-2 fs-5 fs-md-2" />
                  <h6>Email: ChaiMax@gmail.com</h6>
                </Link>
                <Link
                  to="/"
                  className="mb-2 text-decoration-none text-black d-flex align-items-start justify-content-start"
                >
                  <FaLocationDot className="me-0 fs-5 fs-md-2" />
                  <h6>
                    Address: 2/3 Uchaparambumedu <br /> Rd, Iyer Bungalow,
                    <br /> Madurai, Tamil Nadu 625017
                  </h6>
                </Link>
                <Link
                  to="/"
                  className="mb-2 text-decoration-none text-black d-flex align-items-start justify-content-start"
                >
                  <FaPhoneAlt className="me-2 fs-5 fs-md-2" />
                  <h6>Phone: +91 8675651401</h6>
                </Link>
                <Link
                  to="/"
                  className="text-decoration-none text-black d-flex align-items-start justify-content-start"
                >
                  <FaPhoneAlt className="me-2 fs-5 fs-md-2" />
                  <h6>Phone: +91 7806936906</h6>
                </Link>
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <h3 className=" d-flex align-items-center justify-content-center">
                  Opening Hours <BsDoorOpenFill className="ms-2" />
                </h3>
              </motion.div>
              <p className=" m-0">Mon - Fri: 9:00 - 17:00</p>
              <p>Sat - Sun: 10:00 - 15:00</p>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <Form onSubmit={onSubmit} className="form-bg">
              <Form.Group className="row mb-3">
                <div className="col-md-6 text-start">
                  <Form.Label htmlFor="first-name">First Name</Form.Label>
                  <Form.Control type="text" id="first-name" />
                </div>
                <div className="col-md-6 text-start">
                  <Form.Label htmlFor="last-name">Last Name</Form.Label>
                  <Form.Control type="text" id="last-name" />
                </div>
              </Form.Group>
              <Form.Group className="row mb-3">
                <div className="col-md-6 text-start">
                  <Form.Label htmlFor="email-address">Email Address</Form.Label>
                  <Form.Control type="email" id="email-address" />
                </div>
                <div className="col-md-6 text-start">
                  <Form.Label htmlFor="phone-number">Phone Number</Form.Label>
                  <Form.Control type="tel" id="phone-number" />
                </div>
              </Form.Group>
              <Form.Group className="row mb-3">
                <div className="col-md-6 text-start">
                  <Form.Label htmlFor="date">Date</Form.Label>
                  <Form.Control type="date" id="date" />
                </div>
              </Form.Group>
              <Form.Group className="mb-4 text-start">
                <Form.Label htmlFor="comments">Comments</Form.Label>
                <Form.Control type="textarea" id="comments" />
              </Form.Group>

              <button type="submit" className="btn bg-black btn-lg text-white">
                Submit
              </button>
            </Form>
            <span className="pt-3">{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
