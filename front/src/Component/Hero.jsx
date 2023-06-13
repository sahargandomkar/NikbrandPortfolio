import nikbrandlogo from "../assets/nikbrandlogo.svg";

function Hero() {
  return (
    <div className=" max-w-6xl   mx-auto text-center mb-10 mt-0 px-10 pt-16">
      <img src={nikbrandlogo} alt="logo" className="w-52 mx-auto" />
      <h3 className="my-8 text-4xl font-bold text-white font-sans">
    
        Do You Need A Website For Your Business?
      </h3>
      <p className="max-w-3xl capitalize text-center mx-auto text-slate-400 text-sxl">
        If your business has gotten this far without a website, you might be
        wondering: do I need a website for my business? What’s the point if my
        business is already successful without one?
      </p>

      <div className="flex flex-col md:flex-row justify-center w-full gap-6 my-9">
        <button className="py-3 px-10 text-lg rounded-full duration-200 bg-violet-700 md:w-52 hover:opacity-80  hover:border-none focus:outline-none capitalize">
          start now!
        </button>
        <button className="py-3 px-10 text-lg rounded-full duration-200 border border-white hover:border-white  text-white md:w-52 bg-slate-800 hover:opacity-80 focus:outline-none capitalize">
          See Portfolio
        </button>
      </div>
    </div>
  );
}

export default Hero;
