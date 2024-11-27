import { IoBagHandleOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className=" w-full md:h-[12vh] h-[10vh] items-center justify-center flex">
      <div className="w-[96%] h-[100%] justify-between items-center flex">
        <div className="flex items-center justify-center gap-2">
          <IoBagHandleOutline size={20} />
          <CiSearch size={20} />
        </div>
        <div className="">
          <img className="md:w-[100px] w-[80px]" src={logo} alt="" />
        </div>
        <div className="justify-end flex items-end md:text-xl text-sm">
          <ul className="flex md:gap-5 gap-1">
            <li className="hover:text-gray-400 cursor-pointer">New Arrivals</li>
            <li className="hover:text-gray-400 cursor-pointer">Men</li>
            <li className="hover:text-gray-400 cursor-pointer">Women</li>
            <li className="hover:text-gray-400 cursor-pointer">Collections</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
