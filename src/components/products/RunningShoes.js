import React, { useState } from "react";
import styled from "styled-components";
import { Radio } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import {} from "../../../public/assets/images/shoes/black_adobespark.png";

const StyledRunningShoesDiv = styled.div`
  outline: none;
  font-family: "Roboto", sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 3px;
  }
  .container {
    width: 300px;
    height: 500px;
    margin: 30px auto;
  }

  .card {
    border-radius: 25px;
    box-shadow: -11px 11px 1px rgba(0, 0, 0, 0.3);
  }

  .card-head {
    position: relative;
    height: 252px;
    background: #fa782e;
    /* Old browsers */
    background: -moz-linear-gradient(-45deg, #fa782e 8%, #c82930 83%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, #fa782e 8%, #c82930 83%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, #fa782e 8%, #c82930 83%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fa782e', endColorstr='#c82930', GradientType=1);
    /* IE6-9 fallback on horizontal gradient */
    border-radius: 25px 25px 0 0;
  }

  .card-logo {
    width: 55px;
    margin: 20px 20px 0 20px;
  }

  .product-img {
    position: absolute;
    left: -60px;
    bottom: 0px;
    width: 280px;
    z-index: 10;
  }

  .product-detail {
    padding: 0 20px;
    font-size: 11px;
    color: #fff;
  }

  .product-detail h2 {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;
    padding-bottom: 10px;
    text-transform: uppercase;
  }

  .back-text {
    display: inline-block;
    font-size: 85px;
    font-weight: 900;
    margin-left: 2px;
    margin-top: -12px;
    opacity: 0.1;
  }

  .card-body {
    height: 255px;
    background: #fff;
    border-radius: 0 0 25px 25px;
    position: relative;
  }

  .product-title {
    padding: 20px 20px 5px 20px;
    display: block;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .badge {
    position: relative;
    font-size: 10px;
    font-weight: 300;
    color: #fff;
    background: #11e95b;
    padding: 2px 5px;
    border-radius: 4px;
    top: -2px;
    margin-left: 5px;
  }

  .product-caption {
    display: block;
    padding: 0 20px;
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .product-rating {
    padding: 0 20px;
    font-size: 15px;
    color: #000;
  }

  .product-rating i.grey {
    color: #acacab;
  }

  .product-size {
    display: flex;
    align-items: center;
  }
  .product-size h4 {
    font-size: 11px;
    padding: 0 21px;
    margin-top: 0;
    text-transform: uppercase;
  }
  ul {
    padding-left: 0;
  }

  .ul-size li {
    list-style: none;
    float: left;
    margin-right: 20px;
  }

  .ul-size li a {
    display: inline-block;
    text-decoration: none;
    font-size: 11px;
    width: 22px;
    height: 22px;
    border-radius: 100%;
    text-align: center;
    line-height: 23px;
    color: #000;
  }

  .ul-size li a.active {
    background: #f35e3d;
    color: #fff;
  }

  /* .product-size:before,
  .product-size:after {
    content: "";
    display: block;
    clear: both;
  } */
  .product-color {
    display: flex;
    align-items: center;
  }
  .product-color h4 {
    font-size: 11px;
    padding: 0 21px;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }

  .ul-color {
    margin-left: 27px;
  }

  .ul-color li {
    list-style: none;
    float: left;
    margin-right: 20px;
  }

  .ul-color li a {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 100%;
  }

  .ul-color li a.orange {
    background: #f35e3d;
  }

  .ul-color li a.green {
    background: #11e95b;
  }

  .ul-color li a.yellow {
    background: #ffd414;
  }

  .ul-color li a.active:after {
    position: absolute;
    content: "";
    display: inline-block;
    border: 1px solid #f35e3d;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    margin-left: -5px;
    margin-top: -5px;
  }

  .product-price {
    position: absolute;
    background: #11e95b;
    padding: 7px 20px;
    text-align: center;
    display: inline-block;
    font-size: 24px;
    font-weight: 200;
    color: #fff;
    border-radius: 7px;
    bottom: 25px;
    left: -10px;
    box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);
  }

  .pretty .state label:after,
  .pretty .state label:before {
    content: "";
    width: calc(1em + 2px);
    height: calc(1em + 2px);
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 0;
    border: 2px solid transparent;
    z-index: 0;
    position: absolute;
    left: 0;
    top: calc((0% - (100% - 1em)) - 8%);
    background-color: transparent;
  }

  .pretty input:checked ~ .state.p-black label:after,
  .pretty.p-toggle .state.p-info label:after {
    background-color: #000 !important;
  }

  .state.p-black > label:before {
    border: 2px solid;
    border-color: #000;
  }
  .pretty input:checked ~ .state.p-gray label:after,
  .pretty.p-toggle .state.p-info label:after {
    background-color: #d4cdcb !important;
  }

  .state.p-gray > label:before {
    border: 2px solid;
    border-color: #d4cdcb;
  }
  .pretty input:checked ~ .state.p-danger label:after,
  .pretty.p-toggle .state.p-info label:after {
    background-color: #ff3900 !important;
  }

  .state.p-danger > label:before {
    border: 2px solid;
    border-color: #ff3900;
  }
  .pretty input:checked ~ .state.p-blue label:after,
  .pretty.p-toggle .state.p-info label:after {
    background-color: #2f00ff !important;
  }

  .state.p-blue > label:before {
    border: 2px solid;
    border-color: #2f00ff;
  }

  .selectAmountBox {
    position: absolute;
    bottom: 30px;
    right: 35px;
  }
  .pairs {
    padding: 15px 20px;
    display: flex;
    align-items: center;
  }
  .pairs h4 {
    font-size: 11px;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: uppercase;
  }
  .pairs input[type="number"] {
    width: 60px;
    outline: none;
    height: 20px;
    margin-left: 20px;
  }

  .add-toCart {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    justify-content: center;
  }
  .add-toCart:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .product-amount {
    position: absolute;
    background: #f35e3d;
    color: #fff;
    font-size: 10px;
    padding: 3px 6px;
    top: -7px;
    right: -9px;
  }
  .add-toCart > i.fas {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #f35e3d;
    font-size: 30px;
    line-height: 30px;
  }
`;

const shoesArr = [
  {
    id: "shoes1",
    name: "ASICS Men's Gel-Venture 7 Running Shoes",
    price: "49.59",
    description:
      "Ortholite X-40 Sockliner - This premium sockliner features higher rebound properties while providing excellent moisture management and a high-level of breathability (Ortholite is a registered trademark of ATP Manufacturing LLC.)",
    url: "https://www.dropbox.com/s/k4dtlb2nhzgp0ht/black_adobespark.png?dl=0",
    logo: "https://www.dropbox.com/s/8ajgd12uwdberir/shoes-logo.png?dl=0"
  },
  {
    id: "shoes2",
    name: "ASICS Men's Gel-Venture 7 Running Shoes",
    price: "49.59",
    description:
      "Ortholite X-40 Sockliner - This premium sockliner features higher rebound properties while providing excellent moisture management and a high-level of breathability (Ortholite is a registered trademark of ATP Manufacturing LLC.)",
    url:
      "https://www.dropbox.com/s/e1ry4y9lw5sssm4/black-pink_adobespark.png?dl=0",
    logo: "https://www.dropbox.com/s/8ajgd12uwdberir/shoes-logo.png?dl=0"
  },
  {
    id: "shoes3",
    name: "ASICS Men's Gel-Venture 7 Running Shoes",
    price: "49.59",
    description:
      "Ortholite X-40 Sockliner - This premium sockliner features higher rebound properties while providing excellent moisture management and a high-level of breathability (Ortholite is a registered trademark of ATP Manufacturing LLC.)",
    url: "https://www.dropbox.com/s/ey9f944gqa4xjjd/blue_adobespark.png?dl=0",
    logo: "https://www.dropbox.com/s/8ajgd12uwdberir/shoes-logo.png?dl=0"
  },
  {
    id: "shoes4",
    name: "ASICS Men's Gel-Venture 7 Running Shoes",
    price: "49.59",
    description:
      "Ortholite X-40 Sockliner - This premium sockliner features higher rebound properties while providing excellent moisture management and a high-level of breathability (Ortholite is a registered trademark of ATP Manufacturing LLC.)",
    url: "https://www.dropbox.com/s/pima4byri3b2kqu/gray_adobespark.png?dl=0",
    logo: "https://www.dropbox.com/s/8ajgd12uwdberir/shoes-logo.png?dl=0"
  }
];

const shoesArr2 = [
  {
    id: "shoes01",
    name: "CAMVAVSR Men's Sneakers ",
    description:
      "Fashion Lightweight Running Shoes Tennis Casual Shoes for Walking",
    url: "https://www.dropbox.com/s/9yovt9xb0pawqhb/shoes1.1.png?dl=0",
    logo:
      "https://www.dropbox.com/s/l67st1cia93k5ex/camvasir-logo_adobespark.png?dl=0"
  },
  {
    id: "shoes02",
    name: "CAMVAVSR Men's Sneakers ",
    description:
      "Fashion Lightweight Running Shoes Tennis Casual Shoes for Walking",
    url: "https://www.dropbox.com/s/5mx6i5ujkcz2s9y/shoes1.2.png?dl=0",
    logo:
      "https://www.dropbox.com/s/l67st1cia93k5ex/camvasir-logo_adobespark.png?dl=0"
  },
  {
    id: "shoes03",
    name: "CAMVAVSR Men's Sneakers ",
    description:
      "Fashion Lightweight Running Shoes Tennis Casual Shoes for Walking",
    url: "https://www.dropbox.com/s/ju8v58uxjkqxhv7/shoes1.3.png?dl=0",
    logo:
      "https://www.dropbox.com/s/l67st1cia93k5ex/camvasir-logo_adobespark.png?dl=0"
  },
  {
    id: "shoes04",
    name: "CAMVAVSR Men's Sneakers ",
    description:
      "Fashion Lightweight Running Shoes Tennis Casual Shoes for Walking",
    url: "https://www.dropbox.com/s/1vykhtzal97woz2/shoes1.4.png?dl=0",
    logo:
      "https://www.dropbox.com/s/l67st1cia93k5ex/camvasir-logo_adobespark.png?dl=0"
  }
];

const RunningShoes = () => {
  const [shoesObj, setShoesObj] = useState({
    id: "shoes1",
    name: "ASICS Men's Gel-Venture 7 Running Shoes",
    price: "49.59",
    description:
      "Ortholite X-40 Sockliner - This premium sockliner features higher rebound properties while providing excellent moisture management and a high-level of breathability (Ortholite is a registered trademark of ATP Manufacturing LLC.)",
    url: "./assets/images/shoes/black_adobespark.png",
    logo: "./assets/images/shoes/shoes-logo.png"
  });

  const [size, setSize] = useState("10");
  const [amount, setAmount] = useState(0);
  const [sum, setSum] = useState(0);

  console.log("shoes>>", shoesObj);

  const handleSize = (e) => {
    e.preventDefault();
    setSize(e.target.name);
  };

  const handleChange = (e) => {
    let price = parseFloat(shoesObj.price);
    setAmount(e.target.value);
    setSum(price * e.target.value);
  };
  return (
    <StyledRunningShoesDiv>
      <div>
        <div className="container">
          <div className="card">
            <div className="card-head">
              <img src={shoesObj.logo} alt="logo" className="card-logo" />
              <img src={shoesObj.url} alt="Shoe" className="product-img" />
              <div className="product-detail">
                <h3>{shoesObj.name}</h3> {shoesObj.description}
              </div>
              <span className="back-text">ASICS</span>
            </div>
            <div className="card-body">
              <div className="product-desc">
                <span className="product-title">
                  {shoesObj.name}
                  <span className="badge">New</span>
                </span>
              </div>
              <div className="product-properties">
                <span className="product-size">
                  <h4>Size</h4>
                  <ul className="ul-size">
                    <li>
                      <a
                        href="#size7"
                        name="7"
                        onClick={handleSize}
                        className={size === "7" ? "size active" : "size"}
                      >
                        7
                      </a>
                    </li>
                    <li>
                      <a
                        href="#size8"
                        name="8"
                        onClick={handleSize}
                        className={size === "8" ? "size active" : "size"}
                      >
                        8
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="#size9"
                        name="9"
                        onClick={handleSize}
                        className={size === "9" ? "size active" : "size"}
                      >
                        9
                      </a>
                    </li>
                    <li>
                      <a
                        href="#size10"
                        name="10"
                        onClick={handleSize}
                        className={size === "10" ? "size active" : "size"}
                      >
                        10
                      </a>
                    </li>
                    <li>
                      <a
                        href="#size11"
                        name="11"
                        onClick={handleSize}
                        className={size === "11" ? "size active" : "size"}
                      >
                        11
                      </a>
                    </li>
                  </ul>
                </span>
                <span className="product-color">
                  <h4>Colour</h4>
                  <div className="color-box">
                    <Radio
                      name="shoes"
                      value="black"
                      animation="pulse"
                      color="black"
                      shape="round"
                    ></Radio>
                    <Radio
                      name="shoes"
                      value="gray"
                      animation="pulse"
                      color="gray"
                      shape="round"
                    ></Radio>
                    <Radio
                      name="shoes"
                      value="red"
                      animation="pulse"
                      color="danger"
                      shape="round"
                    ></Radio>
                    <Radio
                      name="shoes"
                      value="blue"
                      animation="pulse"
                      color="blue"
                      shape="round"
                    ></Radio>
                  </div>
                </span>
                <div className="pairs">
                  <h4>Pairs</h4>
                  <input type="number" onChange={handleChange} />
                </div>
                <div className="selectAmountBox">
                  <div className="add-toCart">
                    <i className="fas fa-cart-plus"></i>
                    <span
                      className="product-amount"
                      style={{ display: amount > 0 ? "block" : "none" }}
                    >
                      {amount > 0 ? amount : ""}
                    </span>
                  </div>
                </div>
                <span className="product-price">
                  <i className="fas fa-dollar-sign"></i>
                  <b> {sum > 0 ? sum.toFixed(2) : shoesObj.price}</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledRunningShoesDiv>
  );
};
export default RunningShoes;
