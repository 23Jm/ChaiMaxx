import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EnquireBtn = () => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  return (
    <div className="wrap pb-5">
      <Link to="/contact">
        <button
          className="buttonRing btn btn-light fw-bold mt-3 p-3 rounded-5"
          onClick={scrollToTop}
        >
          <FaPhoneAlt className="me-2" /> Enquire Now
        </button>
      </Link>
    </div>
  );
}

export default EnquireBtn