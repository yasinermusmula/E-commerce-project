import aboutBg from "../assets/About/background.png";
import Hero from "../layout/Hero";
import Footer from "./Footer";
import bgMount from "../assets/About/unsplash_T_Qe4QlMIvQ.png";
import rightVector from "../assets/About/Vector (1).svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import team1 from "../assets/About/team-1-user-1.jpg";
import team2 from "../assets/About/team-1-user-2.jpg";
import team3 from "../assets/About/team-1-user-3.jpg";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Clients from "../layout/Clients";

export default function About() {
  return (
    <div>
      <Hero />
      <div className="w-11/12 md:flex-col">
        <div className="flex ml-40">
          <div className="md:mt-96 m-auto items-center">
            <h5 className="font-montserrat font-bold text-base mb-5">
              ABOUT COMPANY
            </h5>
            <h1 className="font-montserrat font-bold text-5xl mt-3">
              ABOUT US
            </h1>
            <h4 className="font-montserrat font-normal text-xl text-[#737373] mt-3">
              We know how large objects will act,
              <p>but things on a small scale</p>
            </h4>
            <button className="gap-3 border rounded w-40 h-12 bg-[#23A6F0] text-[#FFFFFF] font-montserrat font-bold mt-3">
              Get Quote Now
            </button>
          </div>
          <img src={aboutBg} className="w-8/12" />
        </div>
        <div className="flex justify-evenly">
          <div>
            <p className="text-[#E74040] font-normal text-sm font-montserrat">
              Problems trying
            </p>
            <h3 className="text-[#252B42] font-bold text-2xl">
              Met minim Mollie non desert
              <p>Alamo est sit cliquey dolor do met sent.</p>
            </h3>
          </div>
          <div className="">
            <p>
              Problems trying to resolve the conflict between the two major
              realms of
              <p>Classical physics: Newtonian mechanics</p>
            </p>
          </div>
        </div>
        <div className="flex justify-evenly text-center">
          <div>
            <h1>15K</h1>
            <h5>Happy Customers</h5>
          </div>
          <div>
            <h1>150K</h1>
            <h5>Monthly Visitors</h5>
          </div>
          <div>
            <h1>15</h1>
            <h5>Countries Worldwide</h5>
          </div>
          <div>
            <h1>100+</h1>
            <h5>Top Partners</h5>
          </div>
        </div>
        <div className="">
          <div
            style={{
              backgroundImage: `url(${bgMount})`,
            }}
            className="h-[35rem] bg-cover bg-center w-[55rem] rounded m-auto"
          >
            <button className="bg-[#23A6F0] w-12 h-12 rounded-full">
              <img src={rightVector} alt="" className="m-auto rounded" />
            </button>
          </div>
        </div>
        <div>
          <div>
            <div className="text-center">
              <h2>Meet Our Team</h2>
              <p>
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
            <div className="flex text-center justify-around w-full ml-16">
              <div>
                <img src={team1} alt="" />
                <h5>Username</h5>
                <h6>Profession</h6>
                <div>
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
              <div>
                <img src={team2} alt="" />
                <h5>Username</h5>
                <h6>Profession</h6>
                <div>
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
              <div>
                <img src={team3} alt="" />
                <h5>Username</h5>
                <h6>Profession</h6>
                <div>
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="text-center">
              <h5>Big Companies Are Here</h5>
              <p>
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
          <Clients />
        </div>
      </div>
      <Footer />
    </div>
  );
}
