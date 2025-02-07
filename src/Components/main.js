import React from "react";
import './allpage.css';
import Header from "./Header/header";
import Form from "./Form/form";
import stars from '../img/stars.png';

function Main() {
  return (
    <div className="Main">
      <Header/>
      <div className="reviewBannerIo">
        <a href="https://www.reviews.co.uk/company-reviews/store/shiply" target="_blank" rel="noreferrer" className="reviewsBanner-text">Our customers say<strong>Excellent</strong><span><img src={stars} alt="Stars" /></span></a>
        <a href="https://www.reviews.co.uk/company-reviews/store/shiply" target="_blank" rel="noreferrer" className="reviewsBanner-text"><strong>4.5</strong>out of 5 based on<strong>44,133</strong>reviewes<strong>REVIEWES.io</strong></a>
      </div>
      <Form />
    </div>
  );
}

export default Main;
