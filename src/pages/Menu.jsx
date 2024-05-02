import React from 'react';
import "./Menu.css";
import TeaCoffeeImg from "../utils/images/flat-lay-coffee-cups-wooden-board_23-2148453582.jpg";
import SnacksCookiesImg from "../utils/images/delicious-cookies-with-glass-milk_23-2148837137.jpg";
import FreshJuicesImg from "../utils/ajithsir/cup.jpg";
import ChaatItemsImg from "../utils/images/gallery3.jpg";
import { motion } from "framer-motion";
import { Card, CardBody, CardTitle } from "react-bootstrap";


const Menu = () => {
  
const TeaCoffee = [
  {
    id: 1,
    name: "Chai Max Tea , Masala Tea",
    description:
      "smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs",
    price: "£12",
  },
  {
    id: 2,
    name: "Cardamom Tea, Lemon Tea, Green Tea, Ginger Tea",
    description: "poached egg, avocado, onion, tomatoes, bread",
    price: "£8",
  },
  {
    id: 3,
    name: "Sukku Coffee, Nattu Sakkara Tea, Hibiscus Tea ",
    description: "tortilla, egg, cheese, potatoes, pork meat",
    price: "£11",
  },
  {
    id: 4,
    name: "Filter Coffee, Instant Coffee, Paruthi Paal Mix, Masala Paal Mix",
    description: "tortilla, egg, cheese, potatoes, pork meat",
    price: "£11",
  },
  {
    id: 5,
    name: " Ragi Malt, ABC Malt, Badam Milk",
    description: "tortilla, egg, cheese, potatoes, pork meat",
    price: "£11",
  },
];
const SnacksCookies = [
  {
    id: 1,
    name: "Brownie Cakes",
    description: "chicken breast, romaine lettuce, croutons, parmesan",
    price: "£15",
  },
  {
    id: 2,
    name: "Cutlet, Puffs , Samosa",
    description: "spaghetti, pancetta, garlic, eggs, parmesan, pepper",
    price: "£14",
  },
  {
    id: 3,
    name: "Homemade Biscuits",
    description: "chorizo, italian salami, tomatoes, mushrooms, olives",
    price: "£12",
  },
];

const FreshJuices = [
  {
    id: 1,
    name: "Rose Milk or Jigarthanda",
    description:
      "smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs",
    price: "£12",
  },
  {
    id: 2,
    name: "Fresh Juices",
    description: "poached egg, avocado, onion, tomatoes, bread",
    price: "£8",
  },
  {
    id: 3,
    name: "Lassi, Mojito",
    description: "tortilla, egg, cheese, potatoes, pork meat",
    price: "£11",
  },
  {
    id: 4,
    name: "Cold Coffee, Badam Milk",
    description: "tortilla, egg, cheese, potatoes, pork meat",
    price: "£11",
  },
  {
    id: 5,
    name: "Falooda , Milkshake",
    description: "tortilla, egg, cheese, potatoes, pork meat",
    price: "£11",
  },
];
const ChaatItems = [
  {
    id: 1,
    name: "Bread Omelet Varieties, Maggi Varieties",
    description: "chicken breast, romaine lettuce, croutons, parmesan",
    price: "£15",
  },
  {
    id: 2,
    name: "Sandwich Varieties , French Fries Varieties",
    description: "spaghetti, pancetta, garlic, eggs, parmesan, pepper",
    price: "£14",
  },
  {
    id: 3,
    name: "Momos, Smiley",
    description: "chorizo, italian salami, tomatoes, mushrooms, olives",
    price: "£12",
  },
  {
    id: 4,
    name: "Burger, Waffles",
    description: "tortilla, egg, cheese, potatoes, pork meat",
    price: "£11",
  },
];

  return (
    <div class="menu-page">
      <header class="mt-5">
        <div class="container h-100 d-flex align-items-center justify-content-start">
          <motion.div
            initial={{ opacity: 0, x: "150px" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 1.5 }}
          >
            <h1 class="text-light ms-5 fs-1 mt-5">Menu</h1>
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
      <div class="TeaCoffee my-md-5">
        <div class="container pb-5 mb-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h2 class="text-center fs-1 mb-4 mb-lg-5 fw-bold " id="FontYellow">
              Tea & Coffee
            </h2>
          </motion.div>
          <div class="row flex-column-reverse flex-lg-row">
            <div class="col-lg-6 d-flex   justify-content-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={TeaCoffeeImg}
                  class="img-fluid w-75 mt-4 mt-lg-0 border-0 rounded"
                  alt=""
                />
              </motion.div>
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              {TeaCoffee.map((TeaCoffee) => (
                <div key={TeaCoffee.id}>
                  <Card class="border-0">
                    <CardBody>
                      <CardTitle class="text-center fs-5  border-0 outline-0">
                        {TeaCoffee.name}
                      </CardTitle>
                      {/* <CardText class="text-center fs-5">
                        {TeaCoffee.description}
                      </CardText> */}
                      {/* <CardText
                        id="FontYellow"
                        class="text-center fs-3 fw-bold "
                      >
                        {TeaCoffee.price}
                      </CardText> */}
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="SnacksCookies py-5  my-md-5">
        <div class="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h2 class="text-center fs-1 mb-4 mb-lg-5 fw-bold " id="FontYellow">
              Snacks & Cookies
            </h2>
          </motion.div>
          <div class="row flex-column-reverse flex-lg-row">
            <div class="col-lg-6 d-flex order-md-2 justify-content-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={SnacksCookiesImg}
                  class="img-fluid w-75 mt-4 mt-lg-0 border-0 rounded"
                  alt=""
                />
              </motion.div>
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-around">
              {SnacksCookies.map((SnacksCookies) => (
                <div key={SnacksCookies.id}>
                  <Card class="border-0">
                    <CardBody>
                      <CardTitle class="text-center  fs-5  border-0 outline-0 ">
                        {SnacksCookies.name}
                      </CardTitle>
                      {/* <CardText class="text-center fs-5">
                        {SnacksCookies.description}
                      </CardText> */}
                      {/* <CardText
                        class="text-center fs-3 fw-bold "
                        id="FontYellow"
                      >
                        {SnacksCookies.price}
                      </CardText> */}
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="FreshJuices py-5 my-md-5">
        <div class="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h2 class="text-center fs-1 mb-4 mb-lg-5 fw-bold " id="FontYellow">
              Fresh Juices
            </h2>
          </motion.div>
          <div class="row flex-column-reverse flex-lg-row">
            <div class="col-lg-6 d-flex  justify-content-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={FreshJuicesImg}
                  class="img-fluid w-75 mt-4 mt-lg-0 border-0 rounded"
                  alt=""
                />
              </motion.div>
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-around">
              {FreshJuices.map((FreshJuices) => (
                <div key={FreshJuices.id}>
                  <Card class="border-0">
                    <CardBody>
                      <CardTitle class="text-center  fs-5  border-0 outline-0 ">
                        {FreshJuices.name}
                      </CardTitle>
                      {/* <CardText class="text-center fs-5">
                        {FreshJuices.description}
                      </CardText> */}
                      {/* <CardText
                        class="text-center fs-3 fw-bold "
                        id="FontYellow"
                      >
                        {FreshJuices.price}
                      </CardText> */}
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="ChaatItems py-5  my-md-5">
        <div class="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h2 class="text-center fs-1 mb-4 mb-lg-5 fw-bold " id="FontYellow">
              Chaat Items
            </h2>
          </motion.div>
          <div class="row flex-column-reverse flex-lg-row">
            <div class="col-lg-6 d-flex order-md-2  justify-content-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={ChaatItemsImg}
                  class="img-fluid w-75 mt-4 mt-lg-0 border-0 rounded"
                  alt=""
                />
              </motion.div>
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-around">
              {ChaatItems.map((ChaatItems) => (
                <div key={ChaatItems.id}>
                  <Card class="border-0">
                    <CardBody>
                      <CardTitle class="text-center  fs-5  border-0 outline-0">
                        {ChaatItems.name}
                      </CardTitle>
                      {/* <CardText class="text-center fs-5">
                        {ChaatItems.description}
                      </CardText> */}
                      {/* <CardText
                        class="text-center fs-3 fw-bold "
                        id="FontYellow"
                      >
                        {ChaatItems.price}
                      </CardText> */}
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu