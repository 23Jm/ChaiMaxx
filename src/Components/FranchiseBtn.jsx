import React from "react";
import { Link } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
import "../index.css"

const FranchiseBtn = () => {
  return (
    <div>
      <Link to="/franchise">
        <button type="button" className="btn btn-lg fw-bold">
          {/*  id="BgYellow" */}
          <button class="btngooey2">
            <span class="btn-txt2">
              Get Franchise
              <FaShop className="ms-2 mb-1" />
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
};

export default FranchiseBtn;
