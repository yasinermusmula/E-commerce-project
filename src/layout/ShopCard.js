import firstImg from "../assets/ShopCard/unsplash_Bd7gNnWJBkU.jpg";
import secondImg from "../assets/ShopCard/unsplash_MKvjc2kar7Q.jpg";
import thirdImg from "../assets/ShopCard/unsplash_muOHbrFGEQY.jpg";

export default function ShopCar() {
  return (
    <div className="flex justify-center">
      <div className="flex md:flex-col md:mt-[32rem]">
        <div
          className="w-[38rem] h-[36rem] relative md:mb-5 md:w-[35rem] md:ml-3"
          style={{
            backgroundImage: `url(${firstImg})`,
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col items-start">
            <h6 className="text-xl font-bold mb-2">Top Product Of the Week</h6>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
        <div className="ml-3">
          <div
            className="w-[35rem] h-[18rem] relative"
            style={{
              backgroundImage: `url(${thirdImg})`,
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col items-start">
              <h6 className="">Top Product Of the Week</h6>
              <button>EXPLORE ITEMS</button>
            </div>
          </div>
          <div
            className="w-[35rem] h-[16rem] mt-8 relative"
            style={{
              backgroundImage: `url(${secondImg})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex flex-col items-start">
              <h6>Top Product Of the Week</h6>
              <button>EXPLORE ITEMS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
