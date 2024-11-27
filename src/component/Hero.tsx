import pic1 from "../assets/one-removebg-preview.png";
import pic2 from "../assets/three-removebg-preview.png";
import pic3 from "../assets/two-removebg-preview.png";
import pic4 from "../assets/eight-removebg-preview.png";
import pic5 from "../assets/nine-removebg-preview.png";
import pic6 from "../assets/ten-removebg-preview.png";
import pic7 from "../assets/eleven-removebg-preview.png";
import pic8 from "../assets/fifteen-removebg-preview.png";
import pic9 from "../assets/twelve-removebg-preview.png";
const Hero = () => {
  return (
    <div className="w-full min-h-full justify-items-center items-center grid pb-10">
      <div className="w-[96%] h-[100%] justify-center items-center grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-2 mt-10">
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic1} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT HOODIE</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic2} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT HOODIE</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic3} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT HOODIE</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic1} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT HOODIE</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic2} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT HOODIE</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic3} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT HOODIE</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic4} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT T-SHIRT (WHITE)</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic5} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT T-SHIRT (WHITE)</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic6} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT T-SHIRT (WHITE)</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic7} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT T-SHIRT (WHITE)</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic8} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT T-SHIRT (WHITE)</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
        <div className="md:w-[350px] w-[180px] cursor-pointer">
          <img className="bg-[#E4E4E4] rounded-2xl" src={pic9} alt="" />
          <h1 className="pt-3 text-lg">LLYGANT T-SHIRT (WHITE)</h1>
          <p className="pt-2 text-lg">$500.00 USD</p>
        </div>
      </div>
      <div className="w-full justify-center items-center flex mt-10">
        <button className="bg-black text-white w-28 h-8 rounded-r-full rounded-l-full hover:bg-gray-400">
          View all
        </button>
      </div>
    </div>
  );
};

export default Hero;
