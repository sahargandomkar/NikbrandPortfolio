import { Link } from "react-router-dom";
import data from "../data";
import { HiOutlineShoppingBag } from "react-icons/hi";
//import { useEffect, useState } from "react";
//import axios from "axios";

function Product() {
  //const [products, setProducts] = useState([]);
  // useEffect(() => {
  //  const fetchData = async () => {
  //   const result = await axios.get("/api/products");
  //    setProducts(result.data);
  //    console.log(result.data);
  //  };
  //   fetchData();
  //  }, []);
  return (
    <div className="bg-slate-800 w-[80%] h-full mx-auto">
      <h1 className="text-xl font-extrabold py-12">Featured Products</h1>
      <div className="grid grid-cols-4 gap-6   ">
        {data.products.map((product) => (
          <div
            className="border-indigo-600 border rounded-2xl mb-10 "
            key={product.slug}
          >
            <Link to={`/products/${product.slug}`}>
              <img
                className="w-full  rounded-t-2xl"
                src={product.image}
                alt={product.name}
              />
            </Link>
            <div className="flex py-4 justify-center">
              <p className="text-lg font-medium text-slate-400">
                {product.name}
              </p>
              <p className="text-xl font-semibold px-4"> ${product.price}</p>
            </div>

            <div>
              <button className=" bg-violet-700 w-[80%] rounded-full mb-5 hover:outline-none active:outline-none after:outline-none focus-within:outline-none outline-none	 ">
                <div className="flex gap-4 justify-center items-center">
                  <div> ADD To Cart</div>
                  <div>
                    <HiOutlineShoppingBag className="w-5 h-5" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
