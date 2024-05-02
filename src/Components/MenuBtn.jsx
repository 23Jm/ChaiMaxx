import React from 'react'
import { Link } from 'react-router-dom'
import { MdMenuBook } from "react-icons/md";

const MenuBtn = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <Link to="/menu">
        <button type="button" className="btn btn-lg fw-bold" onClick={scrollToTop}>
          {/*  id="BgYellow" */}
          <button class="btngooey2">
            <span class="btn-txt2">
              Our Full Menu
              <MdMenuBook className="ms-2 mb-1" />
            </span>
            <span class="btn-goo-box"></span>
            <span class="btn-goo-box"></span>
            <span class="btn-goo-box"></span>
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="filter-svg">
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
        </button>
      </Link>
    </div>
  );
}

export default MenuBtn