import React from 'react'
import "./Franchise.css"
import "../App.css";
import { motion } from "framer-motion";
import FranchiseImg from '../utils/ajithsir/6921334_574 copy 2.jpg';
import FranchiseImg1 from "../utils/slider/Frame 165.jpg";
import FranchiseImg2 from "../utils/slider/Frame 165.jpg";
import FranchiseImg3 from "../utils/slider/Frame 167.jpg";
import { FaShop } from 'react-icons/fa6';
import Reasons from '../Components/Reasons';
import { Link } from 'react-router-dom';
import { Form } from "react-bootstrap";
import { SocialIcon } from 'react-social-icons';
import AccordionComponent from '../Components/AccordionComponent';

const Franchise = () => {
  
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
    <div className="franchise-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-start">
          <motion.div
            initial={{ opacity: 0, x: "150px" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-light ms-5 fs-1 mt-5">Franchise</h1>
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
      <div className="container my-5">
        <div className="row mx-5">
          <div className="col-lg-6 d-flex justify-content-center order-2  mt-4 mt-lg-0 d-md-flex">
            <img
              src={FranchiseImg}
              alt="franchise img"
              className="img-fluid w-75 rounded border-0 reason-cards"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <h2 className="fs-1 mb-5 fw-bold">About Our Franchise</h2>
            </motion.div>
            <p>
              At Chai Max, we have been supplying tea powder to over 150 tea
              companies, ensuring that our products meet the highest standards
              of quality and taste. Now, we are excited to introduce our own
              outlets, where we bring our expertise directly to our customers.
              By doing so, we aim to elevate the tea-drinking experience by
              offering unique flavors, unparalleled quality, and a friendly
              atmosphere. Our commitment to providing genuine, iconic taste
              remains unwavering as we embark on this new journey of sharing our
              passion for tea with the world.
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 shadow" id="wanna">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 className="mb-5 d-flex text-white align-items-center justify-content-center">
            <FaShop className="me-2 " /> Reasons to Buy Our Franchise
          </h1>
        </motion.div>
        <Reasons />
      </div>
      {/* franchise model 3 cards */}
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 className="mt-5 mb-1 fw-bold">
            Business Opportunities (Franchise Models)
          </h1>
        </motion.div>
        <div className="container">
          <div className="row ">
            <div className="col  col-12 col-lg-4 mb-lg-0 mt-lg-5 bo-green px-3 mb-2">
              <img
                src={FranchiseImg1}
                className=" border-0 rounded-top"
                alt="..."
              />

              <div className=" text-center position-relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <span className="ribbon-1  position-absolute">Basic</span>
                </motion.div>
                <h4 className=" fw-bold text-center my-1 fs-5">
                  Franchise Model - Basic
                </h4>
                <h5 className="fw-bold fs-5">Investment Details</h5>
                <ul>
                  <li>Kitchen Equipment's</li>
                  <li>Brand Welcome Kit</li>
                  <li>Raw Materials</li>
                  <li>Interior & Exterior</li>
                </ul>
                <h5 className="fw-bold fs-5">Menu Varieties</h5>
                <ul>
                  <li>Tea & Coffee</li>
                  <li>Snacks & Cookies</li>
                </ul>
                <Link to="/contact">
                  <button
                    type="button"
                    className="my-1 btn btn-lg fw-bold"
                    id="BgYellow"
                  >
                    Get Franchise
                    <FaShop className="ms-2 mb-1" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="col col-12 col-lg-4 mb-lg-4 mt-lg-4 bo-blue px-3 mb-2">
              <img
                src={FranchiseImg2}
                className=" border-0 rounded-top"
                alt="..."
              />

              <div className="text-center position-relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <span className="ribbon-2  position-absolute">Standard</span>
                </motion.div>
                <h3 className=" fw-bold text-center my-1 fs-5">
                  Franchise Model - Standard
                </h3>
                <h5 className="fw-bold fs-5">Investment Details</h5>
                <ul>
                  <li>Kitchen Equipment's</li>
                  <li>Brand Welcome Kit</li>
                  <li>Raw Materials</li>
                  <li>Interior & Exterior</li>
                  <li>Space Saving Dinning</li>
                </ul>
                <h5 className="fw-bold fs-5">Menu Varieties</h5>
                <ul>
                  <li>Tea & Coffee</li>
                  <li>Snacks & Cookies</li>
                  <li> Fresh Juice & Chaat Items</li>
                </ul>
                <Link to="/contact">
                  <button
                    type="button"
                    className="my-1 btn btn-lg fw-bold"
                    id="BgYellow"
                  >
                    Get Franchise
                    <FaShop className="ms-2 mb-1" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="col col-12 col-lg-4 mb-lg-5 mt-lg-0 px-3 bo-yellow">
              <img
                src={FranchiseImg3}
                className="border-0 rounded-top"
                alt="..."
              />

              <div className="text-center position-relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <span className="ribbon-3  position-absolute">Premium</span>
                </motion.div>
                <h3 className=" fw-bold text-center my-1 fs-5">
                  Franchise Model - Premium
                </h3>
                <h5 className="fw-bold fs-5">Investment Details</h5>
                <ul>
                  <li>Kitchen Equipment's</li>
                  <li>Brand Welcome Kit</li>
                  <li>Raw Materials</li>
                  <li>Exterior & Premium Interior</li>
                  <li>Dining (Upto 3) & Billing Software</li>
                </ul>
                <h5 className="fw-bold fs-5">Menu Varieties</h5>
                <ul>
                  <li>Tea & Coffee</li>
                  <li>Snacks & Cookies</li>
                  <li> Fresh Juice & Chaat Items</li>
                </ul>
                <Link to="/contact">
                  <button
                    type="button"
                    className="my-1 btn btn-lg fw-bold"
                    id="BgYellow"
                  >
                    Get Franchise
                    <FaShop className="ms-2 mb-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 franchise-form text-white py-5 w-100 h-100vh">
        <div className="row d-flex align-items-start justify-content-between">
          <div className="col-lg-6 mb-md-0 text-start mb-5 d-flex flex-column align-items-center justify-content-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <h1 className="fw-bold ">Chai Max</h1>
            </motion.div>
            <p className="p2">
              Experience the magic of Chai Max – where tea lovers unite and
              memories are made. Our support encompasses a wide range of
              essential services aimed at ensuring the success and growth of
              your Chai Max franchise. This includes comprehensive CRM, :RP, and
              finance management systems to streamline operations and maximize
              efficiency. We conduct regular quality audits to maintain the high
              standards of our products
            </p>
            <div>
              <SocialIcon url="https://whatsapp.com" className="me-2" />
              <SocialIcon url="https://linkedin.com" className="me-2" />
              <SocialIcon url="https://facebook.com" className="me-2" />
              <SocialIcon url="https://youtube.com" className="me-2" />
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 text-black d-flex justify-content-center">
            <Form onSubmit={onSubmit} className="mx-5 form-bg">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <h3 className="my-2">Franchise Enquiry Form</h3>
              </motion.div>
              <Form.Group className="row mb-3">
                <div className="col-12 text-start">
                  <Form.Label htmlFor="first-name">First Name</Form.Label>
                  <Form.Control type="text" id="first-name" />
                </div>
                <div className="col-12 text-start">
                  <Form.Label htmlFor="email-address">Email Address</Form.Label>
                  <Form.Control type="email" id="email-address" />
                </div>
                <div className="col-12 text-start">
                  <Form.Label htmlFor="phone-number">Phone Number</Form.Label>
                  <Form.Control type="tel" id="phone-number" />
                </div>
                <div className="col-12 text-start">
                  <Form.Label htmlFor="location">Location</Form.Label>
                  <Form.Control type="text" id="location" />
                </div>
                <div className="col-12 text-start">
                  <Form.Label htmlFor="location">Type of Franchise</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">Unit Franchise</option>
                    <option value="2">Master Franchise</option>
                  </Form.Select>
                </div>
              </Form.Group>
              <Form.Group className="mb-4 text-start">
                <Form.Label htmlFor="comments">Comments</Form.Label>
                <Form.Control as="textarea" id="comments" />
              </Form.Group>

              <button type="submit" className="btn btn-lg bg-black text-white">
                Submit
              </button>
            </Form>
            <span className="pt-3">{result}</span>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h2 className="mb-3">
            Got questions? <span id="FontYellow"> Need help ? </span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <h5 className="mb-4">We've got you covered !</h5>
        </motion.div>
        <p>
          Check out our FAQ page for answers to commonly asked questions about
          our teas, franchise opportunities, and more.
        </p>
        <div className=" m-5">
          <AccordionComponent />
        </div>
      </div>
    </div>
  );
}

export default Franchise