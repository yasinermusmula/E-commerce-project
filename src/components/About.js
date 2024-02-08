import aboutBg from "../assets/About/background.png";
import Hero from "../layout/Hero";

export default function About() {
  return (
    <div>
      <Hero />
      <div className="w-full h-[40rem] md:flex-col">
        <div>
          <div className="">
            <h5>ABOUT COMPANY</h5>
            <h1>ABOUT US</h1>
            <h4>
              We know how large objects will act, <br /> but things on a small
              scale
            </h4>
            <button>Get Quote Now</button>
          </div>
          <img src={aboutBg} alt="" />
        </div>
      </div>
    </div>
  );
}
