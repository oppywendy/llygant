import pic from "../assets/cover3.jpg";
import pic2 from "../assets/one.jpg";

const Landing = () => {
  return (
    <div className="w-full md:h-screen min-h-full flex md:flex-row flex-col">
      <div className="md:w-[50%] w-full h-[100%]">
        <img className="w-[100%] md:h-[100%] h-[60vh]" src={pic} alt="" />
      </div>
      <div className="md:w-[50%] w-full h-[100%]">
        <img className="h-[60vh] md:h-[100%] w-full" src={pic2} alt="" />
      </div>
    </div>
  );
};

export default Landing;
