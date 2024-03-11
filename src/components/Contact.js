import Hero from "../layout/Hero";
import Footer from "./Footer";
import foto1 from "../assets/Contact/media.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <>
      <Hero />
      <div className="text-center m-14">
        <h2 className="font-montserrat font-bold text-4xl text-[#252B42]">
          Meet Our Team
        </h2>
        <p className="font-montserrat font-normal text-sm text-[#737373] mt-6">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-center py-3 pt-6 gap-8">
        <div className="">
          <img src={foto1} className="rounded" />
          <h4 className="font-montserrat text-lg font-normal text-[#252B42]">
            Jerome Bell
          </h4>
          <p className="text-[#737373] font-montserrat font-bold text-sm">
            IBM
          </p>
        </div>
        <div className="">
          <img src={foto1} className="rounded" />
          <h4 className="font-montserrat text-lg font-normal text-[#252B42]">
            Jerome Bell
          </h4>
          <p className="text-[#737373] font-montserrat font-bold text-sm">
            IBM
          </p>
        </div>
        <div className="">
          <img src={foto1} className="rounded" />
          <h4 className="font-montserrat text-lg font-normal text-[#252B42]">
            Jerome Bell
          </h4>
          <p className="text-[#737373] font-montserrat font-bold text-sm">
            IBM
          </p>
        </div>
        <div className="">
          <img src={foto1} className="rounded" />
          <h4 className="font-montserrat text-lg font-normal text-[#252B42]">
            Jerome Bell
          </h4>
          <p className="text-[#737373] font-montserrat font-bold text-sm">
            IBM
          </p>
        </div>
        <div className="">
          <img src={foto1} className="rounded" />
          <h4 className="font-montserrat text-lg font-normal text-[#252B42]">
            Jerome Bell
          </h4>
          <p className="text-[#737373] font-montserrat font-bold text-sm">
            IBM
          </p>
        </div>
        <div className="">
          <img src={foto1} className="rounded" />
          <h4 className="font-montserrat text-lg font-normal text-[#252B42]">
            Jerome Bell
          </h4>
          <p className="text-[#737373] font-montserrat font-bold text-sm">
            IBM
          </p>
        </div>
        <div className="">
          <img src={foto1} className="rounded" />
          <h4 className="font-montserrat text-lg font-normal text-[#252B42]">
            Jerome Bell
          </h4>
          <p className="text-[#737373] font-montserrat font-bold text-sm">
            IBM
          </p>
        </div>
        <div className="">
          <img src={foto1} className="rounded" />
          <h4 className="font-montserrat text-lg font-normal text-[#252B42]">
            Jerome Bell
          </h4>
          <p className="text-[#737373] font-montserrat font-bold text-sm">
            IBM
          </p>
        </div>
      </div>
      <div className="text-center m-32">
        <h2 className="font-montserrat font-bold text-4xl text-[#252B42]">
          Get answers to all your <br /> questions.
        </h2>
        <h4 className="mt-12 font-normal text-2xl text-[#737373] font-montserrat">
          Problems trying to resolve the conflict between the two <br /> major
          realms of Classical physics:{" "}
        </h4>
        <button className="mt-12 bg-[#23A6F0] border rounded p-4 text-[#FFFFFF] font-montserrat text-sm">
          CONTACT OUR COMPANY
        </button>
        <div className="mt-10">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-4xl text-[#BDBDBD]"
          />
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="text-4xl ml-6 text-[#BDBDBD]"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-4xl ml-6 text-[#BDBDBD]"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl ml-6 text-[#BDBDBD]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
