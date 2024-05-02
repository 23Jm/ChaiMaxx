import React from 'react';
import Gallery1 from "../utils/slider/Frame 160.jpg";
import Gallery2 from "../utils/slider/Frame 164.jpg";
import Gallery6 from "../utils/slider/Frame 162.jpg";
import Gallery4 from "../utils/slider/Frame 163.jpg";
import Gallery5 from "../utils/slider/Frame 164.jpg";
import Gallery3 from "../utils/slider/Frame 154.jpg";


// import { FaPhoneAlt } from 'react-icons/fa';
import "../App.css"
import { motion } from "framer-motion";
import EnquireBtn from './EnquireBtn';

const ImageGallery = () => {

  return (
    <div className="container pb-5 pt-2">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-center fs-1 mb-5 text-black fw-bold">
          Our Best Products
        </h2>
      </motion.div>
      <div className="row">
        <div className="col-md-4 px-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="my-3"
          >
            <img
              src={Gallery1}
              alt=""
              className="img-fluid rounded border-0 reason-cards"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="my-3"
          >
            <img
              src={Gallery2}
              alt=""
              className="img-fluid rounded border-0 reason-cards"
            />
          </motion.div>
        </div>
        <div className="col-md-4 px-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="my-3"
          >
            <img
              src={Gallery3}
              alt=""
              className="img-fluid rounded border-0 reason-cards"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="my-3"
          >
            <img
              src={Gallery4}
              alt=""
              className="img-fluid rounded border-0 reason-cards"
            />
          </motion.div>
        </div>
        <div className="col-md-4 px-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="my-3"
          >
            <img
              src={Gallery5}
              alt=""
              className="img-fluid rounded border-0 reason-cards"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="my-3"
          >
            <img
              src={Gallery6}
              alt=""
              className="img-fluid rounded border-0 reason-cards"
            />
          </motion.div>
        </div>
      </div>
      <div className="mt-3">
        <EnquireBtn />
      </div>
    </div>
  );
}

export default ImageGallery