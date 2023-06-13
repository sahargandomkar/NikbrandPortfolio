function AboutUs() {
  return (
    <div>
      <div>
        <h1 className="py-7 text-2xl font-extrabold">About Us</h1>

        <h3 className="px-7 py-4 text-lg font-semibold capitalize">
          {" "}
          Who We Are ?
        </h3>
        <p className="py-14 px-7 text-slate-400 mx-auto w-[70%]  text-justify">
          Section was founded in Australia in 2012 and moved its headquarters to
          the US in 2016. We now have offices in Australia (NSW), Bulgaria
          (Sofia) and the United States (Colorado). Section is backed by a group
          of top-shelf Venture Capital firms, led by the Foundry Group. The
          Section team is a group of dedicated individuals who come from diverse
          backgrounds in engineering, operations, agile development, marketing,
          sales, and product. Our collective passion is delivering a better
          hosting solution for Dev and Ops Engineers.
        </p>
      </div>

      <div>
        <h3 className="px-7 py-4 text-lg font-semibold capitalize">
          Our mission : What We Do ?
        </h3>
        <p className="py-7 px-7 text-slate-400 mx-auto w-[70%]  text-justify">
          Section is a supercloud hosting system that continuously optimizes the
          orchestration of applications across diverse global infrastructure for
          optimal application delivery.
        </p>
        <p className="py-7 px-7 text-slate-400 mx-auto w-[70%] text-justify">
          Section’s sophisticated and distributed supercloud platform
          intelligently and adaptively manages workloads around developer intent
          (such as desired performance, cost or reliability) to ensure
          applications run at the right place and time; whether that is
          Multi-Cluster, Multi-Cloud, Edge, or combinations thereof.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
