// import brand1 from "../assets/Clients/Vector (5).png";
// import brand2 from "../assets/Clients/Vector (6).png";
// import brand3 from "../assets/Clients/Vector (7).png";
// import brand4 from "../assets/Clients/Vector (8).png";
// import brand5 from "../assets/Clients/Vector (9).png";
// import brand6 from "../assets/Clients/Vector (10).png";
import {
  faHooli,
  faLyft,
  faStripe,
  faAws,
  faPiedPiperHat,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clients() {
  return (
    <div className="flex justify-center">
      <div className="flex h-[11rem] items-center md:flex-col">
        <div className="md:mt-5">
          <FontAwesomeIcon
            icon={faHooli}
            className="mx-10 fa-5x md:mt-5 text-[#737373]"
          />
        </div>
        <div className="md:mt-5">
          <FontAwesomeIcon
            icon={faLyft}
            className="mx-10 fa-5x md:mt-5 text-[#737373]"
          />
        </div>
        <div className="md:mt-5">
          <FontAwesomeIcon
            icon={faPiedPiperHat}
            className="mx-10 fa-5x md:mt-5 text-[#737373]"
          />
        </div>
        <div className="md:mt-5">
          <FontAwesomeIcon
            icon={faStripe}
            className="mx-10 fa-5x md:mt-5 text-[#737373]"
          />
        </div>
        <div className="md:mt-5">
          <FontAwesomeIcon
            icon={faAws}
            className="mx-10 fa-5x md:mt-5 text-[#737373]"
          />
        </div>
        <div className="md:mt-5">
          <FontAwesomeIcon
            icon={faRedditAlien}
            className="mx-10 fa-5x md:mt-5 text-[#737373]"
          />
        </div>
      </div>
    </div>
  );
}
