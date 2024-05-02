import React from 'react'
import { MdLocationSearching } from "react-icons/md";
import { BsDoorOpenFill } from "react-icons/bs";
// import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import "../index.css";

const ContactInfo = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2
        className="fs-1 mb-3  d-flex align-items-center justify-content-center"
        id="FontYellow"
      >
        <MdLocationSearching className="me-2" /> Where To Find Us
      </h2>
      <p className="mb-5 d-flex align-items-center justify-content-center flex-column">
        <Link
          to="/"
          className="mb-2 text-decoration-none lh-5 text-light d-flex align-items-start justify-content-start"
        >
          <FaLocationDot className="fs-5 fs-md-2" />
          <h6 className='lh-5'>
            2/3 Uchaparambumedu <br /> Rd, Iyer Bungalow,
            <br /> Madurai, Tamil Nadu 625017
          </h6>
        </Link>
      </p>
      <h3
        className=" d-flex align-items-center justify-content-center"
        id="FontYellow"
      >
        <BsDoorOpenFill className="me-2" /> Opening Hours
      </h3>
      <p className=" m-0">Mon - Fri :  9:00 a.m - 9:00 p.m</p>
      <p>Sat - Sun :  10:00 a.m - 3:00 p.m</p>
    </div>
  );
}

export default ContactInfo