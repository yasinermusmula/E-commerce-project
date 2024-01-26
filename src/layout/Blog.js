import firstImg from "../assets/Blog/unsplash_75EFpyXu3Wg.png";
import secondImg from "../assets/Blog/unsplash_ruJm3dBXCqw.png";
import firstEclipse from "../assets/Blog/Ellipse 14.png";
import secondEclipse from "../assets/Blog/Ellipse 15.png";
import thirdEclipse from "../assets/Blog/Ellipse 16.png";
import forthEclipse from "../assets/Blog/Ellipse 17.png";
import {
  faChartLine,
  faCircle,
  faChartGantt,
  faChevronRight,
  faStar,
  faDownload,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Blog() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-32 md:flex-col md:mt-[30rem]">
      <div className="text-center mb-10">
        <h6 className="text-[#23A6F0] text-lg font-bold font-montserrat">
          Practice Advice
        </h6>
        <h2 className=" text-5xl font-bold text-[#252B42] font-montserrat mt-4">
          Featured Posts
        </h2>
      </div>
      <div className="flex gap-8 mt-4 md:flex-col">
        <div
          className="w-52 h-[25rem] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${firstImg})` }}
        >
          <h6 className="w-12 h-6 mt-5 ml-5 rounded px-2 text-center bg-[#E74040] text-[#FFFFFF] font-bold text-base">
            Sale
          </h6>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} className="text-[#252B42]" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[#252B42]"
              />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faEye} className="text-[#252B42]" />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-4">
            <div className="flex">
              <h2 className="text-[#23A6F0] font-bold text-base font-montserrat">
                English Department
              </h2>
              <div className="w-14 flex ml-12 border rounded-2xl p-[0.25rem] gap-1 bg-[#252B42] items-center">
                <FontAwesomeIcon icon={faStar} className="text-[#FFCE31]" />
                <p className="text-[#FFFFFF]">4.9</p>
              </div>
            </div>
            <h5 className="mt-2 font-montserrat font-bold text-[#252B42] text-base">
              Graphic Design
            </h5>
            <p className="mt-4 font-montserrat font-normal text-sm text-[#737373]">
              We focus on ergonomics and <br /> meeting you where you work. It's{" "}
              <br />
              only a keystroke away.
            </p>
            <h6 className="mt-3 text-[#737373] font-montserrat font-bold text-base">
              <FontAwesomeIcon icon={faDownload} /> 15 Sales
            </h6>
            <div className="flex mt-3 font-montserrat font-bold text-base">
              <h5 className="text-[#BDBDBD]">$16.48</h5>
              <h5 className="ml-2 text-[#23856D]">$6.48</h5>
            </div>
            <div className="mt-1">
              <FontAwesomeIcon icon={faCircle} className="text-[#23A6F0]" />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[#23856D] ml-2"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[#E77C40] ml-2"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[#252B42] ml-2"
              />
            </div>
            <div className="flex mt-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="text-[#23A6F0]" />{" "}
                <p className="ml-1 text-[#737373] font-montserrat font-normal text-sm">
                  22h..
                </p>
              </div>
              <div className="flex items-center ml-3">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-[#E77C40]"
                />
                <p className="ml-1 text-[#737373] font-montserrat font-normal text-sm">
                  64 Lessons
                </p>
              </div>
              <div className="flex items-center ml-3">
                <FontAwesomeIcon
                  icon={faChartGantt}
                  className="text-[#23856D]"
                />
                <p className="ml-1 text-[#737373] font-montserrat font-normal text-sm">
                  Progress
                </p>
              </div>
            </div>
            <button className="border border-[#23A6F0] text-[#23A6F0] rounded-3xl px-4 py-2 mt-6 font-montserrat font-bold text-base">
              Learn More{" "}
              <FontAwesomeIcon icon={faChevronRight} className="mt-1 ml-1" />
            </button>
          </div>
        </div>
        <div
          className="w-52 h-[25rem] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${secondImg})` }}
        >
          <h6 className="w-12 h-6 mt-5 ml-5 rounded px-2 text-center bg-[#E74040] text-[#FFFFFF] font-bold text-base">
            Sale
          </h6>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} className="text-[#252B42]" />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-[#252B42]"
              />
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faEye} className="text-[#252B42]" />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-4">
            <div className="flex">
              <h2 className="text-[#23A6F0] font-bold text-base font-montserrat">
                English Department
              </h2>
              <div className="w-14 flex ml-12 border rounded-2xl p-[0.25rem] gap-1 bg-[#252B42] items-center">
                <FontAwesomeIcon icon={faStar} className="text-[#FFCE31]" />
                <p className="text-[#FFFFFF]">4.9</p>
              </div>
            </div>
            <h5 className="mt-2 font-montserrat font-bold text-[#252B42] text-base">
              Graphic Design
            </h5>
            <p className="mt-4 font-montserrat font-normal text-sm text-[#737373]">
              We focus on ergonomics and <br /> meeting you where you work. It's{" "}
              <br />
              only a keystroke away.
            </p>
            <h6 className="mt-3 text-[#737373] font-montserrat font-bold text-base">
              <FontAwesomeIcon icon={faDownload} /> 15 Sales
            </h6>
            <div className="flex mt-3 font-montserrat font-bold text-base">
              <h5 className="text-[#BDBDBD]">$16.48</h5>
              <h5 className="ml-2 text-[#23856D]">$6.48</h5>
            </div>
            <div className="mt-1">
              <FontAwesomeIcon icon={faCircle} className="text-[#23A6F0]" />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[#23856D] ml-2"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[#E77C40] ml-2"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[#252B42] ml-2"
              />
            </div>
            <div className="flex mt-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="text-[#23A6F0]" />{" "}
                <p className="ml-1 text-[#737373] font-montserrat font-normal text-sm">
                  22h..
                </p>
              </div>
              <div className="flex items-center ml-3">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-[#E77C40]"
                />
                <p className="ml-1 text-[#737373] font-montserrat font-normal text-sm">
                  64 Lessons
                </p>
              </div>
              <div className="flex items-center ml-3">
                <FontAwesomeIcon
                  icon={faChartGantt}
                  className="text-[#23856D]"
                />
                <p className="ml-1 text-[#737373] font-montserrat font-normal text-sm">
                  Progress
                </p>
              </div>
            </div>
            <button className="border border-[#23A6F0] text-[#23A6F0] rounded-3xl px-4 py-2 mt-6 font-montserrat font-bold text-base">
              Learn More{" "}
              <FontAwesomeIcon icon={faChevronRight} className="mt-1 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
