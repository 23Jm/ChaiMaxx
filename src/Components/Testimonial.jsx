import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./TestimonialCss.css"
import person1 from "../utils/slider/profile-user-svgrepo-com.svg"
import person2 from "../utils/slider/profile-user-svgrepo-com.svg";
import person3 from "../utils/slider/profile-user-svgrepo-com.svg";
import person4 from "../utils/slider/profile-user-svgrepo-com.svg";
import person5 from "../utils/slider/profile-user-svgrepo-com.svg";
import person6 from "../utils/slider/profile-user-svgrepo-com.svg";
import { AiFillStar } from "react-icons/ai";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={person1} alt="" />
          <div className="myCarousel">
            <h3>Rakesh</h3>
            {/* <h4>Designer</h4> */}
            <div className="stars-container">
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
            </div>
            <p>The flavor is superb! Definitely worth trying.</p>
          </div>
        </div>

        <div>
          <img src={person2} alt="" />
          <div className="myCarousel">
            <h3>Priya</h3>
            {/* <h4>Designer</h4> */}
            <div className="stars-container">
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
            </div>
            <p>Incredible taste! You won't be disappointed.</p>
          </div>
        </div>

        <div>
          <img src={person3} alt="" />
          <div className="myCarousel">
            <h3>Deepika</h3>
            {/* <h4>Designer</h4> */}
            <div className="stars-container">
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
            </div>
            <p>Delightful flavor! I recommend it to everyone.</p>
          </div>
        </div>
        <div>
          <img src={person4} alt="" />
          <div className="myCarousel">
            <h3>Ravi</h3>
            {/* <h4>Designer</h4> */}
            <div className="stars-container">
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
            </div>
            <p>Absolutely delicious tea! A must-try!</p>
          </div>
        </div>
        <div>
          <img src={person5} alt="" />
          <div className="myCarousel">
            <h3>Khaleel</h3>
            {/* <h4>Designer</h4> */}
            <div className="stars-container">
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
            </div>
            <p>The tea tastes Fantastic. Highly recommend!</p>
          </div>
        </div>
        <div>
          <img src={person6} alt="" />
          <div className="myCarousel">
            <h3>Mahesh</h3>
            {/* <h4>Designer</h4> */}
            <div className="stars-container">
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
              <AiFillStar id="FontYellow" />
            </div>
            <p>Excellent variety of chai. Good service.</p>
          </div>
        </div>
      </Carousel>
    );
  }
}
