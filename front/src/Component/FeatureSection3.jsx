import picture from "../assets/1.png";

function FeatureSection3() {
  return (
    <div className=" max-w-6xl   mx-auto text-center mb-10 mt-0 px-10 pt-2">
      <div className="flex flex-col md:flex-row justify-center w-full md:gap-10 my-9">
        <div className="md:w-1/2 md:order-last">
          <img
            src={picture}
            alt="logo"
            className="w-full mx-auto rounded-3xl"
          />
        </div>

        <div className="md:w-1/2 ">
          <h3 className="my-8 text-4xl text-left font-bold text-white font-sans">
            Increase Sales Conversion
          </h3>
          <p className="max-w-3xl capitalize text-left mx-auto text-slate-400 text-sxl">
            Can’t turn your site traffic into sales? Converting customers is
            easy peasy with Popupsmart. Multiply your sales with product
            recommendations, special offers, and cart abandonment popups. Create
            yours in 5 minutes to start reaping results.
          </p>
          <div className="flex flex-col md:flex-row justify-center w-full gap-6 my-9">
            <button className="py-3 px-10 text-lg rounded-full duration-200 bg-violet-700 md:w-52 hover:opacity-80  hover:border-none focus:outline-none capitalize">
              try for free
            </button>
            <button className="py-3 px-10 text-lg rounded-full duration-200 border border-white hover:border-white  text-white md:w-52 bg-slate-800 hover:opacity-80 focus:outline-none capitalize">
              See Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection3;
