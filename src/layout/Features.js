import firstImg from "../assets/Feautures/bx_bxs-book-reader.png";
import secondImg from "../assets/Feautures/icon cool-icon-153.png";
import thirdImg from "../assets/Feautures/icon cool-icon-125.png";

export default function Features() {
  return (
    <div className="w-full h-[30rem]">
      <div className="text-center mt-8">
        <h4 className="text-[#737373] font-normal text-xl font-montserrat">
          Featured Products
        </h4>
        <h3 className="text-[#252B42] font-bold text-2xl font-montserrat mt-5">
          THE BEST SERVICES
        </h3>
        <p className="mt-5 text-[#737373] font-normal text-sm font-montserrat">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="flex gap-8 justify-evenly ml-8 px-20 mt-32 md:flex-wrap">
        <div className="text-center md:flex-col sm:flex-col">
          <img src={firstImg} className="ml-14" />
          <h3 className="text-[#252B42] font-bold text-2xl font-montserrat mt-5">
            Easy Wins
          </h3>
          <p className="font-normal text-sm font-montserrat mt-5">
            Get your best looking smile <br /> now!
          </p>
        </div>
        <div className="text-center">
          <img src={secondImg} className="ml-16" />
          <h3 className="mr-5 text-[#252B42] font-bold text-2xl font-montserrat mt-5">
            Concrete
          </h3>
          <p className="font-normal text-sm font-montserrat mt-5">
            Defalcate is most focused in <br /> helping you discover your most{" "}
            <br /> beautiful smile
          </p>
        </div>
        <div className="text-center">
          <img src={thirdImg} className="ml-12" />
          <h3 className="mr-6 text-[#252B42] font-bold text-2xl font-montserrat mt-5">
            Hack Growth
          </h3>
          <p className="mr-5 font-normal text-sm font-montserrat mt-5">
            Overcame any hurdle or any <br /> other problem.
          </p>
        </div>
      </div>
    </div>
  );
}
