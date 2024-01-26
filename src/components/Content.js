import seconImg from "../assets/Content/unsplash_Lks7vei-eAg (1).png";
import firstImg from "../assets/Content/unsplash_Lks7vei-eAg.png";

export default function Content() {
  return (
    <div className="w-full h-[40rem] flex items-center justify-center md:mt-36 md:mb-36">
      <div className="flex md:flex-col">
        <div className="flex gap-5 md:justify-center">
          <img src={firstImg} className="w-48 h-[28rem]" alt="First Image" />
          <img
            src={seconImg}
            className="w-[16rem] h-[28rem]"
            alt="Second Image"
          />
        </div>
        <div className="ml-24 mt-24 flex flex-col gap-4 nd:flex-col md:mr-8">
          <h5 className="text-lg font-bold mb-2 text-[#23A6F0]">
            Featured Products
          </h5>
          <h2 className="text-5xl font-bold mb-4">We love what we do</h2>
          <div className="md:flex-col">
            <p className="text-[#737373] font-normal text-sm font-montserrat">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: <br />
              Newtonian mechanics.{" "}
            </p>
            <p className="text-[#737373] mt-3 font-normal text-sm font-montserrat">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: <br />
              Newtonian mechanics.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
