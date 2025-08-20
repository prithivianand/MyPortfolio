import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h3>“Designing simple and creative web experiences.”</h3>
          <p>Thanks for visiting my portfolio!</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Prithivi Anand. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
