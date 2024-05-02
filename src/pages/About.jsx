import React from 'react'
import "./About.css"
import "../App.css"
import AboutImg from "../utils/slider/8953538_162 copy (1).jpg";
import ImageGallery from '../Components/ImageGallery';
// import missionImg from "../utils/img/chai-4.png";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
// import Swiper from '../Components/SwiperBtn';


const About = () => {
  //  function scrollToTop() {
  //    window.scrollTo({
  //      top: 0,
  //      behavior: "smooth",
  //    });
  //  }
  return (
    <div className="about-page">
      <header className="mt-5">
        <div className="container h-100 d-flex  align-items-center justify-content-start">
          <motion.div
            initial={{ opacity: 0, x: "150px" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-light ms-5 fs-1 mt-5">About</h1>
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
      <div className="container mb-5" id="aboutUs">
        <div className="container mb-5 mt-0">
          <div className="row m-5">
            <div className="col-lg-6 d-flex justify-content-center order-2  mt-4 mt-lg-0 d-md-flex">
              <img
                src={AboutImg}
                alt="about img"
                className="img-fluid w-100 rounded border-0 reason-cards"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <h2 className="fs-1 mb-5 text-black fw-bold">About Us</h2>
              </motion.div>
              <p className="text-start">
                Welcome to Chai Max! Discover a world of exceptional tea
                experiences in our cozy ambiance. From unique blends to
                unparalleled quality, each cup is crafted to perfection. Join us
                for a warm and inviting atmosphere where every sip is a moment
                to cherish. Experience the magic of Chai Max – where tea lovers
                unite and memories are made.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="container py-3 border-4" id="Bg-Yellow">
          <div className="row g-3">
            <div className="px-5 col-lg-6 d-flex flex-column align-items-center  justify-content-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <BsFillRocketTakeoffFill className="mv-icon mb-2" />
                <h2 className="fs-1 mb-5 text-black fw-bold">Our Mission</h2>
              </motion.div>
              <p className="text-start">
                At Chai Max, our mission is to expand our reach by opening more
                outlets while maximizing revenue and minimizing risk. We are
                committed to maintaining the high quality and quantity of our
                products, adhering to international standards of excellence in
                everything we do. Our goal is to grow our brand while staying
                true to our core values and delivering exceptional experiences
                to our customers.
              </p>
            </div>
            <div className="px-5  col-lg-6 d-flex flex-column align-items-center justify-content-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <FaEye className="mv-icon mb-2 mt-md-0" />
                <h2 className="fs-1 mb-5 text-black fw-bold">Our Vision</h2>
              </motion.div>
              <p className="text-start">
                Our vision at Chai Max is to directly deliver the highest
                quality products to our customers without the need for any
                intermediaries. We strive to set the standard for quality in the
                industry and create a direct connection between our products and
                those who enjoy them, ensuring transparency, authenticity, and
                satisfaction every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-5">
        <ImageGallery />
      </div>

    </div>
  );
}

export default About