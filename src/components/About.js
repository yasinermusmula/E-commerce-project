import aboutBg from "../assets/About/background.png";
import Hero from "../layout/Hero";
import Footer from "./Footer";
import bgMount from "../assets/About/unsplash_T_Qe4QlMIvQ.png";
import rightVector from "../assets/About/Vector (1).svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import team1 from "../assets/About/team-1-user-1.jpg";
import team2 from "../assets/About/team-1-user-2.jpg";
import team3 from "../assets/About/team-1-user-3.jpg";
import lastImg from "../assets/About/unsplash_vjMgqUkS8q8.png";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Clients from "../layout/Clients";

export default function About() {
  return (
    <div className="w-full md:flex md:flex-col">
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
        <div className="flex justify-evenly m-10">
          <div className="mb-5">
            <p className="text-[#E74040] font-normal text-sm font-montserrat mb-5">
              Problems trying
            </p>
            <h3 className="text-[#252B42] font-bold text-2xl font-montserrat">
              Met minim Mollie non desert
              <p>
                Alamo est sit cliquey dolor do <br /> met sent.
              </p>
            </h3>
          </div>
          <div className="mt-10">
            <p className="font-montserrat font-normal text-sm text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of
              <p>Classical physics: Newtonian mechanics</p>
            </p>
          </div>
        </div>
        <div className="flex justify-evenly text-center m-20">
          <div>
            <h1 className="font-montserrat font-bold text-6xl">15K</h1>
            <h5 className="font-montserrat font-bold text-sm text-[#737373]">
              Happy Customers
            </h5>
          </div>
          <div>
            <h1 className="font-montserrat font-bold text-6xl">150K</h1>
            <h5 className="font-montserrat font-bold text-sm text-[#737373]">
              Monthly Visitors
            </h5>
          </div>
          <div>
            <h1 className="font-montserrat font-bold text-6xl">15</h1>
            <h5 className="font-montserrat font-bold text-sm text-[#737373]">
              Countries Worldwide
            </h5>
          </div>
          <div>
            <h1 className="font-montserrat font-bold text-6xl">100+</h1>
            <h5 className="font-montserrat font-bold text-sm text-[#737373]">
              Top Partners
            </h5>
          </div>
        </div>
        <div className="flex">
          <div
            style={{
              backgroundImage: `url(${bgMount})`,
            }}
            className="h-[35rem] bg-cover bg-center w-[55rem] rounded m-auto flex"
          >
            <button className="bg-[#23A6F0] w-12 h-12 rounded-full m-auto">
              <img src={rightVector} alt="" className="m-auto rounded" />
            </button>
          </div>
        </div>
        <div>
          <div className="m-20">
            <div className="text-center m-14">
              <h2 className="font-montserrat font-bold text-4xl text-[#252B42]">
                Meet Our Team
              </h2>
              <p className="font-montserrat font-normal text-sm text-[#737373]">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
            <div className="flex text-center justify-around w-full ml-16">
              <div>
                <img src={team1} alt="" />
                <div>
                  <h5 className="m-4 font-montserrat font-bold text-lg text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="m-4 font-montserrat font-bold text-lg text-[#737373]">
                    Profession
                  </h6>
                  <div>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="pr-5 text-blue-500"
                    />
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="pr-5 text-blue-500 text-lg"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-blue-500 text-lg"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <img src={team2} alt="" />
                  <div>
                    <h5 className="m-4 font-montserrat font-bold text-lg text-[#252B42]">
                      Username
                    </h5>
                    <h6 className="m-4 font-montserrat font-bold text-lg text-[#737373]">
                      Profession
                    </h6>
                    <div>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="pr-5 text-blue-500"
                      />
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="pr-5 text-blue-500 text-lg"
                      />
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-blue-500 text-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <img src={team3} alt="" />
                  <div>
                    <h5 className="m-4 font-montserrat font-bold text-lg text-[#252B42]">
                      Username
                    </h5>
                    <h6 className="m-4 font-montserrat font-bold text-lg text-[#737373]">
                      Profession
                    </h6>
                    <div>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="pr-5 text-blue-500"
                      />
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="pr-5 text-blue-500 text-lg"
                      />
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-blue-500 text-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="m-16 ml-24">
            <div className="text-center">
              <h2 className="font-montserrat font-bold text-4xl text-[#252B42]">
                Big Companies Are Here
              </h2>
              <p className="font-montserrat font-normal text-lg mt-8 text-[#737373]">
                Problems trying to resolve the conflict between <br /> the two
                major realms of Classical physics: Newtonian mechanics{" "}
              </p>
            </div>
          </div>
          <Clients />
        </div>
      </div>
      <div className="w-full bg-[#2A7CC7] text-[#FAFAFA] h-full justify-around">
        <div className="m-52 flex">
          <div className="mt-20">
            <h5 className=" font-montserrat font-bold text-lg">WORK WITH US</h5>
            <h2 className="mt-3 font-montserrat font-bold text-4xl">
              Now Let’s grow Yours
            </h2>
            <p className="mt-3 font-montserrat font-bold text-lg">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th{" "}
            </p>
            <button className="border p-3 rounded mt-4">Button</button>
          </div>
          <div className="w-full">
            <img
              src={lastImg}
              alt=""
              className="justify-end ml-52 h-[42rem] w-[60rem] flex-end"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
