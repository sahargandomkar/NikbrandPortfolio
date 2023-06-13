import "./App.css";
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";
import Services from "./Page/Services";
import AboutUs from "./Page/AboutUs";
import Cart from "./Page/Cart";
import ContactUs from "./Page/ContactUs";
import Home from "./Page/Home";
import ProductDetail from "./Page/ProductDetail";
import Products from "./Page/Products";
import { Route, Routes } from "react-router-dom";
import LogIn from "./Page/LogIn";
import Register from "./Page/Register";
import BlogList from "./Component/BlogList";

function App() {
  return (
    <div className="bg-slate-800 text-white ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
