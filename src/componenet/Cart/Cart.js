import React, { Component } from "react";

import { ProductConsumer } from "../../ContextAPI/context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
  render() {
    return (
      <CartContainer>
        <Link to="/" className="back-to-btn">
          <h6>&#8592; Back </h6>
        </Link>

        <h4>SHOPPING CART</h4>

        <div className="cart-body">
          <ProductConsumer>
            {(value) => {
              const { cart } = value;
              if (cart.length !== 0) {
                return (
                  <React.Fragment>
                    {/* <CartColumns /> */}
                    <CartList value={value} />
                    <CartTotals value={value} history={this.props.history} />
                  </React.Fragment>
                );
              } else {
                return (
                  <div className="empty-cart">
                    <h5>Your cart is empty</h5>
                    <Link to="/">
                      <h6> Shop </h6>
                    </Link>
                  </div>
                );
              }
            }}
          </ProductConsumer>
        </div>
      </CartContainer>
    );
  }
}

const CartContainer = styled.section`
  display: block;
  .cart-body {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
    align-items: flex-start;
  }
  .back-to-btn h6 {
    color: #0066c0;
    padding: 0.5rem !important;
    margin: 0.3rem;
    font-size: 0.8rem;
    font-weight: bold;
  }
  .empty-cart {
    text-align: center !important;

    width: 100%;
    letter-spacing: 0.2rem;
    word-spacing: 0.7rem;
    border: 1px solid #eaecee;
    border-radius: 0.3rem;

    background: #ebedef;
    align-item: center;
    padding: 4rem;
    margin-top: 10%;
  }
  .empty-cart h6 {
    border: 1px solid black;
    border-radius: 0.3rem;
    margin: 2rem 40%;
    padding: 0.5rem 0;
    color: white !important;
    background: black;
  }
  .empty-cart h6:hover {
    opacity: 0.7;
    text-decoration: none !important;
  }
  h4 {
    text-align: center;
    font-weight: bold;
    margin-top: -2rem;
  }
  @media only screen and (max-width: 460px) {
    .empty-cart h6 {
      border: 1px solid black;
      border-radius: 0.3rem;
      margin: 2rem 10%;
      padding: 0.5rem 0;
    }
    h4 {
      text-align: center;
      font-weight: none;
      font-size: 1.2rem;
      margin-top: -2rem;
    }
  }
`;
