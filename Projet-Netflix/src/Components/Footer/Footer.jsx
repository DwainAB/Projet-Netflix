import React from "react";
import './Footer.css'
import logo from "../../assets/logo.svg"
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';






function Footer(){
    return (
        <footer>
  <div class="footer-container">
    <div class="footer-section">
      <img src={logo} alt="" />
    </div>
    <div class="footer-separator"></div>
    <div class="footer-section margin">
      <p>ABOUT</p>
      <p>SERVICES</p>
      <p>TECHNOLOGIES</p>
      <p>HOW TO</p>
      <p>JOIN RESTREAM</p>
    </div>
    <div class="footer-separator"></div>
    <div class="footer-section margin">
      <p>F.A.Q</p>
      <p>SITEMAP</p>
      <p>CONDITIONS</p>
      <p>LICENSES</p>
    </div>
    <div class="footer-separator"></div>
    <div class="footer-section margin">
      <h3>SOCIALIZE WITH RESTREAM</h3>
      <div className="logo">
        <FaFacebook color="#C0B7E8"/>
        <FaTwitter color="#C0B7E8"/>
        <FaYoutube color="#C0B7E8"/>
        <FaLinkedin color="#C0B7E8"/>
        <FaInstagram color="#C0B7E8"/>
        <FaPinterest color="#C0B7E8"/>
      </div>
      <button className="button-footer">
        LET'S START ADVENTURE
      </button>
    </div>
  </div>
  <div class="footer-separators"></div>
  <span className="footer-separators-text">
  2023 © RESTREAM LANDING PAGE - BY HADDAR. A. ABRIVARD.D - ALL RIGHTS RESERVED 
  </span>
</footer>


    )
}


export default Footer
