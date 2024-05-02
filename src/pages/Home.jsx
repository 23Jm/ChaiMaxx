import React from 'react'
import MenuBtn from '../Components/MenuBtn';
import "./Home.css";
import { motion} from "framer-motion";
import { GrGallery } from "react-icons/gr";
import AboutImg from "../utils/slider/1153883_OR7V861 copy.jpg";
import { Link } from 'react-router-dom';
import ImageGallery from '../Components/ImageGallery';
import ContactInfo from '../Components/ContactInfo';
import ContactImage from "../utils/slider/Frame 168.jpg";
import Testimonial from '../Components/Testimonial';
// import { FaPhoneAlt } from "react-icons/fa";
import Reasons from '../Components/Reasons';
// import Reveal from "../Components/Reveal";
import FranchiseBtn from '../Components/FranchiseBtn';
import { FaShop } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";

import "../index.css";
import { BsCupHotFill } from "react-icons/bs";
import EnquireBtn from '../Components/EnquireBtn';
import SwiperBtn from '../Components/SwiperBtn';

const Home = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 min-vh-xs-50 text-start d-flex align-items-center text-light ">
        <div className="container ms-2">
          <div className="row">
            <div className="col-sm-6 mt-5   d-flex flex-column align-items-start">
              <h2
                className="mb-2 ms-3 d-flex align-items-center justify-content-start mt-5  fw-bold "
                id="FontYellow"
              >
                <BsCupHotFill className="me-3 fs-2" id="FontYellow" />
                Start Your Own
              </h2>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3 }}
              >
                <h1 className="mt-5 mb-5  text-white fw-md-bold  text-start">
                  <div class="content m-5 ps-5 pb-2">
                    <h1>Chai</h1>
                    <h1>Chai</h1>
                  </div>
                  <h1 className="ps-4">Max Franchise</h1>
                </h1>
              </motion.div>
              <FranchiseBtn />
            </div>
          </div>
        </div>
        <div class="vapour">
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 3 }}></span>
          <span style={{ "--i": 16 }}></span>
          <span style={{ "--i": 5 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 6 }}></span>
          <span style={{ "--i": 7 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 8 }}></span>
          <span style={{ "--i": 17 }}></span>
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 9 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 4 }}></span>
          <span style={{ "--i": 19 }}></span>
        </div>
      </header>
      <div className="text-black  pb-5 shadow">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          // initial={{ opacity: 0, scale: 0.5 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 1 }}
        >
          <h1 className="mb-4 d-flex align-items-center pt-3 justify-content-center fw-bold">
            <FaShop className="me-2" /> Wanna Buy Our Franchise ?
          </h1>
        </motion.div>
        {/* <div class="cup">
            <div class="bubble bubble-1"></div>
            <div class="bubble bubble-2"></div>
            <div class="bubble bubble-3"></div>
          </div> */}
        <p className="fw-bold m-5 fs-4" id="wannaBuy">
          Embark on your journey with Chai Max and experience the satisfaction
          of owning a successful and rewarding franchise business.
        </p>
        <EnquireBtn />
      </div>
      <div className="py-5 shadow text-black light-yellow-bg " id="wanna">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 className="mb-5 d-flex align-items-center text-white justify-content-center fw-bold">
            <FaShop className="me-2" /> Reasons to Buy Our Franchise
          </h1>
        </motion.div>
        <Reasons />
      </div>
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
      <div className="container mt-2 mb-5" id="aboutUs">
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
              for a warm and inviting atmosphere where every sip is a moment to
              cherish. Experience the magic of Chai Max – where tea lovers unite
              and memories are made.
            </p>
            <Link to="/about" onClick={scrollToTop}>
              <button type="button" className="btn  btn-lg" id="OutlineYellow">
                More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container p-5">
        <h1 className="fs-1 mb-5 fw-bold">
          Checkout Our Gallery <GrGallery className="ms-2" />
        </h1>
        <SwiperBtn />
      </div>
      <div className="menu-section py-5 text-light shadow">
        <div className="container d-flex flex-column align-items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h2 className="fs-1 mb-5 fw-bold">Our Menu</h2>
          </motion.div>
          <div className="row mb-5 w-100">
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5" id="FontYellow">
                Tea & Coffee
              </h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2 text-white">Chai Max Tea</p>
                  <p className="fs-3 mx-2  fw-bold" id="FontYellow">
                    ₹12
                  </p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2 text-white">Masala Tea</p>
                  <p className="fs-3 mx-2  fw-bold" id="FontYellow">
                    ₹14
                  </p>
                </li>
              </ul>
              <h3 className="fs-2 mb-5" id="FontYellow">
                Snacks
              </h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2 text-white">Brownie Cakes</p>
                  <p className="fs-3 mx-2  fw-bold" id="FontYellow">
                    ₹12
                  </p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2 text-white">Puffs</p>
                  <p className="fs-3 mx-2  fw-bold" id="FontYellow">
                    ₹14
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
              <h3 className="fs-2 mb-5" id="FontYellow">
                Drinks
              </h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2 text-white">Fresh Juices</p>
                  <p className="fs-3 mx-2  fw-bold" id="FontYellow">
                    ₹22
                  </p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2 text-white">falooda</p>
                  <p className="fs-3 mx-2  fw-bold" id="FontYellow">
                    ₹35
                  </p>
                </li>
              </ul>
              <h3 className="fs-2 mb-5" id="FontYellow">
                Chaat Items
              </h3>
              <ul className="px-0">
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2 text-white">Momos</p>
                  <p className="fs-3 mx-2  fw-bold" id="FontYellow">
                    ₹22
                  </p>
                </li>
                <li className="d-flex justify-content-between">
                  <p className="fs-3 mx-2 text-white">Burger</p>
                  <p className="fs-3 mx-2  fw-bold" id="FontYellow">
                    ₹35
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <MenuBtn />
        </div>
      </div>
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

      <div className="container pt-3 p-5">
        <ImageGallery />
      </div>

      <div className="bg-black text-light py-5 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0">
              <ContactInfo />
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <img
                id="ReasonsCol"
                src={ContactImage}
                alt=""
                className="img-fluid w-75 h-75 rounded border-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 shadow">
        <h2 id="FontYellow">
          <MdReviews className="me-2" />
          Customer Reviews
        </h2>
        <Testimonial />
      </div>
    </div>
  );
};

export default Home