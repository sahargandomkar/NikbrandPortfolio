function Footer() {
  return (
    <div>
      <div className="border-t-2 border-slate-700 mt-10"></div>
      <div className="w-[80%] grid grid-cols-4 mx-auto py-8">
        <div>
          <ul className="text-start flex flex-col gap-3">
            <li className="text-lg font-bold ">Contact Us</li>
            <li> ABout Us</li>
            <li> Job Offer</li>
            <li> Products</li>
          </ul>
        </div>

        <div>
          <ul className="text-start flex flex-col gap-3">
            <li className="text-lg font-bold "> Company</li>
            <li> ABout Us</li>
            <li> Job Offer</li>
            <li> Help & Support</li>
          </ul>
        </div>
        <div>
          <ul className="text-start flex flex-col gap-3">
            <li className="text-lg font-bold"> Resources</li>
            <li> Blog</li>
            <li> Job Offer</li>
            <li> Contact Us</li>
          </ul>
        </div>
        <div>
          <ul className="text-start flex flex-col gap-3">
            <li className="text-lg font-bold"> Support</li>
            <li> ABout Us</li>
            <li> Job Offer</li>
            <li> Document</li>
          </ul>
        </div>
      </div>
      <div className="text-slate-500 pb-4 pt-4 ">
        Copyright © 2023 NikBrand Agency.
      </div>
    </div>
  );
}

export default Footer;
