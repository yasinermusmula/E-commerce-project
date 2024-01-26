import React from "react";
// import { Link } from "react-router-dom";
// import "./Footer.css";
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="container mx-auto flex flex-col items-center md:flex-col">
        <div className="flex mb-16 mt-16 md:flex-col">
          <div className="flex flex-col mr-8 mb-2 gap-6 px-12 md:ml-7">
            <h3 className="text-[#252B42] font-montserrat font-bold text-2xl">
              Get In Touch
            </h3>
            <p className="text-[#737373] font-montserrat font-normal text-sm">
              the quick fox jumps over the<p> lazy dog</p>
            </p>
            <div className="flex gap-4 text-[#23A6F0]">
              <FontAwesomeIcon icon={faFacebook} className="fa-2x"/>
              <FontAwesomeIcon icon={faInstagram} className="fa-2x"/>
              <FontAwesomeIcon icon={faTwitter} className="fa-2x"/>
            </div>
          </div>

          <div className="flex flex-col mr-8 mb-2 gap-5 px-20 md:pt-5">
            <h3 className="text-[#252B42] font-montserrat font-bold text-2xl">
              Company info
            </h3>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              About Us
            </a>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              Blog
            </a>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              We are hiring
            </a>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              Carrier
            </a>
          </div>

          <div className="flex flex-col mr-8 mb-2 gap-5 px-20 md:pt-5">
            <h3 className="text-[#252B42] font-montserrat font-bold text-2xl">
              Features
            </h3>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              Business Marketing
            </a>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              User Analytic
            </a>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              Live Chat
            </a>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              Unlimited Support
            </a>
          </div>

          <div className="flex flex-col mr-8 mb-2 gap-5 px-20 md:pt-5">
            <h3 className="text-[#252B42] font-montserrat font-bold text-2xl">
              Resources
            </h3>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              IOS & Android
            </a>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              Watch a Demo
            </a>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              Customers
            </a>
            <a className="text-[#737373] font-montserrat font-bold text-sm">
              API
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] w-full h-20">
        <h6 className="text-center font-bold text-base pt-6 text-[#737373]">
          Made By Yasin Ermusmula All Right Reserved
        </h6>
      </div>
    </div>
  );
}
