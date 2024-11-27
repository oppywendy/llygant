const Footer = () => {
  return (
    <div className="w-full h-[40vh] bg-[#FCFCFC] justify-center items-center flex">
      <div className="w-[96%] h-[100%] flex justify-center items-center flex-col md:flex-row gap-5">
        <div className="md:w-[50%] w-full">
          <hr className="mb-5" />
          <h1 className="font-semibold text-xl">Join our community</h1>
          <p className="pt-3">
            Get notified about new products, updates, and exclusive offers.
          </p>
        </div>
        <div className="md:w-[50%] w-full">
          <input
            className="md:w-[55%] w-[95%] h-10 border border-black pl-5"
            type="email"
            placeholder="Enter your email"
            name=""
            id=""
          />
          <button
            className="md:ml-10 mt-2 md:w-[35%] w-[95%] text-white h-10 bg-black hover:bg-gray-400"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
