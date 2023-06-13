import { Link } from "react-router-dom";
import nikbrandlogo from "../assets/nikbrandlogo.svg";
import { DiGithubBadge } from "react-icons/di";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

function Nav() {
  return (
    <div className="  bg-slate-900">
      <div className="container mx-auto  px-12 py-5 my-0 text-white flex gap-24  font-bold items-center">
        <div className="flex justify-start">
          <Link to="/">
            <img src={nikbrandlogo} alt="nikbrandlogo" className="w-32" />
          </Link>
        </div>
        <div className=" flex gap-8  ">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/products">Products</Link>

          <Link to="/aboutUs">About Us</Link>
          <Link to="/contactUs">Contact Us</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div className="flex gap-3 items-center	">
          <DiGithubBadge className="w-8 h-8" />
          <AiFillTwitterCircle className="w-7 h-7" />
          <AiFillDribbbleCircle className="w-7 h-7" />
        </div>

        <div className="flex gap-3 ">
          <Link to="/login">
            <button className=" bg-violet-700 w-24 rounded-md  hover:outline-none active:outline-none after:outline-none focus-within:outline-none outline-none	 ">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className=" text-violet-700 border-violet-700  w-24 rounded-md  hover:outline-none active:outline-none after:outline-none focus-within:outline-none outline-none	 ">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
