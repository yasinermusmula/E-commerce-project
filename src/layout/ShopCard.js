import firstImg from "../assets/ShopCard/unsplash_Bd7gNnWJBkU.jpg";
import secondImg from "../assets/ShopCard/unsplash_MKvjc2kar7Q.jpg";
import thirdImg from "../assets/ShopCard/unsplash_muOHbrFGEQY.jpg";

export default function ShopCar() {
  return (
    <div className="flex justify-center">
      <div className="flex md:flex-col md:mt-[32rem]">
        <div
          className="w-[38rem] h-[36rem] relative md:mb-5 md:w-[35rem] md:ml-3 object-cover"
          style={{
            backgroundImage: `url(${firstImg})`,
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 text-white flex flex-col justify-evenly bg-[#2D8BC0] bg-opacity-75 w-[26rem] h-60">
            <div className="ml-12 mt-12">
              <h3 className="font-bold font-montserrat text-2xl">
                Top Product Of <br /> the Week
              </h3>
              <button className="border text-white px-8 py-3 rounded mt-5 font-bold text-sm font-montserrat">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
        <div className="ml-3">
          <div
            className="w-[35rem] h-[18rem] relative"
            style={{
              backgroundImage: `url(${thirdImg})`,
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col justify-center bg-[#2D8BC0] bg-opacity-75 w-[22rem] h-44">
              <div className="ml-5 mt-7">
                <h4 className="font-montserrat font-normal text-xl">
                  Top Product Of the Week
                </h4>
                <button className="border text-white px-8 py-3 rounded mt-5 font-bold text-sm font-montserrat">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-[35rem] h-[16rem] mt-8 relative"
            style={{
              backgroundImage: `url(${secondImg})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col justify-center bg-[#2D8BC0] bg-opacity-75 w-[23rem] h-36">
              <div className="mt-5 ml-3">
                <h4 className="font-montserrat font-normal text-xl">
                  Top Product Of the Week
                </h4>
                <button className="border text-white px-8 py-3 rounded mt-5 font-bold text-sm font-montserrat">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
